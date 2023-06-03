import { GetApiEndpoint } from '@/app.config';

export default async function GetProduct(id){
    const apiEndpoint = GetApiEndpoint()
    let response = await fetch(`${apiEndpoint}api/v1/product/${id}`,
                        {
                            method: "GET",
                            mode: 'cors',
                            headers:{
                                'Sec-Fetch-Site': 'cross-site',
                                'Access-Control-Allow-Origin': apiEndpoint,
                                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                            },
                        }
    )

    let body = await response.json()          
    return await body
}