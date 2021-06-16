export default {
    linkToImg: (imgName) => process.env.NODE_ENV === 'development' ?
        require("@/../server/files/" + imgName) :
        "/api/files/" + imgName,
}