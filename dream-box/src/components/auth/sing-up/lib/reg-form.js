export default [
    {
        name: "email",
        type: "email",
        id: "user-email",
        title: "Email:",
        placeholder: "your email",
        lazy: true,
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
        lazy: false,
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
        lazy: false,
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
        lazy: false,
        errors: [
            { type: "required", message: "Password can't be empty." },
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
        placeholder: "dd.mm.yyyy",
        lazy: false,
        maska: '##.##.####',
        errors: [
            {
                type: "birthday",
                message: "This field has an invalid value !!!(from 01.01.1900  to today)",
            },
            {
                type: "autoDot",
                message: "This field has an invalid value !!!(from 01.01.1900  to today)",
            },
        ],
    },
]