let id = "no";
// localStorage.clear();
selectData();

function manageData() {
    document.getElementById('msg').innerHTML = "";
    let name = document.getElementById('name').value.trim(); // Trim whitespace

    if (name === '') {
        document.getElementById('msg').innerHTML = 'Please enter your name';
    } else {
        console.log(id);
        let arr = getCrudData();

        if (id === 'no') {
            if (arr == null) {
                arr = [name]; // Initialize array if null
            } else {
                arr.push(name);
            }
            document.getElementById('msg').innerHTML = 'Data added';
        } else {
            arr[id] = name;
            document.getElementById('msg').innerHTML = 'Data updated';
            id = 'no'; // Reset id after update
        }

        setCrudData(arr);
        document.getElementById('name').value = '';
        selectData();
    }
}

function selectData() {
    let arr = getCrudData();
    if (arr != null) {
        let html = '';
        let sno = 1;
        for (let k in arr) {
            html += `<tr><td>${sno}</td><td>${arr[k]}</td><td>
                     <a href="javascript:void(0)" onclick="editData(${k})">Edit</a>&nbsp;
                     <a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a>
                     </td></tr>`;
            sno++;
        }
        document.getElementById('root').innerHTML = html;
    }
}

function editData(rid) {
    let arr = getCrudData();
    document.getElementById('name').value = arr[rid];
    id = rid; // Set id for editing
}

function deleteData(rid) {
    let arr = getCrudData();
    arr.splice(rid, 1);
    setCrudData(arr);
    selectData();
}

function getCrudData() {
    let arr = JSON.parse(localStorage.getItem('crud'));
    return arr; // Ensure it always returns an array
}

function setCrudData(arr) {
    localStorage.setItem('crud', JSON.stringify(arr));
}
