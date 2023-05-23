import React, { Fragment } from 'react';

import {
 Page,
 Document,
 Text,
 View, 
 Font,
 StyleSheet 
} from '@react-pdf/renderer';

const borderColor = '#90e5fc'

Font.register({
    family: "Roboto",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
  });

const styles = StyleSheet.create({
    page: {
        fontFamily: "Roboto",
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
        marginTop: 40,
    }, 
    titleContainer:{
        flexDirection: 'row',
        marginTop: 24,
    },
    reportTitle:{
        color: '#65a30d',
        letterSpacing: 2,
        fontSize: 25,
        textAlign: 'justify',
        textTransform: 'uppercase',
    },
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
            fontSize: 12,
            fontStyle: 'bold',
    },
    
    infor: {
         fontStyle: 'bold',
    },

    label: {
        width: 60
    },
    headerContainer: {
        marginTop: 36
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
    },

    billTo_1: {
        paddingBottom: 3,
    },

    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        alignItems: 'center',
        fontWeight: 600,
        textAlign: 'center',
    },

  
    name_product: {
        width: '30%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    size: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    mamt: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },

    gia_tien: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },

    thanh_tien_table: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: 'black',
        fontWeight: 600,
    },

    thanh_tien: {
        width: '100%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 20,
    },
    

    tong_tien: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        fontWeight: 600,
        textAlign: 'center',
    },
  });

  const Invoie_body:React.FC = () => {

    const tableRowsCount = 11;
    
return (
    <Fragment>
         <Document >
             <Page size="A4" style={styles.page}>
                <View style={styles.titleContainer}>
                  <Text style={styles.reportTitle}>{"Hóa Đơn"}</Text>
                 </View>

                 <View style={styles.headerContainer}>
                         <Text style={styles.billTo}>Bill To:</Text>
                         <Text >Ngày lập:<Text style={styles.billTo}> {"2023-12-12"} </Text></Text>
                         <Text >Tên khách hàng: <Text style={styles.billTo}>  {"Lê thị Kiều"} </Text></Text>
                         <Text >Địa chỉ khách hàng:<Text style={styles.billTo}>   {"23 đường nguyễn đường nguyễn đình chiểu"} </Text></Text>
                        <Text >Điện thoại:  <Text style={styles.billTo}>   {" 0345045567"}</Text></Text>
                        <Text >Tên nhân viên:  <Text style={styles.billTo}>  {"Lê thị Kiều"}</Text></Text>

                  </View>
                  <View style={styles.tableContainer}>
                       <Text style={styles.name_product}>Tên mặt hàng</Text>
                       <Text style={styles.size}>Size</Text>
                       <Text style={styles.mamt}>Mã mặt hàng</Text>
                       <Text style={styles.amount}>Số lượng</Text>
                       <Text style={styles.gia_tien}>Đơn giá</Text>
                       <Text style={styles.tong_tien}>Thành Tiền</Text>
                    </View>
                    <View style={styles.row}>
                       <Text  style={styles.name_product}>Cà phê Socolar</Text>
                       <Text style={styles.size}>Size L</Text>
                       <Text style={styles.mamt}>MH001</Text>
                       <Text style={styles.amount}>2</Text>
                       <Text style={styles.gia_tien}>20000</Text>
                       <Text style={styles.tong_tien}>40000</Text>
                   </View>
                   <View style={styles.row}>
                       <Text  style={styles.name_product}>Trà sữa dâu</Text>
                       <Text style={styles.size}>Size x</Text>
                       <Text style={styles.mamt}>MH001</Text>
                       <Text style={styles.amount}>2</Text>
                       <Text style={styles.gia_tien}>40000</Text>
                       <Text style={styles.tong_tien}>80000</Text>
                   </View>
                   <View style={styles.row}>
                       <Text  style={styles.name_product}>Cà phê Socolar</Text>
                       <Text style={styles.size}>Size L</Text>
                       <Text style={styles.mamt}>MH001</Text>
                       <Text style={styles.amount}>2</Text>
                       <Text style={styles.gia_tien}>20000</Text>
                       <Text style={styles.tong_tien}>40000</Text>
                   </View>


                   <View style={styles.thanh_tien_table}>
                       <Text  style={styles.thanh_tien}>Cộng thành tiền:{"120000"}.đ</Text>
                   </View>

                   <View style={styles.headerContainer}>
                       <Text  style={styles.billTo_1}>Người tạo hóa đơn</Text>
                       <Text  style={styles.billTo_1}>{"(ký ghi rõ họ tên)"}</Text>
                   </View>
               </Page>
               
      </Document>


    </Fragment>
)

  };
  
  export default Invoie_body