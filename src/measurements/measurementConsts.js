const VISIBLE_VALUES = {
    IAC886 : {
        v1: 19.9120,
        v2: 0.8343,
        R: 0.82 
    },
    GANOLEICO : {
        v1: 13.2790,
        v2: 0.6852,
        R: 0.86 
    },
    GEORGIA06 : {
        v1: 16.431,
        v2: 0.7756,
        R: 0.91
    }
}

const INVISIBLE_VALUES = {
    IAC886 : {
        v1: 8.1460,
        v2: 1.0506,
        R: 0.79
    },

    GANOLEICO : {
        v1: 6.6702,
        v2: 0.9021,
        R: 0.88
    },
    GEORGIA06 : {
        v1: 13.834,
        v2: 0.7929,
        R: 0.87    
    }
}
const VISIBLE = "visible";
const INVISIBLE = "invisible";

export default function (lossesType, variety){
    switch (lossesType) {
        case VISIBLE:
            return VISIBLE_VALUES[variety];
        case INVISIBLE:
            return INVISIBLE_VALUES[variety];
        default:
            return null
    }
}

