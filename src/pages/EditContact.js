import { useNavigate, useParams } from 'react-router-dom'
import FormContact from '../component/FormContact'
import Header from '../component/Header'
import { getContactById, selectStatusContact, setAlert, setStatus, updateContact } from '../features/contact/sliceContact'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const EditContact = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const statusContact = useSelector(selectStatusContact)
    const { id } = useParams()

    const handleSubmit = (input) => {
        dispatch(updateContact({ id, input }))
        dispatch(setStatus())
        dispatch(setAlert('updated'))
        navigate("/");
    }

    // get data for default value on form edit page
    useEffect(() => {
        if (statusContact === 'idle' && id) {
            dispatch(getContactById(id))
        }
    }, [dispatch, id, statusContact])

    return (
        <>
            <Header />
            <FormContact
                title={"Edit Contact"}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default EditContact