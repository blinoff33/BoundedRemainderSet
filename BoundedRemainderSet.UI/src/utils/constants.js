const CONSTANTS = {
    DEFAULT_CONFIG: {
        COUNT: 1000,
        B1: 0.2,
        B2: 0.5,
        P1: 0.1,
        P2: 0.1,
        T: 0.4,
        DELAY: 0.5
    },
    DEFAULT_BOUNDING_BOX: [-1.5, 2, 2, -1.5],
    DEFAULT_ERROR_MESSAGE: 'Что-то пошло не так!',
    DEFAULT_INVALID_FIELD_MESSAGE: 'Введенное вами значение некорректно',
    WARNING_NOT_POSITIVE_FIELD_MESSAGE: 'Значение должно быть числом больше 0',
    WARNING_IS_NEGATIVE_FIELD_MESSAGE: 'Значение должно быть числом больше или равным 0',
    SERVICE_ROUTE: 'v1/BRSetItems',
    SERVICE_HOST: 'http://localhost:61194',
    GRAPH_BOARD_BRSET_ID: 'jxgbox-brset',
    GRAPH_BOARD_RED_DIFF_CURVE_ID: 'jxgbox-red-diff',
    GRAPH_BOARD_GREEN_DIFF_CURVE_ID: 'jxgbox-green-diff',
    GRAPH_BOARD_BLUE_DIFF_CURVE_ID: 'jxgbox-blue-diff'
};

module.exports = CONSTANTS;