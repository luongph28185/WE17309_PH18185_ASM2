
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input} from "antd";
interface Iproduct {
    id: number,
    name: string,
    price: number
}
interface Iprops {
    onAddCt: (categori: Iproduct) => void
}
interface IFormInput {
    id: number,
    name: string,
    price: number
}
const AddCategori = (props:Iprops) => {
    // const {register, handleSubmit} = useForm<IFormInput>()
    // const onHandleSubmit: SubmitHandler<IFormInput> = (data:Iproduct) => {
    //     props.onAdd(data);
    //     navigate('/admin/products')
    // }
    const navigate = useNavigate();
    const onFinish = (values: any) => {
      props.onAddCt(values);
      
  };

  const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
  };
    return(
        <div className='w-[700px] mb-[300px]'>
           
        <h3 className='my-5 ml-[95px] font-bold'>Thêm Danh Mục</h3>
      <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item

                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary bg-black" htmlType="submit">
                        Add 
                    </Button>
                </Form.Item>
                
            </Form>


           
    
        </div>
    )
}
export default AddCategori