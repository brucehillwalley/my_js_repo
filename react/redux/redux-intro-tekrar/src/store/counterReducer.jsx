const initialState = {
  count: 10,
};

//? type'ların constant olarak tanımlanması
export const INC = 'INC'
export const DEC = 'DEC'
export const CLR = 'CLR'


export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case DEC: {
        return { count: state.count - 1 };
    }
    case CLR: {
        return { count:0 };
    }

    default:
      return state;

    //! Reducer fonksiyonu mutlaka bir state objesi dönmelidir. Yanlıs bir type gelse bile state in ilk halini döndürmelidir
  }
};
