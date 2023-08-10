import { useDispatch, useSelector } from 'react-redux'
import FormContact from '../component/FormContact'
import Header from '../component/Header'
import { addContact, selectStatusContact, setStatus } from '../features/contact/sliceContact'
import { useNavigate } from 'react-router-dom'

const AddContact = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const status = useSelector(selectStatusContact)

    const handleSubmit = (input) => {
        dispatch(addContact(input))
        dispatch(setStatus())
        navigate('/')
        if (status === 'succeeded') {
        }
    }
    console.log(status)

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