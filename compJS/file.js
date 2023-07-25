// Function to load the data and populate Main Heading dropdown
function loadDataAndPopulateMainHeadings() {
    // Fetch the data/file.js file
    fetch('data/file.js')
        .then(response => response.text())
        .then(parsedData => {
            const script = document.createElement('script');
            script.innerHTML = parsedData;
            document.head.appendChild(script);
            data = getData(); // Get the data from the loaded script
            populateMainHeadings();
        })
        .catch(error => console.error('Error loading data:', error));
}

// Function to populate Main Heading dropdown
function populateMainHeadings() {
    const mainHeadingSelect = document.getElementById('mainHeading');
    const mainHeadings = Array.from(new Set(data.map(item => item.mainHeading)));

    // Clear existing options
    mainHeadingSelect.innerHTML = '';

    // Add "All" option
    const allOption = document.createElement('option');
    allOption.textContent = 'All';
    allOption.value = 'all';
    mainHeadingSelect.appendChild(allOption);

    mainHeadings.forEach(heading => {
        const option = document.createElement('option');
        option.textContent = heading;
        option.value = heading;
        mainHeadingSelect.appendChild(option);
    });

    // After updating Main Heading dropdown, filter subheadings based on the initial selection
    filterSubheadings();
}

// Function to enable or disable the "Show" button based on the selection status
function updateShowButton() {
    const mainHeadingSelect = document.getElementById('mainHeading');
    const subHeadingSelect = document.getElementById('subHeading');
    const showButton = document.getElementById('showButton');

    // Enable the "Show" button only if Main Heading is selected or Sub Heading is selected (including "All")
    showButton.disabled = mainHeadingSelect.value === 'all' && subHeadingSelect.value === 'all';
}

// Function to filter Sub Headings based on Main Heading selection
function filterSubheadings() {
    const selectedMainHeading = document.getElementById('mainHeading').value;
    const subHeadingSelect = document.getElementById('subHeading');

    // Clear existing subheading options
    subHeadingSelect.innerHTML = '';

    // Get unique subheadings based on the selected main heading
    const filteredSubheadings = Array.from(
        new Set(
            data
                .filter(item => item.mainHeading === selectedMainHeading)
                .map(item => item.subHeading)
        )
    );

    // Add "All" option
    const allOption = document.createElement('option');
    allOption.textContent = 'All';
    allOption.value = 'all';
    subHeadingSelect.appendChild(allOption);

    // Add filtered subheadings to the dropdown
    filteredSubheadings.forEach(subHeading => {
        const option = document.createElement('option');
        option.textContent = subHeading;
        option.value = subHeading;
        subHeadingSelect.appendChild(option);
    });

    // Update the "Show" button status
    updateShowButton();
}

// Function to filter PDF links based on the selected Main Heading and Sub Heading
function filterPDFLinks() {
    const selectedMainHeading = document.getElementById('mainHeading').value;
    const selectedSubHeading = document.getElementById('subHeading').value;
    const pdfLinksContainer = document.getElementById('pdfLinks');

    // Clear existing PDF links
    pdfLinksContainer.innerHTML = '';

    // Filter data based on the selected Main Heading and Sub Heading
    const filteredData = data.filter(item => {
        const isMainHeadingMatch = selectedMainHeading === 'all' || item.mainHeading === selectedMainHeading;
        const isSubHeadingMatch = selectedSubHeading === 'all' || item.subHeading === selectedSubHeading;
        return isMainHeadingMatch && isSubHeadingMatch;
    });

    // Display the PDF links with the specified file names as link text
    filteredData.forEach(item => {
        const link = document.createElement('a');
        link.href = item.fileLink;
        link.textContent = item.fileName;
        link.target = "_blank"; // Set target attribute to open in a new tab
        pdfLinksContainer.appendChild(link);
    });

    // Show the PDF links container
    pdfLinksContainer.style.display = 'block';

    // Enable the "Show" button after displaying the links
    document.getElementById('showButton').disabled = false;
}

// Function to show the PDF links when the "Show" button is clicked
function showPDFLinks() {
    // Filter and display the PDF links
    filterPDFLinks();
}

// Load data and populate Main Heading dropdown once the page is ready
document.addEventListener('DOMContentLoaded', loadDataAndPopulateMainHeadings);
