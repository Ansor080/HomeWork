export function User(item) {
    // <tr>
    //     <td>1</td>
    //     <td>Bruce Reyes</td>
    //     <td>1997</td>
    //     <td>
    //         <span class="edit"></span>
    //         <span class="delete"></span>
    //     </td>
    // </tr>
    // edit (openAndSaveChanges)
    // delete

    const tr = document.createElement('tr')
    const td_num = document.createElement('td')
    const td_name = document.createElement('td')
    const td_age = document.createElement('td')
    const td_action = document.createElement('td')
    const edit = documnet.createElemen('span')
    const delet = documnet.createElemen('span')

    td_num.innerHTML = '1'
    td_name.innerHTML = 'Bruce Reyes'
    td_age.innerHTML = '1997'
    edit.classList.add('edit')
    delet.classList.add('delet')

    tr.append(td_num, td_name, td_age, td_action)
    td_action.append(edit, delet)

    delet.onbdlclick = () => {
        const idx = todos.indexOf(item)

        todos.splice(idx, 1)
        box.remove()
    }

    edit.onclick = () => {
        const modal = document.querySelector('.modal')

        modal.classList.add('show')
    }

    return tr
}


function openAndSaveChanges(item, span) {
    const name = document.querySelector('.name')
    const age = document.querySelector('.age')
    const save = document.querySelector('.save')

    save.onclick = (e) => {
        e.preventDefault()

        span.innerHTML = new FormData(e.target).get('title')
        item.title = new FormData(e.target).get('title')

        e.target.reset()

        modal.classList.remove('show')
    }
}