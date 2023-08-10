import { useDispatch, useSelector } from 'react-redux'
import FormContact from '../component/FormContact'
import Header from '../component/Header'
import { addContact, selectStatusContact, setAlert, setStatus } from '../features/contact/sliceContact'
import { useNavigate } from 'react-router-dom'

const AddContact = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (input) => {
        dispatch(addContact(input))
        dispatch(setStatus())
        dispatch(setAlert('created'))
        navigate('/')
    }

    return (
        <>
            <Header />
            <FormContact
                title={"+Add Contact"}
                isNew={true}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default AddContact