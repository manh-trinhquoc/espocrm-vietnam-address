# Overview

- Xây dựng trường vietnamAddress có dạng giống trường address mặc định của Espo. 
- Trường gồm 4 trường con:
   
| field name | Vietnamese | Description | DB type | client style
| --- | --- | --- | --- | ---
| street | Phố | Địa chỉ chính xác | varchar 255 | typing
| city | Tỉnh thành | Thành phố Trung ương,Tỉnh | varchar 25 | dropdown list
| district | Quận huyện | Quận, huyện, thành phố , thị xã | varchar 25 | dropdown list
| ward | Phường, xã | Phường, xã, thị trấn | varchar 25 | dropdown list

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

- Tham khảo trường address
- Can thiệp vào hàm data của view để chỉnh sửa dữ liệu show cho user.
- reRender mỗi khi đổi thông tin tỉnh, thành phố -> quận, huyện -> phường, xã
- dữ liệu hành chính lưu vào class riêng kèm theo các hàm lấy dữ liệu: ` lib:admin-unit.js  `

# Tham khảo
- skipOrmDefs, valueFactoryClassName and attributeExtractorClassName https://forum.espocrm.com/forum/developer-help/84500-metadata-fields-in-espocrm
- coding rule: https://docs.espocrm.com/development/coding-rules/#11-use-dto-rather-than-associative-arrays-or-stdclass-objects