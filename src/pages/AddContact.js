import FormContact from '../component/FormContact'
import Header from '../component/Header'

const AddContact = () => {

    return (
        <>
            <Header />
            <FormContact
                title={"+Add Contact"}
                isNew={true}
            />
        </>
    )
}

export default AddContact