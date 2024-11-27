declare global {
  interface Window {
    daum: {
      Postcode: new (options: {
        oncomplete: (data: {
          address: string; 
          addressType: string; 
          buildingName: string; 
          zonecode: string; 
        }) => void;
      }) => {
        open: () => void;
      };
    };
  }
}

export {};
