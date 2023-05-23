export interface notify {
    status:String;
    error:boolean
};

export interface adind_login{
    User:string| undefined;
    Pass: string |undefined
}


export interface admin_infor{
    admin_name: string | null,
    admin_img:  string | null,
    admin_phone:  string | null,
    admin_adress: string | null,
    token:string,
    refesh_tk:string,
    isLogin: boolean;
}

export interface login_result{
    islogin:any,
    url_direct:any,
    name:any, img:any,
     id:any,
      token:any,
    refresh_token:any
}

export interface Protect_element{
    isLogin: boolean;
    children: JSX.Element;
}


export interface Protect{
    pricse: JSX.Element; 
}


export interface List_product{
    MaMH: string,
    MaLOAIMH: string,
    TENMH: string,
    SOLUONG: number,
    LINKMH: string,
    MOTAMH: string
}[]


export interface List_type{
    MaLOAIMH: string,
    TenLoai :string
}

export interface Product_item{
    items:List_product[] |undefined,
    itemsshow: List_product[]|undefined,
}

export interface Top_sale {
    data_sale_total :number,
         data_sale_count: number,
         data_num_product_saled: number
}


export interface Month_sale{
    data_sale_month: any,
    data_sale_mount: any,
    data_type_code: string[],
    data_type_name: string[],
}

export interface Bills_sale{
            data_years: string[],
            data_type_code: string[],
            data_type_name: string[],
            data_sale_total:number,
            data_sale_count: number,
            data_num_product_saled : number,
            data_sale_month: any,
            data_sale_mount: any,
}

export interface List_product_had{
            name_product: string[];
            amount_product: number;
            list_type : string[],
            list_code_type: string[], 
            thamso: {
                MaMH: string,
                TENMH: number,
                SOLUONG: number,
                LINKMH: number,
                MOTAMH: number,
                SIZEM_MAX: number,
                SIZEL_MAX: number,
                SIZEX_MAX: number,
                SIZEL_MIN: number,
                SIZEM_MIN: number,
                SIZEX_MIN: number
              }[]
}


export interface data_productadd{
    code:string,
    name:string,
    descript:string,
    img: string,
    amount: number,
    sizeL:number,
    sizeM:number,
    sizeX:number,
    type: string
}

export interface thamso_timkiem {
    MaMH: string,
	TenMH: string	
}
