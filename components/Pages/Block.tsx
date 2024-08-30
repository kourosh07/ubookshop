export const Block = props => {

    if (!props.state.cart) {
        props.state.cart = []
      }
   

    let size = props.state.cart.includes(props.book.title)?20:25

    return <c-c style={{
        width: 150, flex: 1, minWidth: 150,
        position: "relative", backgroundColor:"white",
        borderRadius:5, margin:"10px",boxShadow:"0px 0px 9px 2px rgba(0,0,0,0.43)",
        background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
    }}>

        <img
            className={global.styles.hover}
            src={props.book.imageLink}
            style={{
                width: "100%", 
                height: 200,
                objectFit: "fill",
                minWidth: 150, 
                borderTopLeftRadius:5,
                borderTopRightRadius:5,
            }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()

            }} />

        <f-cc style={{ padding: "5px 8px", width: "100%", height:40
            , direction:"ltr"
         }}>
            <f-12>{props.book.title}</f-12>
        </f-cc>
        <hr style={{width:"80%", opacity:0.5}}/>
        <f-csb style={{ width: "100%", padding: "5px 0" }}>

            <img src={props.state.cart.includes(props.book.title)?
            "https://irmapserver.ir/qepal/ok.svg":
            "https://irmapserver.ir/qepal/cart.svg"}

            style={{height:size, width:size, objectFit:"contain",
                margin:"0 10px"
            }}/>


            <c-x style={{direction:"ltr", margin:"0 10px"}}>
                <f-12 style={{color:"#FF7043"}}> <del>{(props.book.price as number).toLocaleString("fa-IR")} تومان</del> </f-12>
                <f-15 style={{color:"green"}}>{(props.book.price*0.8 as number).toLocaleString("fa-IR")} تومان</f-15>
            </c-x>
        </f-csb>


    </c-c>
}

