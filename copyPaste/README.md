# socialTime copy/paste
## A bookmarklet which lets you copy and paste socialTime entries

Many people have asked about adding a socialTime feature which would let them copy and paste tasks from one day to another. Technical and budget limitations prevent us from releasing this as a built in feature but using a standalone JavaScript bookmarklet we can achieve the same functionality.

Most people will find this useful for creating a template to start each day but it can also be used to copy the previous day forward or to duplicate any set of entries from one day to another.

### Instructions

When you run the bookmarklet a small interface will appear in the top left of your screen.

#### Copy

Pressing the 'copy' button will create snapshot all the time entries currently visible on the page and save it to memory. There is only one slot in memory so any new copy action will overwrite what was previously saved.

#### Paste

Pressing the 'paste' button will add any entries captured in your snapshot to the current day. If the tasks are no longer available to you they will not be added. 

#### Capture data (checkbox)

If this field checked it will include the time / description / ref num / SRED values in the snapshot. If it is unchecked any captured entries will be pasted as empty entries.  Empty entries will need values to be added before they are saved the same way a manual entry would. Any information related to sharing will not be captured.

#### Notes

All saved data is stored in the browser. What this means is:
 
- A snapshot created in Chrome will not available in Firefox.
- A snapshot created at work will not be available at home.
- If you delete your browser data your snapshot will be lost.
- If you reinstall your browser your snapshot will be lost.

### Installation

A bookmarklet is a browser bookmark which contains JavaScript instead of a URL. When the bookmark is clicked in runs the script instead of taking you to a website. You might have one bookmark to take you to socialTime and another beside it to load this bookmarklet.

To install this bookmarklet simply create a new bookmark. Name it and in the URL field instead of a URL paste the code found here. Save and you're done. To run the bookmarklet just click it. The copy/paste buttons should appear at the top left of your screen.

**Note:** I tried to create a new bookmark from scratch in IE10. I found you had to bookmark a page and then edit the bookmark. So bookmark any page, right click on it, click Properties, update the name in the General Tab and paste the bookmarklet script into the URL field on the Web Document tab.

### Tested browsers

- Chrome (latest)
- Firefox (latest)
- IE10

### Reporting a bug

If you come across any bugs please post them to the issues page of this Github repository.

### Roadmap

- multiple memory slots (or clipboards)
- integrate interface into existing socialTime interface