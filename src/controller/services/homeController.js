import connection from "../../configs/conectDB"

const getHomePage = async (req, res) => {
    const [row] = await connection.promise().query(
        'SELECT * FROM users');
    return res.render('index.ejs' , {data:row})
}

const getAboutPage = (req, res) => {
    return res.send('Hello About')
}

const getDetail = async (req, res) => {
    const [detailUser] = await connection.promise().execute('select * from users where id = ?', [req.params.userId])
    res.send(JSON.stringify(detailUser))
}

const createNewUser =  async (req, res) => {
    const { firstName, lastname, email, address } = req.body;
    console.log(firstName, lastname, email, address)
    await connection.execute('insert into users (fristName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastname, email, address])

  return res.redirect('/');
}

const deleteUser = async (req, res) => {
    const userId = req.params.userId
    await connection.promise().execute('delete from users where id = ?', [userId])
  return res.redirect('/');
}

const editUser = async (req, res) => {
    const userId = req.params.userId
    console.log(userId)
    const [dataUser] = await connection.promise().execute('select * from users where id = ?', [userId])
    console.log(dataUser[0])
  return res.render('updateUser.ejs', {dataUser: dataUser[0]})
}

const updateUser = async (req, res) => {
    const {id, firstName, lastname, email, address} = req.body
    await connection.promise().execute('update users set fristName = ?, lastName = ?, email = ?, address = ? where id = ?', [firstName, lastname, email, address, id])
  return res.redirect('/');
    
}

export {getHomePage, getAboutPage, createNewUser, getDetail, deleteUser, editUser, updateUser}