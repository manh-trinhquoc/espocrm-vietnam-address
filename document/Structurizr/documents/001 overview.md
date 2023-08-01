# Overview

- Xây dựng trường vietnamAddress có dạng giống trường address mặc định của Espo. 
- Trường gồm 4 trường con:
   
| field name | Vietnamese | Description | DB type | client style
| --- | --- | ---
| city | Tỉnh thành | Thành phố Trung ương,Tỉnh | varchar 25 | dropdown list
| district | Quận huyện | Quận, huyện, thành phố , thị xã | varchar 25 | dropdown list
| wards | Phường, xã | Phường, xã, thị trấn | varchar 25 | dropdown list
| street | Phố | Địa chỉ chính xác | varchar 255 | typing

# Mô tả người dùng tương tác

- Khi khởi tạo các ô đều có giá trị null. Ô city sẽ có các option để lựa chọn. Các ô khác rỗng không có option gì.
- Người dùng sẽ phải chọn trường city trước. 
- Khi người dung đã chọn city, ô district sẽ tự động fill quận, huyện của thành phố tương ứng
- Khi người dùng đã chọn quận, huyện, ô phường xã sẽ tự động fill phường xã của quận huyện tương ứng
- Ô street cho người dùng điền free style

# Triển khai backend

- Khi người dùng tạo trường có tên NAME, db sẽ generate 4 cột tương ứng để lưu dữ liệu: NAME_city, NAME_district, NAME_wards, NAME_street
- Dữ liệu tỉnh thành phố lưu dưới dạng json trong folder metadata của plugin. Nguồn dữ liệu lấy từ 2 project:
    1. https://github.com/daohoangson/dvhcvn  
    2. https://github.com/madnh/hanhchinhvn

# Triển khai frontend

- Giai đoạn 1 tham khảo trường address
- Giai đoạn 2 viết = vuejs