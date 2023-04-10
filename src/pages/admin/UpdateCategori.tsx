import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Iproduct } from '../../types/product'
import { Button, Form, Input } from 'antd';
interface IProps {
    categories: Iproduct[],
    onUpdateCt: (categori: Iproduct) => void
}
const UpdateCategori = (props: IProps) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [categori, setCategori] = useState<Iproduct>() // khởi tạo biến state product có kiểu dữ liệu là Iproduct
    useEffect(() => { // khi props thay đổi thì sẽ chạy useEffect này
        const currentCategori = props.categories.find((categori: Iproduct) => categori.id == Number(id))
        // tìm trong mảng props.products có phần tử nào có id trùng với id trên url không
        setCategori(currentCategori) // nếu có thì set lại giá trị cho biến product
    }, [props])
    useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
        setFields() // gọi hàm setFields để set lại giá trị cho các input
    }, [categori])
    const [form] = Form.useForm();
    // khởi tạo một instance của Form và gán vào biến form
    // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

    const setFields = () => {// hàm này để set lại giá trị cho các input
        form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
            id: categori?.id,
            name: categori?.name,
        })
    }

    const onFinish = (values: any) => {
        props.onUpdateCt(values);
        navigate('/admin/categories')
    };

    return (
        <div className='w-[700px] mb-[300px]'>
           
        <h3 className='my-5 ml-[95px] font-bold'>Sửa Danh Mục</h3>
            <Form
                form={form}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
            >
                {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
                <Form.Item
                    label=""
                    name="id"
                    style={{ display: 'none' }} // ẩn input này đi
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateCategori