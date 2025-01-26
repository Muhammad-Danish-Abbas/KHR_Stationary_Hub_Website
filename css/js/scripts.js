document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown list container and button
    const stationeryButton = document.getElementById('stationery-button');
    const stationeryList = document.getElementById('stationery-list');

    // List of 50 stationery items
    const items = [
        'Pen', 'Pencil', 'Notebook', 'Eraser', 'Sharpener', 'Marker', 'Highlighter', 'Scissors', 'Ruler', 'Glue Stick',
        'Tape', 'Stapler', 'Paper Clips', 'Binder', 'Index Cards', 'Whiteboard', 'Chalk', 'Calculator', 'Protractor', 'Compass',
        'Post-it Notes', 'Envelope', 'File Folders', 'Sticky Tabs', 'Correction Fluid', 'Letter Opener', 'Puncher', 'Label Maker', 'Binder Clips',
        'Paper Cutter', 'Filing Cabinet', 'Desk Organizer', 'Notepad', 'Drawing Pad', 'Graph Paper', 'Colored Pencils', 'Crayons', 'Watercolor Paints',
        'Paint Brushes', 'Glitter', 'Colored Markers', 'Art Paper', 'Clipboard', 'Rubber Bands', 'Stamps', 'Ink Pads', 'Stamping Tool', 'Paper Tray'
    ];

    // Dynamically add items to the dropdown menu
    items.forEach(function(item) {
        const a = document.createElement('a'); // Create a new anchor tag for each item
        a.href = '#'; // Set the href to '#' (it can be updated later)
        a.textContent = item; // Set the text content of the item
        stationeryList.appendChild(a); // Append the anchor tag to the dropdown
    });

    // Toggle the display of the dropdown list on button click
    stationeryButton.addEventListener('click', function() {
        stationeryList.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!stationeryButton.contains(event.target) && !stationeryList.contains(event.target)) {
            stationeryList.classList.remove('show');
        }
    });
});
