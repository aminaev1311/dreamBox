export default [

    {
        name: "email",
        type: "email",
        id: "user-email",
        title: "Email:",
        placeholder: "your email",
        errors: [
            { type: "required", message: "Email can't be empty." },
            {
                type: "email",
                message: "This field has an invalid value !!!",
            },
            {
                type: "isBusy",
                message: "This email already busy",
            },
        ],
    },
    {
        name: "name",
        type: "text",
        id: "user-login",
        title: "Name:",
        placeholder: "your name",
        errors: [
            { type: "required", message: "Login can't be empty." },
            {
                type: "minLength",
                message: "This field can't be shorter 2 symbols",
            },
        ],
    },
    {
        name: "password_1",
        type: "password",
        id: "user-password_1",
        title: "Create password:",
        placeholder: "password",
        errors: [
            { type: "required", message: "Password can't be empty." },
            {
                type: "minLength",
                message: "This field can't be shorter 7 symbols",
            },
        ],
    },
    {
        name: "password_2",
        type: "password",
        id: "user-password_2",
        title: "Repeat password:",
        placeholder: "password",
        errors: [
            { type: "required", message: "Password can't be empty." },
            {
                type: "minLength",
                message: "This field can't be shorter 7 symbols",
            },
            {
                type: "sameAs",
                message: "Passwords aren't the same...",
            },
        ],
    },
    {
        name: "birthday",
        type: "text",
        id: "user-birthday",
        title: "Birthday",
        placeholder: "01.12.2000",
        errors: [
            { type: "required", message: "Birthday can't be empty." },
            {
                type: "birthday",
                message: "This field has an invalid value !!!(from 01.01.1900  to today)",
            },
        ],
    },
]