export const validationRegEx = {
    specialCharacters: /[^!@#$%^&*][a-zA-Z0-9]/
};

export const videoHelper = {
    getVideoId: function (url) {
        let index = url.indexOf("v="),
            videoId = url.slice(index, url.length).replace("v=", "");
        return videoId;
    }
};
