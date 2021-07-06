import React, { useState } from 'react';
import { FaHandMiddleFinger } from 'react-icons/fa';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { Button, Modal as AntModal } from 'antd';
import Item from './Item';
import CreateProductModal from './CreateProductModal';
import CreateByAntModal from './CreateByAntModal';

import ToToRoImage from './totoro.jpg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

function App() {
  console.log('🚀 ~ file: App.jsx ~ line 16 ~ ToToRoImage', ToToRoImage);
  const [productList, setProductList] = useState([
    {
      name: 'iPhone 12',
      price: 20000000,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'iPhone 12 Pro',
      price: 25000000,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'iPhone 12 Pro Max',
      price: 30000000,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Galaxy Note 20',
      price: 30000000,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Galaxy S21',
      price: 27000000,
      image: 'https://source.unsplash.com/random',
    },
  ])

  const [isShowLeftSidebar, setIsShowLeftSidebar] = useState(false);
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(false);
  const [count, setCount] = useState(0);
  const [isShowProduct, setIsShowProduct] = useState(true);
  const [isShowCreateModal, setIsShowCreateModal] = useState(false);
  const [isShowCreateAntModal, setIsShowCreateAntModal] = useState(false);

  const [createFormValues, setCreateFormValues] = useState({
    name: '',
    price: 0,
    gender: 'female',
    choice: undefined,
    answers: [],
    agree: false,
  });
  const [createFormErrors, setCreateFormErrors] = useState({});

  function renderProductList() {
    return productList.map((item, index) => {
      return (
        <Item
          key={index}
          name={item.name}
          price={item.price}
          image={item.image}
          setCount={setCount}
        />
      );
    });
  }

  function changeFormValue(e) {
    const { name, value, checked } = e.target;
    let newValue;
    let newAnswers = createFormValues.answers;
    if (name === 'price') {
      newValue = parseInt(value);
    } else if (name === 'answers') {
      if (checked) {
        newAnswers = [...newAnswers, value];
      } else {
        const valueIndex = newAnswers.indexOf(value);
        newAnswers.splice(valueIndex, 1);
      }
      newValue = newAnswers;
    } else if (name === 'agree') {
      newValue = checked;
    } else {
      newValue = value;
    }
    setCreateFormValues({
      ...createFormValues,
      [name]: newValue,
    });
  }

  function submitForm() {
    let isValid = true;
    let errors = {}

    if (!createFormValues.name) {
      errors = {
        ...errors,
        name: 'Chưa nhập tên sản phẩm!',
      };
      isValid = false;
    }

    if (!createFormValues.price) {
      errors = {
        ...errors,
        price: 'Bạn chưa nhập giá hoặc giá không được bằng 0',
      };
      isValid = false;
    }

    if (createFormValues.answers.length === 0) {
      errors = {
        ...errors,
        answers: 'Bạn chưa chọn đáp án!',
      };
      isValid = false;
    }

    if (!createFormValues.agree) {
      errors = {
        ...errors,
        agree: 'Bạn chưa đồng ý!',
      };
      isValid = false;
    }

    if (isValid) {
      const newValues = {
        ...createFormValues,
        image: 'https://source.unsplash.com/random',
      }
      setProductList([
        ...productList,
        newValues,
      ]);
      setCreateFormErrors({});
      setIsShowCreateModal(!isShowCreateModal);
    } else {
      setCreateFormErrors(errors);
    }
  }

  return (
    <div className="body">
      <div
        className={
          isShowLeftSidebar
            ? "left-sidebar show"
            : "left-sidebar"
        }
      >
        Left Sidebar
      </div>
      <div
        className={isShowLeftSidebar ? "main show" : "main"}
      >
        <div className="header">
          <Button
            type="primary"
            onClick={() => setIsShowLeftSidebar(!isShowLeftSidebar)}
          >
            Show left sidebar
          </Button>
          HEADER <FaHandMiddleFinger style={{ fontSize: 48, color: 'white' }} />
          <Button
            type="primary"
            onClick={() => setIsShowRightSidebar(true)}
          >
            Show right sidebar
          </Button>
        </div>
        <div className="content">
          <div style={{ textAlign: 'right' }}>
            <Button
              type="primary"
              onClick={() => setIsShowCreateAntModal(!isShowCreateAntModal)}
            >
              Create Product AntD
            </Button>
            <Button
              onClick={() => setIsShowCreateModal(!isShowCreateModal)}
            >
              Create Product
            </Button>
          </div>
          {isShowProduct && (
            <div className="list">
              {renderProductList()}
            </div>
          )}
          <Button
            type="primary"
            onClick={() => setIsShowProduct(!isShowProduct)}
          >
            {isShowProduct ? 'Hide' : 'Show'}
          </Button>
          <h2>{count}</h2>
          <Button
            type="primary"
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
          <Button
            type="primary"
            onClick={() => setCount(count - 1)}
          >
            -
          </Button>
          <div
            style={{
              width: 500,
              height: 500,
              backgroundImage: `url(${ToToRoImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            Ahihi
          </div>
        </div>
        <div className="footer">
          FOOTER
        </div>
      </div>
      <div
        className={isShowRightSidebar ? "right-sidebar show" : "right-sidebar"}
      >
        Right Sidebar
        <Button
          type="primary"
          onClick={() => setIsShowRightSidebar(false)}
        >
          Close
        </Button>
      </div>
      <Modal
        isOpen={isShowCreateModal}
        toggle={() => setIsShowCreateModal(!isShowCreateModal)}
      >
        <ModalHeader
          toggle={() => setIsShowCreateModal(!isShowCreateModal)}
        >
          Create product
        </ModalHeader>
        <ModalBody>
          <CreateProductModal
            changeFormValue={changeFormValue}
            createFormValues={createFormValues}
            createFormErrors={createFormErrors}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => submitForm()}
          >
            OK
          </Button>{' '}
          <Button
            color="secondary"
            onClick={() => setIsShowCreateModal(!isShowCreateModal)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <AntModal
        title="Create Product"
        visible={isShowCreateAntModal}
        onCancel={() => setIsShowCreateAntModal(false)}
        footer={null}
      >
        <CreateByAntModal />
      </AntModal>
    </div>
  );
}

export default App;
