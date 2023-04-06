import React, { Component } from 'react';
// Trươc đây component cũng dùng để kết nối lên store, 
// giờ sử dụng Container làm trung gian để kết nối store 
// còn component chỉ để hiển thị giao diện
class Products extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {/* <!-- Product --> */}
                    { this.props.children }
                </div>
            </section>
        );
    }
}

export default Products;
