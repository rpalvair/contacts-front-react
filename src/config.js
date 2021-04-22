const config = {
    endpoints: {
        contacts: {
            read: "http://localhost:8080/contacts",
            delete: "http://localhost:8080/contacts/delete-contact",
            edit: "http://localhost:8080/contacts/update-contact",
            create: "http://localhost:8080/contacts/create-contact"
        }
    }
}

export default config