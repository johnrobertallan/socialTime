var socialTimeSnapshotBookmarklet = socialTimeSnapshotBookmarklet || (function ($) {

    var settings, elements, values, methods;

    settings = {
        controlId:                  'sts-controls',
        dataId:                     'sts-data',
        dataLabelText:              'capture data',
        captureButtonText:          'copy',
        loadButtonText:             'paste',
        controlWrapperStyles: {
            'background': '#A71930',
            'border-radius': '3px',
            'left': '5px',
            'padding': '10px 5px',
            'position': 'absolute',
            'top': '5px'
        },
        buttonStyles: {
            'background': '#2e2e2e',
            'border-radius': '3px',
            'color': '#eee',
            'cursor': 'pointer',
            'display': 'inline-block',
            'font-size': '11px',
            'margin': '0 5px',
            'padding': '5px 10px',
            'text-transform': 'uppercase'
        },
        flashStyles: {
            'background': '#fff',
            'bottom': '0',
            'left': '0',
            'position': 'absolute',
            'right': '0',
            'top': '0',
            'z-index': '4000',
            'opacity': '1',
            '-webkit-transition': 'opacity 500ms ease-out',
            '-moz-transition': 'opacity 500ms ease-out',
            '-ms-transition': 'opacity 500ms ease-out',
            'transition': 'opacity 500ms ease-out'
        },
        dataWrapperStyles: {
            'margin': '5px 5px 0 5px'
        },
        dataCheckboxStyles: {
            'display': 'inline',
            'vertical-align': 'middle'
        },
        dataLabelStyles: {
            'display': 'inline',
            'font-size': '10px',
            'text-transform': 'uppercase'
        }
    };

    elements = {
        body:                       $('body'),
        controlWrapper:             $('<div>'),        
        captureButton:              $('<a>'),
        loadButton:                 $('<a>'),
        dataWrapper:                $('<div>'),
        dataCheckbox:               $('<input>'),
        dataLabel:                  $('<label>'),

        taskList:                   $('#AllTab').children('.hcf-TaskList'), //.children('.hcf-TaskItem')
        timeList:                   $('#hcf-TimeSheet-TaskArea').children('.hcf-TimeSheet-List') //.children('.hcf-TimeSheet-Task')
    };

    values = {};

    methods = {};
    handlers = {};

    //event handlers
    handlers.clickCapture = function (e) {
        if (e) { e.preventDefault(); }
        methods.saveEntries(methods.captureEntries());
    };

    handlers.clickLoad = function (e) {
        if (e) { e.preventDefault(); }
        methods.populateEntries(methods.retrieveEntries());
    };

    //methods
    methods.addControls = function () {
        elements.loadButton
            .css(settings.buttonStyles)
            .text(settings.loadButtonText)
            .bind('click', handlers.clickLoad);
        
        elements.captureButton
            .css(settings.buttonStyles)
            .text(settings.captureButtonText)
            .bind('click', handlers.clickCapture);
        
        elements.dataCheckbox
            .css(settings.dataCheckboxStyles)
            .attr({
                'type': 'checkbox',
                'id': 'sts-dataCheckbox',
                'checked': true
             });

        elements.dataLabel
            .css(settings.dataLabelStyles)
            .text(settings.dataLabelText)
            .attr('for', 'sts-dataCheckbox')

        elements.dataWrapper
            .css(settings.dataWrapperStyles)
            .append(elements.dataCheckbox)
            .append(elements.dataLabel);

        elements.controlWrapper
            .attr('id', settings.controlId)
            .css(settings.controlWrapperStyles)
            .append(elements.captureButton)
            .append(elements.loadButton)
            .append(elements.dataWrapper)
            .appendTo(elements.body);
    };

    methods.captureEntries = function () {
        var c, $entries, savedData, captureData, data = [];

        $entries = elements.timeList.children('.hcf-TimeSheet-Task');
        captureData = elements.dataCheckbox.prop('checked');

        if ($entries.length) {
            savedData = methods.retrieveEntries();

            c = (savedData) ? confirm("Overwrite previous snapshot?") : true;
            
            if (c) {
                //collect data
                $entries.each(function () {
                    var $this = $(this);

                    data.push({
                        taskId:       $this.attr('data-taskid'),
                        hours:        (captureData) ? $this.find('.hcf-TimeSheet-Time-Input').val() : null,
                        description:  (captureData) ? $this.find('textarea').val() : null,
                        reference:    (captureData) ? $this.find('.hcf-TimeSheet-Reference').children('input').val() : null,
                        SRED:         (captureData) ? $this.find('input:checkbox').val() : null
                    });
                });

                return data;
            }
        }
    };

    methods.populateEntries = function (data) {
        if (data && data.length) {
            $.each(data, function(index, entry) {
                var $target;

                elements.taskList.children('[data-taskid="' + entry.taskId + '"]').trigger('click');

                $target = elements.timeList.children('[data-taskid="' + entry.taskId + '"]').last();

                if (entry.hours) { $target.find('.hcf-TimeSheet-Time-Input').val(entry.hours).trigger('change'); }
                if (entry.description) { $target.find('textarea').val(entry.description).trigger('change'); }
                if (entry.reference) { $target.find('.hcf-TimeSheet-Reference').children('input').val(entry.reference).trigger('change'); }
                if (entry.SRED) { $target.find('input:checkbox').val(entry.SRED).trigger('change'); }
            });
        }
    };

    methods.saveEntries = function (data) {
        if (data && data.length) {
            localStorage.setItem(settings.dataId, JSON.stringify(data));
            methods.flash();
        }
    };

    methods.retrieveEntries = function () {
        return JSON.parse(localStorage.getItem(settings.dataId));
    };
    
    methods.flash = function () {
        var $flash;

        $flash = $('<div>')
            .css(settings.flashStyles)
            .appendTo(elements.body);
        
        setTimeout(function () {
            $flash.css('opacity', '0');
            
            setTimeout(function() {
                $flash.remove();
            }, 800);

        }, 100);

    };

    methods.init = function () {
        methods.addControls();
    };

    methods.init();

} (jQuery));