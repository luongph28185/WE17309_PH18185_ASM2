import React, {useState, useEffect} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Select} from "antd";
interface Iproduct {
    id: number,
    name: string,
    price: number
}
interface Iprops {
    [key: string]:any,
    onAdd: (product: Iproduct) => void,
}
interface IFormInput {
    id: number,
    name: string,
    price: number
}
const AddProduct = (props:Iprops) => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
      props.onAdd(values);
    
  };

  const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
  };

 
    const [data, setData] = useState<Iproduct[]>([]);
    console.log(data);
    useEffect(() => {
        setData(props.categories);
    }, [props]);
 
    return(
        <div className='w-[700px] mb-[200px]'>
           
        <h3 className='my-5 ml-[95px] font-bold'>Thêm Sản Phẩm</h3>
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

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product desc"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Select" name='categoriId'>
               <Select >
               {
            data.map((categori)=>{
              return(
                <Select.Option key={categori.id} value={categori.id}>{categori.name}</Select.Option>
              )
            })
           } 
               
               </Select>
               </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                    </Form.Item>
                
            </Form>


           
    
        </div>
    )
}
export default AddProduct