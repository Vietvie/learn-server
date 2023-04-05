import connection from "../../configs/conectDB";

const getAlluses = (req, res) => {
    return res.status(200).json({message : 'ok'})
}   

const createNewUser =  async (req, res) => {
    const { firstName, lastname, email, address } = req.body;

    if (!firstName || !lastname || !email || !address) {
     return res.status(200).json({message : 'missing params'})
    } else {
          await connection.execute('insert into users (fristName, lastName,    email, address) values (?, ?, ?, ?)', [firstName, lastname, email, address])
    return res.status(200).json({message : 'OK'})
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.id

    if (!userId) {
        return res.status(200).json({message : 'missing params'})

       } else {
        await connection.promise().execute('delete from users where id = ?', [userId])
         return res.status(200).json({message: 'OK'})
    }

}
export {getAlluses, createNewUser, deleteUser}