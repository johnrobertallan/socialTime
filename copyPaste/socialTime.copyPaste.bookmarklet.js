javascript:(function(){;var%20numDependencies=0,loadedDependencies=0;function%20scriptLoaded()%7BloadedDependencies++;if(numDependencies===loadedDependencies)%7BafterDepsLoaded()%7D%7Dfunction%20afterDepsLoaded()%7Bvar%20socialTimeSnapshotBookmarklet=socialTimeSnapshotBookmarklet%7C%7Cfunction(a)%7Bvar%20b,c,d,e;b=%7BcontrolId:%22sts-controls%22,dataId:%22sts-data%22,dataLabelText:%22capture%20data%22,captureButtonText:%22copy%22,loadButtonText:%22paste%22,controlWrapperStyles:%7Bbackground:%22#A71930%22,%22border-radius%22:%223px%22,left:%225px%22,padding:%2210px%205px%22,position:%22absolute%22,top:%225px%22%7D,buttonStyles:%7Bbackground:%22#2e2e2e%22,%22border-radius%22:%223px%22,color:%22#eee%22,cursor:%22pointer%22,display:%22inline-block%22,%22font-size%22:%2211px%22,margin:%220%205px%22,padding:%225px%2010px%22,%22text-transform%22:%22uppercase%22%7D,flashStyles:%7Bbackground:%22#fff%22,bottom:%220%22,left:%220%22,position:%22absolute%22,right:%220%22,top:%220%22,%22z-index%22:%224000%22,opacity:%221%22,%22-webkit-transition%22:%22opacity%20500ms%20ease-out%22,%22-moz-transition%22:%22opacity%20500ms%20ease-out%22,%22-ms-transition%22:%22opacity%20500ms%20ease-out%22,transition:%22opacity%20500ms%20ease-out%22%7D,dataWrapperStyles:%7Bmargin:%225px%205px%200%205px%22%7D,dataCheckboxStyles:%7Bdisplay:%22inline%22,%22vertical-align%22:%22middle%22%7D,dataLabelStyles:%7Bdisplay:%22inline%22,%22font-size%22:%2210px%22,%22text-transform%22:%22uppercase%22%7D%7D,c=%7Bbody:a(%22body%22),controlWrapper:a(%22%3Cdiv%3E%22),captureButton:a(%22%3Ca%3E%22),loadButton:a(%22%3Ca%3E%22),dataWrapper:a(%22%3Cdiv%3E%22),dataCheckbox:a(%22%3Cinput%3E%22),dataLabel:a(%22%3Clabel%3E%22),taskList:a(%22#AllTab%22).children(%22.hcf-TaskList%22),timeList:a(%22#hcf-TimeSheet-TaskArea%22).children(%22.hcf-TimeSheet-List%22)%7D,d=%7B%7D,e=%7B%7D,handlers=%7B%7D,handlers.clickCapture=function(a)%7Ba&&a.preventDefault(),e.saveEntries(e.captureEntries())%7D,handlers.clickLoad=function(a)%7Ba&&a.preventDefault(),e.populateEntries(e.retrieveEntries())%7D,e.addControls=function()%7Bc.loadButton.css(b.buttonStyles).text(b.loadButtonText).bind(%22click%22,handlers.clickLoad),c.captureButton.css(b.buttonStyles).text(b.captureButtonText).bind(%22click%22,handlers.clickCapture),c.dataCheckbox.css(b.dataCheckboxStyles).attr(%7Btype:%22checkbox%22,id:%22sts-dataCheckbox%22,checked:!0%7D),c.dataLabel.css(b.dataLabelStyles).text(b.dataLabelText).attr(%22for%22,%22sts-dataCheckbox%22),c.dataWrapper.css(b.dataWrapperStyles).append(c.dataCheckbox).append(c.dataLabel),c.controlWrapper.attr(%22id%22,b.controlId).css(b.controlWrapperStyles).append(c.captureButton).append(c.loadButton).append(c.dataWrapper).appendTo(c.body)%7D,e.captureEntries=function()%7Bvar%20b,d,f,g,h=%5B%5D;return%20d=c.timeList.children(%22.hcf-TimeSheet-Task%22),g=c.dataCheckbox.prop(%22checked%22),d.length&&(f=e.retrieveEntries(),b=f?confirm(%22Overwrite%20previous%20snapshot?%22):!0)?(d.each(function()%7Bvar%20b=a(this);h.push(%7BtaskId:b.attr(%22data-taskid%22),hours:g?b.find(%22.hcf-TimeSheet-Time-Input%22).val():null,description:g?b.find(%22textarea%22).val():null,reference:g?b.find(%22.hcf-TimeSheet-Reference%22).children(%22input%22).val():null,SRED:g?b.find(%22input:checkbox%22).val():null%7D)%7D),h):void%200%7D,e.populateEntries=function(b)%7Bb&&b.length&&a.each(b,function(a,b)%7Bvar%20d;c.taskList.children('%5Bdata-taskid=%22'+b.taskId+'%22%5D').trigger(%22click%22),d=c.timeList.children('%5Bdata-taskid=%22'+b.taskId+'%22%5D').last(),b.hours&&d.find(%22.hcf-TimeSheet-Time-Input%22).val(b.hours).trigger(%22change%22),b.description&&d.find(%22textarea%22).val(b.description).trigger(%22change%22),b.reference&&d.find(%22.hcf-TimeSheet-Reference%22).children(%22input%22).val(b.reference).trigger(%22change%22),b.SRED&&d.find(%22input:checkbox%22).val(b.SRED).trigger(%22change%22)%7D)%7D,e.saveEntries=function(a)%7Ba&&a.length&&(localStorage.setItem(b.dataId,JSON.stringify(a)),e.flash())%7D,e.retrieveEntries=function()%7Breturn%20JSON.parse(localStorage.getItem(b.dataId))%7D,e.flash=function()%7Bvar%20d;d=a(%22%3Cdiv%3E%22).css(b.flashStyles).appendTo(c.body),setTimeout(function()%7Bd.css(%22opacity%22,%220%22),setTimeout(function()%7Bd.remove()%7D,800)%7D,100)%7D,e.init=function()%7Be.addControls()%7D,e.init()%7D(jQuery)%7DafterDepsLoaded();})()