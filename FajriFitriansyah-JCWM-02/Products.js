function showDataProducts(index) {
    let getTable = document.getElementById('table-products')
    console.log(getTable)

    let getTbody = getTable.getElementsByTagName('tbody')[0]
    console.log(getTbody)

    let tr = ''
    for (let i = 0; i < dataProducts.length; i++) {
        if (i == index) {
            tr += `
                <tr>
                    <td>
                        <center>${i + 1}</center>
                    </td> 
                    <td>
                        <center><input type="text" name="product-name" value="${dataProducts[index].name}" class="input-edit-product"></center>
                    </td>
                    <td>
                        <center><input type="number" name="product-price" value="${dataProducts[index].price}" class="input-edit-product"></center>
                    </td>
                    <td>
                        <center><input type="text" name="product-image" value="${dataProducts[index].category}" class="input-edit-product"></center>
                    </td>
                    <td>
                        <center>
                            <input type="button" name="button-save" value="Save" onClick="onSaveProduct(${index})">
                            <input type="button" name="button-cancel" value="Cancel" onClick="showDataProducts()">
                        </center>
                    </td>
                </tr> 
            `
        } else {
            tr += `
                <tr>
                    <td>
                        <center>${i + 1}</center>
                    </td> 
                    <td>
                        <center>${dataProducts[i].name}</center>
                    </td>
                    <td>
                        <center>${dataProducts[i].price}</center>
                    </td>
                    <td>
                        <center><image src="${dataProducts[i].category}" width="75"></center>
                    </td>
                    <td>
                        <center>
                            <input type="button" name="button-edit" value="Edit" onClick="editProduct(${i})">
                            <input type="button" name="button-delete" value="Delete" onClick="deleteProduct(${i})">
                        </center>
                    </td>
                </tr> 
            `
        }
    }

    getTbody.innerHTML = tr
}

showDataProducts()

function addDataProduct() {
    let inputs = document.getElementsByClassName('input-product')
    console.log(inputs)

    let productName = inputs[0].value
    let price = inputs[1].value
    let category = inputs[2].value

    if (productName && price && imageURL) {
        dataProducts.push({
            name: productName,
            price: price,
            category: catergory
        })

        showDataProducts()

        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
    } else {
        let errorMessage = document.getElementById('error-message')
        errorMessage.innerHTML = 'Data Must Be Filled!'
    }
}

document.getElementById('button-submit').addEventListener('click', addDataProduct)

function deleteProduct(i) {
    let confirmBox = confirm(`Are you sure want to delete product ${dataProducts[i].name}?`)

    if (confirmBox) {
        dataProducts.splice(i, 1)
        alert('Delete Product Success!')

        showDataProducts()
    }
}

function editProduct(i) {
    let confirmBox = confirm(`Are you sure want to edit ${dataProducts[i].name}`)

    if (confirmBox == true) {
        showDataProducts(i)
    }
}

function onSaveProduct(index) {
    let inputs = document.getElementsByClassName('input-edit-product')

    let productName = inputs[0].value
    let price = inputs[1].value
    let category = inputs[2].value

    if (productName && price && stock && imageURL) {
        dataProducts[index].name = productName
        dataProducts[index].price = price
        dataProducts[index].category = category

        alert('Edit Data Success!')

        showDataProducts()
    }
}