// 1.5 - base de la url
const baseUrl = process.env.REACT_APP_API_URL;


//1 - Definimos una funcion llamada fetchSinToken
// 1.1 - Recibe el endpoit que es al que yo quiero llamar
// 1.2 - Recibe la data que quiero  postear o enviar
// 1.3 - Recibe el method, si el usuario quiere hacer un get, post, put o delete

const fetchSinToken = ( endpoint, data, method = 'GET'  ) => {

    // 1.4 - Necesitamos la url a la cual llamar
    
    const url = ` ${ baseUrl }/${ endpoint }`; //localhost:4000/api/event

    // 1.6 Si el metodo es exactamente a get, hacemos un return del fetch, mandando la url
    if ( method === 'GET' ){
        return fetch( url );
    } else {
        // 1.7 - Si no es GET:  hacemos return del fetch, mandamos url y debemos configurar el objeto.
        // 1.8 - El metodo va a ser igual al que se recibe en la funcion
        // 1.9 - Para los headers, utilizamos content-type en esta aplicacion
        // 1.10 - Anexamos el body como un JSON.string y le mandamos la data recibida.
        return fetch( url, {
            method,
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

export {
    fetchSinToken
}