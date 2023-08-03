define('vietnam-address:libs/admin-unit', [], function () {

    /**
     * Dữ liệu đơn vị hành chính Việt Nam bản nhẹ Nhất
     * @link https://github.com/daohoangson/dvhcvn/blob/master/data/sorted.json
     */
    let rawData = [
        [
            "89", "An Giang", "Tỉnh", "An Giang",
            [
                [
                    "886", "An Phú", "Huyện", "An Phu",
                    [
                        ["30337", "An Phú", "Thị trấn", "An Phu"],
                        ["30373", "Đa Phước", "Xã", "Da Phuoc"],
                        ["30340", "Khánh An", "Xã", "Khanh An"],
                        ["30343", "Khánh Bình", "Xã", "Khanh Binh"],
                        ["30341", "Long Bình", "Thị Trấn", "Long Binh"],
                        ["30349", "Nhơn Hội", "Xã", "Nhon Hoi"],
                        ["30355", "Phú Hội", "Xã", "Phu Hoi"],
                        ["30352", "Phú Hữu", "Xã", "Phu Huu"],
                        ["30358", "Phước Hưng", "Xã", "Phuoc Hung"],
                        ["30346", "Quốc Thái", "Xã", "Quoc Thai"],
                        ["30364", "Vĩnh Hậu", "Xã", "Vinh Hau"],
                        ["30370", "Vĩnh Hội Đông", "Xã", "Vinh Hoi Dong"],
                        ["30361", "Vĩnh Lộc", "Xã", "Vinh Loc"],
                        ["30367", "Vĩnh Trường", "Xã", "Vinh Truong"]
                    ]
                ],
                [
                    "884", "Châu Đốc", "Thành phố", "Chau Doc",
                    [
                        ["30319", "Châu Phú A", "Phường", "Chau Phu A"],
                        ["30316", "Châu Phú B", "Phường", "Chau Phu B"],
                        ["30325", "Núi Sam", "Phường", "Nui Sam"],
                        ["30334", "Vĩnh Châu", "Xã", "Vinh Chau"],
                        ["30322", "Vĩnh Mỹ", "Phường", "Vinh My"],
                        ["30328", "Vĩnh Ngươn", "Phường", "Vinh Nguon"],
                        ["30331", "Vĩnh Tế", "Xã", "Vinh Te"]
                    ]
                ],
                [
                    "889", "Châu Phú", "Huyện", "Chau Phu",
                    [
                        ["30499", "Bình Chánh", "Xã", "Binh Chanh"],
                        ["30484", "Bình Long", "Xã", "Binh Long"],
                        ["30487", "Bình Mỹ", "Xã", "Binh My"],
                        ["30496", "Bình Phú", "Xã", "Binh Phu"],
                        ["30490", "Bình Thủy", "Xã", "Binh Thuy"],
                        ["30463", "Cái Dầu", "Thị trấn", "Cai Dau"],
                        ["30493", "Đào Hữu Cảnh", "Xã", "Dao Huu Canh"],
                        ["30466", "Khánh Hòa", "Xã", "Khanh Hoa"],
                        ["30469", "Mỹ Đức", "Xã", "My Duc"],
                        ["30472", "Mỹ Phú", "Xã", "My Phu"],
                        ["30475", "Ô Long Vỹ", "Xã", "O Long Vy"],
                        ["30481", "Thạnh Mỹ Tây", "Xã", "Thanh My Tay"],
                        ["30478", "Vĩnh Thạnh Trung", "Thị trấn", "Vinh Thanh Trung"]
                    ]
                ],
                [
                    "892", "Châu Thành", "Huyện", "Chau Thanh",
                    [
                        ["30589", "An Châu", "Thị trấn", "An Chau"],
                        ["30592", "An Hòa", "Xã", "An Hoa"],
                        ["30607", "Bình Hòa", "Xã", "Binh Hoa"],
                        ["30601", "Bình Thạnh", "Xã", "Binh Thanh"],
                        ["30595", "Cần Đăng", "Xã", "Can Dang"],
                        ["30613", "Hòa Bình Thạnh", "Xã", "Hoa Binh Thanh"],
                        ["30622", "Tân Phú", "Xã", "Tan Phu"],
                        ["30610", "Vĩnh An", "Xã", "Vinh An"],
                        ["30604", "Vĩnh Bình", "Thị trấn", "Vinh Binh"],
                        ["30598", "Vĩnh Hanh", "Xã", "Vinh Hanh"],
                        ["30616", "Vĩnh Lợi", "Xã", "Vinh Loi"],
                        ["30619", "Vĩnh Nhuận", "Xã", "Vinh Nhuan"],
                        ["30625", "Vĩnh Thành", "Xã", "Vinh Thanh"]
                    ]
                ],
                [
                    "893", "Chợ Mới", "Huyện", "Cho Moi",
                    [
                        ["30670", "An Thạnh Trung", "Xã", "An Thanh Trung"],
                        ["30667", "Bình Phước Xuân", "Xã", "Binh Phuoc Xuan"],
                        ["30628", "Chợ Mới", "Thị trấn", "Cho Moi"],
                        ["30679", "Hòa An", "Xã", "Hoa An"],
                        ["30676", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["30673", "Hội An", "Xã", "Hoi An"],
                        ["30634", "Kiến An", "Xã", "Kien An"],
                        ["30649", "Kiến Thành", "Xã", "Kien Thanh"],
                        ["30640", "Long Điền A", "Xã", "Long Dien A"],
                        ["30646", "Long Điền B", "Xã", "Long Dien B"],
                        ["30661", "Long Giang", "Xã", "Long Giang"],
                        ["30664", "Long Kiến", "Xã", "Long Kien"],
                        ["30655", "Mỹ An", "Xã", "My An"],
                        ["30652", "Mỹ Hiệp", "Xã", "My Hiep"],
                        ["30637", "Mỹ Hội Đông", "Xã", "My Hoi Dong"],
                        ["30631", "Mỹ Luông", "Thị trấn", "My Luong"],
                        ["30658", "Nhơn Mỹ", "Xã", "Nhon My"],
                        ["30643", "Tấn Mỹ", "Xã", "Tan My"]
                    ]
                ],
                [
                    "883", "Long Xuyên", "Thành phố", "Long Xuyen",
                    [
                        ["30289", "Bình Đức", "Phường", "Binh Duc"],
                        ["30292", "Bình Khánh", "Phường", "Binh Khanh"],
                        ["30285", "Đông Xuyên", "Phường", "Dong Xuyen"],
                        ["30280", "Mỹ Bình", "Phường", "My Binh"],
                        ["30307", "Mỹ Hòa", "Phường", "My Hoa"],
                        ["30313", "Mỹ Hoà Hưng", "Xã", "My Hoa Hung"],
                        ["30310", "Mỹ Khánh", "Xã", "My Khanh"],
                        ["30283", "Mỹ Long", "Phường", "My Long"],
                        ["30295", "Mỹ Phước", "Phường", "My Phuoc"],
                        ["30298", "Mỹ Quý", "Phường", "My Quy"],
                        ["30304", "Mỹ Thạnh", "Phường", "My Thanh"],
                        ["30301", "Mỹ Thới", "Phường", "My Thoi"],
                        ["30286", "Mỹ Xuyên", "Phường", "My Xuyen"]
                    ]
                ],
                [
                    "888", "Phú Tân", "Huyện", "Phu Tan",
                    [
                        ["30454", "Bình Thạnh Đông", "Xã", "Binh Thanh Dong"],
                        ["30409", "Chợ Vàm", "Thị trấn", "Cho Vam"],
                        ["30442", "Hiệp Xương", "Xã", "Hiep Xuong"],
                        ["30430", "Hoà Lạc", "Xã", "Hoa Lac"],
                        ["30415", "Long Hoà", "Xã", "Long Hoa"],
                        ["30436", "Phú An", "Xã", "Phu An"],
                        ["30445", "Phú Bình", "Xã", "Phu Binh"],
                        ["30424", "Phú Hiệp", "Xã", "Phu Hiep"],
                        ["30451", "Phú Hưng", "Xã", "Phu Hung"],
                        ["30421", "Phú Lâm", "Xã", "Phu Lam"],
                        ["30418", "Phú Long", "Xã", "Phu Long"],
                        ["30406", "Phú Mỹ", "Thị trấn", "Phu My"],
                        ["30427", "Phú Thạnh", "Xã", "Phu Thanh"],
                        ["30433", "Phú Thành", "Xã", "Phu Thanh"],
                        ["30448", "Phú Thọ", "Xã", "Phu Tho"],
                        ["30439", "Phú Xuân", "Xã", "Phu Xuan"],
                        ["30457", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["30460", "Tân Trung", "Xã", "Tan Trung"]
                    ]
                ],
                [
                    "887", "Tân Châu", "Thị xã", "Tan Chau",
                    [
                        ["30397", "Châu Phong", "Xã", "Chau Phong"],
                        ["30403", "Lê Chánh", "Xã", "Le Chanh"],
                        ["30391", "Long An", "Xã", "Long An"],
                        ["30378", "Long Châu", "Phường", "Long Chau"],
                        ["30377", "Long Hưng", "Phường", "Long Hung"],
                        ["30394", "Long Phú", "Phường", "Long Phu"],
                        ["30412", "Long Sơn", "Phường", "Long Son"],
                        ["30376", "Long Thạnh", "Phường", "Long Thanh"],
                        ["30379", "Phú Lộc", "Xã", "Phu Loc"],
                        ["30400", "Phú Vĩnh", "Xã", "Phu Vinh"],
                        ["30388", "Tân An", "Xã", "Tan An"],
                        ["30387", "Tân Thạnh", "Xã", "Tan Thanh"],
                        ["30385", "Vĩnh Hòa", "Xã", "Vinh Hoa"],
                        ["30382", "Vĩnh Xương", "Xã", "Vinh Xuong"]
                    ]
                ],
                [
                    "894", "Thoại Sơn", "Huyện", "Thoai Son",
                    [
                        ["30692", "An Bình", "Xã", "An Binh"],
                        ["30724", "Bình Thành", "Xã", "Binh Thanh"],
                        ["30706", "Định Mỹ", "Xã", "Dinh My"],
                        ["30709", "Định Thành", "Xã", "Dinh Thanh"],
                        ["30712", "Mỹ Phú Đông", "Xã", "My Phu Dong"],
                        ["30682", "Núi Sập", "Thị trấn", "Nui Sap"],
                        ["30688", "Óc Eo", "Thị Trấn", "Oc Eo"],
                        ["30685", "Phú Hoà", "Thị trấn", "Phu Hoa"],
                        ["30700", "Phú Thuận", "Xã", "Phu Thuan"],
                        ["30691", "Tây Phú", "Xã", "Tay Phu"],
                        ["30721", "Thoại Giang", "Xã", "Thoai Giang"],
                        ["30703", "Vĩnh Chánh", "Xã", "Vinh Chanh"],
                        ["30718", "Vĩnh Khánh", "Xã", "Vinh Khanh"],
                        ["30694", "Vĩnh Phú", "Xã", "Vinh Phu"],
                        ["30697", "Vĩnh Trạch", "Xã", "Vinh Trach"],
                        ["30715", "Vọng Đông", "Xã", "Vong Dong"],
                        ["30727", "Vọng Thê", "Xã", "Vong The"]
                    ]
                ],
                [
                    "890", "Tịnh Biên", "Huyện", "Tinh Bien",
                    [
                        ["30526", "An Cư", "Xã", "An Cu"],
                        ["30538", "An Hảo", "Xã", "An Hao"],
                        ["30529", "An Nông", "Xã", "An Nong"],
                        ["30514", "An Phú", "Xã", "An Phu"],
                        ["30505", "Chi Lăng", "Thị trấn", "Chi Lang"],
                        ["30502", "Nhà Bàng", "Thị trấn", "Nha Bang"],
                        ["30511", "Nhơn Hưng", "Xã", "Nhon Hung"],
                        ["30508", "Núi Voi", "Xã", "Nui Voi"],
                        ["30541", "Tân Lập", "Xã", "Tan Lap"],
                        ["30535", "Tân Lợi", "Xã", "Tan Loi"],
                        ["30517", "Thới Sơn", "Xã", "Thoi Son"],
                        ["30520", "Tịnh Biên", "Thị trấn", "Tinh Bien"],
                        ["30523", "Văn Giáo", "Xã", "Van Giao"],
                        ["30532", "Vĩnh Trung", "Xã", "Vinh Trung"]
                    ]
                ],
                [
                    "891", "Tri Tôn", "Huyện", "Tri Ton",
                    [
                        ["30577", "An Tức", "Xã", "An Tuc"],
                        ["30547", "Ba Chúc", "Thị trấn", "Ba Chuc"],
                        ["30562", "Châu Lăng", "Xã", "Chau Lang"],
                        ["30580", "Cô Tô", "Thị trấn", "Co To"],
                        ["30550", "Lạc Quới", "Xã", "Lac Quoi"],
                        ["30553", "Lê Trì", "Xã", "Le Tri"],
                        ["30568", "Lương An Trà", "Xã", "Luong An Tra"],
                        ["30565", "Lương Phi", "Xã", "Luong Phi"],
                        ["30574", "Núi Tô", "Xã", "Nui To"],
                        ["30586", "Ô Lâm", "Xã", "O Lam"],
                        ["30571", "Tà Đảnh", "Xã", "Ta Danh"],
                        ["30583", "Tân Tuyến", "Xã", "Tan Tuyen"],
                        ["30544", "Tri Tôn", "Thị trấn", "Tri Ton"],
                        ["30556", "Vĩnh Gia", "Xã", "Vinh Gia"],
                        ["30559", "Vĩnh Phước", "Xã", "Vinh Phuoc"]
                    ]
                ]
            ]
        ],
        [
            "77", "Bà Rịa - Vũng Tàu", "Tỉnh", "Ba Ria - Vung Tau",
            [
                [
                    "748", "Bà Rịa", "Thành phố", "Ba Ria",
                    [
                        ["26572", "Hoà Long", "Xã", "Hoa Long"],
                        ["26566", "Kim Dinh", "Phường", "Kim Dinh"],
                        ["26563", "Long Hương", "Phường", "Long Huong"],
                        ["26569", "Long Phước", "Xã", "Long Phuoc"],
                        ["26558", "Long Tâm", "Phường", "Long Tam"],
                        ["26557", "Long Toàn", "Phường", "Long Toan"],
                        ["26551", "Phước Hiệp", "Phường", "Phuoc Hiep"],
                        ["26548", "Phước Hưng", "Phường", "Phuoc Hung"],
                        ["26554", "Phước Nguyên", "Phường", "Phuoc Nguyen"],
                        ["26560", "Phước Trung", "Phường", "Phuoc Trung"],
                        ["26567", "Tân Hưng", "Xã", "Tan Hung"]
                    ]
                ],
                [
                    "750", "Châu Đức", "Huyện", "Chau Duc",
                    [
                        ["26574", "Bàu Chinh", "Xã", "Bau Chinh"],
                        ["26578", "Bình Ba", "Xã", "Binh Ba"],
                        ["26590", "Bình Giã", "Xã", "Binh Gia"],
                        ["26593", "Bình Trung", "Xã", "Binh Trung"],
                        ["26599", "Cù Bị", "Xã", "Cu Bi"],
                        ["26614", "Đá Bạc", "Xã", "Da Bac"],
                        ["26608", "Kim Long", "Xã", "Kim Long"],
                        ["26602", "Láng Lớn", "Xã", "Lang Lon"],
                        ["26575", "Ngãi Giao", "Thị trấn", "Ngai Giao"],
                        ["26617", "Nghĩa Thành", "Xã", "Nghia Thanh"],
                        ["26605", "Quảng Thành", "Xã", "Quang Thanh"],
                        ["26587", "Sơn Bình", "Xã", "Son Binh"],
                        ["26581", "Suối Nghệ", "Xã", "Suoi Nghe"],
                        ["26611", "Suối Rao", "Xã", "Suoi Rao"],
                        ["26596", "Xà Bang", "Xã", "Xa Bang"],
                        ["26584", "Xuân Sơn", "Xã", "Xuan Son"]
                    ]
                ],
                [
                    "755", "Côn Đảo", "Huyện", "Con Dao",
                    []
                ],
                [
                    "753", "Đất Đỏ", "Huyện", "Dat Do",
                    [
                        ["26680", "Đất Đỏ", "Thị trấn", "Dat Do"],
                        ["26698", "Láng Dài", "Xã", "Lang Dai"],
                        ["26701", "Lộc An", "Xã", "Loc An"],
                        ["26689", "Long Mỹ", "Xã", "Long My"],
                        ["26695", "Long Tân", "Xã", "Long Tan"],
                        ["26692", "Phước Hải", "Thị trấn", "Phuoc Hai"],
                        ["26686", "Phước Hội", "Xã", "Phuoc Hoi"],
                        ["26683", "Phước Long Thọ", "Xã", "Phuoc Long Tho"]
                    ]
                ],
                [
                    "752", "Long Điền", "Huyện", "Long Dien",
                    [
                        ["26665", "An Ngãi", "Xã", "An Ngai"],
                        ["26671", "An Nhứt", "Xã", "An Nhut"],
                        ["26659", "Long Điền", "Thị trấn", "Long Dien"],
                        ["26662", "Long Hải", "Thị trấn", "Long Hai"],
                        ["26677", "Phước Hưng", "Xã", "Phuoc Hung"],
                        ["26674", "Phước Tỉnh", "Xã", "Phuoc Tinh"],
                        ["26668", "Tam Phước", "Xã", "Tam Phuoc"]
                    ]
                ],
                [
                    "754", "Phú Mỹ", "Thị xã", "Phu My",
                    [
                        ["26728", "Châu Pha", "Xã", "Chau Pha"],
                        ["26725", "Hắc Dịch", "Phường", "Hac Dich"],
                        ["26719", "Mỹ Xuân", "Phường", "My Xuan"],
                        ["26704", "Phú Mỹ", "Phường", "Phu My"],
                        ["26713", "Phước Hoà", "Phường", "Phuoc Hoa"],
                        ["26722", "Sông Xoài", "Xã", "Song Xoai"],
                        ["26710", "Tân Hải", "Xã", "Tan Hai"],
                        ["26707", "Tân Hoà", "Xã", "Tan Hoa"],
                        ["26716", "Tân Phước", "Phường", "Tan Phuoc"],
                        ["26731", "Tóc Tiên", "Xã", "Toc Tien"]
                    ]
                ],
                [
                    "747", "Vũng Tàu", "Thành phố", "Vung Tau",
                    [
                        ["26506", "1", "Phường", "1"],
                        ["26509", "2", "Phường", "2"],
                        ["26512", "3", "Phường", "3"],
                        ["26515", "4", "Phường", "4"],
                        ["26518", "5", "Phường", "5"],
                        ["26524", "7", "Phường", "7"],
                        ["26527", "8", "Phường", "8"],
                        ["26530", "9", "Phường", "9"],
                        ["26536", "10", "Phường", "10"],
                        ["26539", "11", "Phường", "11"],
                        ["26542", "12", "Phường", "12"],
                        ["26545", "Long Sơn", "Xã", "Long Son"],
                        ["26526", "Nguyễn An Ninh", "Phường", "Nguyen An Ninh"],
                        ["26535", "Rạch Dừa", "Phường", "Rach Dua"],
                        ["26533", "Thắng Nhất", "Phường", "Thang Nhat"],
                        ["26521", "Thắng Nhì", "Phường", "Thang Nhi"],
                        ["26508", "Thắng Tam", "Phường", "Thang Tam"]
                    ]
                ],
                [
                    "751", "Xuyên Mộc", "Huyện", "Xuyen Moc",
                    [
                        ["26638", "Bàu Lâm", "Xã", "Bau Lam"],
                        ["26656", "Bình Châu", "Xã", "Binh Chau"],
                        ["26632", "Bông Trang", "Xã", "Bong Trang"],
                        ["26653", "Bưng Riềng", "Xã", "Bung Rieng"],
                        ["26641", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["26647", "Hòa Hiệp", "Xã", "Hoa Hiep"],
                        ["26650", "Hòa Hội", "Xã", "Hoa Hoi"],
                        ["26644", "Hòa Hưng", "Xã", "Hoa Hung"],
                        ["26620", "Phước Bửu", "Thị trấn", "Phuoc Buu"],
                        ["26626", "Phước Tân", "Xã", "Phuoc Tan"],
                        ["26623", "Phước Thuận", "Xã", "Phuoc Thuan"],
                        ["26635", "Tân Lâm", "Xã", "Tan Lam"],
                        ["26629", "Xuyên Mộc", "Xã", "Xuyen Moc"]
                    ]
                ]
            ]
        ],
        [
            "24", "Bắc Giang", "Tỉnh", "Bac Giang",
            [
                [
                    "213", "Bắc Giang", "Thành phố", "Bac Giang",
                    [
                        ["07228", "Đa Mai", "Phường", "Da Mai"],
                        ["07231", "Dĩnh Kế", "Phường", "Dinh Ke"],
                        ["07441", "Dĩnh Trì", "Xã", "Dinh Tri"],
                        ["07696", "Đồng Sơn", "Xã", "Dong Son"],
                        ["07210", "Hoàng Văn Thụ", "Phường", "Hoang Van Thu"],
                        ["07219", "Lê Lợi", "Phường", "Le Loi"],
                        ["07216", "Mỹ Độ", "Phường", "My Do"],
                        ["07207", "Ngô Quyền", "Phường", "Ngo Quyen"],
                        ["07705", "Song Khê", "Xã", "Song Khe"],
                        ["07222", "Song Mai", "Xã", "Song Mai"],
                        ["07687", "Tân Mỹ", "Xã", "Tan My"],
                        ["07699", "Tân Tiến", "Xã", "Tan Tien"],
                        ["07201", "Thọ Xương", "Phường", "Tho Xuong"],
                        ["07204", "Trần Nguyên Hãn", "Phường", "Tran Nguyen Han"],
                        ["07213", "Trần Phú", "Phường", "Tran Phu"],
                        ["07225", "Xương Giang", "Phường", "Xuong Giang"]
                    ]
                ],
                [
                    "223", "Hiệp Hòa", "Huyện", "Hiep Hoa",
                    [
                        ["07870", "Bắc Lý", "Xã", "Bac Ly"],
                        ["07882", "Châu Minh", "Xã", "Chau Minh"],
                        ["07852", "Đại Thành", "Xã", "Dai Thanh"],
                        ["07861", "Danh Thắng", "Xã", "Danh Thang"],
                        ["07867", "Đoan Bái", "Xã", "Doan Bai"],
                        ["07879", "Đông Lỗ", "Xã", "Dong Lo"],
                        ["07813", "Đồng Tân", "Xã", "Dong Tan"],
                        ["07837", "Hòa Sơn", "Xã", "Hoa Son"],
                        ["07828", "Hoàng An", "Xã", "Hoang An"],
                        ["07819", "Hoàng Lương", "Xã", "Hoang Luong"],
                        ["07825", "Hoàng Thanh", "Xã", "Hoang Thanh"],
                        ["07822", "Hoàng Vân", "Xã", "Hoang Van"],
                        ["07858", "Hợp Thịnh", "Xã", "Hop Thinh"],
                        ["07849", "Hùng Sơn", "Xã", "Hung Son"],
                        ["07876", "Hương Lâm", "Xã", "Huong Lam"],
                        ["07846", "Lương Phong", "Xã", "Luong Phong"],
                        ["07885", "Mai Đình", "Xã", "Mai Dinh"],
                        ["07864", "Mai Trung", "Xã", "Mai Trung"],
                        ["07831", "Ngọc Sơn", "Xã", "Ngoc Son"],
                        ["07843", "Quang Minh", "Xã", "Quang Minh"],
                        ["07834", "Thái Sơn", "Xã", "Thai Son"],
                        ["07840", "Thắng", "Thị trấn", "Thang"],
                        ["07816", "Thanh Vân", "Xã", "Thanh Van"],
                        ["07855", "Thường Thắng", "Xã", "Thuong Thang"],
                        ["07873", "Xuân Cẩm", "Xã", "Xuan Cam"]
                    ]
                ],
                [
                    "217", "Lạng Giang", "Huyện", "Lang Giang",
                    [
                        ["07396", "An Hà", "Xã", "An Ha"],
                        ["07435", "Đại Lâm", "Xã", "Dai Lam"],
                        ["07390", "Đào Mỹ", "Xã", "Dao My"],
                        ["07408", "Dương Đức", "Xã", "Duong Duc"],
                        ["07405", "Hương Lạc", "Xã", "Huong Lac"],
                        ["07387", "Hương Sơn", "Xã", "Huong Son"],
                        ["07399", "Kép", "Thị trấn", "Kep"],
                        ["07402", "Mỹ Hà", "Xã", "My Ha"],
                        ["07420", "Mỹ Thái", "Xã", "My Thai"],
                        ["07378", "Nghĩa Hòa", "Xã", "Nghia Hoa"],
                        ["07381", "Nghĩa Hưng", "Xã", "Nghia Hung"],
                        ["07384", "Quang Thịnh", "Xã", "Quang Thinh"],
                        ["07432", "Tân Dĩnh", "Xã", "Tan Dinh"],
                        ["07417", "Tân Hưng", "Xã", "Tan Hung"],
                        ["07411", "Tân Thanh", "Xã", "Tan Thanh"],
                        ["07438", "Thái Đào", "Xã", "Thai Dao"],
                        ["07393", "Tiên Lục", "Xã", "Tien Luc"],
                        ["07375", "Vôi", "Thị trấn", "Voi"],
                        ["07429", "Xuân Hương", "Xã", "Xuan Huong"],
                        ["07426", "Xương Lâm", "Xã", "Xuong Lam"],
                        ["07414", "Yên Mỹ", "Xã", "Yen My"]
                    ]
                ],
                [
                    "218", "Lục Nam", "Huyện", "Luc Nam",
                    [
                        ["07513", "Bắc Lũng", "Xã", "Bac Lung"],
                        ["07462", "Bảo Đài", "Xã", "Bao Dai"],
                        ["07459", "Bảo Sơn", "Xã", "Bao Son"],
                        ["07492", "Bình Sơn", "Xã", "Binh Son"],
                        ["07519", "Cẩm Lý", "Xã", "Cam Ly"],
                        ["07480", "Chu Điện", "Xã", "Chu Dien"],
                        ["07483", "Cương Sơn", "Xã", "Cuong Son"],
                        ["07522", "Đan Hội", "Xã", "Dan Hoi"],
                        ["07444", "Đồi Ngô", "Thị trấn", "Doi Ngo"],
                        ["07450", "Đông Hưng", "Xã", "Dong Hung"],
                        ["07453", "Đông Phú", "Xã", "Dong Phu"],
                        ["07504", "Huyền Sơn", "Xã", "Huyen Son"],
                        ["07501", "Khám Lạng", "Xã", "Kham Lang"],
                        ["07495", "Lan Mẫu", "Xã", "Lan Mau"],
                        ["07510", "Lục Sơn", "Xã", "Luc Son"],
                        ["07486", "Nghĩa Phương", "Xã", "Nghia Phuong"],
                        ["07477", "Phương Sơn", "Xã", "Phuong Son"],
                        ["07456", "Tam Dị", "Xã", "Tam Di"],
                        ["07465", "Thanh Lâm", "Xã", "Thanh Lam"],
                        ["07468", "Tiên Nha", "Xã", "Tien Nha"],
                        ["07471", "Trường Giang", "Xã", "Truong Giang"],
                        ["07507", "Trường Sơn", "Xã", "Truong Son"],
                        ["07489", "Vô Tranh", "Xã", "Vo Tranh"],
                        ["07516", "Vũ Xá", "Xã", "Vu Xa"],
                        ["07498", "Yên Sơn", "Xã", "Yen Son"]
                    ]
                ],
                [
                    "219", "Lục Ngạn", "Huyện", "Luc Ngan",
                    [
                        ["07573", "Biển Động", "Xã", "Bien Dong"],
                        ["07555", "Biên Sơn", "Xã", "Bien Son"],
                        ["07528", "Cấm Sơn", "Xã", "Cam Son"],
                        ["07525", "Chũ", "Thị trấn", "Chu"],
                        ["07609", "Đèo Gia", "Xã", "Deo Gia"],
                        ["07591", "Đồng Cốc", "Xã", "Dong Coc"],
                        ["07570", "Giáp Sơn", "Xã", "Giap Son"],
                        ["07543", "Hộ Đáp", "Xã", "Ho Dap"],
                        ["07561", "Hồng Giang", "Xã", "Hong Giang"],
                        ["07552", "Kiên Lao", "Xã", "Kien Lao"],
                        ["07558", "Kiên Thành", "Xã", "Kien Thanh"],
                        ["07564", "Kim Sơn", "Xã", "Kim Son"],
                        ["07600", "Mỹ An", "Xã", "My An"],
                        ["07603", "Nam Dương", "Xã", "Nam Duong"],
                        ["07582", "Phì Điền", "Xã", "Phi Dien"],
                        ["07534", "Phong Minh", "Xã", "Phong Minh"],
                        ["07537", "Phong Vân", "Xã", "Phong Van"],
                        ["07597", "Phú Nhuận", "Xã", "Phu Nhuan"],
                        ["07612", "Phượng Sơn", "Xã", "Phuong Son"],
                        ["07576", "Quý Sơn", "Xã", "Quy Son"],
                        ["07546", "Sơn Hải", "Xã", "Son Hai"],
                        ["07567", "Tân Hoa", "Xã", "Tan Hoa"],
                        ["07594", "Tân Lập", "Xã", "Tan Lap"],
                        ["07606", "Tân Mộc", "Xã", "Tan Moc"],
                        ["07588", "Tân Quang", "Xã", "Tan Quang"],
                        ["07531", "Tân Sơn", "Xã", "Tan Son"],
                        ["07549", "Thanh Hải", "Xã", "Thanh Hai"],
                        ["07579", "Trù Hựu", "Xã", "Tru Huu"],
                        ["07540", "Xa Lý", "Xã", "Xa Ly"]
                    ]
                ],
                [
                    "220", "Sơn Động", "Huyện", "Son Dong",
                    [
                        ["07660", "An Bá", "Xã", "An Ba"],
                        ["07615", "An Châu", "Thị trấn", "An Chau"],
                        ["07645", "An Lạc", "Xã", "An Lac"],
                        ["07642", "Cẩm Đàn", "Xã", "Cam Dan"],
                        ["07627", "Đại Sơn", "Xã", "Dai Son"],
                        ["07666", "Dương Hưu", "Xã", "Duong Huu"],
                        ["07636", "Giáo Liêm", "Xã", "Giao Liem"],
                        ["07624", "Hữu Sản", "Xã", "Huu San"],
                        ["07654", "Lệ Viễn", "Xã", "Le Vien"],
                        ["07672", "Long Sơn", "Xã", "Long Son"],
                        ["07630", "Phúc Sơn", "Xã", "Phuc Son"],
                        ["07616", "Tây Yên Tử", "Thị trấn", "Tay Yen Tu"],
                        ["07678", "Thanh Luận", "Xã", "Thanh Luan"],
                        ["07663", "Tuấn Đạo", "Xã", "Tuan Dao"],
                        ["07621", "Vân Sơn", "Xã", "Van Son"],
                        ["07648", "Vĩnh An", "Xã", "Vinh An"],
                        ["07651", "Yên Định", "Xã", "Yen Dinh"]
                    ]
                ],
                [
                    "216", "Tân Yên", "Huyện", "Tan Yen",
                    [
                        ["07321", "An Dương", "Xã", "An Duong"],
                        ["07339", "Cao Thượng", "Thị trấn", "Cao Thuong"],
                        ["07336", "Cao Xá", "Xã", "Cao Xa"],
                        ["07312", "Đại Hóa", "Xã", "Dai Hoa"],
                        ["07330", "Hợp Đức", "Xã", "Hop Duc"],
                        ["07333", "Lam Cốt", "Xã", "Lam Cot"],
                        ["07303", "Lan Giới", "Xã", "Lan Gioi"],
                        ["07357", "Liên Chung", "Xã", "Lien Chung"],
                        ["07327", "Liên Sơn", "Xã", "Lien Son"],
                        ["07348", "Ngọc Châu", "Xã", "Ngoc Chau"],
                        ["07363", "Ngọc Lý", "Xã", "Ngoc Ly"],
                        ["07360", "Ngọc Thiện", "Xã", "Ngoc Thien"],
                        ["07351", "Ngọc Vân", "Xã", "Ngoc Van"],
                        ["07306", "Nhã Nam", "Thị trấn", "Nha Nam"],
                        ["07324", "Phúc Hòa", "Xã", "Phuc Hoa"],
                        ["07318", "Phúc Sơn", "Xã", "Phuc Son"],
                        ["07315", "Quang Tiến", "Xã", "Quang Tien"],
                        ["07366", "Quế Nham", "Xã", "Que Nham"],
                        ["07345", "Song Vân", "Xã", "Song Van"],
                        ["07309", "Tân Trung", "Xã", "Tan Trung"],
                        ["07354", "Việt Lập", "Xã", "Viet Lap"],
                        ["07342", "Việt Ngọc", "Xã", "Viet Ngoc"]
                    ]
                ],
                [
                    "222", "Việt Yên", "Huyện", "Viet Yen",
                    [
                        ["07777", "Bích Động", "Thị trấn", "Bich Dong"],
                        ["07783", "Hồng Thái", "Xã", "Hong Thai"],
                        ["07771", "Hương Mai", "Xã", "Huong Mai"],
                        ["07768", "Minh Đức", "Xã", "Minh Duc"],
                        ["07795", "Nếnh", "Thị trấn", "Nenh"],
                        ["07765", "Nghĩa Trung", "Xã", "Nghia Trung"],
                        ["07798", "Ninh Sơn", "Xã", "Ninh Son"],
                        ["07807", "Quang Châu", "Xã", "Quang Chau"],
                        ["07792", "Quảng Minh", "Xã", "Quang Minh"],
                        ["07789", "Tăng Tiến", "Xã", "Tang Tien"],
                        ["07759", "Thượng Lan", "Xã", "Thuong Lan"],
                        ["07786", "Tiên Sơn", "Xã", "Tien Son"],
                        ["07780", "Trung Sơn", "Xã", "Trung Son"],
                        ["07774", "Tự Lạn", "Xã", "Tu Lan"],
                        ["07804", "Vân Hà", "Xã", "Van Ha"],
                        ["07801", "Vân Trung", "Xã", "Van Trung"],
                        ["07762", "Việt Tiến", "Xã", "Viet Tien"]
                    ]
                ],
                [
                    "221", "Yên Dũng", "Huyện", "Yen Dung",
                    [
                        ["07738", "Cảnh Thụy", "Xã", "Canh Thuy"],
                        ["07750", "Đồng Phúc", "Xã", "Dong Phuc"],
                        ["07747", "Đồng Việt", "Xã", "Dong Viet"],
                        ["07735", "Đức Giang", "Xã", "Duc Giang"],
                        ["07690", "Hương Gián", "Xã", "Huong Gian"],
                        ["07723", "Lãng Sơn", "Xã", "Lang Son"],
                        ["07684", "Lão Hộ", "Xã", "Lao Ho"],
                        ["07681", "Nham Biền", "Thị trấn", "Nham Bien"],
                        ["07708", "Nội Hoàng", "Xã", "Noi Hoang"],
                        ["07702", "Quỳnh Sơn", "Xã", "Quynh Son"],
                        ["07682", "Tân An", "Thị trấn", "Tan An"],
                        ["07717", "Tân Liễu", "Xã", "Tan Lieu"],
                        ["07729", "Tiến Dũng", "Xã", "Tien Dung"],
                        ["07711", "Tiền Phong", "Xã", "Tien Phong"],
                        ["07720", "Trí Yên", "Xã", "Tri Yen"],
                        ["07741", "Tư Mại", "Xã", "Tu Mai"],
                        ["07714", "Xuân Phú", "Xã", "Xuan Phu"],
                        ["07726", "Yên Lư", "Xã", "Yen Lu"]
                    ]
                ],
                [
                    "215", "Yên Thế", "Huyện", "Yen The",
                    [
                        ["07285", "An Thượng", "Xã", "An Thuong"],
                        ["07294", "Bố Hạ", "Thị trấn", "Bo Ha"],
                        ["07246", "Canh Nậu", "Xã", "Canh Nau"],
                        ["07258", "Đồng Hưu", "Xã", "Dong Huu"],
                        ["07282", "Đồng Kỳ", "Xã", "Dong Ky"],
                        ["07270", "Đồng Lạc", "Xã", "Dong Lac"],
                        ["07273", "Đông Sơn", "Xã", "Dong Son"],
                        ["07260", "Đồng Tâm", "Xã", "Dong Tam"],
                        ["07243", "Đồng Tiến", "Xã", "Dong Tien"],
                        ["07255", "Đồng Vương", "Xã", "Dong Vuong"],
                        ["07267", "Hồng Kỳ", "Xã", "Hong Ky"],
                        ["07279", "Hương Vĩ", "Xã", "Huong Vi"],
                        ["07288", "Phồn Xương", "Thị trấn", "Phon Xuong"],
                        ["07261", "Tam Hiệp", "Xã", "Tam Hiep"],
                        ["07252", "Tam Tiến", "Xã", "Tam Tien"],
                        ["07276", "Tân Hiệp", "Xã", "Tan Hiep"],
                        ["07291", "Tân Sỏi", "Xã", "Tan Soi"],
                        ["07264", "Tiến Thắng", "Xã", "Tien Thang"],
                        ["07249", "Xuân Lương", "Xã", "Xuan Luong"]
                    ]
                ]
            ]
        ],
        [
            "06", "Bắc Kạn", "Tỉnh", "Bac Kan",
            [
                [
                    "061", "Ba Bể", "Huyện", "Ba Be",
                    [
                        ["01891", "Bành Trạch", "Xã", "Banh Trach"],
                        ["01900", "Cao Thượng", "Xã", "Cao Thuong"],
                        ["01888", "Chợ Rã", "Thị trấn", "Cho Ra"],
                        ["01921", "Chu Hương", "Xã", "Chu Huong"],
                        ["01915", "Địa Linh", "Xã", "Dia Linh"],
                        ["01933", "Đồng Phúc", "Xã", "Dong Phuc"],
                        ["01897", "Hà Hiệu", "Xã", "Ha Hieu"],
                        ["01930", "Hoàng Trĩ", "Xã", "Hoang Tri"],
                        ["01906", "Khang Ninh", "Xã", "Khang Ninh"],
                        ["01927", "Mỹ Phương", "Xã", "My Phuong"],
                        ["01909", "Nam Mẫu", "Xã", "Nam Mau"],
                        ["01894", "Phúc Lộc", "Xã", "Phuc Loc"],
                        ["01924", "Quảng Khê", "Xã", "Quang Khe"],
                        ["01912", "Thượng Giáo", "Xã", "Thuong Giao"],
                        ["01918", "Yến Dương", "Xã", "Yen Duong"]
                    ]
                ],
                [
                    "058", "Bắc Kạn", "Thành Phố", "Bac Kan",
                    [
                        ["01840", "Đức Xuân", "Phường", "Duc Xuan"],
                        ["01849", "Dương Quang", "Xã", "Duong Quang"],
                        ["01846", "Huyền Tụng", "Phường", "Huyen Tung"],
                        ["01834", "Nguyễn Thị Minh Khai", "Phường", "Nguyen Thi Minh Khai"],
                        ["01852", "Nông Thượng", "Xã", "Nong Thuong"],
                        ["01843", "Phùng Chí Kiên", "Phường", "Phung Chi Kien"],
                        ["01837", "Sông Cầu", "Phường", "Song Cau"],
                        ["01855", "Xuất Hóa", "Phường", "Xuat Hoa"]
                    ]
                ],
                [
                    "063", "Bạch Thông", "Huyện", "Bach Thong",
                    [
                        ["02008", "Cẩm Giàng", "Xã", "Cam Giang"],
                        ["02002", "Cao Sơn", "Xã", "Cao Son"],
                        ["01984", "Đôn Phong", "Xã", "Don Phong"],
                        ["02014", "Dương Phong", "Xã", "Duong Phong"],
                        ["01990", "Lục Bình", "Xã", "Luc Binh"],
                        ["02011", "Mỹ Thanh", "Xã", "My Thanh"],
                        ["01999", "Nguyên Phúc", "Xã", "Nguyen Phuc"],
                        ["01969", "Phủ Thông", "Thị trấn", "Phu Thong"],
                        ["02005", "Quân Hà", "Xã", "Quan Ha"],
                        ["02017", "Quang Thuận", "Xã", "Quang Thuan"],
                        ["01978", "Sĩ Bình", "Xã", "Si Binh"],
                        ["01993", "Tân Tú", "Xã", "Tan Tu"],
                        ["01975", "Vi Hương", "Xã", "Vi Huong"],
                        ["01981", "Vũ Muộn", "Xã", "Vu Muon"]
                    ]
                ],
                [
                    "064", "Chợ Đồn", "Huyện", "Cho Don",
                    [
                        ["02035", "Bản Thi", "Xã", "Ban Thi"],
                        ["02065", "Bằng Lãng", "Xã", "Bang Lang"],
                        ["02020", "Bằng Lũng", "Thị trấn", "Bang Lung"],
                        ["02041", "Bằng Phúc", "Xã", "Bang Phuc"],
                        ["02080", "Bình Trung", "Xã", "Binh Trung"],
                        ["02068", "Đại Sảo", "Xã", "Dai Sao"],
                        ["02029", "Đồng Lạc", "Xã", "Dong Lac"],
                        ["02059", "Đồng Thắng", "Xã", "Dong Thang"],
                        ["02062", "Lương Bằng", "Xã", "Luong Bang"],
                        ["02026", "Nam Cường", "Xã", "Nam Cuong"],
                        ["02071", "Nghĩa Tá", "Xã", "Nghia Ta"],
                        ["02053", "Ngọc Phái", "Xã", "Ngoc Phai"],
                        ["02050", "Phương Viên", "Xã", "Phuong Vien"],
                        ["02038", "Quảng Bạch", "Xã", "Quang Bach"],
                        ["02032", "Tân Lập", "Xã", "Tan Lap"],
                        ["02023", "Xuân Lạc", "Xã", "Xuan Lac"],
                        ["02077", "Yên Mỹ", "Xã", "Yen My"],
                        ["02083", "Yên Phong", "Xã", "Yen Phong"],
                        ["02044", "Yên Thịnh", "Xã", "Yen Thinh"],
                        ["02047", "Yên Thượng", "Xã", "Yen Thuong"]
                    ]
                ],
                [
                    "065", "Chợ Mới", "Huyện", "Cho Moi",
                    [
                        ["02125", "Bình Văn", "Xã", "Binh Van"],
                        ["02104", "Cao Kỳ", "Xã", "Cao Ky"],
                        ["02086", "Đồng Tâm", "Thị trấn", "Dong Tam"],
                        ["02098", "Hoà Mục", "Xã", "Hoa Muc"],
                        ["02095", "Mai Lạp", "Xã", "Mai Lap"],
                        ["02122", "Như Cố", "Xã", "Nhu Co"],
                        ["02107", "Nông Hạ", "Xã", "Nong Ha"],
                        ["02131", "Quảng Chu", "Xã", "Quang Chu"],
                        ["02089", "Tân Sơn", "Xã", "Tan Son"],
                        ["02101", "Thanh Mai", "Xã", "Thanh Mai"],
                        ["02113", "Thanh Thịnh", "Xã", "Thanh Thinh"],
                        ["02092", "Thanh Vận", "Xã", "Thanh Van"],
                        ["02110", "Yên Cư", "Xã", "Yen Cu"],
                        ["02116", "Yên Hân", "Xã", "Yen Han"]
                    ]
                ],
                [
                    "066", "Na Rì", "Huyện", "Na Ri",
                    [
                        ["02173", "Côn Minh", "Xã", "Con Minh"],
                        ["02176", "Cư Lễ", "Xã", "Cu Le"],
                        ["02152", "Cường Lợi", "Xã", "Cuong Loi"],
                        ["02194", "Đổng Xá", "Xã", "Dong Xa"],
                        ["02188", "Dương Sơn", "Xã", "Duong Son"],
                        ["02146", "Kim Hỷ", "Xã", "Kim Hy"],
                        ["02158", "Kim Lư", "Xã", "Kim Lu"],
                        ["02197", "Liêm Thuỷ", "Xã", "Liem Thuy"],
                        ["02143", "Lương Thượng", "Xã", "Luong Thuong"],
                        ["02185", "Quang Phong", "Xã", "Quang Phong"],
                        ["02161", "Sơn Thành", "Xã", "Son Thanh"],
                        ["02179", "Trần Phú", "Xã", "Tran Phu"],
                        ["02140", "Văn Lang", "Xã", "Van Lang"],
                        ["02170", "Văn Minh", "Xã", "Van Minh"],
                        ["02137", "Văn Vũ", "Xã", "Van Vu"],
                        ["02191", "Xuân Dương", "Xã", "Xuan Duong"],
                        ["02155", "Yến Lạc", "Thị trấn", "Yen Lac"]
                    ]
                ],
                [
                    "062", "Ngân Sơn", "Huyện", "Ngan Son",
                    [
                        ["01942", "Bằng Vân", "Xã", "Bang Van"],
                        ["01945", "Cốc Đán", "Xã", "Coc Dan"],
                        ["01951", "Đức Vân", "Xã", "Duc Van"],
                        ["01960", "Hiệp Lực", "Xã", "Hiep Luc"],
                        ["01936", "Nà Phặc", "Thị trấn", "Na Phac"],
                        ["01963", "Thuần Mang", "Xã", "Thuan Mang"],
                        ["01939", "Thượng Ân", "Xã", "Thuong An"],
                        ["01957", "Thượng Quan", "Xã", "Thuong Quan"],
                        ["01948", "Trung Hoà", "Xã", "Trung Hoa"],
                        ["01954", "Vân Tùng", "Xã", "Van Tung"]
                    ]
                ],
                [
                    "060", "Pác Nặm", "Huyện", "Pac Nam",
                    [
                        ["01876", "An Thắng", "Xã", "An Thang"],
                        ["01858", "Bằng Thành", "Xã", "Bang Thanh"],
                        ["01864", "Bộc Bố", "Xã", "Boc Bo"],
                        ["01885", "Cao Tân", "Xã", "Cao Tan"],
                        ["01879", "Cổ Linh", "Xã", "Co Linh"],
                        ["01867", "Công Bằng", "Xã", "Cong Bang"],
                        ["01870", "Giáo Hiệu", "Xã", "Giao Hieu"],
                        ["01882", "Nghiên Loan", "Xã", "Nghien Loan"],
                        ["01861", "Nhạn Môn", "Xã", "Nhan Mon"],
                        ["01873", "Xuân La", "Xã", "Xuan La"]
                    ]
                ]
            ]
        ],
        [
            "95", "Bạc Liêu", "Tỉnh", "Bac Lieu",
            [
                [
                    "954", "Bạc Liêu", "Thành phố", "Bac Lieu",
                    [
                        ["31825", "1", "Phường", "1"],
                        ["31813", "2", "Phường", "2"],
                        ["31816", "3", "Phường", "3"],
                        ["31819", "5", "Phường", "5"],
                        ["31822", "7", "Phường", "7"],
                        ["31828", "8", "Phường", "8"],
                        ["31840", "Hiệp Thành", "Xã", "Hiep Thanh"],
                        ["31831", "Nhà Mát", "Phường", "Nha Mat"],
                        ["31834", "Vĩnh Trạch", "Xã", "Vinh Trach"],
                        ["31837", "Vĩnh Trạch Đông", "Xã", "Vinh Trach Dong"]
                    ]
                ],
                [
                    "960", "Đông Hải", "Huyện", "Dong Hai",
                    [
                        ["31990", "An Phúc", "Xã", "An Phuc"],
                        ["31987", "An Trạch", "Xã", "An Trach"],
                        ["31988", "An Trạch A", "Xã", "An Trach A"],
                        ["31985", "Điền Hải", "Xã", "Dien Hai"],
                        ["31993", "Định Thành", "Xã", "Dinh Thanh"],
                        ["31996", "Định Thành A", "Xã", "Dinh Thanh A"],
                        ["31972", "Gành Hào", "Thị trấn", "Ganh Hao"],
                        ["31981", "Long Điền", "Xã", "Long Dien"],
                        ["31975", "Long Điền Đông", "Xã", "Long Dien Dong"],
                        ["31978", "Long Điền Đông A", "Xã", "Long Dien Dong A"],
                        ["31984", "Long Điền Tây", "Xã", "Long Dien Tay"]
                    ]
                ],
                [
                    "959", "Giá Rai", "Thị xã", "Gia Rai",
                    [
                        ["31942", "1", "Phường", "1"],
                        ["31945", "Hộ Phòng", "Phường", "Ho Phong"],
                        ["31951", "Láng Tròn", "Phường", "Lang Tron"],
                        ["31954", "Phong Tân", "Xã", "Phong Tan"],
                        ["31960", "Phong Thạnh", "Xã", "Phong Thanh"],
                        ["31963", "Phong Thạnh A", "Xã", "Phong Thanh A"],
                        ["31948", "Phong Thạnh Đông", "Xã", "Phong Thanh Dong"],
                        ["31966", "Phong Thạnh Tây", "Xã", "Phong Thanh Tay"],
                        ["31957", "Tân Phong", "Xã", "Tan Phong"],
                        ["31969", "Tân Thạnh", "Xã", "Tan Thanh"]
                    ]
                ],
                [
                    "961", "Hoà Bình", "Huyện", "Hoa Binh",
                    [
                        ["31891", "Hòa Bình", "Thị trấn", "Hoa Binh"],
                        ["31915", "Minh Diệu", "Xã", "Minh Dieu"],
                        ["31918", "Vĩnh Bình", "Xã", "Vinh Binh"],
                        ["31927", "Vĩnh Hậu", "Xã", "Vinh Hau"],
                        ["31930", "Vĩnh Hậu A", "Xã", "Vinh Hau A"],
                        ["31933", "Vĩnh Mỹ A", "Xã", "Vinh My A"],
                        ["31924", "Vĩnh Mỹ B", "Xã", "Vinh My B"],
                        ["31936", "Vĩnh Thịnh", "Xã", "Vinh Thinh"]
                    ]
                ],
                [
                    "956", "Hồng Dân", "Huyện", "Hong Dan",
                    [
                        ["31855", "Lộc Ninh", "Xã", "Loc Ninh"],
                        ["31843", "Ngan Dừa", "Thị trấn", "Ngan Dua"],
                        ["31852", "Ninh Hòa", "Xã", "Ninh Hoa"],
                        ["31846", "Ninh Quới", "Xã", "Ninh Quoi"],
                        ["31849", "Ninh Quới A", "Xã", "Ninh Quoi A"],
                        ["31864", "Ninh Thạnh Lợi", "Xã", "Ninh Thanh Loi"],
                        ["31863", "Ninh Thạnh Lợi A", "Xã", "Ninh Thanh Loi A"],
                        ["31858", "Vĩnh Lộc", "Xã", "Vinh Loc"],
                        ["31861", "Vĩnh Lộc A", "Xã", "Vinh Loc A"]
                    ]
                ],
                [
                    "957", "Phước Long", "Huyện", "Phuoc Long",
                    [
                        ["31879", "Hưng Phú", "Xã", "Hung Phu"],
                        ["31885", "Phong Thạnh Tây A", "Xã", "Phong Thanh Tay A"],
                        ["31888", "Phong Thạnh Tây B", "Xã", "Phong Thanh Tay B"],
                        ["31867", "Phước Long", "Thị trấn", "Phuoc Long"],
                        ["31876", "Phước Long", "Xã", "Phuoc Long"],
                        ["31870", "Vĩnh Phú Đông", "Xã", "Vinh Phu Dong"],
                        ["31873", "Vĩnh Phú Tây", "Xã", "Vinh Phu Tay"],
                        ["31882", "Vĩnh Thanh", "Xã", "Vinh Thanh"]
                    ]
                ],
                [
                    "958", "Vĩnh Lợi", "Huyện", "Vinh Loi",
                    [
                        ["31900", "Châu Hưng", "Thị trấn", "Chau Hung"],
                        ["31903", "Châu Hưng A", "Xã", "Chau Hung A"],
                        ["31912", "Châu Thới", "Xã", "Chau Thoi"],
                        ["31909", "Hưng Hội", "Xã", "Hung Hoi"],
                        ["31906", "Hưng Thành", "Xã", "Hung Thanh"],
                        ["31921", "Long Thạnh", "Xã", "Long Thanh"],
                        ["31894", "Vĩnh Hưng", "Xã", "Vinh Hung"],
                        ["31897", "Vĩnh Hưng A", "Xã", "Vinh Hung A"]
                    ]
                ]
            ]
        ],
        [
            "27", "Bắc Ninh", "Tỉnh", "Bac Ninh",
            [
                [
                    "256", "Bắc Ninh", "Thành phố", "Bac Ninh",
                    [
                        ["09181", "Đại Phúc", "Phường", "Dai Phuc"],
                        ["09166", "Đáp Cầu", "Phường", "Dap Cau"],
                        ["09331", "Hạp Lĩnh", "Phường", "Hap Linh"],
                        ["09214", "Hòa Long", "Phường", "Hoa Long"],
                        ["09325", "Khắc Niệm", "Phường", "Khac Niem"],
                        ["09235", "Khúc Xuyên", "Phường", "Khuc Xuyen"],
                        ["09256", "Kim Chân", "Phường", "Kim Chan"],
                        ["09172", "Kinh Bắc", "Phường", "Kinh Bac"],
                        ["09286", "Nam Sơn", "Phường", "Nam Son"],
                        ["09184", "Ninh Xá", "Phường", "Ninh Xa"],
                        ["09244", "Phong Khê", "Phường", "Phong Khe"],
                        ["09187", "Suối Hoa", "Phường", "Suoi Hoa"],
                        ["09169", "Thị Cầu", "Phường", "Thi Cau"],
                        ["09178", "Tiền An", "Phường", "Tien An"],
                        ["09226", "Vạn An", "Phường", "Van An"],
                        ["09271", "Vân Dương", "Phường", "Van Duong"],
                        ["09175", "Vệ An", "Phường", "Ve An"],
                        ["09190", "Võ Cường", "Phường", "Vo Cuong"],
                        ["09163", "Vũ Ninh", "Phường", "Vu Ninh"]
                    ]
                ],
                [
                    "263", "Gia Bình", "Huyện", "Gia Binh",
                    [
                        ["09475", "Bình Dương", "Xã", "Binh Duong"],
                        ["09466", "Cao Đức", "Xã", "Cao Duc"],
                        ["09490", "Đại Bái", "Xã", "Dai Bai"],
                        ["09469", "Đại Lai", "Xã", "Dai Lai"],
                        ["09487", "Đông Cứu", "Xã", "Dong Cuu"],
                        ["09454", "Gia Bình", "Thị trấn", "Gia Binh"],
                        ["09463", "Giang Sơn", "Xã", "Giang Son"],
                        ["09478", "Lãng Ngâm", "Xã", "Lang Ngam"],
                        ["09481", "Nhân Thắng", "Xã", "Nhan Thang"],
                        ["09493", "Quỳnh Phú", "Xã", "Quynh Phu"],
                        ["09472", "Song Giang", "Xã", "Song Giang"],
                        ["09460", "Thái Bảo", "Xã", "Thai Bao"],
                        ["09457", "Vạn Ninh", "Xã", "Van Ninh"],
                        ["09484", "Xuân Lai", "Xã", "Xuan Lai"]
                    ]
                ],
                [
                    "264", "Lương Tài", "Huyện", "Luong Tai",
                    [
                        ["09499", "An Thịnh", "Xã", "An Thinh"],
                        ["09529", "Bình Định", "Xã", "Binh Dinh"],
                        ["09520", "Lai Hạ", "Xã", "Lai Ha"],
                        ["09535", "Lâm Thao", "Xã", "Lam Thao"],
                        ["09526", "Minh Tân", "Xã", "Minh Tan"],
                        ["09508", "Mỹ Hương", "Xã", "My Huong"],
                        ["09505", "Phú Hòa", "Xã", "Phu Hoa"],
                        ["09532", "Phú Lương", "Xã", "Phu Luong"],
                        ["09514", "Quảng Phú", "Xã", "Quang Phu"],
                        ["09511", "Tân Lãng", "Xã", "Tan Lang"],
                        ["09496", "Thứa", "Thị trấn", "Thua"],
                        ["09523", "Trung Chính", "Xã", "Trung Chinh"],
                        ["09502", "Trung Kênh", "Xã", "Trung Kenh"],
                        ["09517", "Trừng Xá", "Xã", "Trung Xa"]
                    ]
                ],
                [
                    "259", "Quế Võ", "Huyện", "Que Vo",
                    [
                        ["09262", "Bằng An", "Xã", "Bang An"],
                        ["09295", "Bồng Lai", "Xã", "Bong Lai"],
                        ["09298", "Cách Bi", "Xã", "Cach Bi"],
                        ["09292", "Châu Phong", "Xã", "Chau Phong"],
                        ["09313", "Chi Lăng", "Xã", "Chi Lang"],
                        ["09253", "Đại Xuân", "Xã", "Dai Xuan"],
                        ["09301", "Đào Viên", "Xã", "Dao Vien"],
                        ["09310", "Đức Long", "Xã", "Duc Long"],
                        ["09316", "Hán Quảng", "Xã", "Han Quang"],
                        ["09307", "Mộ Đạo", "Xã", "Mo Dao"],
                        ["09289", "Ngọc Xá", "Xã", "Ngoc Xa"],
                        ["09259", "Nhân Hòa", "Xã", "Nhan Hoa"],
                        ["09247", "Phố Mới", "Thị trấn", "Pho Moi"],
                        ["09277", "Phù Lãng", "Xã", "Phu Lang"],
                        ["09274", "Phù Lương", "Xã", "Phu Luong"],
                        ["09265", "Phương Liễu", "Xã", "Phuong Lieu"],
                        ["09280", "Phượng Mao", "Xã", "Phuong Mao"],
                        ["09268", "Quế Tân", "Xã", "Que Tan"],
                        ["09283", "Việt Hùng", "Xã", "Viet Hung"],
                        ["09250", "Việt Thống", "Xã", "Viet Thong"],
                        ["09304", "Yên Giả", "Xã", "Yen Gia"]
                    ]
                ],
                [
                    "262", "Thuận Thành", "Huyện", "Thuan Thanh",
                    [
                        ["09418", "An Bình", "Xã", "An Binh"],
                        ["09406", "Đại Đồng Thành", "Xã", "Dai Dong Thanh"],
                        ["09415", "Đình Tổ", "Xã", "Dinh To"],
                        ["09424", "Gia Đông", "Xã", "Gia Dong"],
                        ["09436", "Hà Mãn", "Xã", "Ha Man"],
                        ["09400", "Hồ", "Thị trấn", "Ho"],
                        ["09403", "Hoài Thượng", "Xã", "Hoai Thuong"],
                        ["09409", "Mão Điền", "Xã", "Mao Dien"],
                        ["09448", "Nghĩa Đạo", "Xã", "Nghia Dao"],
                        ["09439", "Ngũ Thái", "Xã", "Ngu Thai"],
                        ["09442", "Nguyệt Đức", "Xã", "Nguyet Duc"],
                        ["09445", "Ninh Xá", "Xã", "Ninh Xa"],
                        ["09412", "Song Hồ", "Xã", "Song Ho"],
                        ["09451", "Song Liễu", "Xã", "Song Lieu"],
                        ["09427", "Thanh Khương", "Xã", "Thanh Khuong"],
                        ["09430", "Trạm Lộ", "Xã", "Tram Lo"],
                        ["09421", "Trí Quả", "Xã", "Tri Qua"],
                        ["09433", "Xuân Lâm", "Xã", "Xuan Lam"]
                    ]
                ],
                [
                    "260", "Tiên Du", "Huyện", "Tien Du",
                    [
                        ["09364", "Cảnh Hưng", "Xã", "Canh Hung"],
                        ["09355", "Đại Đồng", "Xã", "Dai Dong"],
                        ["09337", "Hiên Vân", "Xã", "Hien Van"],
                        ["09340", "Hoàn Sơn", "Xã", "Hoan Son"],
                        ["09343", "Lạc Vệ", "Xã", "Lac Ve"],
                        ["09334", "Liên Bão", "Xã", "Lien Bao"],
                        ["09319", "Lim", "Thị trấn", "Lim"],
                        ["09361", "Minh Đạo", "Xã", "Minh Dao"],
                        ["09328", "Nội Duệ", "Xã", "Noi Due"],
                        ["09349", "Phật Tích", "Xã", "Phat Tich"],
                        ["09322", "Phú Lâm", "Xã", "Phu Lam"],
                        ["09352", "Tân Chi", "Xã", "Tan Chi"],
                        ["09358", "Tri Phương", "Xã", "Tri Phuong"],
                        ["09346", "Việt Đoàn", "Xã", "Viet Doan"]
                    ]
                ],
                [
                    "261", "Từ Sơn", "Thành phố", "Tu Son",
                    [
                        ["09388", "Châu Khê", "Phường", "Chau Khe"],
                        ["09394", "Đình Bảng", "Phường", "Dinh Bang"],
                        ["09382", "Đồng Kỵ", "Phường", "Dong Ky"],
                        ["09367", "Đông Ngàn", "Phường", "Dong Ngan"],
                        ["09385", "Đồng Nguyên", "Phường", "Dong Nguyen"],
                        ["09373", "Hương Mạc", "Phường", "Huong Mac"],
                        ["09397", "Phù Chẩn", "Phường", "Phu Chan"],
                        ["09379", "Phù Khê", "Phường", "Phu Khe"],
                        ["09370", "Tam Sơn", "Phường", "Tam Son"],
                        ["09391", "Tân Hồng", "Phường", "Tan Hong"],
                        ["09383", "Trang Hạ", "Phường", "Trang Ha"],
                        ["09376", "Tương Giang", "Phường", "Tuong Giang"]
                    ]
                ],
                [
                    "258", "Yên Phong", "Huyện", "Yen Phong",
                    [
                        ["09193", "Chờ", "Thị trấn", "Cho"],
                        ["09229", "Đông Phong", "Xã", "Dong Phong"],
                        ["09241", "Đông Thọ", "Xã", "Dong Tho"],
                        ["09217", "Đông Tiến", "Xã", "Dong Tien"],
                        ["09196", "Dũng Liệt", "Xã", "Dung Liet"],
                        ["09211", "Hòa Tiến", "Xã", "Hoa Tien"],
                        ["09232", "Long Châu", "Xã", "Long Chau"],
                        ["09199", "Tam Đa", "Xã", "Tam Da"],
                        ["09202", "Tam Giang", "Xã", "Tam Giang"],
                        ["09208", "Thụy Hòa", "Xã", "Thuy Hoa"],
                        ["09223", "Trung Nghĩa", "Xã", "Trung Nghia"],
                        ["09238", "Văn Môn", "Xã", "Van Mon"],
                        ["09220", "Yên Phụ", "Xã", "Yen Phu"],
                        ["09205", "Yên Trung", "Xã", "Yen Trung"]
                    ]
                ]
            ]
        ],
        [
            "83", "Bến Tre", "Tỉnh", "Ben Tre",
            [
                [
                    "836", "Ba Tri", "Huyện", "Ba Tri",
                    [
                        ["29149", "An Bình Tây", "Xã", "An Binh Tay"],
                        ["29173", "An Đức", "Xã", "An Duc"],
                        ["29161", "An Hiệp", "Xã", "An Hiep"],
                        ["29176", "An Hòa Tây", "Xã", "An Hoa Tay"],
                        ["29158", "An Ngãi Tây", "Xã", "An Ngai Tay"],
                        ["29143", "An Ngãi Trung", "Xã", "An Ngai Trung"],
                        ["29128", "An Phú Trung", "Xã", "An Phu Trung"],
                        ["29179", "An Thủy", "Xã", "An Thuy"],
                        ["29110", "Ba Tri", "Thị trấn", "Ba Tri"],
                        ["29125", "Bảo Thạnh", "Xã", "Bao Thanh"],
                        ["29152", "Bảo Thuận", "Xã", "Bao Thuan"],
                        ["29122", "Mỹ Chánh", "Xã", "My Chanh"],
                        ["29116", "Mỹ Hòa", "Xã", "My Hoa"],
                        ["29134", "Mỹ Nhơn", "Xã", "My Nhon"],
                        ["29131", "Mỹ Thạnh", "Xã", "My Thanh"],
                        ["29146", "Phú Lễ", "Xã", "Phu Le"],
                        ["29137", "Phước Ngãi", "Xã", "Phuoc Ngai"],
                        ["29155", "Tân Hưng", "Xã", "Tan Hung"],
                        ["29113", "Tân Mỹ", "Xã", "Tan My"],
                        ["29167", "Tân Thủy", "Xã", "Tan Thuy"],
                        ["29119", "Tân Xuân", "Xã", "Tan Xuan"],
                        ["29170", "Vĩnh An", "Xã", "Vinh An"],
                        ["29164", "Vĩnh Hòa", "Xã", "Vinh Hoa"]
                    ]
                ],
                [
                    "829", "Bến Tre", "Thành phố", "Ben Tre",
                    [
                        ["28765", "4", "Phường", "4"],
                        ["28768", "5", "Phường", "5"],
                        ["28762", "6", "Phường", "6"],
                        ["28780", "7", "Phường", "7"],
                        ["28759", "8", "Phường", "8"],
                        ["28777", "An Hội", "Phường", "An Hoi"],
                        ["28789", "Bình Phú", "Xã", "Binh Phu"],
                        ["28792", "Mỹ Thạnh An", "Xã", "My Thanh An"],
                        ["28795", "Nhơn Thạnh", "Xã", "Nhon Thanh"],
                        ["28786", "Phú Hưng", "Xã", "Phu Hung"],
                        ["28756", "Phú Khương", "Phường", "Phu Khuong"],
                        ["28798", "Phú Nhuận", "Xã", "Phu Nhuan"],
                        ["28757", "Phú Tân", "Phường", "Phu Tan"],
                        ["28783", "Sơn Đông", "Xã", "Son Dong"]
                    ]
                ],
                [
                    "835", "Bình Đại", "Huyện", "Binh Dai",
                    [
                        ["29050", "Bình Đại", "Thị trấn", "Binh Dai"],
                        ["29092", "Bình Thắng", "Xã", "Binh Thang"],
                        ["29086", "Bình Thới", "Xã", "Binh Thoi"],
                        ["29071", "Châu Hưng", "Xã", "Chau Hung"],
                        ["29098", "Đại Hòa Lộc", "Xã", "Dai Hoa Loc"],
                        ["29080", "Định Trung", "Xã", "Dinh Trung"],
                        ["29077", "Lộc Thuận", "Xã", "Loc Thuan"],
                        ["29056", "Long Định", "Xã", "Long Dinh"],
                        ["29059", "Long Hòa", "Xã", "Long Hoa"],
                        ["29089", "Phú Long", "Xã", "Phu Long"],
                        ["29062", "Phú Thuận", "Xã", "Phu Thuan"],
                        ["29074", "Phú Vang", "Xã", "Phu Vang"],
                        ["29053", "Tam Hiệp", "Xã", "Tam Hiep"],
                        ["29104", "Thạnh Phước", "Xã", "Thanh Phuoc"],
                        ["29095", "Thạnh Trị", "Xã", "Thanh Tri"],
                        ["29083", "Thới Lai", "Xã", "Thoi Lai"],
                        ["29107", "Thới Thuận", "Xã", "Thoi Thuan"],
                        ["29101", "Thừa Đức", "Xã", "Thua Duc"],
                        ["29068", "Vang Quới Đông", "Xã", "Vang Quoi Dong"],
                        ["29065", "Vang Quới Tây", "Xã", "Vang Quoi Tay"]
                    ]
                ],
                [
                    "831", "Châu Thành", "Huyện", "Chau Thanh",
                    [
                        ["28855", "An Hiệp", "Xã", "An Hiep"],
                        ["28849", "An Hóa", "Xã", "An Hoa"],
                        ["28810", "An Khánh", "Xã", "An Khanh"],
                        ["28828", "An Phước", "Xã", "An Phuoc"],
                        ["28801", "Châu Thành", "Thị trấn", "Chau Thanh"],
                        ["28813", "Giao Long", "Xã", "Giao Long"],
                        ["28858", "Hữu Định", "Xã", "Huu Dinh"],
                        ["28825", "Phú An Hòa", "Xã", "Phu An Hoa"],
                        ["28822", "Phú Đức", "Xã", "Phu Duc"],
                        ["28819", "Phú Túc", "Xã", "Phu Tuc"],
                        ["28846", "Phước Thạnh", "Xã", "Phuoc Thanh"],
                        ["28807", "Qưới Sơn", "Xã", "Quoi Son"],
                        ["28843", "Quới Thành", "Xã", "Quoi Thanh"],
                        ["28864", "Sơn Hòa", "Xã", "Son Hoa"],
                        ["28831", "Tam Phước", "Xã", "Tam Phuoc"],
                        ["28840", "Tân Phú", "Xã", "Tan Phu"],
                        ["28804", "Tân Thạch", "Xã", "Tan Thach"],
                        ["28834", "Thành Triệu", "Xã", "Thanh Trieu"],
                        ["28852", "Tiên Long", "Xã", "Tien Long"],
                        ["28861", "Tiên Thủy", "Xã", "Tien Thuy"],
                        ["28837", "Tường Đa", "Xã", "Tuong Da"]
                    ]
                ],
                [
                    "832", "Chợ Lách", "Huyện", "Cho Lach",
                    [
                        ["28870", "Chợ Lách", "Thị trấn", "Cho Lach"],
                        ["28882", "Hòa Nghĩa", "Xã", "Hoa Nghia"],
                        ["28900", "Hưng Khánh Trung B", "Xã", "Hung Khanh Trung B"],
                        ["28885", "Long Thới", "Xã", "Long Thoi"],
                        ["28873", "Phú Phụng", "Xã", "Phu Phung"],
                        ["28888", "Phú Sơn", "Xã", "Phu Son"],
                        ["28876", "Sơn Định", "Xã", "Son Dinh"],
                        ["28891", "Tân Thiềng", "Xã", "Tan Thieng"],
                        ["28879", "Vĩnh Bình", "Xã", "Vinh Binh"],
                        ["28897", "Vĩnh Hòa", "Xã", "Vinh Hoa"],
                        ["28894", "Vĩnh Thành", "Xã", "Vinh Thanh"]
                    ]
                ],
                [
                    "834", "Giồng Trôm", "Huyện", "Giong Trom",
                    [
                        ["29017", "Bình Hoà", "Xã", "Binh Hoa"],
                        ["29032", "Bình Thành", "Xã", "Binh Thanh"],
                        ["29008", "Châu Bình", "Xã", "Chau Binh"],
                        ["28996", "Châu Hòa", "Xã", "Chau Hoa"],
                        ["28984", "Giồng Trôm", "Thị trấn", "Giong Trom"],
                        ["29047", "Hưng Lễ", "Xã", "Hung Le"],
                        ["29044", "Hưng Nhượng", "Xã", "Hung Nhuong"],
                        ["29023", "Hưng Phong", "Xã", "Hung Phong"],
                        ["29026", "Long Mỹ", "Xã", "Long My"],
                        ["28999", "Lương Hòa", "Xã", "Luong Hoa"],
                        ["29005", "Lương Phú", "Xã", "Luong Phu"],
                        ["29002", "Lương Quới", "Xã", "Luong Quoi"],
                        ["28993", "Mỹ Thạnh", "Xã", "My Thanh"],
                        ["28987", "Phong Nẫm", "Xã", "Phong Nam"],
                        ["29020", "Phước Long", "Xã", "Phuoc Long"],
                        ["29014", "Sơn Phú", "Xã", "Son Phu"],
                        ["29029", "Tân Hào", "Xã", "Tan Hao"],
                        ["29038", "Tân Lợi Thạnh", "Xã", "Tan Loi Thanh"],
                        ["29035", "Tân Thanh", "Xã", "Tan Thanh"],
                        ["29041", "Thạnh Phú Đông", "Xã", "Thanh Phu Dong"],
                        ["29011", "Thuận Điền", "Xã", "Thuan Dien"]
                    ]
                ],
                [
                    "838", "Mỏ Cày Bắc", "Huyện", "Mo Cay Bac",
                    [
                        ["28924", "Hòa Lộc", "Xã", "Hoa Loc"],
                        ["28901", "Hưng Khánh Trung A", "Xã", "Hung Khanh Trung A"],
                        ["28948", "Khánh Thạnh Tân", "Xã", "Khanh Thanh Tan"],
                        ["28936", "Nhuận Phú Tân", "Xã", "Nhuan Phu Tan"],
                        ["28889", "Phú Mỹ", "Xã", "Phu My"],
                        ["28915", "Phước Mỹ Trung", "Xã", "Phuoc My Trung"],
                        ["28933", "Tân Bình", "Xã", "Tan Binh"],
                        ["28912", "Tân Phú Tây", "Xã", "Tan Phu Tay"],
                        ["28918", "Tân Thành Bình", "Xã", "Tan Thanh Binh"],
                        ["28927", "Tân Thanh Tây", "Xã", "Tan Thanh Tay"],
                        ["28921", "Thành An", "Xã", "Thanh An"],
                        ["28909", "Thạnh Ngãi", "Xã", "Thanh Ngai"],
                        ["28906", "Thanh Tân", "Xã", "Thanh Tan"]
                    ]
                ],
                [
                    "833", "Mỏ Cày Nam", "Huyện", "Mo Cay Nam",
                    [
                        ["28957", "An Định", "Xã", "An Dinh"],
                        ["28951", "An Thạnh", "Xã", "An Thanh"],
                        ["28966", "An Thới", "Xã", "An Thoi"],
                        ["28945", "Bình Khánh ", "Xã", "Binh Khanh "],
                        ["28978", "Cẩm Sơn", "Xã", "Cam Son"],
                        ["28939", "Đa Phước Hội", "Xã", "Da Phuoc Hoi"],
                        ["28930", "Định Thủy", "Xã", "Dinh Thuy"],
                        ["28981", "Hương Mỹ", "Xã", "Huong My"],
                        ["28972", "Minh Đức", "Xã", "Minh Duc"],
                        ["28903", "Mỏ Cày", "Thị trấn", "Mo Cay"],
                        ["28975", "Ngãi Đăng", "Xã", "Ngai Dang"],
                        ["28942", "Phước Hiệp", "Xã", "Phuoc Hiep"],
                        ["28940", "Tân Hội", "Xã", "Tan Hoi"],
                        ["28963", "Tân Trung", "Xã", "Tan Trung"],
                        ["28969", "Thành Thới A", "Xã", "Thanh Thoi A"],
                        ["28960", "Thành Thới B", "Xã", "Thanh Thoi B"]
                    ]
                ],
                [
                    "837", "Thạnh Phú", "Huyện", "Thanh Phu",
                    [
                        ["29209", "An Điền", "Xã", "An Dien"],
                        ["29224", "An Nhơn", "Xã", "An Nhon"],
                        ["29218", "An Quy", "Xã", "An Quy"],
                        ["29200", "An Thạnh", "Xã", "An Thanh"],
                        ["29215", "An Thuận", "Xã", "An Thuan"],
                        ["29212", "Bình Thạnh", "Xã", "Binh Thanh"],
                        ["29188", "Đại Điền", "Xã", "Dai Dien"],
                        ["29227", "Giao Thạnh", "Xã", "Giao Thanh"],
                        ["29206", "Hòa Lợi", "Xã", "Hoa Loi"],
                        ["29233", "Mỹ An", "Xã", "My An"],
                        ["29197", "Mỹ Hưng", "Xã", "My Hung"],
                        ["29185", "Phú Khánh", "Xã", "Phu Khanh"],
                        ["29191", "Quới Điền", "Xã", "Quoi Dien"],
                        ["29194", "Tân Phong", "Xã", "Tan Phong"],
                        ["29221", "Thạnh Hải", "Xã", "Thanh Hai"],
                        ["29230", "Thạnh Phong", "Xã", "Thanh Phong"],
                        ["29182", "Thạnh Phú", "Thị trấn", "Thanh Phu"],
                        ["29203", "Thới Thạnh", "Xã", "Thoi Thanh"]
                    ]
                ]
            ]
        ],
        [
            "52", "Bình Định", "Tỉnh", "Binh Dinh",
            [
                [
                    "542", "An Lão", "Huyện", "An Lao",
                    [
                        ["21616", "An Dũng", "Xã", "An Dung"],
                        ["21628", "An Hòa", "Xã", "An Hoa"],
                        ["21610", "An Hưng", "Xã", "An Hung"],
                        ["21609", "An Lão", "Thị trấn", "An Lao"],
                        ["21634", "An Nghĩa", "Xã", "An Nghia"],
                        ["21631", "An Quang", "Xã", "An Quang"],
                        ["21625", "An Tân", "Xã", "An Tan"],
                        ["21622", "An Toàn", "Xã", "An Toan"],
                        ["21613", "An Trung", "Xã", "An Trung"],
                        ["21619", "An Vinh", "Xã", "An Vinh"]
                    ]
                ],
                [
                    "549", "An Nhơn", "Thị xã", "An Nhon",
                    [
                        ["21907", "Bình Định", "Phường", "Binh Dinh"],
                        ["21910", "Đập Đá", "Phường", "Dap Da"],
                        ["21928", "Nhơn An", "Xã", "Nhon An"],
                        ["21919", "Nhơn Hạnh", "Xã", "Nhon Hanh"],
                        ["21922", "Nhơn Hậu", "Xã", "Nhon Hau"],
                        ["21943", "Nhơn Hoà", "Phường", "Nhon Hoa"],
                        ["21934", "Nhơn Hưng", "Phường", "Nhon Hung"],
                        ["21937", "Nhơn Khánh", "Xã", "Nhon Khanh"],
                        ["21940", "Nhơn Lộc", "Xã", "Nhon Loc"],
                        ["21913", "Nhơn Mỹ", "Xã", "Nhon My"],
                        ["21925", "Nhơn Phong", "Xã", "Nhon Phong"],
                        ["21931", "Nhơn Phúc", "Xã", "Nhon Phuc"],
                        ["21946", "Nhơn Tân", "Xã", "Nhon Tan"],
                        ["21916", "Nhơn Thành", "Phường", "Nhon Thanh"],
                        ["21949", "Nhơn Thọ", "Xã", "Nhon Tho"]
                    ]
                ],
                [
                    "544", "Hoài Ân", "Huyện", "Hoai An",
                    [
                        ["21712", "Ân Đức", "Xã", "An Duc"],
                        ["21691", "Ân Hảo Đông", "Xã", "An Hao Dong"],
                        ["21690", "Ân Hảo Tây", "Xã", "An Hao Tay"],
                        ["21715", "Ân Hữu", "Xã", "An Huu"],
                        ["21697", "Ân Mỹ", "Xã", "An My"],
                        ["21727", "Ân Nghĩa", "Xã", "An Nghia"],
                        ["21709", "Ân Phong", "Xã", "An Phong"],
                        ["21694", "Ân Sơn", "Xã", "An Son"],
                        ["21706", "Ân Thạnh", "Xã", "An Thanh"],
                        ["21703", "Ân Tín", "Xã", "An Tin"],
                        ["21724", "Ân Tường Đông", "Xã", "An Tuong Dong"],
                        ["21721", "Ân Tường Tây", "Xã", "An Tuong Tay"],
                        ["21718", "Bok Tới", "Xã", "Bok Toi"],
                        ["21700", "Đak Mang", "Xã", "Dak Mang"],
                        ["21688", "Tăng Bạt Hổ", "Thị trấn", "Tang Bat Ho"]
                    ]
                ],
                [
                    "543", "Hoài Nhơn", "Thị xã", "Hoai Nhon",
                    [
                        ["21640", "Bồng Sơn", "Phường", "Bong Son"],
                        ["21649", "Hoài Châu", "Xã", "Hoai Chau"],
                        ["21646", "Hoài Châu Bắc", "Xã", "Hoai Chau Bac"],
                        ["21685", "Hoài Đức", "Phường", "Hoai Duc"],
                        ["21676", "Hoài Hải", "Xã", "Hoai Hai"],
                        ["21661", "Hoài Hảo", "Phường", "Hoai Hao"],
                        ["21670", "Hoài Hương", "Phường", "Hoai Huong"],
                        ["21682", "Hoài Mỹ", "Xã", "Hoai My"],
                        ["21652", "Hoài Phú", "Xã", "Hoai Phu"],
                        ["21643", "Hoài Sơn", "Xã", "Hoai Son"],
                        ["21673", "Hoài Tân", "Phường", "Hoai Tan"],
                        ["21667", "Hoài Thanh", "Phường", "Hoai Thanh"],
                        ["21664", "Hoài Thanh Tây", "Phường", "Hoai Thanh Tay"],
                        ["21679", "Hoài Xuân", "Phường", "Hoai Xuan"],
                        ["21637", "Tam Quan", "Phường", "Tam Quan"],
                        ["21655", "Tam Quan Bắc", "Phường", "Tam Quan Bac"],
                        ["21658", "Tam Quan Nam", "Phường", "Tam Quan Nam"]
                    ]
                ],
                [
                    "548", "Phù Cát", "Huyện", "Phu Cat",
                    [
                        ["21904", "Cát Chánh", "Xã", "Cat Chanh"],
                        ["21880", "Cát Hải", "Xã", "Cat Hai"],
                        ["21871", "Cát Hanh", "Xã", "Cat Hanh"],
                        ["21883", "Cát Hiệp", "Xã", "Cat Hiep"],
                        ["21889", "Cát Hưng", "Xã", "Cat Hung"],
                        ["21862", "Cát Khánh", "Xã", "Cat Khanh"],
                        ["21868", "Cát Lâm", "Xã", "Cat Lam"],
                        ["21859", "Cát Minh", "Xã", "Cat Minh"],
                        ["21886", "Cát Nhơn", "Xã", "Cat Nhon"],
                        ["21856", "Cát Sơn", "Xã", "Cat Son"],
                        ["21865", "Cát Tài", "Xã", "Cat Tai"],
                        ["21895", "Cát Tân", "Xã", "Cat Tan"],
                        ["21901", "Cát Thắng", "Xã", "Cat Thang"],
                        ["21874", "Cát Thành", "Xã", "Cat Thanh"],
                        ["21898", "Cát Tiến", "Thị trấn", "Cat Tien"],
                        ["21877", "Cát Trinh", "Xã", "Cat Trinh"],
                        ["21892", "Cát Tường", "Xã", "Cat Tuong"],
                        ["21853", "Ngô Mây", "Thị trấn", "Ngo May"]
                    ]
                ],
                [
                    "545", "Phù Mỹ", "Huyện", "Phu My",
                    [
                        ["21733", "Bình Dương", "Thị trấn", "Binh Duong"],
                        ["21751", "Mỹ An", "Xã", "My An"],
                        ["21781", "Mỹ Cát", "Xã", "My Cat"],
                        ["21769", "Mỹ Chánh", "Xã", "My Chanh"],
                        ["21784", "Mỹ Chánh Tây", "Xã", "My Chanh Tay"],
                        ["21739", "Mỹ Châu", "Xã", "My Chau"],
                        ["21736", "Mỹ Đức", "Xã", "My Duc"],
                        ["21775", "Mỹ Hiệp", "Xã", "My Hiep"],
                        ["21763", "Mỹ Hòa", "Xã", "My Hoa"],
                        ["21745", "Mỹ Lộc", "Xã", "My Loc"],
                        ["21748", "Mỹ Lợi", "Xã", "My Loi"],
                        ["21754", "Mỹ Phong", "Xã", "My Phong"],
                        ["21772", "Mỹ Quang", "Xã", "My Quang"],
                        ["21778", "Mỹ Tài", "Xã", "My Tai"],
                        ["21742", "Mỹ Thắng", "Xã", "My Thang"],
                        ["21766", "Mỹ Thành", "Xã", "My Thanh"],
                        ["21760", "Mỹ Thọ", "Xã", "My Tho"],
                        ["21757", "Mỹ Trinh", "Xã", "My Trinh"],
                        ["21730", "Phù Mỹ", "Thị trấn", "Phu My"]
                    ]
                ],
                [
                    "540", "Quy Nhơn", "Thành phố", "Quy Nhon",
                    [
                        ["21589", "Bùi Thị Xuân", "Phường", "Bui Thi Xuan"],
                        ["21556", "Đống Đa", "Phường", "Dong Da"],
                        ["21595", "Ghềnh Ráng", "Phường", "Ghenh Rang"],
                        ["21562", "Hải Cảng", "Phường", "Hai Cang"],
                        ["21571", "Lê Hồng Phong", "Phường", "Le Hong Phong"],
                        ["21583", "Lê Lợi", "Phường", "Le Loi"],
                        ["21580", "Lý Thường Kiệt", "Phường", "Ly Thuong Kiet"],
                        ["21577", "Ngô Mây", "Phường", "Ngo May"],
                        ["21592", "Nguyễn Văn Cừ", "Phường", "Nguyen Van Cu"],
                        ["21550", "Nhơn Bình", "Phường", "Nhon Binh"],
                        ["21607", "Nhơn Châu", "Xã", "Nhon Chau"],
                        ["21604", "Nhơn Hải", "Xã", "Nhon Hai"],
                        ["21601", "Nhơn Hội", "Xã", "Nhon Hoi"],
                        ["21598", "Nhơn Lý", "Xã", "Nhon Ly"],
                        ["21553", "Nhơn Phú", "Phường", "Nhon Phu"],
                        ["21991", "Phước Mỹ", "Xã", "Phuoc My"],
                        ["21565", "Quang Trung", "Phường", "Quang Trung"],
                        ["21568", "Thị Nại", "Phường", "Thi Nai"],
                        ["21574", "Trần Hưng Đạo", "Phường", "Tran Hung Dao"],
                        ["21586", "Trần Phú", "Phường", "Tran Phu"],
                        ["21559", "Trần Quang Diệu", "Phường", "Tran Quang Dieu"]
                    ]
                ],
                [
                    "547", "Tây Sơn", "Huyện", "Tay Son",
                    [
                        ["21829", "Bình Hòa", "Xã", "Binh Hoa"],
                        ["21847", "Bình Nghi", "Xã", "Binh Nghi"],
                        ["21811", "Bình Tân", "Xã", "Binh Tan"],
                        ["21823", "Bình Thành", "Xã", "Binh Thanh"],
                        ["21817", "Bình Thuận", "Xã", "Binh Thuan"],
                        ["21835", "Bình Tường", "Xã", "Binh Tuong"],
                        ["21808", "Phú Phong", "Thị trấn", "Phu Phong"],
                        ["21826", "Tây An", "Xã", "Tay An"],
                        ["21832", "Tây Bình", "Xã", "Tay Binh"],
                        ["21820", "Tây Giang", "Xã", "Tay Giang"],
                        ["21850", "Tây Phú", "Xã", "Tay Phu"],
                        ["21814", "Tây Thuận", "Xã", "Tay Thuan"],
                        ["21838", "Tây Vinh", "Xã", "Tay Vinh"],
                        ["21844", "Tây Xuân", "Xã", "Tay Xuan"],
                        ["21841", "Vĩnh An", "Xã", "Vinh An"]
                    ]
                ],
                [
                    "550", "Tuy Phước", "Huyện", "Tuy Phuoc",
                    [
                        ["21955", "Diêu Trì", "Thị trấn", "Dieu Tri"],
                        ["21985", "Phước An", "Xã", "Phuoc An"],
                        ["21973", "Phước Hiệp", "Xã", "Phuoc Hiep"],
                        ["21967", "Phước Hòa", "Xã", "Phuoc Hoa"],
                        ["21961", "Phước Hưng", "Xã", "Phuoc Hung"],
                        ["21976", "Phước Lộc", "Xã", "Phuoc Loc"],
                        ["21979", "Phước Nghĩa", "Xã", "Phuoc Nghia"],
                        ["21964", "Phước Quang", "Xã", "Phuoc Quang"],
                        ["21970", "Phước Sơn", "Xã", "Phuoc Son"],
                        ["21958", "Phước Thắng", "Xã", "Phuoc Thang"],
                        ["21988", "Phước Thành", "Xã", "Phuoc Thanh"],
                        ["21982", "Phước Thuận", "Xã", "Phuoc Thuan"],
                        ["21952", "Tuy Phước", "Thị trấn", "Tuy Phuoc"]
                    ]
                ],
                [
                    "551", "Vân Canh", "Huyện", "Van Canh",
                    [
                        ["22006", "Canh Hiển", "Xã", "Canh Hien"],
                        ["22000", "Canh Hiệp", "Xã", "Canh Hiep"],
                        ["22012", "Canh Hòa", "Xã", "Canh Hoa"],
                        ["21997", "Canh Liên", "Xã", "Canh Lien"],
                        ["22009", "Canh Thuận", "Xã", "Canh Thuan"],
                        ["22003", "Canh Vinh", "Xã", "Canh Vinh"],
                        ["21994", "Vân Canh", "Thị trấn", "Van Canh"]
                    ]
                ],
                [
                    "546", "Vĩnh Thạnh", "Huyện", "Vinh Thanh",
                    [
                        ["21799", "Vĩnh Hảo", "Xã", "Vinh Hao"],
                        ["21796", "Vĩnh Hiệp", "Xã", "Vinh Hiep"],
                        ["21801", "Vĩnh Hòa", "Xã", "Vinh Hoa"],
                        ["21790", "Vĩnh Kim", "Xã", "Vinh Kim"],
                        ["21805", "Vĩnh Quang", "Xã", "Vinh Quang"],
                        ["21787", "Vĩnh Sơn", "Xã", "Vinh Son"],
                        ["21786", "Vĩnh Thạnh", "Thị trấn", "Vinh Thanh"],
                        ["21802", "Vĩnh Thịnh", "Xã", "Vinh Thinh"],
                        ["21804", "Vĩnh Thuận", "Xã", "Vinh Thuan"]
                    ]
                ]
            ]
        ],
        [
            "74", "Bình Dương", "Tỉnh", "Binh Duong",
            [
                [
                    "726", "Bắc Tân Uyên", "Huyện", "Bac Tan Uyen",
                    [
                        ["25897", "Bình Mỹ", "Xã", "Binh My"],
                        ["25907", "Đất Cuốc", "Xã", "Dat Cuoc"],
                        ["25908", "Hiếu Liêm", "Xã", "Hieu Liem"],
                        ["25909", "Lạc An", "Xã", "Lac An"],
                        ["25900", "Tân Bình", "Thị trấn", "Tan Binh"],
                        ["25894", "Tân Định", "Xã", "Tan Dinh"],
                        ["25903", "Tân Lập", "Xã", "Tan Lap"],
                        ["25918", "Tân Mỹ", "Xã", "Tan My"],
                        ["25906", "Tân Thành", "Thị trấn", "Tan Thanh"],
                        ["25927", "Thường Tân", "Xã", "Thuong Tan"]
                    ]
                ],
                [
                    "719", "Bàu Bàng", "Huyện", "Bau Bang",
                    [
                        ["25819", "Cây Trường II", "Xã", "Cay Truong II"],
                        ["25831", "Hưng Hòa", "Xã", "Hung Hoa"],
                        ["25834", "Lai Hưng", "Xã", "Lai Hung"],
                        ["25822", "Lai Uyên", "Thị trấn", "Lai Uyen"],
                        ["25828", "Long Nguyên", "Xã", "Long Nguyen"],
                        ["25825", "Tân Hưng", "Xã", "Tan Hung"],
                        ["25816", "Trừ Văn Thố", "Xã", "Tru Van Tho"]
                    ]
                ],
                [
                    "721", "Bến Cát", "Thị xã", "Ben Cat",
                    [
                        ["25840", "An Điền", "Xã", "An Dien"],
                        ["25843", "An Tây", "Xã", "An Tay"],
                        ["25837", "Chánh Phú Hòa", "Phường", "Chanh Phu Hoa"],
                        ["25849", "Hòa Lợi", "Phường", "Hoa Loi"],
                        ["25813", "Mỹ Phước", "Phường", "My Phuoc"],
                        ["25855", "Phú An", "Xã", "Phu An"],
                        ["25852", "Tân Định", "Phường", "Tan Dinh"],
                        ["25846", "Thới Hòa", "Phường", "Thoi Hoa"]
                    ]
                ],
                [
                    "720", "Dầu Tiếng", "Huyện", "Dau Tieng",
                    [
                        ["25801", "An Lập", "Xã", "An Lap"],
                        ["25777", "Dầu Tiếng", "Thị trấn", "Dau Tieng"],
                        ["25789", "Định An", "Xã", "Dinh An"],
                        ["25798", "Định Hiệp", "Xã", "Dinh Hiep"],
                        ["25795", "Định Thành", "Xã", "Dinh Thanh"],
                        ["25792", "Long Hoà", "Xã", "Long Hoa"],
                        ["25804", "Long Tân", "Xã", "Long Tan"],
                        ["25780", "Minh Hoà", "Xã", "Minh Hoa"],
                        ["25786", "Minh Tân", "Xã", "Minh Tan"],
                        ["25783", "Minh Thạnh", "Xã", "Minh Thanh"],
                        ["25807", "Thanh An", "Xã", "Thanh An"],
                        ["25810", "Thanh Tuyền", "Xã", "Thanh Tuyen"]
                    ]
                ],
                [
                    "724", "Dĩ An", "Thành phố", "Di An",
                    [
                        ["25960", "An Bình", "Phường", "An Binh"],
                        ["25951", "Bình An", "Phường", "Binh An"],
                        ["25954", "Bình Thắng", "Phường", "Binh Thang"],
                        ["25942", "Dĩ An", "Phường", "Di An"],
                        ["25957", "Đông Hòa", "Phường", "Dong Hoa"],
                        ["25945", "Tân Bình", "Phường", "Tan Binh"],
                        ["25948", "Tân Đông Hiệp", "Phường", "Tan Dong Hiep"]
                    ]
                ],
                [
                    "722", "Phú Giáo", "Huyện", "Phu Giao",
                    [
                        ["25870", "An Bình", "Xã", "An Binh"],
                        ["25861", "An Linh", "Xã", "An Linh"],
                        ["25867", "An Long", "Xã", "An Long"],
                        ["25865", "An Thái", "Xã", "An Thai"],
                        ["25885", "Phước Hoà", "Xã", "Phuoc Hoa"],
                        ["25864", "Phước Sang", "Xã", "Phuoc Sang"],
                        ["25858", "Phước Vĩnh", "Thị trấn", "Phuoc Vinh"],
                        ["25876", "Tam Lập", "Xã", "Tam Lap"],
                        ["25873", "Tân Hiệp", "Xã", "Tan Hiep"],
                        ["25879", "Tân Long", "Xã", "Tan Long"],
                        ["25882", "Vĩnh Hoà", "Xã", "Vinh Hoa"]
                    ]
                ],
                [
                    "723", "Tân Uyên", "Thị xã", "Tan Uyen",
                    [
                        ["25930", "Bạch Đằng", "Xã", "Bach Dang"],
                        ["25915", "Hội Nghĩa", "Phường", "Hoi Nghia"],
                        ["25921", "Khánh Bình", "Phường", "Khanh Binh"],
                        ["25924", "Phú Chánh", "Phường", "Phu Chanh"],
                        ["25920", "Tân Hiệp", "Phường", "Tan Hiep"],
                        ["25891", "Tân Phước Khánh", "Phường", "Tan Phuoc Khanh"],
                        ["25933", "Tân Vĩnh Hiệp", "Phường", "Tan Vinh Hiep"],
                        ["25939", "Thái Hòa", "Phường", "Thai Hoa"],
                        ["25937", "Thạnh Hội", "Xã", "Thanh Hoi"],
                        ["25936", "Thạnh Phước", "Phường", "Thanh Phuoc"],
                        ["25888", "Uyên Hưng", "Phường", "Uyen Hung"],
                        ["25912", "Vĩnh Tân", "Phường", "Vinh Tan"]
                    ]
                ],
                [
                    "718", "Thủ Dầu Một", "Thành phố", "Thu Dau Mot",
                    [
                        ["25774", "Chánh Mỹ", "Phường", "Chanh My"],
                        ["25756", "Chánh Nghĩa", "Phường", "Chanh Nghia"],
                        ["25759", "Định Hoà", "Phường", "Dinh Hoa"],
                        ["25768", "Hiệp An", "Phường", "Hiep An"],
                        ["25741", "Hiệp Thành", "Phường", "Hiep Thanh"],
                        ["25760", "Hoà Phú", "Phường", "Hoa Phu"],
                        ["25747", "Phú Cường", "Phường", "Phu Cuong"],
                        ["25750", "Phú Hòa", "Phường", "Phu Hoa"],
                        ["25744", "Phú Lợi", "Phường", "Phu Loi"],
                        ["25762", "Phú Mỹ", "Phường", "Phu My"],
                        ["25763", "Phú Tân", "Phường", "Phu Tan"],
                        ["25753", "Phú Thọ", "Phường", "Phu Tho"],
                        ["25765", "Tân An", "Phường", "Tan An"],
                        ["25771", "Tương Bình Hiệp", "Phường", "Tuong Binh Hiep"]
                    ]
                ],
                [
                    "725", "Thuận An", "Thành phố", "Thuan An",
                    [
                        ["25975", "An Phú", "Phường", "An Phu"],
                        ["25981", "An Sơn", "Xã", "An Son"],
                        ["25963", "An Thạnh", "Phường", "An Thanh"],
                        ["25969", "Bình Chuẩn", "Phường", "Binh Chuan"],
                        ["25987", "Bình Hòa", "Phường", "Binh Hoa"],
                        ["25984", "Bình Nhâm", "Phường", "Binh Nham"],
                        ["25978", "Hưng Định", "Phường", "Hung Dinh"],
                        ["25966", "Lái Thiêu", "Phường", "Lai Thieu"],
                        ["25972", "Thuận Giao", "Phường", "Thuan Giao"],
                        ["25990", "Vĩnh Phú", "Phường", "Vinh Phu"]
                    ]
                ]
            ]
        ],
        [
            "70", "Bình Phước", "Tỉnh", "Binh Phuoc",
            [
                [
                    "690", "Bình Long", "Thị xã", "Binh Long",
                    [
                        ["25324", "An Lộc", "Phường", "An Loc"],
                        ["25320", "Hưng Chiến", "Phường", "Hung Chien"],
                        ["25326", "Phú Đức", "Phường", "Phu Duc"],
                        ["25325", "Phú Thịnh", "Phường", "Phu Thinh"],
                        ["25333", "Thanh Lương", "Xã", "Thanh Luong"],
                        ["25336", "Thanh Phú", "Xã", "Thanh Phu"]
                    ]
                ],
                [
                    "696", "Bù Đăng", "Huyện", "Bu Dang",
                    [
                        ["25404", "Bình Minh", "Xã", "Binh Minh"],
                        ["25405", "Bom Bo", "Xã", "Bom Bo"],
                        ["25399", "Đak Nhau", "Xã", "Dak Nhau"],
                        ["25426", "Đăng Hà", "Xã", "Dang Ha"],
                        ["25411", "Đoàn Kết", "Xã", "Doan Ket"],
                        ["25414", "Đồng Nai", "Xã", "Dong Nai"],
                        ["25417", "Đức Liễu", "Xã", "Duc Lieu"],
                        ["25396", "Đức Phong", "Thị trấn", "Duc Phong"],
                        ["25398", "Đường 10", "Xã", "Duong 10"],
                        ["25408", "Minh Hưng", "Xã", "Minh Hung"],
                        ["25424", "Nghĩa Bình", "Xã", "Nghia Binh"],
                        ["25423", "Nghĩa Trung", "Xã", "Nghia Trung"],
                        ["25400", "Phú Sơn", "Xã", "Phu Son"],
                        ["25429", "Phước Sơn", "Xã", "Phuoc Son"],
                        ["25402", "Thọ Sơn", "Xã", "Tho Son"],
                        ["25420", "Thống Nhất", "Xã", "Thong Nhat"]
                    ]
                ],
                [
                    "693", "Bù Đốp", "Huyện", "Bu Dop",
                    [
                        ["25309", "Hưng Phước", "Xã", "Hung Phuoc"],
                        ["25310", "Phước Thiện", "Xã", "Phuoc Thien"],
                        ["25318", "Tân Thành", "Xã", "Tan Thanh"],
                        ["25321", "Tân Tiến", "Xã", "Tan Tien"],
                        ["25308", "Thanh Bình", "Thị trấn", "Thanh Binh"],
                        ["25315", "Thanh Hòa", "Xã", "Thanh Hoa"],
                        ["25312", "Thiện Hưng", "Xã", "Thien Hung"]
                    ]
                ],
                [
                    "691", "Bù Gia Mập", "Huyện", "Bu Gia Map",
                    [
                        ["25234", "Bình Thắng", "Xã", "Binh Thang"],
                        ["25222", "Bù Gia Mập", "Xã", "Bu Gia Map"],
                        ["25231", "Đa Kia", "Xã", "Da Kia"],
                        ["25225", "Đak Ơ", "Xã", "Dak O"],
                        ["25228", "Đức Hạnh", "Xã", "Duc Hanh"],
                        ["25267", "Phú Nghĩa", "Xã", "Phu Nghia"],
                        ["25229", "Phú Văn", "Xã", "Phu Van"],
                        ["25232", "Phước Minh", "Xã", "Phuoc Minh"]
                    ]
                ],
                [
                    "697", "Chơn Thành", "Huyện", "Chon Thanh",
                    [
                        ["25432", "Chơn Thành", "Thị trấn", "Chon Thanh"],
                        ["25441", "Minh Hưng", "Xã", "Minh Hung"],
                        ["25435", "Minh Lập", "Xã", "Minh Lap"],
                        ["25444", "Minh Long", "Xã", "Minh Long"],
                        ["25453", "Minh Thắng", "Xã", "Minh Thang"],
                        ["25447", "Minh Thành", "Xã", "Minh Thanh"],
                        ["25450", "Nha Bích", "Xã", "Nha Bich"],
                        ["25439", "Quang Minh", "Xã", "Quang Minh"],
                        ["25433", "Thành Tâm", "Xã", "Thanh Tam"]
                    ]
                ],
                [
                    "695", "Đồng Phú", "Huyện", "Dong Phu",
                    [
                        ["25369", "Đồng Tâm", "Xã", "Dong Tam"],
                        ["25390", "Đồng Tiến", "Xã", "Dong Tien"],
                        ["25384", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["25375", "Tân Hưng", "Xã", "Tan Hung"],
                        ["25381", "Tân Lập", "Xã", "Tan Lap"],
                        ["25378", "Tân Lợi", "Xã", "Tan Loi"],
                        ["25363", "Tân Phú", "Thị trấn", "Tan Phu"],
                        ["25372", "Tân Phước", "Xã", "Tan Phuoc"],
                        ["25393", "Tân Tiến", "Xã", "Tan Tien"],
                        ["25366", "Thuận Lợi", "Xã", "Thuan Loi"],
                        ["25387", "Thuận Phú", "Xã", "Thuan Phu"]
                    ]
                ],
                [
                    "689", "Đồng Xoài", "Thành phố", "Dong Xoai",
                    [
                        ["25201", "Tân Bình", "Phường", "Tan Binh"],
                        ["25198", "Tân Đồng", "Phường", "Tan Dong"],
                        ["25195", "Tân Phú", "Phường", "Tan Phu"],
                        ["25207", "Tân Thành", "Xã", "Tan Thanh"],
                        ["25205", "Tân Thiện", "Phường", "Tan Thien"],
                        ["25204", "Tân Xuân", "Phường", "Tan Xuan"],
                        ["25213", "Tiến Hưng", "Xã", "Tien Hung"],
                        ["25210", "Tiến Thành", "Phường", "Tien Thanh"]
                    ]
                ],
                [
                    "694", "Hớn Quản", "Huyện", "Hon Quan",
                    [
                        ["25330", "An Khương", "Xã", "An Khuong"],
                        ["25339", "An Phú", "Xã", "An Phu"],
                        ["25360", "Đồng Nơ", "Xã", "Dong No"],
                        ["25348", "Minh Đức", "Xã", "Minh Duc"],
                        ["25349", "Minh Tâm", "Xã", "Minh Tam"],
                        ["25351", "Phước An", "Xã", "Phuoc An"],
                        ["25361", "Tân Hiệp", "Xã", "Tan Hiep"],
                        ["25345", "Tân Hưng", "Xã", "Tan Hung"],
                        ["25357", "Tân Khai", "Thị trấn", "Tan Khai"],
                        ["25342", "Tân Lợi", "Xã", "Tan Loi"],
                        ["25438", "Tân Quan", "Xã", "Tan Quan"],
                        ["25327", "Thanh An", "Xã", "Thanh An"],
                        ["25354", "Thanh Bình", "Xã", "Thanh Binh"]
                    ]
                ],
                [
                    "692", "Lộc Ninh", "Huyện", "Loc Ninh",
                    [
                        ["25276", "Lộc An", "Xã", "Loc An"],
                        ["25300", "Lộc Điền", "Xã", "Loc Dien"],
                        ["25282", "Lộc Hiệp", "Xã", "Loc Hiep"],
                        ["25273", "Lộc Hòa", "Xã", "Loc Hoa"],
                        ["25303", "Lộc Hưng", "Xã", "Loc Hung"],
                        ["25306", "Lộc Khánh", "Xã", "Loc Khanh"],
                        ["25270", "Lộc Ninh", "Thị trấn", "Loc Ninh"],
                        ["25292", "Lộc Phú", "Xã", "Loc Phu"],
                        ["25291", "Lộc Quang", "Xã", "Loc Quang"],
                        ["25279", "Lộc Tấn", "Xã", "Loc Tan"],
                        ["25297", "Lộc Thái", "Xã", "Loc Thai"],
                        ["25280", "Lộc Thạnh", "Xã", "Loc Thanh"],
                        ["25294", "Lộc Thành", "Xã", "Loc Thanh"],
                        ["25285", "Lộc Thiện", "Xã", "Loc Thien"],
                        ["25305", "Lộc Thịnh", "Xã", "Loc Thinh"],
                        ["25288", "Lộc Thuận", "Xã", "Loc Thuan"]
                    ]
                ],
                [
                    "698", "Phú Riềng", "Huyện", "Phu Rieng",
                    [
                        ["25244", "Bình Sơn", "Xã", "Binh Son"],
                        ["25243", "Bình Tân", "Xã", "Binh Tan"],
                        ["25252", "Bù Nho", "Xã", "Bu Nho"],
                        ["25240", "Long Bình", "Xã", "Long Binh"],
                        ["25255", "Long Hà", "Xã", "Long Ha"],
                        ["25246", "Long Hưng", "Xã", "Long Hung"],
                        ["25258", "Long Tân", "Xã", "Long Tan"],
                        ["25264", "Phú Riềng", "Xã", "Phu Rieng"],
                        ["25261", "Phú Trung", "Xã", "Phu Trung"],
                        ["25250", "Phước Tân", "Xã", "Phuoc Tan"]
                    ]
                ],
                [
                    "688", "Phước Long", "Thị xã", "Phuoc Long",
                    [
                        ["25245", "Long Giang", "Xã", "Long Giang"],
                        ["25220", "Long Phước", "Phường", "Long Phuoc"],
                        ["25217", "Long Thủy", "Phường", "Long Thuy"],
                        ["25219", "Phước Bình", "Phường", "Phuoc Binh"],
                        ["25249", "Phước Tín", "Xã", "Phuoc Tin"],
                        ["25237", "Sơn Giang", "Phường", "Son Giang"],
                        ["25216", "Thác Mơ", "Phường", "Thac Mo"]
                    ]
                ]
            ]
        ],
        [
            "60", "Bình Thuận", "Tỉnh", "Binh Thuan",
            [
                [
                    "596", "Bắc Bình", "Huyện", "Bac Binh",
                    [
                        ["23014", "Bình An", "Xã", "Binh An"],
                        ["23047", "Bình Tân", "Xã", "Binh Tan"],
                        ["23005", "Chợ Lầu", "Thị trấn", "Cho Lau"],
                        ["23020", "Hải Ninh", "Xã", "Hai Ninh"],
                        ["23053", "Hòa Thắng", "Xã", "Hoa Thang"],
                        ["23056", "Hồng Phong", "Xã", "Hong Phong"],
                        ["23041", "Hồng Thái", "Xã", "Hong Thai"],
                        ["23032", "Lương Sơn", "Thị trấn", "Luong Son"],
                        ["23017", "Phan Điền", "Xã", "Phan Dien"],
                        ["23044", "Phan Hiệp", "Xã", "Phan Hiep"],
                        ["23035", "Phan Hòa", "Xã", "Phan Hoa"],
                        ["23011", "Phan Lâm", "Xã", "Phan Lam"],
                        ["23050", "Phan Rí Thành", "Xã", "Phan Ri Thanh"],
                        ["23008", "Phan Sơn", "Xã", "Phan Son"],
                        ["23038", "Phan Thanh", "Xã", "Phan Thanh"],
                        ["23026", "Phan Tiến", "Xã", "Phan Tien"],
                        ["23029", "Sông Bình", "Xã", "Song Binh"],
                        ["23023", "Sông Lũy", "Xã", "Song Luy"]
                    ]
                ],
                [
                    "600", "Đức Linh", "Huyện", "Duc Linh",
                    [
                        ["23197", "Đa Kai", "Xã", "Da Kai"],
                        ["23224", "Đông Hà", "Xã", "Dong Ha"],
                        ["23212", "Đức Hạnh", "Xã", "Duc Hanh"],
                        ["23194", "Đức Tài", "Thị trấn", "Duc Tai"],
                        ["23215", "Đức Tín", "Xã", "Duc Tin"],
                        ["23203", "Mê Pu", "Xã", "Me Pu"],
                        ["23206", "Nam Chính", "Xã", "Nam Chinh"],
                        ["23200", "Sùng Nhơn", "Xã", "Sung Nhon"],
                        ["23221", "Tân Hà", "Xã", "Tan Ha"],
                        ["23227", "Trà Tân", "Xã", "Tra Tan"],
                        ["23191", "Võ Xu", "Thị trấn", "Vo Xu"],
                        ["23218", "Vũ Hoà", "Xã", "Vu Hoa"]
                    ]
                ],
                [
                    "601", "Hàm Tân", "Huyện", "Ham Tan",
                    [
                        ["23266", "Sơn Mỹ", "Xã", "Son My"],
                        ["23239", "Sông Phan", "Xã", "Song Phan"],
                        ["23251", "Tân Đức", "Xã", "Tan Duc"],
                        ["23257", "Tân Hà", "Xã", "Tan Ha"],
                        ["23230", "Tân Minh", "Thị trấn", "Tan Minh"],
                        ["23236", "Tân Nghĩa", "Thị trấn", "Tan Nghia"],
                        ["23242", "Tân Phúc", "Xã", "Tan Phuc"],
                        ["23254", "Tân Thắng", "Xã", "Tan Thang"],
                        ["23260", "Tân Xuân", "Xã", "Tan Xuan"],
                        ["23255", "Thắng Hải", "Xã", "Thang Hai"]
                    ]
                ],
                [
                    "597", "Hàm Thuận Bắc", "Huyện", "Ham Thuan Bac",
                    [
                        ["23107", "Đa Mi", "Xã", "Da Mi"],
                        ["23074", "Đông Giang", "Xã", "Dong Giang"],
                        ["23068", "Đông Tiến", "Xã", "Dong Tien"],
                        ["23098", "Hàm Chính", "Xã", "Ham Chinh"],
                        ["23092", "Hàm Đức", "Xã", "Ham Duc"],
                        ["23101", "Hàm Hiệp", "Xã", "Ham Hiep"],
                        ["23095", "Hàm Liêm", "Xã", "Ham Liem"],
                        ["23077", "Hàm Phú", "Xã", "Ham Phu"],
                        ["23104", "Hàm Thắng", "Xã", "Ham Thang"],
                        ["23089", "Hàm Trí", "Xã", "Ham Tri"],
                        ["23080", "Hồng Liêm", "Xã", "Hong Liem"],
                        ["23086", "Hồng Sơn", "Xã", "Hong Son"],
                        ["23065", "La Dạ", "Xã", "La Da"],
                        ["23059", "Ma Lâm", "Thị trấn", "Ma Lam"],
                        ["23062", "Phú Long", "Thị trấn", "Phu Long"],
                        ["23071", "Thuận Hòa", "Xã", "Thuan Hoa"],
                        ["23083", "Thuận Minh", "Xã", "Thuan Minh"]
                    ]
                ],
                [
                    "598", "Hàm Thuận Nam", "Huyện", "Ham Thuan Nam",
                    [
                        ["23116", "Hàm Cần", "Xã", "Ham Can"],
                        ["23128", "Hàm Cường", "Xã", "Ham Cuong"],
                        ["23125", "Hàm Kiệm", "Xã", "Ham Kiem"],
                        ["23137", "Hàm Minh", "Xã", "Ham Minh"],
                        ["23131", "Hàm Mỹ", "Xã", "Ham My"],
                        ["23122", "Hàm Thạnh", "Xã", "Ham Thanh"],
                        ["23119", "Mương Mán", "Xã", "Muong Man"],
                        ["23113", "Mỹ Thạnh", "Xã", "My Thanh"],
                        ["23134", "Tân Lập", "Xã", "Tan Lap"],
                        ["23146", "Tân Thành", "Xã", "Tan Thanh"],
                        ["23143", "Tân Thuận", "Xã", "Tan Thuan"],
                        ["23110", "Thuận Nam", "Thị trấn", "Thuan Nam"],
                        ["23140", "Thuận Quí", "Xã", "Thuan Qui"]
                    ]
                ],
                [
                    "594", "La Gi", "Thị xã", "La Gi",
                    [
                        ["23237", "Bình Tân", "Phường", "Binh Tan"],
                        ["23231", "Phước Hội", "Phường", "Phuoc Hoi"],
                        ["23232", "Phước Lộc", "Phường", "Phuoc Loc"],
                        ["23235", "Tân An", "Phường", "Tan An"],
                        ["23248", "Tân Bình", "Xã", "Tan Binh"],
                        ["23245", "Tân Hải", "Xã", "Tan Hai"],
                        ["23268", "Tân Phước", "Xã", "Tan Phuoc"],
                        ["23234", "Tân Thiện", "Phường", "Tan Thien"],
                        ["23246", "Tân Tiến", "Xã", "Tan Tien"]
                    ]
                ],
                [
                    "593", "Phan Thiết", "Thành phố", "Phan Thiet",
                    [
                        ["22939", "Bình Hưng", "Phường", "Binh Hung"],
                        ["22954", "Đức Long", "Phường", "Duc Long"],
                        ["22942", "Đức Nghĩa", "Phường", "Duc Nghia"],
                        ["22948", "Đức Thắng", "Phường", "Duc Thang"],
                        ["22918", "Hàm Tiến", "Phường", "Ham Tien"],
                        ["22951", "Hưng Long", "Phường", "Hung Long"],
                        ["22945", "Lạc Đạo", "Phường", "Lac Dao"],
                        ["22915", "Mũi Né", "Phường", "Mui Ne"],
                        ["22960", "Phong Nẫm", "Xã", "Phong Nam"],
                        ["22921", "Phú Hài", "Phường", "Phu Hai"],
                        ["22927", "Phú Tài", "Phường", "Phu Tai"],
                        ["22924", "Phú Thủy", "Phường", "Phu Thuy"],
                        ["22930", "Phú Trinh", "Phường", "Phu Trinh"],
                        ["22936", "Thanh Hải", "Phường", "Thanh Hai"],
                        ["22957", "Thiện Nghiệp", "Xã", "Thien Nghiep"],
                        ["22963", "Tiến Lợi", "Xã", "Tien Loi"],
                        ["22966", "Tiến Thành", "Xã", "Tien Thanh"],
                        ["22933", "Xuân An", "Phường", "Xuan An"]
                    ]
                ],
                [
                    "602", "Phú Quí", "Huyện", "Phu Qui",
                    [
                        ["23275", "Long Hải", "Xã", "Long Hai"],
                        ["23272", "Ngũ Phụng", "Xã", "Ngu Phung"],
                        ["23278", "Tam Thanh", "Xã", "Tam Thanh"]
                    ]
                ],
                [
                    "599", "Tánh Linh", "Huyện", "Tanh Linh",
                    [
                        ["23152", "Bắc Ruộng", "Xã", "Bac Ruong"],
                        ["23173", "Đồng Kho", "Xã", "Dong Kho"],
                        ["23179", "Đức Bình", "Xã", "Duc Binh"],
                        ["23170", "Đức Phú", "Xã", "Duc Phu"],
                        ["23185", "Đức Thuận", "Xã", "Duc Thuan"],
                        ["23176", "Gia An", "Xã", "Gia An"],
                        ["23182", "Gia Huynh", "Xã", "Gia Huynh"],
                        ["23164", "Huy Khiêm", "Xã", "Huy Khiem"],
                        ["23161", "La Ngâu", "Xã", "La Ngau"],
                        ["23149", "Lạc Tánh", "Thị trấn", "Lac Tanh"],
                        ["23167", "Măng Tố", "Xã", "Mang To"],
                        ["23158", "Nghị Đức", "Xã", "Nghi Duc"],
                        ["23188", "Suối Kiết", "Xã", "Suoi Kiet"]
                    ]
                ],
                [
                    "595", "Tuy Phong", "Huyện", "Tuy Phong",
                    [
                        ["22999", "Bình Thạnh", "Xã", "Binh Thanh"],
                        ["22996", "Chí Công", "Xã", "Chi Cong"],
                        ["22993", "Hòa Minh", "Xã", "Hoa Minh"],
                        ["22969", "Liên Hương", "Thị trấn", "Lien Huong"],
                        ["22975", "Phan Dũng", "Xã", "Phan Dung"],
                        ["22972", "Phan Rí Cửa", "Thị trấn", "Phan Ri Cua"],
                        ["22978", "Phong Phú", "Xã", "Phong Phu"],
                        ["22987", "Phú Lạc", "Xã", "Phu Lac"],
                        ["22990", "Phước Thể", "Xã", "Phuoc The"],
                        ["22981", "Vĩnh Hảo", "Xã", "Vinh Hao"],
                        ["22984", "Vĩnh Tân", "Xã", "Vinh Tan"]
                    ]
                ]
            ]
        ],
        [
            "96", "Cà Mau", "Tỉnh", "Ca Mau",
            [
                [
                    "964", "Cà Mau", "Thành phố", "Ca Mau",
                    [
                        ["32005", "1", "Phường", "1"],
                        ["32011", "2", "Phường", "2"],
                        ["32002", "4", "Phường", "4"],
                        ["32008", "5", "Phường", "5"],
                        ["32017", "6", "Phường", "6"],
                        ["32020", "7", "Phường", "7"],
                        ["32014", "8", "Phường", "8"],
                        ["31999", "9", "Phường", "9"],
                        ["32023", "An Xuyên", "Xã", "An Xuyen"],
                        ["32035", "Định Bình", "Xã", "Dinh Binh"],
                        ["32041", "Hòa Tân", "Xã", "Hoa Tan"],
                        ["32038", "Hòa Thành", "Xã", "Hoa Thanh"],
                        ["32032", "Lý Văn Lâm", "Xã", "Ly Van Lam"],
                        ["32029", "Tắc Vân", "Xã", "Tac Van"],
                        ["32025", "Tân Thành", "Phường", "Tan Thanh"],
                        ["32026", "Tân Thành", "Xã", "Tan Thanh"],
                        ["32022", "Tân Xuyên", "Phường", "Tan Xuyen"]
                    ]
                ],
                [
                    "969", "Cái Nước", "Huyện", "Cai Nuoc",
                    [
                        ["32128", "Cái Nước", "Thị trấn", "Cai Nuoc"],
                        ["32142", "Đông Hưng", "Xã", "Dong Hung"],
                        ["32143", "Đông Thới", "Xã", "Dong Thoi"],
                        ["32141", "Hoà Mỹ", "Xã", "Hoa My"],
                        ["32140", "Hưng Mỹ", "Xã", "Hung My"],
                        ["32131", "Lương Thế Trân", "Xã", "Luong The Tran"],
                        ["32134", "Phú Hưng", "Xã", "Phu Hung"],
                        ["32137", "Tân Hưng", "Xã", "Tan Hung"],
                        ["32146", "Tân Hưng Đông", "Xã", "Tan Hung Dong"],
                        ["32130", "Thạnh Phú", "Xã", "Thanh Phu"],
                        ["32149", "Trần Thới", "Xã", "Tran Thoi"]
                    ]
                ],
                [
                    "970", "Đầm Dơi", "Huyện", "Dam Doi",
                    [
                        ["32152", "Đầm Dơi", "Thị trấn", "Dam Doi"],
                        ["32186", "Ngọc Chánh", "Xã", "Ngoc Chanh"],
                        ["32188", "Nguyễn Huân", "Xã", "Nguyen Huan"],
                        ["32182", "Quách Phẩm", "Xã", "Quach Pham"],
                        ["32179", "Quách Phẩm Bắc", "Xã", "Quach Pham Bac"],
                        ["32155", "Tạ An Khương", "Xã", "Ta An Khuong"],
                        ["32158", "Tạ An Khương  Đông", "Xã", "Ta An Khuong  Dong"],
                        ["32170", "Tạ An Khương  Nam", "Xã", "Ta An Khuong  Nam"],
                        ["32174", "Tân Dân", "Xã", "Tan Dan"],
                        ["32164", "Tân Đức", "Xã", "Tan Duc"],
                        ["32173", "Tân Duyệt", "Xã", "Tan Duyet"],
                        ["32167", "Tân Thuận", "Xã", "Tan Thuan"],
                        ["32176", "Tân Tiến", "Xã", "Tan Tien"],
                        ["32162", "Tân Trung", "Xã", "Tan Trung"],
                        ["32185", "Thanh Tùng", "Xã", "Thanh Tung"],
                        ["32161", "Trần Phán", "Xã", "Tran Phan"]
                    ]
                ],
                [
                    "971", "Năm Căn", "Huyện", "Nam Can",
                    [
                        ["32200", "Đất Mới", "Xã", "Dat Moi"],
                        ["32194", "Hàm Rồng", "Xã", "Ham Rong"],
                        ["32203", "Hàng Vịnh", "Xã", "Hang Vinh"],
                        ["32197", "Hiệp Tùng", "Xã", "Hiep Tung"],
                        ["32201", "Lâm Hải", "Xã", "Lam Hai"],
                        ["32191", "Năm Căn", "Thị Trấn", "Nam Can"],
                        ["32206", "Tam Giang", "Xã", "Tam Giang"],
                        ["32209", "Tam Giang Đông", "Xã", "Tam Giang Dong"]
                    ]
                ],
                [
                    "973", "Ngọc Hiển", "Huyện", "Ngoc Hien",
                    [
                        ["32248", "Đất Mũi", "Xã", "Dat Mui"],
                        ["32244", "Rạch Gốc", "Thị trấn", "Rach Goc"],
                        ["32233", "Tam Giang Tây", "Xã", "Tam Giang Tay"],
                        ["32245", "Tân Ân", "Xã", "Tan An"],
                        ["32236", "Tân Ân Tây", "Xã", "Tan An Tay"],
                        ["32242", "Viên An", "Xã", "Vien An"],
                        ["32239", "Viên An Đông", "Xã", "Vien An Dong"]
                    ]
                ],
                [
                    "972", "Phú Tân", "Huyện", "Phu Tan",
                    [
                        ["32212", "Cái Đôi Vàm", "Thị trấn", "Cai Doi Vam"],
                        ["32230", "Nguyễn Việt Khái", "Xã", "Nguyen Viet Khai"],
                        ["32215", "Phú Mỹ", "Xã", "Phu My"],
                        ["32218", "Phú Tân", "Xã", "Phu Tan"],
                        ["32214", "Phú Thuận", "Xã", "Phu Thuan"],
                        ["32228", "Rạch Chèo", "Xã", "Rach Cheo"],
                        ["32221", "Tân Hải", "Xã", "Tan Hai"],
                        ["32227", "Tân Hưng Tây", "Xã", "Tan Hung Tay"],
                        ["32224", "Việt Thắng", "Xã", "Viet Thang"]
                    ]
                ],
                [
                    "967", "Thới Bình", "Huyện", "Thoi Binh",
                    [
                        ["32068", "Biển Bạch", "Xã", "Bien Bach"],
                        ["32074", "Biển Bạch Đông", "Xã", "Bien Bach Dong"],
                        ["32092", "Hồ Thị Kỷ", "Xã", "Ho Thi Ky"],
                        ["32069", "Tân Bằng", "Xã", "Tan Bang"],
                        ["32086", "Tân Lộc", "Xã", "Tan Loc"],
                        ["32083", "Tân Lộc Bắc", "Xã", "Tan Loc Bac"],
                        ["32089", "Tân Lộc Đông", "Xã", "Tan Loc Dong"],
                        ["32080", "Tân Phú", "Xã", "Tan Phu"],
                        ["32065", "Thới Bình", "Thị trấn", "Thoi Binh"],
                        ["32077", "Thới Bình", "Xã", "Thoi Binh"],
                        ["32072", "Trí Lực", "Xã", "Tri Luc"],
                        ["32071", "Trí Phải", "Xã", "Tri Phai"]
                    ]
                ],
                [
                    "968", "Trần Văn Thời", "Huyện", "Tran Van Thoi",
                    [
                        ["32110", "Khánh Bình", "Xã", "Khanh Binh"],
                        ["32116", "Khánh Bình Đông", "Xã", "Khanh Binh Dong"],
                        ["32104", "Khánh Bình Tây", "Xã", "Khanh Binh Tay"],
                        ["32101", "Khánh Bình Tây Bắc", "Xã", "Khanh Binh Tay Bac"],
                        ["32119", "Khánh Hải", "Xã", "Khanh Hai"],
                        ["32113", "Khánh Hưng", "Xã", "Khanh Hung"],
                        ["32108", "Khánh Lộc", "Xã", "Khanh Loc"],
                        ["32122", "Lợi An", "Xã", "Loi An"],
                        ["32124", "Phong Điền", "Xã", "Phong Dien"],
                        ["32125", "Phong Lạc", "Xã", "Phong Lac"],
                        ["32098", "Sông Đốc", "Thị trấn", "Song Doc"],
                        ["32107", "Trần Hợi", "Xã", "Tran Hoi"],
                        ["32095", "Trần Văn Thời", "Thị trấn", "Tran Van Thoi"]
                    ]
                ],
                [
                    "966", "U Minh", "Huyện", "U Minh",
                    [
                        ["32059", "Khánh An", "Xã", "Khanh An"],
                        ["32047", "Khánh Hòa", "Xã", "Khanh Hoa"],
                        ["32062", "Khánh Hội", "Xã", "Khanh Hoi"],
                        ["32056", "Khánh Lâm", "Xã", "Khanh Lam"],
                        ["32048", "Khánh Thuận", "Xã", "Khanh Thuan"],
                        ["32050", "Khánh Tiến", "Xã", "Khanh Tien"],
                        ["32053", "Nguyễn Phích", "Xã", "Nguyen Phich"],
                        ["32044", "U Minh", "Thị trấn", "U Minh"]
                    ]
                ]
            ]
        ],
        [
            "92", "Cần Thơ", "Thành phố", "Can Tho",
            [
                [
                    "918", "Bình Thuỷ", "Quận", "Binh Thuy",
                    [
                        ["31177", "An Thới", "Phường", "An Thoi"],
                        ["31168", "Bình Thủy", "Phường", "Binh Thuy"],
                        ["31178", "Bùi Hữu Nghĩa", "Phường", "Bui Huu Nghia"],
                        ["31180", "Long Hòa", "Phường", "Long Hoa"],
                        ["31183", "Long Tuyền", "Phường", "Long Tuyen"],
                        ["31174", "Thới An Đông", "Phường", "Thoi An Dong"],
                        ["31169", "Trà An", "Phường", "Tra An"],
                        ["31171", "Trà Nóc", "Phường", "Tra Noc"]
                    ]
                ],
                [
                    "919", "Cái Răng", "Quận", "Cai Rang",
                    [
                        ["31195", "Ba Láng", "Phường", "Ba Lang"],
                        ["31189", "Hưng Phú", "Phường", "Hung Phu"],
                        ["31192", "Hưng Thạnh", "Phường", "Hung Thanh"],
                        ["31186", "Lê Bình", "Phường", "Le Binh"],
                        ["31201", "Phú Thứ", "Phường", "Phu Thu"],
                        ["31204", "Tân Phú", "Phường", "Tan Phu"],
                        ["31198", "Thường Thạnh", "Phường", "Thuong Thanh"]
                    ]
                ],
                [
                    "925", "Cờ Đỏ", "Huyện", "Co Do",
                    [
                        ["31261", "Cờ Đỏ", "Thị trấn", "Co Do"],
                        ["31273", "Đông Hiệp", "Xã", "Dong Hiep"],
                        ["31274", "Đông Thắng", "Xã", "Dong Thang"],
                        ["31249", "Thạnh Phú", "Xã", "Thanh Phu"],
                        ["31276", "Thới Đông", "Xã", "Thoi Dong"],
                        ["31264", "Thới Hưng", "Xã", "Thoi Hung"],
                        ["31277", "Thới Xuân", "Xã", "Thoi Xuan"],
                        ["31222", "Trung An", "Xã", "Trung An"],
                        ["31255", "Trung Hưng", "Xã", "Trung Hung"],
                        ["31225", "Trung Thạnh", "Xã", "Trung Thanh"]
                    ]
                ],
                [
                    "916", "Ninh Kiều", "Quận", "Ninh Kieu",
                    [
                        ["31150", "An Bình", "Phường", "An Binh"],
                        ["31129", "An Cư", "Phường", "An Cu"],
                        ["31120", "An Hòa", "Phường", "An Hoa"],
                        ["31149", "An Khánh", "Phường", "An Khanh"],
                        ["31126", "An Nghiệp", "Phường", "An Nghiep"],
                        ["31141", "An Phú", "Phường", "An Phu"],
                        ["31117", "Cái Khế", "Phường", "Cai Khe"],
                        ["31147", "Hưng Lợi", "Phường", "Hung Loi"],
                        ["31135", "Tân An", "Phường", "Tan An"],
                        ["31123", "Thới Bình", "Phường", "Thoi Binh"],
                        ["31144", "Xuân Khánh", "Phường", "Xuan Khanh"]
                    ]
                ],
                [
                    "917", "Ô Môn", "Quận", "O Mon",
                    [
                        ["31153", "Châu Văn Liêm", "Phường", "Chau Van Liem"],
                        ["31157", "Long Hưng", "Phường", "Long Hung"],
                        ["31162", "Phước Thới", "Phường", "Phuoc Thoi"],
                        ["31159", "Thới An", "Phường", "Thoi An"],
                        ["31154", "Thới Hòa", "Phường", "Thoi Hoa"],
                        ["31156", "Thới Long", "Phường", "Thoi Long"],
                        ["31165", "Trường Lạc", "Phường", "Truong Lac"]
                    ]
                ],
                [
                    "926", "Phong Điền", "Huyện", "Phong Dien",
                    [
                        ["31303", "Giai Xuân", "Xã", "Giai Xuan"],
                        ["31312", "Mỹ Khánh", "Xã", "My Khanh"],
                        ["31300", "Nhơn Ái", "Xã", "Nhon Ai"],
                        ["31315", "Nhơn Nghĩa", "Xã", "Nhon Nghia"],
                        ["31299", "Phong Điền", "Thị trấn", "Phong Dien"],
                        ["31306", "Tân Thới", "Xã", "Tan Thoi"],
                        ["31309", "Trường Long", "Xã", "Truong Long"]
                    ]
                ],
                [
                    "927", "Thới Lai", "Huyện", "Thoi Lai",
                    [
                        ["31288", "Định Môn", "Xã", "Dinh Mon"],
                        ["31279", "Đông Bình", "Xã", "Dong Binh"],
                        ["31282", "Đông Thuận", "Xã", "Dong Thuan"],
                        ["31268", "Tân Thạnh", "Xã", "Tan Thanh"],
                        ["31258", "Thới Lai", "Thị trấn", "Thoi Lai"],
                        ["31285", "Thới Tân", "Xã", "Thoi Tan"],
                        ["31267", "Thới Thạnh", "Xã", "Thoi Thanh"],
                        ["31286", "Trường Thắng", "Xã", "Truong Thang"],
                        ["31291", "Trường Thành", "Xã", "Truong Thanh"],
                        ["31294", "Trường Xuân", "Xã", "Truong Xuan"],
                        ["31297", "Trường Xuân A", "Xã", "Truong Xuan A"],
                        ["31298", "Trường Xuân B", "Xã", "Truong Xuan B"],
                        ["31270", "Xuân Thắng", "Xã", "Xuan Thang"]
                    ]
                ],
                [
                    "923", "Thốt Nốt", "Quận", "Thot Not",
                    [
                        ["31227", "Tân Hưng", "Phường", "Tan Hung"],
                        ["31213", "Tân Lộc", "Phường", "Tan Loc"],
                        ["31217", "Thạnh Hoà", "Phường", "Thanh Hoa"],
                        ["31210", "Thới Thuận", "Phường", "Thoi Thuan"],
                        ["31207", "Thốt Nốt", "Phường", "Thot Not"],
                        ["31212", "Thuận An", "Phường", "Thuan An"],
                        ["31228", "Thuận Hưng", "Phường", "Thuan Hung"],
                        ["31219", "Trung Kiên", "Phường", "Trung Kien"],
                        ["31216", "Trung Nhứt", "Phường", "Trung Nhut"]
                    ]
                ],
                [
                    "924", "Vĩnh Thạnh", "Huyện", "Vinh Thanh",
                    [
                        ["31231", "Thanh An", "Thị trấn", "Thanh An"],
                        ["31240", "Thạnh An", "Xã", "Thanh An"],
                        ["31252", "Thạnh Lộc", "Xã", "Thanh Loc"],
                        ["31244", "Thạnh Lợi", "Xã", "Thanh Loi"],
                        ["31234", "Thạnh Mỹ", "Xã", "Thanh My"],
                        ["31246", "Thạnh Qưới", "Xã", "Thanh Quoi"],
                        ["31243", "Thạnh Thắng", "Xã", "Thanh Thang"],
                        ["31241", "Thạnh Tiến", "Xã", "Thanh Tien"],
                        ["31211", "Vĩnh Bình", "Xã", "Vinh Binh"],
                        ["31232", "Vĩnh Thạnh", "Thị trấn", "Vinh Thanh"],
                        ["31237", "Vĩnh Trinh", "Xã", "Vinh Trinh"]
                    ]
                ]
            ]
        ],
        [
            "04", "Cao Bằng", "Tỉnh", "Cao Bang",
            [
                [
                    "043", "Bảo Lạc", "Huyện", "Bao Lac",
                    [
                        ["01321", "Bảo Lạc", "Thị trấn", "Bao Lac"],
                        ["01333", "Bảo Toàn", "Xã", "Bao Toan"],
                        ["01330", "Cô Ba", "Xã", "Co Ba"],
                        ["01324", "Cốc Pàng", "Xã", "Coc Pang"],
                        ["01357", "Đình Phùng", "Xã", "Dinh Phung"],
                        ["01348", "Hồng An", "Xã", "Hong An"],
                        ["01342", "Hồng Trị", "Xã", "Hong Tri"],
                        ["01351", "Hưng Đạo", "Xã", "Hung Dao"],
                        ["01352", "Hưng Thịnh", "Xã", "Hung Thinh"],
                        ["01354", "Huy Giáp", "Xã", "Huy Giap"],
                        ["01336", "Khánh Xuân", "Xã", "Khanh Xuan"],
                        ["01343", "Kim Cúc", "Xã", "Kim Cuc"],
                        ["01345", "Phan Thanh", "Xã", "Phan Thanh"],
                        ["01359", "Sơn Lập", "Xã", "Son Lap"],
                        ["01360", "Sơn Lộ", "Xã", "Son Lo"],
                        ["01327", "Thượng Hà", "Xã", "Thuong Ha"],
                        ["01339", "Xuân Trường", "Xã", "Xuan Truong"]
                    ]
                ],
                [
                    "042", "Bảo Lâm", "Huyện", "Bao Lam",
                    [
                        ["01291", "Đức Hạnh", "Xã", "Duc Hanh"],
                        ["01294", "Lý Bôn", "Xã", "Ly Bon"],
                        ["01312", "Mông Ân", "Xã", "Mong An"],
                        ["01296", "Nam Cao", "Xã", "Nam Cao"],
                        ["01297", "Nam Quang", "Xã", "Nam Quang"],
                        ["01290", "Pác Miầu", "Thị trấn", "Pac Miau"],
                        ["01303", "Quảng Lâm", "Xã", "Quang Lam"],
                        ["01304", "Thạch Lâm", "Xã", "Thach Lam"],
                        ["01315", "Thái Học", "Xã", "Thai Hoc"],
                        ["01316", "Thái Sơn", "Xã", "Thai Son"],
                        ["01309", "Vĩnh Phong", "Xã", "Vinh Phong"],
                        ["01300", "Vĩnh Quang", "Xã", "Vinh Quang"],
                        ["01318", "Yên Thổ", "Xã", "Yen Tho"]
                    ]
                ],
                [
                    "040", "Cao Bằng", "Thành phố", "Cao Bang",
                    [
                        ["01720", "Chu Trinh", "Xã", "Chu Trinh"],
                        ["01282", "Đề Thám", "Phường", "De Tham"],
                        ["01288", "Duyệt Trung", "Phường", "Duyet Trung"],
                        ["01285", "Hoà Chung", "Phường", "Hoa Chung"],
                        ["01273", "Hợp Giang", "Phường", "Hop Giang"],
                        ["01705", "Hưng Đạo", "Xã", "Hung Dao"],
                        ["01279", "Ngọc Xuân", "Phường", "Ngoc Xuan"],
                        ["01270", "Sông Bằng", "Phường", "Song Bang"],
                        ["01267", "Sông Hiến", "Phường", "Song Hien"],
                        ["01276", "Tân Giang", "Phường", "Tan Giang"],
                        ["01693", "Vĩnh Quang", "Xã", "Vinh Quang"]
                    ]
                ],
                [
                    "048", "Hạ Lang", "Huyện", "Ha Lang",
                    [
                        ["01555", "An Lạc", "Xã", "An Lac"],
                        ["01567", "Cô Ngân", "Xã", "Co Ngan"],
                        ["01543", "Đồng Loan", "Xã", "Dong Loan"],
                        ["01546", "Đức Quang", "Xã", "Duc Quang"],
                        ["01549", "Kim Loan", "Xã", "Kim Loan"],
                        ["01537", "Lý Quốc", "Xã", "Ly Quoc"],
                        ["01534", "Minh Long", "Xã", "Minh Long"],
                        ["01552", "Quang Long", "Xã", "Quang Long"],
                        ["01540", "Thắng Lợi", "Xã", "Thang Loi"],
                        ["01558", "Thanh Nhật", "Thị trấn", "Thanh Nhat"],
                        ["01573", "Thị Hoa", "Xã", "Thi Hoa"],
                        ["01564", "Thống Nhất", "Xã", "Thong Nhat"],
                        ["01561", "Vinh Quý", "Xã", "Vinh Quy"]
                    ]
                ],
                [
                    "045", "Hà Quảng", "Huyện", "Ha Quang",
                    [
                        ["01402", "Cải Viên", "Xã", "Cai Vien"],
                        ["01367", "Cần Nông", "Xã", "Can Nong"],
                        ["01366", "Cần Yên", "Xã", "Can Yen"],
                        ["01375", "Đa Thông", "Xã", "Da Thong"],
                        ["01429", "Hồng Sỹ", "Xã", "Hong Sy"],
                        ["01393", "Lũng Nặm", "Xã", "Lung Nam"],
                        ["01384", "Lương Can", "Xã", "Luong Can"],
                        ["01372", "Lương Thông", "Xã", "Luong Thong"],
                        ["01435", "Mã Ba", "Xã", "Ma Ba"],
                        ["01438", "Ngọc Đào", "Xã", "Ngoc Dao"],
                        ["01378", "Ngọc Động", "Xã", "Ngoc Dong"],
                        ["01411", "Nội Thôn", "Xã", "Noi Thon"],
                        ["01432", "Quý Quân", "Xã", "Quy Quan"],
                        ["01417", "Sóc Hà", "Xã", "Soc Ha"],
                        ["01387", "Thanh Long", "Xã", "Thanh Long"],
                        ["01363", "Thông Nông", "Thị trấn", "Thong Nong"],
                        ["01420", "Thượng Thôn", "Xã", "Thuong Thon"],
                        ["01414", "Tổng Cọt", "Xã", "Tong Cot"],
                        ["01399", "Trường Hà", "Xã", "Truong Ha"],
                        ["01392", "Xuân Hòa", "Thị trấn", "Xuan Hoa"],
                        ["01381", "Yên Sơn", "Xã", "Yen Son"]
                    ]
                ],
                [
                    "051", "Hoà An", "Huyện", "Hoa An",
                    [
                        ["01708", "Bạch Đằng", "Xã", "Bach Dang"],
                        ["01711", "Bình Dương", "Xã", "Binh Duong"],
                        ["01666", "Đại Tiến", "Xã", "Dai Tien"],
                        ["01657", "Dân Chủ", "Xã", "Dan Chu"],
                        ["01669", "Đức Long", "Xã", "Duc Long"],
                        ["01696", "Hoàng Tung", "Xã", "Hoang Tung"],
                        ["01723", "Hồng Nam", "Xã", "Hong Nam"],
                        ["01687", "Hồng Việt", "Xã", "Hong Viet"],
                        ["01714", "Lê Chung", "Xã", "Le Chung"],
                        ["01660", "Nam Tuấn", "Xã", "Nam Tuan"],
                        ["01672", "Ngũ Lão", "Xã", "Ngu Lao"],
                        ["01699", "Nguyễn Huệ", "Xã", "Nguyen Hue"],
                        ["01654", "Nước Hai", "Thị trấn", "Nuoc Hai"],
                        ["01702", "Quang Trung", "Xã", "Quang Trung"],
                        ["01675", "Trương Lương", "Xã", "Truong Luong"]
                    ]
                ],
                [
                    "052", "Nguyên Bình", "Huyện", "Nguyen Binh",
                    [
                        ["01738", "Ca Thành", "Xã", "Ca Thanh"],
                        ["01765", "Hoa Thám", "Xã", "Hoa Tham"],
                        ["01783", "Hưng Đạo", "Xã", "Hung Dao"],
                        ["01756", "Mai Long", "Xã", "Mai Long"],
                        ["01747", "Minh Tâm", "Xã", "Minh Tam"],
                        ["01726", "Nguyên Bình", "Thị trấn", "Nguyen Binh"],
                        ["01768", "Phan Thanh", "Xã", "Phan Thanh"],
                        ["01771", "Quang Thành", "Xã", "Quang Thanh"],
                        ["01774", "Tam Kim", "Xã", "Tam Kim"],
                        ["01777", "Thành Công", "Xã", "Thanh Cong"],
                        ["01750", "Thể Dục", "Xã", "The Duc"],
                        ["01780", "Thịnh Vượng", "Xã", "Thinh Vuong"],
                        ["01729", "Tĩnh Túc", "Thị trấn", "Tinh Tuc"],
                        ["01735", "Triệu Nguyên", "Xã", "Trieu Nguyen"],
                        ["01762", "Vũ Minh", "Xã", "Vu Minh"],
                        ["01744", "Vũ Nông", "Xã", "Vu Nong"],
                        ["01732", "Yên Lạc", "Xã", "Yen Lac"]
                    ]
                ],
                [
                    "049", "Quảng Hòa", "Huyện", "Quang Hoa",
                    [
                        ["01630", "Bế Văn Đàn", "Xã", "Be Van Dan"],
                        ["01636", "Cách Linh", "Xã", "Cach Linh"],
                        ["01597", "Cai Bộ", "Xã", "Cai Bo"],
                        ["01606", "Chí Thảo", "Xã", "Chi Thao"],
                        ["01639", "Đại Sơn", "Xã", "Dai Son"],
                        ["01594", "Độc Lập", "Xã", "Doc Lap"],
                        ["01624", "Hạnh Phúc", "Xã", "Hanh Phuc"],
                        ["01648", "Hoà Thuận", "Thị trấn", "Hoa Thuan"],
                        ["01615", "Hồng Quang", "Xã", "Hong Quang"],
                        ["01651", "Mỹ Hưng", "Xã", "My Hung"],
                        ["01618", "Ngọc Động", "Xã", "Ngoc Dong"],
                        ["01579", "Phi Hải", "Xã", "Phi Hai"],
                        ["01603", "Phúc Sen", "Xã", "Phuc Sen"],
                        ["01582", "Quảng Hưng", "Xã", "Quang Hung"],
                        ["01576", "Quảng Uyên", "Thị trấn", "Quang Uyen"],
                        ["01474", "Quốc Toản", "Xã", "Quoc Toan"],
                        ["01627", "Tà Lùng", "Thị trấn", "Ta Lung"],
                        ["01645", "Tiên Thành", "Xã", "Tien Thanh"],
                        ["01609", "Tự Do", "Xã", "Tu Do"]
                    ]
                ],
                [
                    "053", "Thạch An", "Huyện", "Thach An",
                    [
                        ["01789", "Canh Tân", "Xã", "Canh Tan"],
                        ["01786", "Đông Khê", "Thị trấn", "Dong Khe"],
                        ["01822", "Đức Long", "Xã", "Duc Long"],
                        ["01801", "Đức Thông", "Xã", "Duc Thong"],
                        ["01831", "Đức Xuân", "Xã", "Duc Xuan"],
                        ["01792", "Kim Đồng", "Xã", "Kim Dong"],
                        ["01819", "Lê Lai", "Xã", "Le Lai"],
                        ["01828", "Lê Lợi", "Xã", "Le Loi"],
                        ["01795", "Minh Khai", "Xã", "Minh Khai"],
                        ["01813", "Quang Trọng", "Xã", "Quang Trong"],
                        ["01804", "Thái Cường", "Xã", "Thai Cuong"],
                        ["01810", "Thụy Hùng", "Xã", "Thuy Hung"],
                        ["01816", "Trọng Con", "Xã", "Trong Con"],
                        ["01807", "Vân Trình", "Xã", "Van Trinh"]
                    ]
                ],
                [
                    "047", "Trùng Khánh", "Huyện", "Trung Khanh",
                    [
                        ["01471", "Cao Chương", "Xã", "Cao Chuong"],
                        ["01519", "Cao Thăng", "Xã", "Cao Thang"],
                        ["01501", "Chí Viễn", "Xã", "Chi Vien"],
                        ["01495", "Đàm Thuỷ", "Xã", "Dam Thuy"],
                        ["01489", "Đình Phong", "Xã", "Dinh Phong"],
                        ["01525", "Đoài Dương", "Xã", "Doai Duong"],
                        ["01522", "Đức Hồng", "Xã", "Duc Hong"],
                        ["01498", "Khâm Thành", "Xã", "Kham Thanh"],
                        ["01504", "Lăng Hiếu", "Xã", "Lang Hieu"],
                        ["01481", "Ngọc Côn", "Xã", "Ngoc Con"],
                        ["01480", "Ngọc Khê", "Xã", "Ngoc Khe"],
                        ["01507", "Phong Châu", "Xã", "Phong Chau"],
                        ["01483", "Phong Nậm", "Xã", "Phong Nam"],
                        ["01456", "Quang Hán", "Xã", "Quang Han"],
                        ["01465", "Quang Trung", "Xã", "Quang Trung"],
                        ["01468", "Quang Vinh", "Xã", "Quang Vinh"],
                        ["01447", "Trà Lĩnh", "Thị trấn", "Tra Linh"],
                        ["01453", "Tri Phương", "Xã", "Tri Phuong"],
                        ["01477", "Trùng Khánh", "Thị trấn", "Trung Khanh"],
                        ["01516", "Trung Phúc", "Xã", "Trung Phuc"],
                        ["01462", "Xuân Nội", "Xã", "Xuan Noi"]
                    ]
                ]
            ]
        ],
        [
            "48", "Đà Nẵng", "Thành phố", "Da Nang",
            [
                [
                    "495", "Cẩm Lệ", "Quận", "Cam Le",
                    [
                        ["20306", "Hòa An", "Phường", "Hoa An"],
                        ["20305", "Hòa Phát", "Phường", "Hoa Phat"],
                        ["20312", "Hòa Thọ Đông", "Phường", "Hoa Tho Dong"],
                        ["20311", "Hòa Thọ Tây", "Phường", "Hoa Tho Tay"],
                        ["20314", "Hòa Xuân", "Phường", "Hoa Xuan"],
                        ["20260", "Khuê Trung", "Phường", "Khue Trung"]
                    ]
                ],
                [
                    "492", "Hải Châu", "Quận", "Hai Chau",
                    [
                        ["20251", "Bình Hiên", "Phường", "Binh Hien"],
                        ["20254", "Bình Thuận", "Phường", "Binh Thuan"],
                        ["20236", "Hải Châu  I", "Phường", "Hai Chau  I"],
                        ["20239", "Hải Châu II", "Phường", "Hai Chau II"],
                        ["20257", "Hòa Cường Bắc", "Phường", "Hoa Cuong Bac"],
                        ["20258", "Hòa Cường Nam", "Phường", "Hoa Cuong Nam"],
                        ["20246", "Hòa Thuận Đông", "Phường", "Hoa Thuan Dong"],
                        ["20245", "Hòa Thuận Tây", "Phường", "Hoa Thuan Tay"],
                        ["20248", "Nam Dương", "Phường", "Nam Duong"],
                        ["20242", "Phước Ninh", "Phường", "Phuoc Ninh"],
                        ["20233", "Thạch Thang", "Phường", "Thach Thang"],
                        ["20227", "Thanh Bình", "Phường", "Thanh Binh"],
                        ["20230", "Thuận Phước", "Phường", "Thuan Phuoc"]
                    ]
                ],
                [
                    "497", "Hòa Vang", "Huyện", "Hoa Vang",
                    [
                        ["20293", "Hòa Bắc", "Xã", "Hoa Bac"],
                        ["20323", "Hòa Châu", "Xã", "Hoa Chau"],
                        ["20332", "Hòa Khương", "Xã", "Hoa Khuong"],
                        ["20296", "Hòa Liên", "Xã", "Hoa Lien"],
                        ["20308", "Hòa Nhơn", "Xã", "Hoa Nhon"],
                        ["20299", "Hòa Ninh", "Xã", "Hoa Ninh"],
                        ["20320", "Hòa Phong", "Xã", "Hoa Phong"],
                        ["20317", "Hòa Phú", "Xã", "Hoa Phu"],
                        ["20329", "Hòa Phước", "Xã", "Hoa Phuoc"],
                        ["20302", "Hòa Sơn", "Xã", "Hoa Son"],
                        ["20326", "Hòa Tiến", "Xã", "Hoa Tien"]
                    ]
                ],
                [
                    "498", "Hoàng Sa", "Huyện", "Hoang Sa",
                    []
                ],
                [
                    "490", "Liên Chiểu", "Quận", "Lien Chieu",
                    [
                        ["20194", "Hòa Hiệp Bắc", "Phường", "Hoa Hiep Bac"],
                        ["20195", "Hòa Hiệp Nam", "Phường", "Hoa Hiep Nam"],
                        ["20197", "Hòa Khánh Bắc", "Phường", "Hoa Khanh Bac"],
                        ["20198", "Hòa Khánh Nam", "Phường", "Hoa Khanh Nam"],
                        ["20200", "Hòa Minh", "Phường", "Hoa Minh"]
                    ]
                ],
                [
                    "494", "Ngũ Hành Sơn", "Quận", "Ngu Hanh Son",
                    [
                        ["20290", "Hoà Hải", "Phường", "Hoa Hai"],
                        ["20287", "Hoà Quý", "Phường", "Hoa Quy"],
                        ["20285", "Khuê Mỹ", "Phường", "Khue My"],
                        ["20284", "Mỹ An", "Phường", "My An"]
                    ]
                ],
                [
                    "493", "Sơn Trà", "Quận", "Son Tra",
                    [
                        ["20272", "An Hải Bắc", "Phường", "An Hai Bac"],
                        ["20281", "An Hải Đông", "Phường", "An Hai Dong"],
                        ["20278", "An Hải Tây", "Phường", "An Hai Tay"],
                        ["20269", "Mân Thái", "Phường", "Man Thai"],
                        ["20266", "Nại Hiên Đông", "Phường", "Nai Hien Dong"],
                        ["20275", "Phước Mỹ", "Phường", "Phuoc My"],
                        ["20263", "Thọ Quang", "Phường", "Tho Quang"]
                    ]
                ],
                [
                    "491", "Thanh Khê", "Quận", "Thanh Khe",
                    [
                        ["20224", "An Khê", "Phường", "An Khe"],
                        ["20215", "Chính Gián", "Phường", "Chinh Gian"],
                        ["20225", "Hòa Khê", "Phường", "Hoa Khe"],
                        ["20203", "Tam Thuận", "Phường", "Tam Thuan"],
                        ["20212", "Tân Chính", "Phường", "Tan Chinh"],
                        ["20221", "Thạc Gián", "Phường", "Thac Gian"],
                        ["20207", "Thanh Khê Đông", "Phường", "Thanh Khe Dong"],
                        ["20206", "Thanh Khê Tây", "Phường", "Thanh Khe Tay"],
                        ["20218", "Vĩnh Trung", "Phường", "Vinh Trung"],
                        ["20209", "Xuân Hà", "Phường", "Xuan Ha"]
                    ]
                ]
            ]
        ],
        [
            "66", "Đắk Lắk", "Tỉnh", "Dak Lak",
            [
                [
                    "647", "Buôn Đôn", "Huyện", "Buon Don",
                    [
                        ["24247", "Cuôr KNia", "Xã", "Cuor KNia"],
                        ["24250", "Ea Bar", "Xã", "Ea Bar"],
                        ["24238", "Ea Huar", "Xã", "Ea Huar"],
                        ["24253", "Ea Nuôl", "Xã", "Ea Nuol"],
                        ["24241", "Ea Wer", "Xã", "Ea Wer"],
                        ["24235", "Krông Na", "Xã", "Krong Na"],
                        ["24244", "Tân Hoà", "Xã", "Tan Hoa"]
                    ]
                ],
                [
                    "644", "Buôn Hồ", "Thị Xã", "Buon Ho",
                    [
                        ["24308", "An Bình", "Phường", "An Binh"],
                        ["24305", "An Lạc", "Phường", "An Lac"],
                        ["24332", "Bình Tân", "Phường", "Binh Tan"],
                        ["24337", "Bình Thuận", "Xã", "Binh Thuan"],
                        ["24340", "Cư Bao", "Xã", "Cu Bao"],
                        ["24318", "Đạt Hiếu", "Phường", "Dat Hieu"],
                        ["24322", "Đoàn Kết", "Phường", "Doan Ket"],
                        ["24325", "Ea Blang", "Xã", "Ea Blang"],
                        ["24328", "Ea Drông", "Xã", "Ea Drong"],
                        ["24334", "Ea Siên", "Xã", "Ea Sien"],
                        ["24311", "Thiện An", "Phường", "Thien An"],
                        ["24331", "Thống Nhất", "Phường", "Thong Nhat"]
                    ]
                ],
                [
                    "643", "Buôn Ma Thuột", "Thành phố", "Buon Ma Thuot",
                    [
                        ["24160", "Cư ÊBur", "Xã", "Cu EBur"],
                        ["24169", "Ea Kao", "Xã", "Ea Kao"],
                        ["24151", "Ea Tam", "Phường", "Ea Tam"],
                        ["24163", "Ea Tu", "Xã", "Ea Tu"],
                        ["24175", "Hòa Khánh", "Xã", "Hoa Khanh"],
                        ["24172", "Hòa Phú", "Xã", "Hoa Phu"],
                        ["24166", "Hòa Thắng", "Xã", "Hoa Thang"],
                        ["24157", "Hòa Thuận", "Xã", "Hoa Thuan"],
                        ["24178", "Hòa Xuân", "Xã", "Hoa Xuan"],
                        ["24154", "Khánh Xuân", "Phường", "Khanh Xuan"],
                        ["24124", "Tân An", "Phường", "Tan An"],
                        ["24121", "Tân Hòa", "Phường", "Tan Hoa"],
                        ["24118", "Tân Lập", "Phường", "Tan Lap"],
                        ["24136", "Tân Lợi", "Phường", "Tan Loi"],
                        ["24142", "Tân Thành", "Phường", "Tan Thanh"],
                        ["24145", "Tân Tiến", "Phường", "Tan Tien"],
                        ["24133", "Thắng Lợi", "Phường", "Thang Loi"],
                        ["24139", "Thành Công", "Phường", "Thanh Cong"],
                        ["24130", "Thành Nhất", "Phường", "Thanh Nhat"],
                        ["24127", "Thống Nhất", "Phường", "Thong Nhat"],
                        ["24148", "Tự An", "Phường", "Tu An"]
                    ]
                ],
                [
                    "657", "Cư Kuin", "Huyện", "Cu Kuin",
                    [
                        ["24541", "Cư Ê Wi", "Xã", "Cu E Wi"],
                        ["24561", "Dray Bhăng", "Xã", "Dray Bhang"],
                        ["24550", "Ea BHốk", "Xã", "Ea BHok"],
                        ["24553", "Ea Hu", "Xã", "Ea Hu"],
                        ["24544", "Ea Ktur", "Xã", "Ea Ktur"],
                        ["24540", "Ea Ning", "Xã", "Ea Ning"],
                        ["24547", "Ea Tiêu", "Xã", "Ea Tieu"],
                        ["24562", "Hòa Hiệp", "Xã", "Hoa Hiep"]
                    ]
                ],
                [
                    "648", "Cư M'gar", "Huyện", "Cu M'gar",
                    [
                        ["24271", "Cư Dliê M'nông", "Xã", "Cu Dlie M'nong"],
                        ["24289", "Cư M'gar", "Xã", "Cu M'gar"],
                        ["24298", "Cư Suê", "Xã", "Cu Sue"],
                        ["24301", "Cuor Đăng", "Xã", "Cuor Dang"],
                        ["24292", "Ea D'Rơng", "Xã", "Ea D'Rong"],
                        ["24274", "Ea H'đinh", "Xã", "Ea H'dinh"],
                        ["24280", "Ea KPam", "Xã", "Ea KPam"],
                        ["24265", "Ea Kiết", "Xã", "Ea Kiet"],
                        ["24264", "Ea Kuêh", "Xã", "Ea Kueh"],
                        ["24283", "Ea M'DRóh", "Xã", "Ea M'DRoh"],
                        ["24295", "Ea M'nang", "Xã", "Ea M'nang"],
                        ["24256", "Ea Pốk", "Thị trấn", "Ea Pok"],
                        ["24268", "Ea Tar", "Xã", "Ea Tar"],
                        ["24277", "Ea Tul", "Xã", "Ea Tul"],
                        ["24286", "Quảng Hiệp", "Xã", "Quang Hiep"],
                        ["24259", "Quảng Phú", "Thị trấn", "Quang Phu"],
                        ["24262", "Quảng Tiến", "Xã", "Quang Tien"]
                    ]
                ],
                [
                    "645", "Ea H'leo", "Huyện", "Ea H'leo",
                    [
                        ["24194", "Cư A Mung", "Xã", "Cu A Mung"],
                        ["24196", "Cư Mốt", "Xã", "Cu Mot"],
                        ["24205", "Dliê Yang", "Xã", "Dlie Yang"],
                        ["24181", "Ea Drăng", "Thị trấn", "Ea Drang"],
                        ["24184", "Ea H'leo", "Xã", "Ea H'leo"],
                        ["24199", "Ea Hiao", "Xã", "Ea Hiao"],
                        ["24202", "Ea Khal", "Xã", "Ea Khal"],
                        ["24208", "Ea Nam", "Xã", "Ea Nam"],
                        ["24190", "Ea Ral", "Xã", "Ea Ral"],
                        ["24187", "Ea Sol", "Xã", "Ea Sol"],
                        ["24207", "Ea Tir", "Xã", "Ea Tir"],
                        ["24193", "Ea Wy", "Xã", "Ea Wy"]
                    ]
                ],
                [
                    "651", "Ea Kar", "Huyện", "Ea Kar",
                    [
                        ["24406", "Cư Bông", "Xã", "Cu Bong"],
                        ["24404", "Cư ELang", "Xã", "Cu ELang"],
                        ["24385", "Cư Huê", "Xã", "Cu Hue"],
                        ["24409", "Cư Jang", "Xã", "Cu Jang"],
                        ["24397", "Cư Ni", "Xã", "Cu Ni"],
                        ["24401", "Cư Prông", "Xã", "Cu Prong"],
                        ["24391", "Ea Đar", "Xã", "Ea Dar"],
                        ["24373", "Ea Kar", "Thị trấn", "Ea Kar"],
                        ["24394", "Ea Kmút", "Xã", "Ea Kmut"],
                        ["24376", "Ea Knốp", "Thị trấn", "Ea Knop"],
                        ["24403", "Ea Ô", "Xã", "Ea O"],
                        ["24400", "Ea Păl", "Xã", "Ea Pal"],
                        ["24380", "Ea Sar", "Xã", "Ea Sar"],
                        ["24379", "Ea Sô", "Xã", "Ea So"],
                        ["24388", "Ea Tih", "Xã", "Ea Tih"],
                        ["24382", "Xuân Phú", "Xã", "Xuan Phu"]
                    ]
                ],
                [
                    "646", "Ea Súp", "Huyện", "Ea Sup",
                    [
                        ["24226", "Cư KBang", "Xã", "Cu KBang"],
                        ["24232", "Cư M'Lan", "Xã", "Cu M'Lan"],
                        ["24229", "Ea Bung", "Xã", "Ea Bung"],
                        ["24223", "Ea Lê", "Xã", "Ea Le"],
                        ["24217", "Ea Rốk", "Xã", "Ea Rok"],
                        ["24211", "Ea Súp", "Thị trấn", "Ea Sup"],
                        ["24215", "Ia JLơi", "Xã", "Ia JLoi"],
                        ["24214", "Ia Lốp", "Xã", "Ia Lop"],
                        ["24221", "Ia RVê", "Xã", "Ia RVe"],
                        ["24220", "Ya Tờ Mốt", "Xã", "Ya To Mot"]
                    ]
                ],
                [
                    "655", "Krông A Na", "Huyện", "Krong A Na",
                    [
                        ["24568", "Băng A Drênh", "Xã", "Bang A Drenh"],
                        ["24574", "Bình Hòa", "Xã", "Binh Hoa"],
                        ["24538", "Buôn Trấp", "Thị trấn", "Buon Trap"],
                        ["24556", "Dray Sáp", "Xã", "Dray Sap"],
                        ["24571", "Dur KMăl", "Xã", "Dur KMal"],
                        ["24565", "Ea Bông", "Xã", "Ea Bong"],
                        ["24559", "Ea Na", "Xã", "Ea Na"],
                        ["24577", "Quảng Điền", "Xã", "Quang Dien"]
                    ]
                ],
                [
                    "653", "Krông Bông", "Huyện", "Krong Bong",
                    [
                        ["24484", "Cư Drăm", "Xã", "Cu Dram"],
                        ["24454", "Cư KTy", "Xã", "Cu KTy"],
                        ["24478", "Cư Pui", "Xã", "Cu Pui"],
                        ["24451", "Dang Kang", "Xã", "Dang Kang"],
                        ["24472", "Ea Trul", "Xã", "Ea Trul"],
                        ["24466", "Hòa Lễ", "Xã", "Hoa Le"],
                        ["24463", "Hòa Phong", "Xã", "Hoa Phong"],
                        ["24481", "Hòa Sơn", "Xã", "Hoa Son"],
                        ["24460", "Hòa Tân", "Xã", "Hoa Tan"],
                        ["24457", "Hòa Thành", "Xã", "Hoa Thanh"],
                        ["24475", "Khuê Ngọc Điền", "Xã", "Khue Ngoc Dien"],
                        ["24448", "Krông Kmar", "Thị trấn", "Krong Kmar"],
                        ["24487", "Yang Mao", "Xã", "Yang Mao"],
                        ["24469", "Yang Reh", "Xã", "Yang Reh"]
                    ]
                ],
                [
                    "649", "Krông Búk", "Huyện", "Krong Buk",
                    [
                        ["24310", "Chư KBô", "Xã", "Chu KBo"],
                        ["24307", "Cư Né", "Xã", "Cu Ne"],
                        ["24313", "Cư Pơng", "Xã", "Cu Pong"],
                        ["24319", "Ea Ngai", "Xã", "Ea Ngai"],
                        ["24314", "Ea Sin", "Xã", "Ea Sin"],
                        ["24316", "Pơng Drang", "Xã", "Pong Drang"],
                        ["24317", "Tân Lập", "Xã", "Tan Lap"]
                    ]
                ],
                [
                    "650", "Krông Năng", "Huyện", "Krong Nang",
                    [
                        ["24367", "Cư Klông", "Xã", "Cu Klong"],
                        ["24346", "ĐLiê Ya", "Xã", "DLie Ya"],
                        ["24360", "Ea Dăh", "Xã", "Ea Dah"],
                        ["24361", "Ea Hồ", "Xã", "Ea Ho"],
                        ["24359", "Ea Puk", "Xã", "Ea Puk"],
                        ["24352", "Ea Tam", "Xã", "Ea Tam"],
                        ["24370", "Ea Tân", "Xã", "Ea Tan"],
                        ["24349", "Ea Tóh", "Xã", "Ea Toh"],
                        ["24343", "Krông Năng", "Thị trấn", "Krong Nang"],
                        ["24355", "Phú Lộc", "Xã", "Phu Loc"],
                        ["24364", "Phú Xuân", "Xã", "Phu Xuan"],
                        ["24358", "Tam Giang", "Xã", "Tam Giang"]
                    ]
                ],
                [
                    "654", "Krông Pắc", "Huyện", "Krong Pac",
                    [
                        ["24520", "Ea Hiu", "Xã", "Ea Hiu"],
                        ["24505", "Ea KNuec", "Xã", "Ea KNuec"],
                        ["24499", "Ea Kênh", "Xã", "Ea Kenh"],
                        ["24496", "Ea Kly", "Xã", "Ea Kly"],
                        ["24514", "Ea Kuăng", "Xã", "Ea Kuang"],
                        ["24502", "Ea Phê", "Xã", "Ea Phe"],
                        ["24532", "Ea Uy", "Xã", "Ea Uy"],
                        ["24535", "Ea Yiêng", "Xã", "Ea Yieng"],
                        ["24508", "Ea Yông", "Xã", "Ea Yong"],
                        ["24511", "Hòa An", "Xã", "Hoa An"],
                        ["24517", "Hòa Đông", "Xã", "Hoa Dong"],
                        ["24523", "Hòa Tiến", "Xã", "Hoa Tien"],
                        ["24493", "KRông Búk", "Xã", "KRong Buk"],
                        ["24490", "Phước An", "Thị trấn", "Phuoc An"],
                        ["24526", "Tân Tiến", "Xã", "Tan Tien"],
                        ["24529", "Vụ Bổn", "Xã", "Vu Bon"]
                    ]
                ],
                [
                    "656", "Lắk", "Huyện", "Lak",
                    [
                        ["24586", "Bông Krang", "Xã", "Bong Krang"],
                        ["24595", "Buôn Tría", "Xã", "Buon Tria"],
                        ["24592", "Buôn Triết", "Xã", "Buon Triet"],
                        ["24589", "Đắk Liêng", "Xã", "Dak Lieng"],
                        ["24601", "Đắk Nuê", "Xã", "Dak Nue"],
                        ["24598", "Đắk Phơi", "Xã", "Dak Phoi"],
                        ["24610", "Ea R'Bin", "Xã", "Ea R'Bin"],
                        ["24604", "Krông Nô", "Xã", "Krong No"],
                        ["24580", "Liên Sơn", "Thị trấn", "Lien Son"],
                        ["24607", "Nam Ka", "Xã", "Nam Ka"],
                        ["24583", "Yang Tao", "Xã", "Yang Tao"]
                    ]
                ],
                [
                    "652", "M'Đrắk", "Huyện", "M'Drak",
                    [
                        ["24439", "Cư K Róa", "Xã", "Cu K Roa"],
                        ["24436", "Cư M'ta", "Xã", "Cu M'ta"],
                        ["24415", "Cư Prao", "Xã", "Cu Prao"],
                        ["24444", "Cư San", "Xã", "Cu San"],
                        ["24424", "Ea H'MLay", "Xã", "Ea H'MLay"],
                        ["24421", "Ea Lai", "Xã", "Ea Lai"],
                        ["24430", "Ea M' Doal", "Xã", "Ea M' Doal"],
                        ["24418", "Ea Pil", "Xã", "Ea Pil"],
                        ["24433", "Ea Riêng", "Xã", "Ea Rieng"],
                        ["24445", "Ea Trang", "Xã", "Ea Trang"],
                        ["24442", "Krông Á", "Xã", "Krong A"],
                        ["24427", "Krông Jing", "Xã", "Krong Jing"],
                        ["24412", "M'Đrắk", "Thị trấn", "M'Drak"]
                    ]
                ]
            ]
        ],
        [
            "67", "Đắk Nông", "Tỉnh", "Dak Nong",
            [
                [
                    "662", "Cư Jút", "Huyện", "Cu Jut",
                    [
                        ["24658", "Cư Knia", "Xã", "Cu Knia"],
                        ["24652", "Đắk DRông", "Xã", "Dak DRong"],
                        ["24643", "Đắk Wil", "Xã", "Dak Wil"],
                        ["24646", "Ea Pô", "Xã", "Ea Po"],
                        ["24640", "Ea T'Ling", "Thị trấn", "Ea T'Ling"],
                        ["24649", "Nam Dong", "Xã", "Nam Dong"],
                        ["24655", "Tâm Thắng", "Xã", "Tam Thang"],
                        ["24661", "Trúc Sơn", "Xã", "Truc Son"]
                    ]
                ],
                [
                    "661", "Đăk Glong", "Huyện", "Dak Glong",
                    [
                        ["24622", "Đắk Ha", "Xã", "Dak Ha"],
                        ["24634", "Đắk Plao", "Xã", "Dak Plao"],
                        ["24625", "Đắk R'Măng", "Xã", "Dak R'Mang"],
                        ["24637", "Đắk Som", "Xã", "Dak Som"],
                        ["24620", "Quảng Hoà", "Xã", "Quang Hoa"],
                        ["24631", "Quảng Khê", "Xã", "Quang Khe"],
                        ["24616", "Quảng Sơn", "Xã", "Quang Son"]
                    ]
                ],
                [
                    "663", "Đắk Mil", "Huyện", "Dak Mil",
                    [
                        ["24667", " Đắk Lao", "Xã", " Dak Lao"],
                        ["24673", "Đắk Gằn", "Xã", "Dak Gan"],
                        ["24664", "Đắk Mil", "Thị trấn", "Dak Mil"],
                        ["24677", "Đắk N'Drót", "Xã", "Dak N'Drot"],
                        ["24670", "Đắk R'La", "Xã", "Dak R'La"],
                        ["24679", "Đắk Sắk", "Xã", "Dak Sak"],
                        ["24676", "Đức Mạnh", "Xã", "Duc Manh"],
                        ["24685", "Đức Minh", "Xã", "Duc Minh"],
                        ["24678", "Long Sơn", "Xã", "Long Son"],
                        ["24682", "Thuận An", "Xã", "Thuan An"]
                    ]
                ],
                [
                    "666", "Đắk R'Lấp", "Huyện", "Dak R'Lap",
                    [
                        ["24763", "Đắk Ru", "Xã", "Dak Ru"],
                        ["24760", "Đắk Sin", "Xã", "Dak Sin"],
                        ["24750", "Đắk Wer", "Xã", "Dak Wer"],
                        ["24757", "Đạo Nghĩa", "Xã", "Dao Nghia"],
                        ["24761", "Hưng Bình", "Xã", "Hung Binh"],
                        ["24733", "Kiến Đức", "Thị trấn", "Kien Duc"],
                        ["24754", "Kiến Thành", "Xã", "Kien Thanh"],
                        ["24756", "Nghĩa Thắng", "Xã", "Nghia Thang"],
                        ["24751", "Nhân Cơ", "Xã", "Nhan Co"],
                        ["24766", "Nhân Đạo", "Xã", "Nhan Dao"],
                        ["24745", "Quảng Tín", "Xã", "Quang Tin"]
                    ]
                ],
                [
                    "665", "Đắk Song", "Huyện", "Dak Song",
                    [
                        ["24719", "Đắk Hòa", "Xã", "Dak Hoa"],
                        ["24718", "Đắk Môl", "Xã", "Dak Mol"],
                        ["24727", "Đắk N'Dung", "Xã", "Dak N'Dung"],
                        ["24717", "Đức An", "Thị trấn", "Duc An"],
                        ["24721", "Nam Bình", "Xã", "Nam Binh"],
                        ["24728", "Nâm N'Jang", "Xã", "Nam N'Jang"],
                        ["24722", "Thuận Hà", "Xã", "Thuan Ha"],
                        ["24724", "Thuận Hạnh", "Xã", "Thuan Hanh"],
                        ["24730", "Trường Xuân", "Xã", "Truong Xuan"]
                    ]
                ],
                [
                    "660", "Gia Nghĩa", "Thành phố", "Gia Nghia",
                    [
                        ["24628", "Đắk Nia", "Xã", "Dak Nia"],
                        ["24618", "Đăk R'Moan", "Xã", "Dak R'Moan"],
                        ["24611", "Nghĩa Đức", "Phường", "Nghia Duc"],
                        ["24614", "Nghĩa Phú", "Phường", "Nghia Phu"],
                        ["24615", "Nghĩa Tân", "Phường", "Nghia Tan"],
                        ["24612", "Nghĩa Thành", "Phường", "Nghia Thanh"],
                        ["24617", "Nghĩa Trung", "Phường", "Nghia Trung"],
                        ["24619", "Quảng Thành", "Phường", "Quang Thanh"]
                    ]
                ],
                [
                    "664", "Krông Nô", "Huyện", "Krong No",
                    [
                        ["24694", "Buôn Choah", "Xã", "Buon Choah"],
                        ["24700", "Đắk Drô", "Xã", "Dak Dro"],
                        ["24688", "Đắk Mâm", "Thị trấn", "Dak Mam"],
                        ["24709", "Đắk Nang", "Xã", "Dak Nang"],
                        ["24691", "Đắk Sôr", "Xã", "Dak Sor"],
                        ["24706", "Đức Xuyên", "Xã", "Duc Xuyen"],
                        ["24697", "Nam Đà", "Xã", "Nam Da"],
                        ["24715", "Nâm N'Đir", "Xã", "Nam N'Dir"],
                        ["24703", "Nâm Nung", "Xã", "Nam Nung"],
                        ["24692", "Nam Xuân", "Xã", "Nam Xuan"],
                        ["24712", "Quảng Phú", "Xã", "Quang Phu"],
                        ["24699", "Tân Thành", "Xã", "Tan Thanh"]
                    ]
                ],
                [
                    "667", "Tuy Đức", "Huyện", "Tuy Duc",
                    [
                        ["24739", "Đắk Búk So", "Xã", "Dak Buk So"],
                        ["24746", "Đắk Ngo", "Xã", "Dak Ngo"],
                        ["24742", "Đắk R'Tíh", "Xã", "Dak R'Tih"],
                        ["24740", "Quảng Tâm", "Xã", "Quang Tam"],
                        ["24748", "Quảng Tân", "Xã", "Quang Tan"],
                        ["24736", "Quảng Trực", "Xã", "Quang Truc"]
                    ]
                ]
            ]
        ],
        [
            "11", "Điện Biên", "Tỉnh", "Dien Bien",
            [
                [
                    "100", "Điện Biên", "Huyện", "Dien Bien",
                    [
                        ["03359", "Hẹ Muông", "Xã", "He Muong"],
                        ["03323", "Hua Thanh", "Xã", "Hua Thanh"],
                        ["03367", "Mường Lói", "Xã", "Muong Loi"],
                        ["03364", "Mường Nhà", "Xã", "Muong Nha"],
                        ["03319", "Mường Pồn", "Xã", "Muong Pon"],
                        ["03365", "Na Tông", "Xã", "Na Tong"],
                        ["03361", "Na Ư", "Xã", "Na U"],
                        ["03352", "Noọng Hẹt", "Xã", "Noong Het"],
                        ["03349", "Noong Luống", "Xã", "Noong Luong"],
                        ["03358", "Núa Ngam", "Xã", "Nua Ngam"],
                        ["03340", "Pa Thơm", "Xã", "Pa Thom"],
                        ["03368", "Phu Luông", "Xã", "Phu Luong"],
                        ["03356", "Pom Lót", "Xã", "Pom Lot"],
                        ["03355", "Sam Mứn", "Xã", "Sam Mun"],
                        ["03343", "Thanh An", "Xã", "Thanh An"],
                        ["03337", "Thanh Chăn", "Xã", "Thanh Chan"],
                        ["03331", "Thanh Hưng", "Xã", "Thanh Hung"],
                        ["03328", "Thanh Luông", "Xã", "Thanh Luong"],
                        ["03322", "Thanh Nưa", "Xã", "Thanh Nua"],
                        ["03334", "Thanh Xương", "Xã", "Thanh Xuong"],
                        ["03346", "Thanh Yên", "Xã", "Thanh Yen"]
                    ]
                ],
                [
                    "101", "Điện Biên Đông", "Huyện", "Dien Bien Dong",
                    [
                        ["03211", "Chiềng Sơ", "Xã", "Chieng So"],
                        ["03203", "Điện Biên Đông", "Thị trấn", "Dien Bien Dong"],
                        ["03385", "Háng Lìa", "Xã", "Hang Lia"],
                        ["03376", "Keo Lôm", "Xã", "Keo Lom"],
                        ["03379", "Luân Giới", "Xã", "Luan Gioi"],
                        ["03214", "Mường Luân", "Xã", "Muong Luan"],
                        ["03205", "Na Son", "Xã", "Na Son"],
                        ["03371", "Nong U", "Xã", "Nong U"],
                        ["03208", "Phì Nhừ", "Xã", "Phi Nhu"],
                        ["03382", "Phình Giàng", "Xã", "Phinh Giang"],
                        ["03383", "Pú Hồng", "Xã", "Pu Hong"],
                        ["03370", "Pú Nhi", "Xã", "Pu Nhi"],
                        ["03384", "Tìa Dình", "Xã", "Tia Dinh"],
                        ["03373", "Xa Dung", "Xã", "Xa Dung"]
                    ]
                ],
                [
                    "094", "Điện Biên Phủ", "Thành phố", "Dien Bien Phu",
                    [
                        ["03127", "Him Lam", "Phường", "Him Lam"],
                        ["03325", "Mường Phăng", "Xã", "Muong Phang"],
                        ["03136", "Mường Thanh", "Phường", "Muong Thanh"],
                        ["03317", "Nà Nhạn", "Xã", "Na Nhan"],
                        ["03316", "Nà Tấu", "Xã", "Na Tau"],
                        ["03139", "Nam Thanh", "Phường", "Nam Thanh"],
                        ["03124", "Noong Bua", "Phường", "Noong Bua"],
                        ["03326", "Pá Khoang", "Xã", "Pa Khoang"],
                        ["03133", "Tân Thanh", "Phường", "Tan Thanh"],
                        ["03130", "Thanh Bình", "Phường", "Thanh Binh"],
                        ["03145", "Thanh Minh", "Xã", "Thanh Minh"],
                        ["03142", "Thanh Trường", "Phường", "Thanh Truong"]
                    ]
                ],
                [
                    "102", "Mường Ảng", "Huyện", "Muong Ang",
                    [
                        ["03310", "Ẳng Cang", "Xã", "Ang Cang"],
                        ["03307", "Ẳng Nưa", "Xã", "Ang Nua"],
                        ["03292", "Ẳng Tở", "Xã", "Ang To"],
                        ["03301", "Búng Lao", "Xã", "Bung Lao"],
                        ["03256", "Mường Ảng", "Thị trấn", "Muong Ang"],
                        ["03286", "Mường Đăng", "Xã", "Muong Dang"],
                        ["03313", "Mường Lạn", "Xã", "Muong Lan"],
                        ["03312", "Nặm Lịch", "Xã", "Nam Lich"],
                        ["03287", "Ngối Cáy", "Xã", "Ngoi Cay"],
                        ["03302", "Xuân Lao", "Xã", "Xuan Lao"]
                    ]
                ],
                [
                    "097", "Mường Chà", "Huyện", "Muong Cha",
                    [
                        ["03190", "Hừa Ngài", "Xã", "Hua Ngai"],
                        ["03196", "Huổi Lèng", "Xã", "Huoi Leng"],
                        ["03191", "Huổi Mí", "Xã", "Huoi Mi"],
                        ["03200", "Ma Thì Hồ", "Xã", "Ma Thi Ho"],
                        ["03172", "Mường Chà", "Thị Trấn", "Muong Cha"],
                        ["03202", "Mường Mươn", "Xã", "Muong Muon"],
                        ["03181", "Mường Tùng", "Xã", "Muong Tung"],
                        ["03201", "Na Sang", "Xã", "Na Sang"],
                        ["03194", "Nậm Nèn", "Xã", "Nam Nen"],
                        ["03193", "Pa Ham", "Xã", "Pa Ham"],
                        ["03197", "Sa Lông", "Xã", "Sa Long"],
                        ["03178", "Xá Tổng", "Xã", "Xa Tong"]
                    ]
                ],
                [
                    "095", "Mường Lay", "Thị Xã", "Muong Lay",
                    [
                        ["03184", "Lay Nưa", "Xã", "Lay Nua"],
                        ["03151", "Na Lay", "Phường", "Na Lay"],
                        ["03148", "Sông Đà", "Phường", "Song Da"]
                    ]
                ],
                [
                    "096", "Mường Nhé", "Huyện", "Muong Nhe",
                    [
                        ["03157", "Chung Chải", "Xã", "Chung Chai"],
                        ["03177", "Huổi Lếnh", "Xã", "Huoi Lenh"],
                        ["03158", "Leng Su Sìn", "Xã", "Leng Su Sin"],
                        ["03160", "Mường Nhé", "Xã", "Muong Nhe"],
                        ["03163", "Mường Toong", "Xã", "Muong Toong"],
                        ["03162", "Nậm Kè", "Xã", "Nam Ke"],
                        ["03161", "Nậm Vì", "Xã", "Nam Vi"],
                        ["03159", "Pá Mỳ", "Xã", "Pa My"],
                        ["03164", "Quảng Lâm", "Xã", "Quang Lam"],
                        ["03155", "Sen Thượng", "Xã", "Sen Thuong"],
                        ["03154", "Sín Thầu", "Xã", "Sin Thau"]
                    ]
                ],
                [
                    "103", "Nậm Pồ", "Huyện", "Nam Po",
                    [
                        ["03166", "Chà Cang", "Xã", "Cha Cang"],
                        ["03187", "Chà Nưa", "Xã", "Cha Nua"],
                        ["03175", "Chà Tở", "Xã", "Cha To"],
                        ["03170", "Nà Bủng", "Xã", "Na Bung"],
                        ["03167", "Na Cô Sa", "Xã", "Na Co Sa"],
                        ["03169", "Nà Hỳ", "Xã", "Na Hy"],
                        ["03168", "Nà Khoa", "Xã", "Na Khoa"],
                        ["03173", "Nậm Chua", "Xã", "Nam Chua"],
                        ["03174", "Nậm Khăn", "Xã", "Nam Khan"],
                        ["03171", "Nậm Nhừ", "Xã", "Nam Nhu"],
                        ["03156", "Nậm Tin", "Xã", "Nam Tin"],
                        ["03165", "Pa Tần", "Xã", "Pa Tan"],
                        ["03198", "Phìn Hồ", "Xã", "Phin Ho"],
                        ["03199", "Si Pa Phìn", "Xã", "Si Pa Phin"],
                        ["03176", "Vàng Đán", "Xã", "Vang Dan"]
                    ]
                ],
                [
                    "098", "Tủa Chùa", "Huyện", "Tua Chua",
                    [
                        ["03220", "Huổi Só", "Xã", "Huoi So"],
                        ["03229", "Lao Xả Phình", "Xã", "Lao Xa Phinh"],
                        ["03250", "Mường Báng", "Xã", "Muong Bang"],
                        ["03247", "Mường Đun", "Xã", "Muong Dun"],
                        ["03244", "Sáng Nhè", "Xã", "Sang Nhe"],
                        ["03241", "Sính Phình", "Xã", "Sinh Phinh"],
                        ["03232", "Tả Phìn", "Xã", "Ta Phin"],
                        ["03226", "Tả Sìn Thàng", "Xã", "Ta Sin Thang"],
                        ["03238", "Trung Thu", "Xã", "Trung Thu"],
                        ["03217", "Tủa Chùa", "Thị trấn", "Tua Chua"],
                        ["03235", "Tủa Thàng", "Xã", "Tua Thang"],
                        ["03223", "Xín Chải", "Xã", "Xin Chai"]
                    ]
                ],
                [
                    "099", "Tuần Giáo", "Huyện", "Tuan Giao",
                    [
                        ["03299", "Chiềng Đông", "Xã", "Chieng Dong"],
                        ["03298", "Chiềng Sinh", "Xã", "Chieng Sinh"],
                        ["03262", "Mùn Chung", "Xã", "Mun Chung"],
                        ["03284", "Mường Khong", "Xã", "Muong Khong"],
                        ["03268", "Mường Mùn", "Xã", "Muong Mun"],
                        ["03277", "Mường Thín", "Xã", "Muong Thin"],
                        ["03283", "Nà Sáy", "Xã", "Na Say"],
                        ["03263", "Nà Tòng", "Xã", "Na Tong"],
                        ["03259", "Phình Sáng", "Xã", "Phinh Sang"],
                        ["03271", "Pú Nhung", "Xã", "Pu Nhung"],
                        ["03269", "Pú Xi", "Xã", "Pu Xi"],
                        ["03289", "Quài Cang", "Xã", "Quai Cang"],
                        ["03274", "Quài Nưa", "Xã", "Quai Nua"],
                        ["03295", "Quài Tở", "Xã", "Quai To"],
                        ["03260", "Rạng Đông", "Xã", "Rang Dong"],
                        ["03265", "Ta Ma", "Xã", "Ta Ma"],
                        ["03304", "Tênh Phông", "Xã", "Tenh Phong"],
                        ["03280", "Tỏa Tình", "Xã", "Toa Tinh"],
                        ["03253", "Tuần Giáo", "Thị trấn", "Tuan Giao"]
                    ]
                ]
            ]
        ],
        [
            "75", "Đồng Nai", "Tỉnh", "Dong Nai",
            [
                [
                    "731", "Biên Hòa", "Thành phố", "Bien Hoa",
                    [
                        ["26050", "An Bình", "Phường", "An Binh"],
                        ["26371", "An Hòa", "Phường", "An Hoa"],
                        ["26047", "Bình Đa", "Phường", "Binh Da"],
                        ["26053", "Bửu Hòa", "Phường", "Buu Hoa"],
                        ["26011", "Bửu Long", "Phường", "Buu Long"],
                        ["26065", "Hiệp Hòa", "Phường", "Hiep Hoa"],
                        ["26002", "Hố Nai", "Phường", "Ho Nai"],
                        ["26068", "Hóa An", "Phường", "Hoa An"],
                        ["26038", "Hòa Bình", "Phường", "Hoa Binh"],
                        ["26020", "Long Bình", "Phường", "Long Binh"],
                        ["26056", "Long Bình Tân", "Phường", "Long Binh Tan"],
                        ["26380", "Long Hưng", "Xã", "Long Hung"],
                        ["26377", "Phước Tân", "Phường", "Phuoc Tan"],
                        ["26023", "Quang Vinh", "Phường", "Quang Vinh"],
                        ["26041", "Quyết Thắng", "Phường", "Quyet Thang"],
                        ["26017", "Tam Hiệp", "Phường", "Tam Hiep"],
                        ["26035", "Tam Hòa", "Phường", "Tam Hoa"],
                        ["26374", "Tam Phước", "Phường", "Tam Phuoc"],
                        ["25999", "Tân Biên", "Phường", "Tan Bien"],
                        ["26062", "Tân Hạnh", "Phường", "Tan Hanh"],
                        ["26008", "Tân Hiệp", "Phường", "Tan Hiep"],
                        ["26005", "Tân Hòa", "Phường", "Tan Hoa"],
                        ["26026", "Tân Mai", "Phường", "Tan Mai"],
                        ["25996", "Tân Phong", "Phường", "Tan Phong"],
                        ["26014", "Tân Tiến", "Phường", "Tan Tien"],
                        ["26059", "Tân Vạn", "Phường", "Tan Van"],
                        ["26044", "Thanh Bình", "Phường", "Thanh Binh"],
                        ["26029", "Thống Nhất", "Phường", "Thong Nhat"],
                        ["25993", "Trảng Dài", "Phường", "Trang Dai"],
                        ["26032", "Trung Dũng", "Phường", "Trung Dung"]
                    ]
                ],
                [
                    "739", "Cẩm Mỹ", "Huyện", "Cam My",
                    [
                        ["26350", "Bảo Bình", "Xã", "Bao Binh"],
                        ["26365", "Lâm San", "Xã", "Lam San"],
                        ["26341", "Long Giao", "Thị trấn", "Long Giao"],
                        ["26335", "Nhân Nghĩa", "Xã", "Nhan Nghia"],
                        ["26329", "Sông Nhạn", "Xã", "Song Nhan"],
                        ["26362", "Sông Ray", "Xã", "Song Ray"],
                        ["26347", "Thừa Đức", "Xã", "Thua Duc"],
                        ["26353", "Xuân Bảo", "Xã", "Xuan Bao"],
                        ["26359", "Xuân Đông", "Xã", "Xuan Dong"],
                        ["26338", "Xuân Đường", "Xã", "Xuan Duong"],
                        ["26344", "Xuân Mỹ", "Xã", "Xuan My"],
                        ["26332", "Xuân Quế", "Xã", "Xuan Que"],
                        ["26356", "Xuân Tây", "Xã", "Xuan Tay"]
                    ]
                ],
                [
                    "736", "Định Quán", "Huyện", "Dinh Quan",
                    [
                        ["26206", "Định Quán", "Thị trấn", "Dinh Quan"],
                        ["26230", "Gia Canh", "Xã", "Gia Canh"],
                        ["26227", "La Ngà", "Xã", "La Nga"],
                        ["26224", "Ngọc Định", "Xã", "Ngoc Dinh"],
                        ["26236", "Phú Cường", "Xã", "Phu Cuong"],
                        ["26221", "Phú Hòa", "Xã", "Phu Hoa"],
                        ["26218", "Phú Lợi", "Xã", "Phu Loi"],
                        ["26233", "Phú Ngọc", "Xã", "Phu Ngoc"],
                        ["26212", "Phú Tân", "Xã", "Phu Tan"],
                        ["26242", "Phú Túc", "Xã", "Phu Tuc"],
                        ["26215", "Phú Vinh", "Xã", "Phu Vinh"],
                        ["26245", "Suối Nho", "Xã", "Suoi Nho"],
                        ["26209", "Thanh Sơn", "Xã", "Thanh Son"],
                        ["26239", "Túc Trưng", "Xã", "Tuc Trung"]
                    ]
                ],
                [
                    "732", "Long Khánh", "Thành phố", "Long Khanh",
                    [
                        ["26092", "Bảo Quang", "Xã", "Bao Quang"],
                        ["26098", "Bảo Vinh", "Phường", "Bao Vinh"],
                        ["26104", "Bàu Sen", "Phường", "Bau Sen"],
                        ["26107", "Bàu Trâm", "Xã", "Bau Tram"],
                        ["26089", "Bình Lộc", "Xã", "Binh Loc"],
                        ["26113", "Hàng Gòn", "Xã", "Hang Gon"],
                        ["26086", "Phú Bình", "Phường", "Phu Binh"],
                        ["26095", "Suối Tre", "Phường", "Suoi Tre"],
                        ["26080", "Xuân An", "Phường", "Xuan An"],
                        ["26077", "Xuân Bình", "Phường", "Xuan Binh"],
                        ["26083", "Xuân Hoà", "Phường", "Xuan Hoa"],
                        ["26101", "Xuân Lập", "Phường", "Xuan Lap"],
                        ["26110", "Xuân Tân", "Phường", "Xuan Tan"],
                        ["26074", "Xuân Thanh", "Phường", "Xuan Thanh"],
                        ["26071", "Xuân Trung", "Phường", "Xuan Trung"]
                    ]
                ],
                [
                    "740", "Long Thành", "Huyện", "Long Thanh",
                    [
                        ["26383", "An Phước", "Xã", "An Phuoc"],
                        ["26410", "Bàu Cạn", "Xã", "Bau Can"],
                        ["26386", "Bình An", "Xã", "Binh An"],
                        ["26395", "Bình Sơn", "Xã", "Binh Son"],
                        ["26401", "Cẩm Đường", "Xã", "Cam Duong"],
                        ["26392", "Lộc An", "Xã", "Loc An"],
                        ["26404", "Long An", "Xã", "Long An"],
                        ["26389", "Long Đức", "Xã", "Long Duc"],
                        ["26413", "Long Phước", "Xã", "Long Phuoc"],
                        ["26368", "Long Thành", "Thị trấn", "Long Thanh"],
                        ["26416", "Phước Bình", "Xã", "Phuoc Binh"],
                        ["26422", "Phước Thái", "Xã", "Phuoc Thai"],
                        ["26398", "Tam An", "Xã", "Tam An"],
                        ["26419", "Tân Hiệp", "Xã", "Tan Hiep"]
                    ]
                ],
                [
                    "742", "Nhơn Trạch", "Huyện", "Nhon Trach",
                    [
                        ["26476", "Đại Phước", "Xã", "Dai Phuoc"],
                        ["26479", "Hiệp Phước", "Thị trấn", "Hiep Phuoc"],
                        ["26473", "Long Tân", "Xã", "Long Tan"],
                        ["26494", "Long Thọ", "Xã", "Long Tho"],
                        ["26491", "Phú Đông", "Xã", "Phu Dong"],
                        ["26485", "Phú Hội", "Xã", "Phu Hoi"],
                        ["26482", "Phú Hữu", "Xã", "Phu Huu"],
                        ["26488", "Phú Thạnh", "Xã", "Phu Thanh"],
                        ["26503", "Phước An", "Xã", "Phuoc An"],
                        ["26500", "Phước Khánh", "Xã", "Phuoc Khanh"],
                        ["26470", "Phước Thiền", "Xã", "Phuoc Thien"],
                        ["26497", "Vĩnh Thanh", "Xã", "Vinh Thanh"]
                    ]
                ],
                [
                    "734", "Tân Phú", "Huyện", "Tan Phu",
                    [
                        ["26119", "Dak Lua", "Xã", "Dak Lua"],
                        ["26122", "Nam Cát Tiên", "Xã", "Nam Cat Tien"],
                        ["26128", "Núi Tượng", "Xã", "Nui Tuong"],
                        ["26125", "Phú An", "Xã", "Phu An"],
                        ["26158", "Phú Bình", "Xã", "Phu Binh"],
                        ["26167", "Phú Điền", "Xã", "Phu Dien"],
                        ["26155", "Phú Lâm", "Xã", "Phu Lam"],
                        ["26134", "Phú Lập", "Xã", "Phu Lap"],
                        ["26152", "Phú Lộc", "Xã", "Phu Loc"],
                        ["26137", "Phú Sơn", "Xã", "Phu Son"],
                        ["26161", "Phú Thanh", "Xã", "Phu Thanh"],
                        ["26140", "Phú Thịnh", "Xã", "Phu Thinh"],
                        ["26146", "Phú Trung", "Xã", "Phu Trung"],
                        ["26149", "Phú Xuân", "Xã", "Phu Xuan"],
                        ["26131", "Tà Lài", "Xã", "Ta Lai"],
                        ["26116", "Tân Phú", "Thị trấn", "Tan Phu"],
                        ["26143", "Thanh Sơn", "Xã", "Thanh Son"],
                        ["26164", "Trà Cổ", "Xã", "Tra Co"]
                    ]
                ],
                [
                    "738", "Thống Nhất", "Huyện", "Thong Nhat",
                    [
                        ["26314", "Bàu Hàm 2", "Xã", "Bau Ham 2"],
                        ["26326", "Dầu Giây", "Thị trấn", "Dau Giay"],
                        ["26308", "Gia Kiệm", "Xã", "Gia Kiem"],
                        ["26299", "Gia Tân 1", "Xã", "Gia Tan 1"],
                        ["26302", "Gia Tân 2", "Xã", "Gia Tan 2"],
                        ["26305", "Gia Tân 3", "Xã", "Gia Tan 3"],
                        ["26317", "Hưng Lộc", "Xã", "Hung Loc"],
                        ["26320", "Lộ 25", "Xã", "Lo 25"],
                        ["26311", "Quang Trung", "Xã", "Quang Trung"],
                        ["26323", "Xuân Thiện", "Xã", "Xuan Thien"]
                    ]
                ],
                [
                    "737", "Trảng Bom", "Huyện", "Trang Bom",
                    [
                        ["26296", "An Viễn", "Xã", "An Vien"],
                        ["26269", "Bắc Sơn", "Xã", "Bac Son"],
                        ["26257", "Bàu Hàm", "Xã", "Bau Ham"],
                        ["26278", "Bình Minh", "Xã", "Binh Minh"],
                        ["26254", "Cây Gáo", "Xã", "Cay Gao"],
                        ["26284", "Đồi 61", "Xã", "Doi 61"],
                        ["26266", "Đông Hoà", "Xã", "Dong Hoa"],
                        ["26293", "Giang Điền", "Xã", "Giang Dien"],
                        ["26272", "Hố Nai 3", "Xã", "Ho Nai 3"],
                        ["26287", "Hưng Thịnh", "Xã", "Hung Thinh"],
                        ["26290", "Quảng Tiến", "Xã", "Quang Tien"],
                        ["26260", "Sông Thao", "Xã", "Song Thao"],
                        ["26263", "Sông Trầu", "Xã", "Song Trau"],
                        ["26275", "Tây Hoà", "Xã", "Tay Hoa"],
                        ["26251", "Thanh Bình", "Xã", "Thanh Binh"],
                        ["26248", "Trảng Bom", "Thị trấn", "Trang Bom"],
                        ["26281", "Trung Hoà", "Xã", "Trung Hoa"]
                    ]
                ],
                [
                    "735", "Vĩnh Cửu", "Huyện", "Vinh Cuu",
                    [
                        ["26197", "Bình Hòa", "Xã", "Binh Hoa"],
                        ["26185", "Bình Lợi", "Xã", "Binh Loi"],
                        ["26203", "Hiếu Liêm", "Xã", "Hieu Liem"],
                        ["26200", "Mã Đà", "Xã", "Ma Da"],
                        ["26173", "Phú Lý", "Xã", "Phu Ly"],
                        ["26179", "Tân An", "Xã", "Tan An"],
                        ["26194", "Tân Bình", "Xã", "Tan Binh"],
                        ["26188", "Thạnh Phú", "Xã", "Thanh Phu"],
                        ["26191", "Thiện Tân", "Xã", "Thien Tan"],
                        ["26176", "Trị An", "Xã", "Tri An"],
                        ["26170", "Vĩnh An", "Thị trấn", "Vinh An"],
                        ["26182", "Vĩnh Tân", "Xã", "Vinh Tan"]
                    ]
                ],
                [
                    "741", "Xuân Lộc", "Huyện", "Xuan Loc",
                    [
                        ["26464", "Bảo Hoà", "Xã", "Bao Hoa"],
                        ["26425", "Gia Ray", "Thị trấn", "Gia Ray"],
                        ["26467", "Lang Minh", "Xã", "Lang Minh"],
                        ["26431", "Suối Cao", "Xã", "Suoi Cao"],
                        ["26452", "Suối Cát", "Xã", "Suoi Cat"],
                        ["26428", "Xuân Bắc", "Xã", "Xuan Bac"],
                        ["26461", "Xuân Định", "Xã", "Xuan Dinh"],
                        ["26455", "Xuân Hiệp", "Xã", "Xuan Hiep"],
                        ["26443", "Xuân Hòa", "Xã", "Xuan Hoa"],
                        ["26446", "Xuân Hưng", "Xã", "Xuan Hung"],
                        ["26458", "Xuân Phú", "Xã", "Xuan Phu"],
                        ["26449", "Xuân Tâm", "Xã", "Xuan Tam"],
                        ["26434", "Xuân Thành", "Xã", "Xuan Thanh"],
                        ["26437", "Xuân Thọ", "Xã", "Xuan Tho"],
                        ["26440", "Xuân Trường", "Xã", "Xuan Truong"]
                    ]
                ]
            ]
        ],
        [
            "87", "Đồng Tháp", "Tỉnh", "Dong Thap",
            [
                [
                    "866", "Cao Lãnh", "Thành phố", "Cao Lanh",
                    [
                        ["29866", "1", "Phường", "1"],
                        ["29869", "2", "Phường", "2"],
                        ["29875", "3", "Phường", "3"],
                        ["29872", "4", "Phường", "4"],
                        ["29878", "6", "Phường", "6"],
                        ["29863", "11", "Phường", "11"],
                        ["29893", "Hòa An", "Xã", "Hoa An"],
                        ["29892", "Hoà Thuận", "Phường", "Hoa Thuan"],
                        ["29881", "Mỹ Ngãi", "Xã", "My Ngai"],
                        ["29888", "Mỹ Phú", "Phường", "My Phu"],
                        ["29884", "Mỹ Tân", "Xã", "My Tan"],
                        ["29887", "Mỹ Trà", "Xã", "My Tra"],
                        ["29896", "Tân Thuận Đông", "Xã", "Tan Thuan Dong"],
                        ["29890", "Tân Thuận Tây", "Xã", "Tan Thuan Tay"],
                        ["29899", "Tịnh Thới", "Xã", "Tinh Thoi"]
                    ]
                ],
                [
                    "873", "Cao Lãnh", "Huyện", "Cao Lanh",
                    [
                        ["30106", "An Bình", "Xã", "An Binh"],
                        ["30085", "Ba Sao", "Xã", "Ba Sao"],
                        ["30124", "Bình Hàng Tây", "Xã", "Binh Hang Tay"],
                        ["30118", "Bình Hàng Trung", "Xã", "Binh Hang Trung"],
                        ["30127", "Bình Thạnh", "Xã", "Binh Thanh"],
                        ["30079", "Gáo Giồng", "Xã", "Gao Giong"],
                        ["30112", "Mỹ Hiệp", "Xã", "My Hiep"],
                        ["30109", "Mỹ Hội", "Xã", "My Hoi"],
                        ["30115", "Mỹ Long", "Xã", "My Long"],
                        ["30076", "Mỹ Thọ", "Thị trấn", "My Tho"],
                        ["30100", "Mỹ Thọ", "Xã", "My Tho"],
                        ["30121", "Mỹ Xương", "Xã", "My Xuong"],
                        ["30097", "Nhị Mỹ", "Xã", "Nhi My"],
                        ["30088", "Phong Mỹ", "Xã", "Phong My"],
                        ["30082", "Phương Thịnh", "Xã", "Phuong Thinh"],
                        ["30094", "Phương Trà", "Xã", "Phuong Tra"],
                        ["30103", "Tân Hội Trung", "Xã", "Tan Hoi Trung"],
                        ["30091", "Tân Nghĩa", "Xã", "Tan Nghia"]
                    ]
                ],
                [
                    "877", "Châu Thành", "Huyện", "Chau Thanh",
                    [
                        ["30247", "An Hiệp", "Xã", "An Hiep"],
                        ["30271", "An Khánh", "Xã", "An Khanh"],
                        ["30250", "An Nhơn", "Xã", "An Nhon"],
                        ["30265", "An Phú Thuận", "Xã", "An Phu Thuan"],
                        ["30244", "Cái Tàu Hạ", "Thị trấn", "Cai Tau Ha"],
                        ["30277", "Hòa Tân", "Xã", "Hoa Tan"],
                        ["30268", "Phú Hựu", "Xã", "Phu Huu"],
                        ["30262", "Phú Long", "Xã", "Phu Long"],
                        ["30256", "Tân Bình", "Xã", "Tan Binh"],
                        ["30253", "Tân Nhuận Đông", "Xã", "Tan Nhuan Dong"],
                        ["30274", "Tân Phú", "Xã", "Tan Phu"],
                        ["30259", "Tân Phú Trung", "Xã", "Tan Phu Trung"]
                    ]
                ],
                [
                    "868", "Hồng Ngự", "Thành phố", "Hong Ngu",
                    [
                        ["29989", "An Bình A", "Phường", "An Binh A"],
                        ["29986", "An Bình B", "Phường", "An Binh B"],
                        ["29978", "An Lạc", "Phường", "An Lac"],
                        ["29954", "An Lộc", "Phường", "An Loc"],
                        ["29955", "An Thạnh", "Phường", "An Thanh"],
                        ["29959", "Bình Thạnh", "Xã", "Binh Thanh"],
                        ["29965", "Tân Hội", "Xã", "Tan Hoi"]
                    ]
                ],
                [
                    "870", "Hồng Ngự", "Huyện", "Hong Ngu",
                    [
                        ["29980", "Long Khánh A", "Xã", "Long Khanh A"],
                        ["29983", "Long Khánh B", "Xã", "Long Khanh B"],
                        ["29992", "Long Thuận", "Xã", "Long Thuan"],
                        ["29998", "Phú Thuận A", "Xã", "Phu Thuan A"],
                        ["29995", "Phú Thuận B", "Xã", "Phu Thuan B"],
                        ["29977", "Thường Lạc", "Xã", "Thuong Lac"],
                        ["29956", "Thường Phước 1", "Xã", "Thuong Phuoc 1"],
                        ["29974", "Thường Phước 2", "Xã", "Thuong Phuoc 2"],
                        ["29962", "Thường Thới Hậu A", "Xã", "Thuong Thoi Hau A"],
                        ["29971", "Thường Thới Tiền", "Thị trấn", "Thuong Thoi Tien"]
                    ]
                ],
                [
                    "876", "Lai Vung", "Huyện", "Lai Vung",
                    [
                        ["30238", "Định Hòa", "Xã", "Dinh Hoa"],
                        ["30223", "Hòa Long", "Xã", "Hoa Long"],
                        ["30214", "Hòa Thành", "Xã", "Hoa Thanh"],
                        ["30208", "Lai Vung", "Thị trấn", "Lai Vung"],
                        ["30217", "Long Hậu", "Xã", "Long Hau"],
                        ["30229", "Long Thắng", "Xã", "Long Thang"],
                        ["30241", "Phong Hòa", "Xã", "Phong Hoa"],
                        ["30211", "Tân Dương", "Xã", "Tan Duong"],
                        ["30235", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["30220", "Tân Phước", "Xã", "Tan Phuoc"],
                        ["30226", "Tân Thành", "Xã", "Tan Thanh"],
                        ["30232", "Vĩnh Thới", "Xã", "Vinh Thoi"]
                    ]
                ],
                [
                    "875", "Lấp Vò", "Huyện", "Lap Vo",
                    [
                        ["30193", "Bình Thành", "Xã", "Binh Thanh"],
                        ["30205", "Bình Thạnh Trung", "Xã", "Binh Thanh Trung"],
                        ["30196", "Định An", "Xã", "Dinh An"],
                        ["30199", "Định Yên", "Xã", "Dinh Yen"],
                        ["30202", "Hội An Đông", "Xã", "Hoi An Dong"],
                        ["30169", "Lấp Vò", "Thị trấn", "Lap Vo"],
                        ["30184", "Long Hưng A", "Xã", "Long Hung A"],
                        ["30190", "Long Hưng B", "Xã", "Long Hung B"],
                        ["30172", "Mỹ An Hưng A", "Xã", "My An Hung A"],
                        ["30178", "Mỹ An Hưng B", "Xã", "My An Hung B"],
                        ["30181", "Tân  Khánh Trung", "Xã", "Tan  Khanh Trung"],
                        ["30175", "Tân Mỹ", "Xã", "Tan My"],
                        ["30187", "Vĩnh Thạnh", "Xã", "Vinh Thanh"]
                    ]
                ],
                [
                    "867", "Sa Đéc", "Thành phố", "Sa Dec",
                    [
                        ["29905", "1", "Phường", "1"],
                        ["29911", "2", "Phường", "2"],
                        ["29902", "3", "Phường", "3"],
                        ["29908", "4", "Phường", "4"],
                        ["29919", "An Hoà", "Phường", "An Hoa"],
                        ["29914", "Tân Khánh Đông", "Xã", "Tan Khanh Dong"],
                        ["29923", "Tân Phú Đông", "Xã", "Tan Phu Dong"],
                        ["29917", "Tân Quy Đông", "Phường", "Tan Quy Dong"],
                        ["29920", "Tân Quy Tây", "Xã", "Tan Quy Tay"]
                    ]
                ],
                [
                    "871", "Tam Nông", "Huyện", "Tam Nong",
                    [
                        ["30019", "An Hòa", "Xã", "An Hoa"],
                        ["30022", "An Long", "Xã", "An Long"],
                        ["30004", "Hoà Bình", "Xã", "Hoa Binh"],
                        ["30025", "Phú Cường", "Xã", "Phu Cuong"],
                        ["30013", "Phú Đức", "Xã", "Phu Duc"],
                        ["30010", "Phú Hiệp", "Xã", "Phu Hiep"],
                        ["30028", "Phú Ninh", "Xã", "Phu Ninh"],
                        ["30034", "Phú Thành A", "Xã", "Phu Thanh A"],
                        ["30016", "Phú Thành B", "Xã", "Phu Thanh B"],
                        ["30031", "Phú Thọ", "Xã", "Phu Tho"],
                        ["30007", "Tân Công Sính", "Xã", "Tan Cong Sinh"],
                        ["30001", "Tràm Chim", "Thị trấn", "Tram Chim"]
                    ]
                ],
                [
                    "869", "Tân Hồng", "Huyện", "Tan Hong",
                    [
                        ["29950", "An Phước", "Xã", "An Phuoc"],
                        ["29935", "Bình Phú", "Xã", "Binh Phu"],
                        ["29926", "Sa Rài", "Thị trấn", "Sa Rai"],
                        ["29947", "Tân Công Chí", "Xã", "Tan Cong Chi"],
                        ["29929", "Tân Hộ Cơ", "Xã", "Tan Ho Co"],
                        ["29944", "Tân Phước", "Xã", "Tan Phuoc"],
                        ["29938", "Tân Thành A", "Xã", "Tan Thanh A"],
                        ["29941", "Tân Thành B", "Xã", "Tan Thanh B"],
                        ["29932", "Thông Bình", "Xã", "Thong Binh"]
                    ]
                ],
                [
                    "874", "Thanh Bình", "Huyện", "Thanh Binh",
                    [
                        ["30139", "An Phong", "Xã", "An Phong"],
                        ["30148", "Bình Tấn", "Xã", "Binh Tan"],
                        ["30163", "Bình Thành", "Xã", "Binh Thanh"],
                        ["30142", "Phú Lợi", "Xã", "Phu Loi"],
                        ["30154", "Tân Bình", "Xã", "Tan Binh"],
                        ["30136", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["30151", "Tân Huề", "Xã", "Tan Hue"],
                        ["30166", "Tân Long", "Xã", "Tan Long"],
                        ["30145", "Tân Mỹ", "Xã", "Tan My"],
                        ["30160", "Tân Phú", "Xã", "Tan Phu"],
                        ["30133", "Tân Quới", "Xã", "Tan Quoi"],
                        ["30157", "Tân Thạnh", "Xã", "Tan Thanh"],
                        ["30130", "Thanh Bình", "Thị trấn", "Thanh Binh"]
                    ]
                ],
                [
                    "872", "Tháp Mười", "Huyện", "Thap Muoi",
                    [
                        ["30061", "Đốc Binh Kiều", "Xã", "Doc Binh Kieu"],
                        ["30043", "Hưng Thạnh", "Xã", "Hung Thanh"],
                        ["30070", "Láng Biển", "Xã", "Lang Bien"],
                        ["30037", "Mỹ An", "Thị trấn", "My An"],
                        ["30064", "Mỹ An", "Xã", "My An"],
                        ["30058", "Mỹ Đông", "Xã", "My Dong"],
                        ["30052", "Mỹ Hòa", "Xã", "My Hoa"],
                        ["30055", "Mỹ Quý", "Xã", "My Quy"],
                        ["30067", "Phú Điền", "Xã", "Phu Dien"],
                        ["30049", "Tân Kiều", "Xã", "Tan Kieu"],
                        ["30040", "Thạnh Lợi", "Xã", "Thanh Loi"],
                        ["30073", "Thanh Mỹ", "Xã", "Thanh My"],
                        ["30046", "Trường Xuân", "Xã", "Truong Xuan"]
                    ]
                ]
            ]
        ],
        [
            "64", "Gia Lai", "Tỉnh", "Gia Lai",
            [
                [
                    "623", "An Khê", "Thị xã", "An Khe",
                    [
                        ["23614", "An Bình", "Phường", "An Binh"],
                        ["23620", "An Phú", "Phường", "An Phu"],
                        ["23630", "An Phước", "Phường", "An Phuoc"],
                        ["23623", "An Tân", "Phường", "An Tan"],
                        ["23629", "Cửu An", "Xã", "Cuu An"],
                        ["23633", "Ngô Mây", "Phường", "Ngo May"],
                        ["23632", "Song An", "Xã", "Song An"],
                        ["23617", "Tây Sơn", "Phường", "Tay Son"],
                        ["23635", "Thành An", "Xã", "Thanh An"],
                        ["23626", "Tú An", "Xã", "Tu An"],
                        ["23627", "Xuân An", "Xã", "Xuan An"]
                    ]
                ],
                [
                    "624", "Ayun Pa", "Thị xã", "Ayun Pa",
                    [
                        ["24041", "Cheo Reo", "Phường", "Cheo Reo"],
                        ["24065", "Chư Băh", "Xã", "Chu Bah"],
                        ["24044", "Đoàn Kết", "Phường", "Doan Ket"],
                        ["24042", "Hòa Bình", "Phường", "Hoa Binh"],
                        ["24064", "Ia RBol", "Xã", "Ia RBol"],
                        ["24070", "Ia RTô", "Xã", "Ia RTo"],
                        ["24073", "Ia Sao", "Xã", "Ia Sao"],
                        ["24045", "Sông Bờ", "Phường", "Song Bo"]
                    ]
                ],
                [
                    "627", "Chư Păh", "Huyện", "Chu Pah",
                    [
                        ["23746", "Chư Đăng Ya", "Xã", "Chu Dang Ya"],
                        ["23740", "Đăk Tơ Ver", "Xã", "Dak To Ver"],
                        ["23725", "Hà Tây", "Xã", "Ha Tay"],
                        ["23743", "Hòa Phú", "Xã", "Hoa Phu"],
                        ["23749", "Ia Ka", "Xã", "Ia Ka"],
                        ["23728", "Ia Khươl", "Xã", "Ia Khuol"],
                        ["23738", "Ia Kreng", "Xã", "Ia Kreng"],
                        ["23734", "Ia Ly", "Thị trấn", "Ia Ly"],
                        ["23737", "Ia Mơ Nông", "Xã", "Ia Mo Nong"],
                        ["23752", "Ia Nhin", "Xã", "Ia Nhin"],
                        ["23731", "Ia Phí", "Xã", "Ia Phi"],
                        ["23755", "Nghĩa Hòa", "Xã", "Nghia Hoa"],
                        ["23761", "Nghĩa Hưng", "Xã", "Nghia Hung"],
                        ["23722", "Phú Hòa", "Thị trấn", "Phu Hoa"]
                    ]
                ],
                [
                    "632", "Chư Prông", "Huyện", "Chu Prong",
                    [
                        ["23899", "Bàu Cạn", "Xã", "Bau Can"],
                        ["23890", "Bình Giáo", "Xã", "Binh Giao"],
                        ["23887", "Chư Prông", "Thị trấn", "Chu Prong"],
                        ["23905", "Ia Băng", "Xã", "Ia Bang"],
                        ["23924", "Ia Bang", "Xã", "Ia Bang"],
                        ["23911", "Ia Boòng", "Xã", "Ia Boong"],
                        ["23893", "Ia Drăng", "Xã", "Ia Drang"],
                        ["23929", "Ia Ga", "Xã", "Ia Ga"],
                        ["23888", "Ia Kly", "Xã", "Ia Kly"],
                        ["23932", "Ia Lâu", "Xã", "Ia Lau"],
                        ["23920", "Ia Me", "Xã", "Ia Me"],
                        ["23938", "Ia Mơ", "Xã", "Ia Mo"],
                        ["23914", "Ia O", "Xã", "Ia O"],
                        ["23902", "Ia Phìn", "Xã", "Ia Phin"],
                        ["23926", "Ia Pia", "Xã", "Ia Pia"],
                        ["23935", "Ia Piơr", "Xã", "Ia Pior"],
                        ["23917", "Ia Púch", "Xã", "Ia Puch"],
                        ["23908", "Ia Tôr", "Xã", "Ia Tor"],
                        ["23923", "Ia Vê", "Xã", "Ia Ve"],
                        ["23896", "Thăng Hưng", "Xã", "Thang Hung"]
                    ]
                ],
                [
                    "639", "Chư Pưh", "Huyện", "Chu Puh",
                    [
                        ["23980", "Chư Don", "Xã", "Chu Don"],
                        ["23987", "Ia BLứ", "Xã", "Ia BLu"],
                        ["23974", "Ia Dreng", "Xã", "Ia Dreng"],
                        ["23978", "Ia Hla", "Xã", "Ia Hla"],
                        ["23971", "Ia Hrú", "Xã", "Ia Hru"],
                        ["23986", "Ia Le", "Xã", "Ia Le"],
                        ["23983", "Ia Phang", "Xã", "Ia Phang"],
                        ["23972", "Ia Rong", "Xã", "Ia Rong"],
                        ["23942", "Nhơn Hoà", "Thị trấn", "Nhon Hoa"]
                    ]
                ],
                [
                    "633", "Chư Sê", "Huyện", "Chu Se",
                    [
                        ["23953", "AL Bá", "Xã", "AL Ba"],
                        ["23956", "AYun", "Xã", "AYun"],
                        ["23946", "Bar Măih", "Xã", "Bar Maih"],
                        ["23947", "Bờ Ngoong", "Xã", "Bo Ngoong"],
                        ["23945", "Chư Pơng", "Xã", "Chu Pong"],
                        ["23941", "Chư Sê", "Thị trấn", "Chu Se"],
                        ["23965", "Dun", "Xã", "Dun"],
                        ["23968", "H Bông", "Xã", "H Bong"],
                        ["23962", "Ia Blang", "Xã", "Ia Blang"],
                        ["23950", "Ia Glai", "Xã", "Ia Glai"],
                        ["23959", "Ia HLốp", "Xã", "Ia HLop"],
                        ["23977", "Ia Ko", "Xã", "Ia Ko"],
                        ["23966", "Ia Pal", "Xã", "Ia Pal"],
                        ["23944", "Ia Tiêm", "Xã", "Ia Tiem"],
                        ["23954", "Kông HTok", "Xã", "Kong HTok"]
                    ]
                ],
                [
                    "626", "Đăk Đoa", "Huyện", "Dak Doa",
                    [
                        ["23710", "A Dơk", "Xã", "A Dok"],
                        ["23677", "Đăk Đoa", "Thị trấn", "Dak Doa"],
                        ["23684", "Đăk Krong", "Xã", "Dak Krong"],
                        ["23683", "Đăk Sơmei", "Xã", "Dak Somei"],
                        ["23707", "Glar", "Xã", "Glar"],
                        ["23701", "H' Neng", "Xã", "H' Neng"],
                        ["23714", "HNol", "Xã", "HNol"],
                        ["23692", "Hà Bầu", "Xã", "Ha Bau"],
                        ["23680", "Hà Đông", "Xã", "Ha Dong"],
                        ["23686", "Hải Yang", "Xã", "Hai Yang"],
                        ["23719", "Ia Băng", "Xã", "Ia Bang"],
                        ["23716", "Ia Pết", "Xã", "Ia Pet"],
                        ["23698", "K' Dang", "Xã", "K' Dang"],
                        ["23689", "Kon Gang", "Xã", "Kon Gang"],
                        ["23695", "Nam Yang", "Xã", "Nam Yang"],
                        ["23704", "Tân Bình", "Xã", "Tan Binh"],
                        ["23713", "Trang", "Xã", "Trang"]
                    ]
                ],
                [
                    "634", "Đăk Pơ", "Huyện", "Dak Po",
                    [
                        ["23992", "An Thành", "Xã", "An Thanh"],
                        ["24001", "Cư An", "Xã", "Cu An"],
                        ["23995", "Đak Pơ", "Thị trấn", "Dak Po"],
                        ["23989", "Hà Tam", "Xã", "Ha Tam"],
                        ["24007", "Phú An", "Xã", "Phu An"],
                        ["24004", "Tân An", "Xã", "Tan An"],
                        ["24010", "Ya Hội", "Xã", "Ya Hoi"],
                        ["23998", "Yang Bắc", "Xã", "Yang Bac"]
                    ]
                ],
                [
                    "631", "Đức Cơ", "Huyện", "Duc Co",
                    [
                        ["23857", "Chư Ty", "Thị trấn", "Chu Ty"],
                        ["23866", "Ia Din", "Xã", "Ia Din"],
                        ["23860", "Ia Dơk", "Xã", "Ia Dok"],
                        ["23872", "Ia Dom", "Xã", "Ia Dom"],
                        ["23869", "Ia Kla", "Xã", "Ia Kla"],
                        ["23863", "Ia Krêl", "Xã", "Ia Krel"],
                        ["23878", "Ia Kriêng", "Xã", "Ia Krieng"],
                        ["23875", "Ia Lang", "Xã", "Ia Lang"],
                        ["23884", "Ia Nan", "Xã", "Ia Nan"],
                        ["23881", "Ia Pnôn", "Xã", "Ia Pnon"]
                    ]
                ],
                [
                    "628", "Ia Grai", "Huyện", "Ia Grai",
                    [
                        ["23771", "Ia Bă", "Xã", "Ia Ba"],
                        ["23788", "Ia Chia", "Xã", "Ia Chia"],
                        ["23785", "Ia Dêr", "Xã", "Ia Der"],
                        ["23778", "Ia Grăng", "Xã", "Ia Grang"],
                        ["23770", "Ia Hrung", "Xã", "Ia Hrung"],
                        ["23776", "Ia KRai", "Xã", "Ia KRai"],
                        ["23764", "Ia Kha", "Thị trấn", "Ia Kha"],
                        ["23773", "Ia Khai", "Xã", "Ia Khai"],
                        ["23782", "Ia O", "Xã", "Ia O"],
                        ["23791", "Ia Pếch", "Xã", "Ia Pech"],
                        ["23767", "Ia Sao", "Xã", "Ia Sao"],
                        ["23779", "Ia Tô", "Xã", "Ia To"],
                        ["23768", "Ia Yok", "Xã", "Ia Yok"]
                    ]
                ],
                [
                    "635", "Ia Pa", "Huyện", "Ia Pa",
                    [
                        ["24025", "Chư Mố", "Xã", "Chu Mo"],
                        ["24016", "Chư Răng", "Xã", "Chu Rang"],
                        ["24034", "Ia Broăi", "Xã", "Ia Broai"],
                        ["24019", "Ia KDăm", "Xã", "Ia KDam"],
                        ["24031", "Ia Ma Rơn", "Xã", "Ia Ma Ron"],
                        ["24037", "Ia Trok", "Xã", "Ia Trok"],
                        ["24028", "Ia Tul", "Xã", "Ia Tul"],
                        ["24022", "Kim Tân", "Xã", "Kim Tan"],
                        ["24013", "Pờ Tó", "Xã", "Po To"]
                    ]
                ],
                [
                    "625", "KBang", "Huyện", "KBang",
                    [
                        ["23674", "Đăk HLơ", "Xã", "Dak HLo"],
                        ["23644", "Đăk Roong", "Xã", "Dak Roong"],
                        ["23660", "Đak SMar", "Xã", "Dak SMar"],
                        ["23659", "Đông", "Xã", "Dong"],
                        ["23638", "KBang", "Thị trấn", "KBang"],
                        ["23650", "KRong", "Xã", "KRong"],
                        ["23641", "Kon Pne", "Xã", "Kon Pne"],
                        ["23668", "Kông Lơng Khơng", "Xã", "Kong Long Khong"],
                        ["23671", "Kông Pla", "Xã", "Kong Pla"],
                        ["23656", "Lơ Ku", "Xã", "Lo Ku"],
                        ["23662", "Nghĩa An", "Xã", "Nghia An"],
                        ["23653", "Sơ Pai", "Xã", "So Pai"],
                        ["23647", "Sơn Lang", "Xã", "Son Lang"],
                        ["23665", "Tơ Tung", "Xã", "To Tung"]
                    ]
                ],
                [
                    "630", "Kông Chro", "Huyện", "Kong Chro",
                    [
                        ["23830", "An Trung", "Xã", "An Trung"],
                        ["23851", "Chơ Long", "Xã", "Cho Long"],
                        ["23827", "Chư Krêy", "Xã", "Chu Krey"],
                        ["23840", "Đắk Kơ Ning", "Xã", "Dak Ko Ning"],
                        ["23843", "Đăk Pling", "Xã", "Dak Pling"],
                        ["23846", "Đăk Pơ Pho", "Xã", "Dak Po Pho"],
                        ["23842", "Đăk Song", "Xã", "Dak Song"],
                        ["23836", "Đăk Tơ Pang", "Xã", "Dak To Pang"],
                        ["23824", "Kông Chro", "Thị trấn", "Kong Chro"],
                        ["23833", "Kông Yang", "Xã", "Kong Yang"],
                        ["23839", "SRó", "Xã", "SRo"],
                        ["23848", "Ya Ma", "Xã", "Ya Ma"],
                        ["23854", "Yang Nam", "Xã", "Yang Nam"],
                        ["23845", "Yang Trung", "Xã", "Yang Trung"]
                    ]
                ],
                [
                    "637", "Krông Pa", "Huyện", "Krong Pa",
                    [
                        ["24094", "Chư Drăng", "Xã", "Chu Drang"],
                        ["24085", "Chư Gu", "Xã", "Chu Gu"],
                        ["24106", "Chư Ngọc", "Xã", "Chu Ngoc"],
                        ["24112", "Chư Rcăm", "Xã", "Chu Rcam"],
                        ["24088", "Đất Bằng", "Xã", "Dat Bang"],
                        ["24100", "Ia HDreh", "Xã", "Ia HDreh"],
                        ["24091", "Ia Mláh", "Xã", "Ia Mlah"],
                        ["24103", "Ia RMok", "Xã", "Ia RMok"],
                        ["24079", "Ia RSai", "Xã", "Ia RSai"],
                        ["24082", "Ia RSươm", "Xã", "Ia RSuom"],
                        ["24115", "Krông Năng", "Xã", "Krong Nang"],
                        ["24097", "Phú Cần", "Xã", "Phu Can"],
                        ["24076", "Phú Túc", "Thị trấn", "Phu Tuc"],
                        ["24109", "Uar", "Xã", "Uar"]
                    ]
                ],
                [
                    "629", "Mang Yang", "Huyện", "Mang Yang",
                    [
                        ["23797", "Ayun", "Xã", "Ayun"],
                        ["23806", "Đăk Djrăng", "Xã", "Dak Djrang"],
                        ["23798", "Đak Jơ Ta", "Xã", "Dak Jo Ta"],
                        ["23799", "Đak Ta Ley", "Xã", "Dak Ta Ley"],
                        ["23821", "Đăk Trôi", "Xã", "Dak Troi"],
                        ["23803", "Đăk Yă", "Xã", "Dak Ya"],
                        ["23815", "Đê Ar", "Xã", "De Ar"],
                        ["23800", "Hra", "Xã", "Hra"],
                        ["23818", "Kon Chiêng", "Xã", "Kon Chieng"],
                        ["23794", "Kon Dơng", "Thị trấn", "Kon Dong"],
                        ["23812", "Kon Thụp", "Xã", "Kon Thup"],
                        ["23809", "Lơ Pang", "Xã", "Lo Pang"]
                    ]
                ],
                [
                    "638", "Phú Thiện", "Huyện", "Phu Thien",
                    [
                        ["24048", "Ayun Hạ", "Xã", "Ayun Ha"],
                        ["24060", "Chrôh Pơnan", "Xã", "Chroh Ponan"],
                        ["24046", "Chư A Thai", "Xã", "Chu A Thai"],
                        ["24049", "Ia Ake", "Xã", "Ia Ake"],
                        ["24061", "Ia Hiao", "Xã", "Ia Hiao"],
                        ["24058", "Ia Peng", "Xã", "Ia Peng"],
                        ["24055", "Ia Piar", "Xã", "Ia Piar"],
                        ["24052", "Ia Sol", "Xã", "Ia Sol"],
                        ["24067", "Ia Yeng", "Xã", "Ia Yeng"],
                        ["24043", "Phú Thiện", "Thị trấn", "Phu Thien"]
                    ]
                ],
                [
                    "622", "Pleiku", "Thành phố", "Pleiku",
                    [
                        ["23602", "An Phú", "Xã", "An Phu"],
                        ["23590", "Biển Hồ", "Xã", "Bien Ho"],
                        ["23586", "Chi Lăng", "Phường", "Chi Lang"],
                        ["23599", "Chư Á", "Xã", "Chu A"],
                        ["23560", "Diên Hồng", "Phường", "Dien Hong"],
                        ["23605", "Diên Phú", "Xã", "Dien Phu"],
                        ["23579", "Đống Đa", "Phường", "Dong Da"],
                        ["23611", "Gào", "Xã", "Gao"],
                        ["23572", "Hoa Lư", "Phường", "Hoa Lu"],
                        ["23569", "Hội Phú", "Phường", "Hoi Phu"],
                        ["23566", "Hội Thương", "Phường", "Hoi Thuong"],
                        ["23608", "Ia Kênh", "Xã", "Ia Kenh"],
                        ["23563", "Ia Kring", "Phường", "Ia Kring"],
                        ["23570", "Phù Đổng", "Phường", "Phu Dong"],
                        ["23593", "Tân Sơn", "Xã", "Tan Son"],
                        ["23575", "Tây Sơn", "Phường", "Tay Son"],
                        ["23582", "Thắng Lợi", "Phường", "Thang Loi"],
                        ["23578", "Thống Nhất", "Phường", "Thong Nhat"],
                        ["23581", "Trà Bá", "Phường", "Tra Ba"],
                        ["23596", "Trà Đa", "Xã", "Tra Da"],
                        ["23557", "Yên Đỗ", "Phường", "Yen Do"],
                        ["23584", "Yên Thế", "Phường", "Yen The"]
                    ]
                ]
            ]
        ],
        [
            "02", "Hà Giang", "Tỉnh", "Ha Giang",
            [
                [
                    "031", "Bắc Mê", "Huyện", "Bac Me",
                    [
                        ["01012", "Đường Âm", "Xã", "Duong Am"],
                        ["01015", "Đường Hồng", "Xã", "Duong Hong"],
                        ["00985", "Giáp Trung", "Xã", "Giap Trung"],
                        ["01000", "Lạc Nông", "Xã", "Lac Nong"],
                        ["00994", "Minh Ngọc", "Xã", "Minh Ngoc"],
                        ["00982", "Minh Sơn", "Xã", "Minh Son"],
                        ["01018", "Phiêng Luông", "Xã", "Phieng Luong"],
                        ["01003", "Phú Nam", "Xã", "Phu Nam"],
                        ["01009", "Thượng Tân", "Xã", "Thuong Tan"],
                        ["01006", "Yên Cường", "Xã", "Yen Cuong"],
                        ["00988", "Yên Định", "Xã", "Yen Dinh"],
                        ["00997", "Yên Phong", "Xã", "Yen Phong"],
                        ["00991", "Yên Phú", "Thị trấn", "Yen Phu"]
                    ]
                ],
                [
                    "034", "Bắc Quang", "Huyện", "Bac Quang",
                    [
                        ["01186", "Bằng Hành", "Xã", "Bang Hanh"],
                        ["01168", "Đồng Tâm", "Xã", "Dong Tam"],
                        ["01219", "Đông Thành", "Xã", "Dong Thanh"],
                        ["01165", "Đồng Tiến", "Xã", "Dong Tien"],
                        ["01216", "Đồng Yên", "Xã", "Dong Yen"],
                        ["01204", "Đức Xuân", "Xã", "Duc Xuan"],
                        ["01201", "Hùng An", "Xã", "Hung An"],
                        ["01177", "Hữu Sản", "Xã", "Huu San"],
                        ["01180", "Kim Ngọc", "Xã", "Kim Ngoc"],
                        ["01192", "Liên Hiệp", "Xã", "Lien Hiep"],
                        ["01189", "Quang Minh", "Xã", "Quang Minh"],
                        ["01159", "Tân Lập", "Xã", "Tan Lap"],
                        ["01171", "Tân Quang", "Xã", "Tan Quang"],
                        ["01162", "Tân Thành", "Xã", "Tan Thanh"],
                        ["01174", "Thượng Bình", "Xã", "Thuong Binh"],
                        ["01207", "Tiên Kiều", "Xã", "Tien Kieu"],
                        ["01198", "Việt Hồng", "Xã", "Viet Hong"],
                        ["01153", "Việt Quang", "Thị trấn", "Viet Quang"],
                        ["01183", "Việt Vinh", "Xã", "Viet Vinh"],
                        ["01210", "Vĩnh Hảo", "Xã", "Vinh Hao"],
                        ["01213", "Vĩnh Phúc", "Xã", "Vinh Phuc"],
                        ["01156", "Vĩnh Tuy", "Thị trấn", "Vinh Tuy"],
                        ["01195", "Vô Điếm", "Xã", "Vo Diem"]
                    ]
                ],
                [
                    "026", "Đồng Văn", "Huyện", "Dong Van",
                    [
                        ["00721", "Đồng Văn", "Thị trấn", "Dong Van"],
                        ["00757", "Hố Quáng Phìn", "Xã", "Ho Quang Phin"],
                        ["00715", "Lũng Cú", "Xã", "Lung Cu"],
                        ["00763", "Lũng Phìn", "Xã", "Lung Phin"],
                        ["00724", "Lũng Táo", "Xã", "Lung Tao"],
                        ["00754", "Lũng Thầu", "Xã", "Lung Thau"],
                        ["00718", "Má Lé", "Xã", "Ma Le"],
                        ["00712", "Phó Bảng", "Thị trấn", "Pho Bang"],
                        ["00745", "Phố Cáo", "Xã", "Pho Cao"],
                        ["00727", "Phố Là", "Xã", "Pho La"],
                        ["00751", "Sảng Tủng", "Xã", "Sang Tung"],
                        ["00748", "Sính Lủng", "Xã", "Sinh Lung"],
                        ["00733", "Sủng Là", "Xã", "Sung La"],
                        ["00766", "Sủng Trái", "Xã", "Sung Trai"],
                        ["00742", "Tả Lủng", "Xã", "Ta Lung"],
                        ["00739", "Tả Phìn", "Xã", "Ta Phin"],
                        ["00730", "Thài Phìn Tủng", "Xã", "Thai Phin Tung"],
                        ["00760", "Vần Chải", "Xã", "Van Chai"],
                        ["00736", "Xà Phìn", "Xã", "Xa Phin"]
                    ]
                ],
                [
                    "024", "Hà Giang", "Thành phố", "Ha Giang",
                    [
                        ["00697", "Minh Khai", "Phường", "Minh Khai"],
                        ["00700", "Ngọc Đường", "Xã", "Ngoc Duong"],
                        ["00692", "Ngọc Hà", "Phường", "Ngoc Ha"],
                        ["00694", "Nguyễn Trãi", "Phường", "Nguyen Trai"],
                        ["00946", "Phương Độ", "Xã", "Phuong Do"],
                        ["00949", "Phương Thiện", "Xã", "Phuong Thien"],
                        ["00688", "Quang Trung", "Phường", "Quang Trung"],
                        ["00691", "Trần Phú", "Phường", "Tran Phu"]
                    ]
                ],
                [
                    "032", "Hoàng Su Phì", "Huyện", "Hoang Su Phi",
                    [
                        ["01063", "Bản Luốc", "Xã", "Ban Luoc"],
                        ["01024", "Bản Máy", "Xã", "Ban May"],
                        ["01069", "Bản Nhùng", "Xã", "Ban Nhung"],
                        ["01036", "Bản Phùng", "Xã", "Ban Phung"],
                        ["01042", "Chiến Phố", "Xã", "Chien Pho"],
                        ["01045", "Đản Ván", "Xã", "Dan Van"],
                        ["01081", "Hồ Thầu", "Xã", "Ho Thau"],
                        ["01075", "Nậm Dịch", "Xã", "Nam Dich"],
                        ["01093", "Nậm Khòa", "Xã", "Nam Khoa"],
                        ["01084", "Nam Sơn", "Xã", "Nam Son"],
                        ["01087", "Nậm Tỵ", "Xã", "Nam Ty"],
                        ["01054", "Nàng Đôn", "Xã", "Nang Don"],
                        ["01066", "Ngàm Đăng Vài", "Xã", "Ngam Dang Vai"],
                        ["01033", "Pố Lồ", "Xã", "Po Lo"],
                        ["01057", "Pờ Ly Ngài", "Xã", "Po Ly Ngai"],
                        ["01060", "Sán Xả Hồ", "Xã", "San Xa Ho"],
                        ["01072", "Tả Sử Choóng", "Xã", "Ta Su Choong"],
                        ["01051", "Tân Tiến", "Xã", "Tan Tien"],
                        ["01027", "Thàng Tín", "Xã", "Thang Tin"],
                        ["01030", "Thèn Chu Phìn", "Xã", "Then Chu Phin"],
                        ["01090", "Thông Nguyên", "Xã", "Thong Nguyen"],
                        ["01048", "Tụ Nhân", "Xã", "Tu Nhan"],
                        ["01039", "Túng Sán", "Xã", "Tung San"],
                        ["01021", "Vinh Quang", "Thị trấn", "Vinh Quang"]
                    ]
                ],
                [
                    "027", "Mèo Vạc", "Huyện", "Meo Vac",
                    [
                        ["00799", "Cán Chu Phìn", "Xã", "Can Chu Phin"],
                        ["00784", "Giàng Chu Phìn", "Xã", "Giang Chu Phin"],
                        ["00814", "Khâu Vai", "Xã", "Khau Vai"],
                        ["00805", "Lũng Chinh", "Xã", "Lung Chinh"],
                        ["00802", "Lũng Pù", "Xã", "Lung Pu"],
                        ["00769", "Mèo Vạc", "Thị trấn", "Meo Vac"],
                        ["00811", "Nậm Ban", "Xã", "Nam Ban"],
                        ["00817", "Niêm Sơn", "Xã", "Niem Son"],
                        ["00815", "Niêm Tòng", "Xã", "Niem Tong"],
                        ["00781", "Pả Vi", "Xã", "Pa Vi"],
                        ["00775", "Pải Lủng", "Xã", "Pai Lung"],
                        ["00793", "Sơn Vĩ", "Xã", "Son Vi"],
                        ["00790", "Sủng Máng", "Xã", "Sung Mang"],
                        ["00787", "Sủng Trà", "Xã", "Sung Tra"],
                        ["00796", "Tả Lủng", "Xã", "Ta Lung"],
                        ["00808", "Tát Ngà", "Xã", "Tat Nga"],
                        ["00772", "Thượng Phùng", "Xã", "Thuong Phung"],
                        ["00778", "Xín Cái", "Xã", "Xin Cai"]
                    ]
                ],
                [
                    "029", "Quản Bạ", "Huyện", "Quan Ba",
                    [
                        ["00877", "Bát Đại Sơn", "Xã", "Bat Dai Son"],
                        ["00883", "Cán Tỷ", "Xã", "Can Ty"],
                        ["00886", "Cao Mã Pờ", "Xã", "Cao Ma Po"],
                        ["00895", "Đông Hà", "Xã", "Dong Ha"],
                        ["00901", "Lùng Tám", "Xã", "Lung Tam"],
                        ["00880", "Nghĩa Thuận", "Xã", "Nghia Thuan"],
                        ["00898", "Quản Bạ", "Xã", "Quan Ba"],
                        ["00904", "Quyết Tiến", "Xã", "Quyet Tien"],
                        ["00907", "Tả Ván", "Xã", "Ta Van"],
                        ["00874", "Tam Sơn", "Thị trấn", "Tam Son"],
                        ["00910", "Thái An", "Xã", "Thai An"],
                        ["00889", "Thanh Vân", "Xã", "Thanh Van"],
                        ["00892", "Tùng Vài", "Xã", "Tung Vai"]
                    ]
                ],
                [
                    "035", "Quang Bình", "Huyện", "Quang Binh",
                    [
                        ["01231", "Bản Rịa", "Xã", "Ban Ria"],
                        ["01246", "Bằng Lang", "Xã", "Bang Lang"],
                        ["01252", "Hương Sơn", "Xã", "Huong Son"],
                        ["01258", "Nà Khương", "Xã", "Na Khuong"],
                        ["01243", "Tân Bắc", "Xã", "Tan Bac"],
                        ["01228", "Tân Nam", "Xã", "Tan Nam"],
                        ["01240", "Tân Trịnh", "Xã", "Tan Trinh"],
                        ["01225", "Tiên Nguyên", "Xã", "Tien Nguyen"],
                        ["01261", "Tiên Yên", "Xã", "Tien Yen"],
                        ["01264", "Vĩ Thượng", "Xã", "Vi Thuong"],
                        ["01255", "Xuân Giang", "Xã", "Xuan Giang"],
                        ["01222", "Xuân Minh", "Xã", "Xuan Minh"],
                        ["01237", "Yên Bình", "Thị trấn", "Yen Binh"],
                        ["01249", "Yên Hà", "Xã", "Yen Ha"],
                        ["01234", "Yên Thành", "Xã", "Yen Thanh"]
                    ]
                ],
                [
                    "030", "Vị Xuyên", "Huyện", "Vi Xuyen",
                    [
                        ["00976", "Bạch Ngọc", "Xã", "Bach Ngoc"],
                        ["00952", "Cao Bồ", "Xã", "Cao Bo"],
                        ["00955", "Đạo Đức", "Xã", "Dao Duc"],
                        ["00709", "Kim Linh", "Xã", "Kim Linh"],
                        ["00703", "Kim Thạch", "Xã", "Kim Thach"],
                        ["00943", "Lao Chải", "Xã", "Lao Chai"],
                        ["00961", "Linh Hồ", "Xã", "Linh Ho"],
                        ["00919", "Minh Tân", "Xã", "Minh Tan"],
                        ["00970", "Ngọc Linh", "Xã", "Ngoc Linh"],
                        ["00973", "Ngọc Minh", "Xã", "Ngoc Minh"],
                        ["00916", "Nông Trường Việt Lâm", "Thị trấn", "Nong Truong Viet Lam"],
                        ["00934", "Phong Quang", "Xã", "Phong Quang"],
                        ["00706", "Phú Linh", "Xã", "Phu Linh"],
                        ["00940", "Phương Tiến", "Xã", "Phuong Tien"],
                        ["00964", "Quảng Ngần", "Xã", "Quang Ngan"],
                        ["00931", "Thanh Đức", "Xã", "Thanh Duc"],
                        ["00928", "Thanh Thủy", "Xã", "Thanh Thuy"],
                        ["00922", "Thuận Hoà", "Xã", "Thuan Hoa"],
                        ["00958", "Thượng Sơn", "Xã", "Thuong Son"],
                        ["00979", "Trung Thành", "Xã", "Trung Thanh"],
                        ["00925", "Tùng Bá", "Xã", "Tung Ba"],
                        ["00913", "Vị Xuyên", "Thị trấn", "Vi Xuyen"],
                        ["00967", "Việt Lâm", "Xã", "Viet Lam"],
                        ["00937", "Xín Chải", "Xã", "Xin Chai"]
                    ]
                ],
                [
                    "033", "Xín Mần", "Huyện", "Xin Man",
                    [
                        ["01102", "Bản Díu", "Xã", "Ban Diu"],
                        ["01135", "Bản Ngò", "Xã", "Ban Ngo"],
                        ["01138", "Chế Là", "Xã", "Che La"],
                        ["01105", "Chí Cà", "Xã", "Chi Ca"],
                        ["01096", "Cốc Pài", "Thị trấn", "Coc Pai"],
                        ["01123", "Cốc Rế", "Xã", "Coc Re"],
                        ["01150", "Khuôn Lùng", "Xã", "Khuon Lung"],
                        ["01147", "Nà Chì", "Xã", "Na Chi"],
                        ["01141", "Nấm Dẩn", "Xã", "Nam Dan"],
                        ["01129", "Nàn Ma", "Xã", "Nan Ma"],
                        ["01099", "Nàn Xỉn", "Xã", "Nan Xin"],
                        ["01120", "Pà Vầy Sủ", "Xã", "Pa Vay Su"],
                        ["01144", "Quảng Nguyên", "Xã", "Quang Nguyen"],
                        ["01132", "Tả Nhìu", "Xã", "Ta Nhiu"],
                        ["01114", "Thèn Phàng", "Xã", "Then Phang"],
                        ["01126", "Thu Tà", "Xã", "Thu Ta"],
                        ["01117", "Trung Thịnh", "Xã", "Trung Thinh"],
                        ["01108", "Xín Mần", "Xã", "Xin Man"]
                    ]
                ],
                [
                    "028", "Yên Minh", "Huyện", "Yen Minh",
                    [
                        ["00832", "Bạch Đích", "Xã", "Bach Dich"],
                        ["00850", "Đông Minh", "Xã", "Dong Minh"],
                        ["00871", "Du Già", "Xã", "Du Gia"],
                        ["00868", "Du Tiến", "Xã", "Du Tien"],
                        ["00862", "Đường Thượng", "Xã", "Duong Thuong"],
                        ["00841", "Hữu Vinh", "Xã", "Huu Vinh"],
                        ["00844", "Lao Và Chải", "Xã", "Lao Va Chai"],
                        ["00865", "Lũng Hồ", "Xã", "Lung Ho"],
                        ["00847", "Mậu Duệ", "Xã", "Mau Due"],
                        ["00853", "Mậu Long", "Xã", "Mau Long"],
                        ["00835", "Na Khê", "Xã", "Na Khe"],
                        ["00856", "Ngam La", "Xã", "Ngam La"],
                        ["00859", "Ngọc Long", "Xã", "Ngoc Long"],
                        ["00826", "Phú Lũng", "Xã", "Phu Lung"],
                        ["00838", "Sủng Thài", "Xã", "Sung Thai"],
                        ["00829", "Sủng Tráng", "Xã", "Sung Trang"],
                        ["00823", "Thắng Mố", "Xã", "Thang Mo"],
                        ["00820", "Yên Minh", "Thị trấn", "Yen Minh"]
                    ]
                ]
            ]
        ],
        [
            "35", "Hà Nam", "Tỉnh", "Ha Nam",
            [
                [
                    "352", "Bình Lục", "Huyện", "Binh Luc",
                    [
                        ["13552", "An Đổ", "Xã", "An Do"],
                        ["13561", "An Lão", "Xã", "An Lao"],
                        ["13528", "An Ninh", "Xã", "An Ninh"],
                        ["13540", "An Nội", "Xã", "An Noi"],
                        ["13501", "Bình Mỹ", "Thị trấn", "Binh My"],
                        ["13504", "Bình Nghĩa", "Xã", "Binh Nghia"],
                        ["13531", "Bồ Đề", "Xã", "Bo De"],
                        ["13534", "Bối Cầu", "Xã", "Boi Cau"],
                        ["13525", "Đồn Xá", "Xã", "Don Xa"],
                        ["13516", "Đồng Du", "Xã", "Dong Du"],
                        ["13522", "Hưng Công", "Xã", "Hung Cong"],
                        ["13555", "La Sơn", "Xã", "La Son"],
                        ["13519", "Ngọc Lũ", "Xã", "Ngoc Lu"],
                        ["13558", "Tiêu Động", "Xã", "Tieu Dong"],
                        ["13510", "Tràng An", "Xã", "Trang An"],
                        ["13546", "Trung Lương", "Xã", "Trung Luong"],
                        ["13543", "Vũ Bản", "Xã", "Vu Ban"]
                    ]
                ],
                [
                    "349", "Duy Tiên", "Thị xã", "Duy Tien",
                    [
                        ["13333", "Bạch Thượng", "Phường", "Bach Thuong"],
                        ["13330", "Châu Giang", "Phường", "Chau Giang"],
                        ["13345", "Chuyên Ngoại", "Xã", "Chuyen Ngoai"],
                        ["13321", "Đồng Văn", "Phường", "Dong Van"],
                        ["13342", "Duy Hải", "Phường", "Duy Hai"],
                        ["13336", "Duy Minh", "Phường", "Duy Minh"],
                        ["13324", "Hòa Mạc", "Phường", "Hoa Mac"],
                        ["13357", "Hoàng Đông", "Phường", "Hoang Dong"],
                        ["13327", "Mộc Bắc", "Xã", "Moc Bac"],
                        ["13339", "Mộc Nam", "Xã", "Moc Nam"],
                        ["13363", "Tiên Ngoại", "Xã", "Tien Ngoai"],
                        ["13354", "Tiên Nội", "Phường", "Tien Noi"],
                        ["13369", "Tiên Sơn", "Xã", "Tien Son"],
                        ["13351", "Trác Văn", "Xã", "Trac Van"],
                        ["13348", "Yên Bắc", "Phường", "Yen Bac"],
                        ["13360", "Yên Nam", "Xã", "Yen Nam"]
                    ]
                ],
                [
                    "350", "Kim Bảng", "Huyện", "Kim Bang",
                    [
                        ["13429", "Ba Sao", "Thị trấn", "Ba Sao"],
                        ["13390", "Đại Cương", "Xã", "Dai Cuong"],
                        ["13405", "Đồng Hóa", "Xã", "Dong Hoa"],
                        ["13408", "Hoàng Tây", "Xã", "Hoang Tay"],
                        ["13420", "Khả Phong", "Xã", "Kha Phong"],
                        ["13393", "Lê Hồ", "Xã", "Le Ho"],
                        ["13432", "Liên Sơn", "Xã", "Lien Son"],
                        ["13423", "Ngọc Sơn", "Xã", "Ngoc Son"],
                        ["13387", "Nguyễn Úy", "Xã", "Nguyen Uy"],
                        ["13402", "Nhật Tân", "Xã", "Nhat Tan"],
                        ["13399", "Nhật Tựu", "Xã", "Nhat Tuu"],
                        ["13384", "Quế", "Thị trấn", "Que"],
                        ["13411", "Tân Sơn", "Xã", "Tan Son"],
                        ["13438", "Thanh Sơn", "Xã", "Thanh Son"],
                        ["13435", "Thi Sơn", "Xã", "Thi Son"],
                        ["13414", "Thụy Lôi", "Xã", "Thuy Loi"],
                        ["13396", "Tượng Lĩnh", "Xã", "Tuong Linh"],
                        ["13417", "Văn Xá", "Xã", "Van Xa"]
                    ]
                ],
                [
                    "353", "Lý Nhân", "Huyện", "Ly Nhan",
                    [
                        ["13588", "Bắc Lý", "Xã", "Bac Ly"],
                        ["13576", "Chân Lý", "Xã", "Chan Ly"],
                        ["13573", "Chính Lý", "Xã", "Chinh Ly"],
                        ["13582", "Công Lý", "Xã", "Cong Ly"],
                        ["13579", "Đạo Lý", "Xã", "Dao Ly"],
                        ["13591", "Đức Lý", "Xã", "Duc Ly"],
                        ["13630", "Hòa Hậu", "Xã", "Hoa Hau"],
                        ["13567", "Hợp Lý", "Xã", "Hop Ly"],
                        ["13570", "Nguyên Lý", "Xã", "Nguyen Ly"],
                        ["13618", "Nhân Bình", "Xã", "Nhan Binh"],
                        ["13615", "Nhân Chính", "Xã", "Nhan Chinh"],
                        ["13606", "Nhân Khang", "Xã", "Nhan Khang"],
                        ["13609", "Nhân Mỹ", "Xã", "Nhan My"],
                        ["13612", "Nhân Nghĩa", "Xã", "Nhan Nghia"],
                        ["13600", "Nhân Thịnh", "Xã", "Nhan Thinh"],
                        ["13621", "Phú Phúc", "Xã", "Phu Phuc"],
                        ["13627", "Tiến Thắng", "Xã", "Tien Thang"],
                        ["13594", "Trần Hưng Đạo", "Xã", "Tran Hung Dao"],
                        ["13585", "Văn Lý", "Xã", "Van Ly"],
                        ["13597", "Vĩnh Trụ", "Thị trấn", "Vinh Tru"],
                        ["13624", "Xuân Khê", "Xã", "Xuan Khe"]
                    ]
                ],
                [
                    "347", "Phủ Lý", "Thành phố", "Phu Ly",
                    [
                        ["13318", "Châu Sơn", "Phường", "Chau Son"],
                        ["13507", "Đinh Xá", "Xã", "Dinh Xa"],
                        ["13297", "Hai Bà Trưng", "Phường", "Hai Ba Trung"],
                        ["13426", "Kim Bình", "Xã", "Kim Binh"],
                        ["13303", "Lam Hạ", "Phường", "Lam Ha"],
                        ["13291", "Lê Hồng Phong", "Phường", "Le Hong Phong"],
                        ["13309", "Liêm Chính", "Phường", "Liem Chinh"],
                        ["13312", "Liêm Chung", "Xã", "Liem Chung"],
                        ["13447", "Liêm Tiết", "Xã", "Liem Tiet"],
                        ["13444", "Liêm Tuyền", "Xã", "Liem Tuyen"],
                        ["13288", "Lương Khánh Thiện", "Phường", "Luong Khanh Thien"],
                        ["13294", "Minh Khai", "Phường", "Minh Khai"],
                        ["13306", "Phù Vân", "Xã", "Phu Van"],
                        ["13285", "Quang Trung", "Phường", "Quang Trung"],
                        ["13315", "Thanh Châu", "Phường", "Thanh Chau"],
                        ["13459", "Thanh Tuyền", "Phường", "Thanh Tuyen"],
                        ["13381", "Tiên Hải", "Xã", "Tien Hai"],
                        ["13372", "Tiên Hiệp", "Xã", "Tien Hiep"],
                        ["13366", "Tiên Tân", "Xã", "Tien Tan"],
                        ["13300", "Trần Hưng Đạo", "Phường", "Tran Hung Dao"],
                        ["13513", "Trịnh Xá", "Xã", "Trinh Xa"]
                    ]
                ],
                [
                    "351", "Thanh Liêm", "Huyện", "Thanh Liem",
                    [
                        ["13441", "Kiện Khê", "Thị trấn", "Kien Khe"],
                        ["13456", "Liêm Cần", "Xã", "Liem Can"],
                        ["13450", "Liêm Phong", "Xã", "Liem Phong"],
                        ["13483", "Liêm Sơn", "Xã", "Liem Son"],
                        ["13465", "Liêm Thuận", "Xã", "Liem Thuan"],
                        ["13480", "Liêm Túc", "Xã", "Liem Tuc"],
                        ["13474", "Tân Thanh", "Thị trấn", "Tan Thanh"],
                        ["13453", "Thanh Hà", "Xã", "Thanh Ha"],
                        ["13498", "Thanh Hải", "Xã", "Thanh Hai"],
                        ["13486", "Thanh Hương", "Xã", "Thanh Huong"],
                        ["13489", "Thanh Nghị", "Xã", "Thanh Nghi"],
                        ["13495", "Thanh Nguyên", "Xã", "Thanh Nguyen"],
                        ["13471", "Thanh Phong", "Xã", "Thanh Phong"],
                        ["13492", "Thanh Tâm", "Xã", "Thanh Tam"],
                        ["13477", "Thanh Tân", "Xã", "Thanh Tan"],
                        ["13468", "Thanh Thủy", "Xã", "Thanh Thuy"]
                    ]
                ]
            ]
        ],
        [
            "01", "Hà Nội", "Thành phố", "Ha Noi",
            [
                [
                    "001", "Ba Đình", "Quận", "Ba Dinh",
                    [
                        ["00007", "Cống Vị", "Phường", "Cong Vi"],
                        ["00019", "Điện Biên", "Phường", "Dien Bien"],
                        ["00022", "Đội Cấn", "Phường", "Doi Can"],
                        ["00031", "Giảng Võ", "Phường", "Giang Vo"],
                        ["00028", "Kim Mã", "Phường", "Kim Ma"],
                        ["00008", "Liễu Giai", "Phường", "Lieu Giai"],
                        ["00016", "Ngọc Hà", "Phường", "Ngoc Ha"],
                        ["00025", "Ngọc Khánh", "Phường", "Ngoc Khanh"],
                        ["00010", "Nguyễn Trung Trực", "Phường", "Nguyen Trung Truc"],
                        ["00001", "Phúc Xá", "Phường", "Phuc Xa"],
                        ["00013", "Quán Thánh", "Phường", "Quan Thanh"],
                        ["00034", "Thành Công", "Phường", "Thanh Cong"],
                        ["00004", "Trúc Bạch", "Phường", "Truc Bach"],
                        ["00006", "Vĩnh Phúc", "Phường", "Vinh Phuc"]
                    ]
                ],
                [
                    "271", "Ba Vì", "Huyện", "Ba Vi",
                    [
                        ["09697", "Ba Trại", "Xã", "Ba Trai"],
                        ["09703", "Ba Vì", "Xã", "Ba Vi"],
                        ["09673", "Cẩm Lĩnh", "Xã", "Cam Linh"],
                        ["09688", "Cam Thượng", "Xã", "Cam Thuong"],
                        ["09637", "Châu Sơn", "Xã", "Chau Son"],
                        ["09667", "Chu Minh", "Xã", "Chu Minh"],
                        ["09628", "Cổ Đô", "Xã", "Co Do"],
                        ["09679", "Đông Quang", "Xã", "Dong Quang"],
                        ["09655", "Đồng Thái", "Xã", "Dong Thai"],
                        ["09712", "Khánh Thượng", "Xã", "Khanh Thuong"],
                        ["09661", "Minh Châu", "Xã", "Minh Chau"],
                        ["09700", "Minh Quang", "Xã", "Minh Quang"],
                        ["09640", "Phong Vân", "Xã", "Phong Van"],
                        ["09649", "Phú Châu", "Xã", "Phu Chau"],
                        ["09625", "Phú Cường", "Xã", "Phu Cuong"],
                        ["09643", "Phú Đông", "Xã", "Phu Dong"],
                        ["09646", "Phú Phương", "Xã", "Phu Phuong"],
                        ["09658", "Phú Sơn", "Xã", "Phu Son"],
                        ["09676", "Sơn Đà", "Xã", "Son Da"],
                        ["09631", "Tản Hồng", "Xã", "Tan Hong"],
                        ["09694", "Tản Lĩnh", "Xã", "Tan Linh"],
                        ["09619", "Tây Đằng", "Thị trấn", "Tay Dang"],
                        ["09652", "Thái Hòa", "Xã", "Thai Hoa"],
                        ["09691", "Thuần Mỹ", "Xã", "Thuan My"],
                        ["09685", "Thụy An", "Xã", "Thuy An"],
                        ["09682", "Tiên Phong", "Xã", "Tien Phong"],
                        ["09670", "Tòng Bạt", "Xã", "Tong Bat"],
                        ["09706", "Vân Hòa", "Xã", "Van Hoa"],
                        ["09634", "Vạn Thắng", "Xã", "Van Thang"],
                        ["09664", "Vật Lại", "Xã", "Vat Lai"],
                        ["09709", "Yên Bài", "Xã", "Yen Bai"]
                    ]
                ],
                [
                    "021", "Bắc Từ Liêm", "Quận", "Bac Tu Liem",
                    [
                        ["00616", "Cổ Nhuế 1", "Phường", "Co Nhue 1"],
                        ["00617", "Cổ Nhuế 2", "Phường", "Co Nhue 2"],
                        ["00601", "Đông Ngạc", "Phường", "Dong Ngac"],
                        ["00602", "Đức Thắng", "Phường", "Duc Thang"],
                        ["00598", "Liên Mạc", "Phường", "Lien Mac"],
                        ["00613", "Minh Khai", "Phường", "Minh Khai"],
                        ["00619", "Phú Diễn", "Phường", "Phu Dien"],
                        ["00620", "Phúc Diễn", "Phường", "Phuc Dien"],
                        ["00607", "Tây Tựu", "Phường", "Tay Tuu"],
                        ["00595", "Thượng Cát", "Phường", "Thuong Cat"],
                        ["00604", "Thụy Phương", "Phường", "Thuy Phuong"],
                        ["00610", "Xuân Đỉnh", "Phường", "Xuan Dinh"],
                        ["00611", "Xuân Tảo", "Phường", "Xuan Tao"]
                    ]
                ],
                [
                    "005", "Cầu Giấy", "Quận", "Cau Giay",
                    [
                        ["00166", "Dịch Vọng", "Phường", "Dich Vong"],
                        ["00167", "Dịch Vọng Hậu", "Phường", "Dich Vong Hau"],
                        ["00163", "Mai Dịch", "Phường", "Mai Dich"],
                        ["00157", "Nghĩa Đô", "Phường", "Nghia Do"],
                        ["00160", "Nghĩa Tân", "Phường", "Nghia Tan"],
                        ["00169", "Quan Hoa", "Phường", "Quan Hoa"],
                        ["00175", "Trung Hoà", "Phường", "Trung Hoa"],
                        ["00172", "Yên Hoà", "Phường", "Yen Hoa"]
                    ]
                ],
                [
                    "277", "Chương Mỹ", "Huyện", "Chuong My",
                    [
                        ["10015", "Chúc Sơn", "Thị trấn", "Chuc Son"],
                        ["10054", "Đại Yên", "Xã", "Dai Yen"],
                        ["10105", "Đồng Lạc", "Xã", "Dong Lac"],
                        ["10096", "Đồng Phú", "Xã", "Dong Phu"],
                        ["10030", "Đông Phương Yên", "Xã", "Dong Phuong Yen"],
                        ["10027", "Đông Sơn", "Xã", "Dong Son"],
                        ["10108", "Hòa Chính", "Xã", "Hoa Chinh"],
                        ["10078", "Hoàng Diệu", "Xã", "Hoang Dieu"],
                        ["10075", "Hoàng Văn Thụ", "Xã", "Hoang Van Thu"],
                        ["10093", "Hồng Phong", "Xã", "Hong Phong"],
                        ["10072", "Hợp Đồng", "Xã", "Hop Dong"],
                        ["10081", "Hữu Văn", "Xã", "Huu Van"],
                        ["10063", "Lam Điền", "Xã", "Lam Dien"],
                        ["10087", "Mỹ Lương", "Xã", "My Luong"],
                        ["10069", "Nam Phương Tiến", "Xã", "Nam Phuong Tien"],
                        ["10042", "Ngọc Hòa", "Xã", "Ngoc Hoa"],
                        ["10111", "Phú Nam An", "Xã", "Phu Nam An"],
                        ["10033", "Phú Nghĩa", "Xã", "Phu Nghia"],
                        ["10021", "Phụng Châu", "Xã", "Phung Chau"],
                        ["10084", "Quảng Bị", "Xã", "Quang Bi"],
                        ["10066", "Tân Tiến", "Xã", "Tan Tien"],
                        ["10048", "Thanh Bình", "Xã", "Thanh Binh"],
                        ["10090", "Thượng Vực", "Xã", "Thuong Vuc"],
                        ["10057", "Thụy Hương", "Xã", "Thuy Huong"],
                        ["10045", "Thủy Xuân Tiên", "Xã", "Thuy Xuan Tien"],
                        ["10024", "Tiên Phương", "Xã", "Tien Phuong"],
                        ["10060", "Tốt Động", "Xã", "Tot Dong"],
                        ["10099", "Trần Phú", "Xã", "Tran Phu"],
                        ["10051", "Trung Hòa", "Xã", "Trung Hoa"],
                        ["10039", "Trường Yên", "Xã", "Truong Yen"],
                        ["10102", "Văn Võ", "Xã", "Van Vo"],
                        ["10018", "Xuân Mai", "Thị trấn", "Xuan Mai"]
                    ]
                ],
                [
                    "273", "Đan Phượng", "Huyện", "Dan Phuong",
                    [
                        ["09823", "Đan Phượng", "Xã", "Dan Phuong"],
                        ["09826", "Đồng Tháp", "Xã", "Dong Thap"],
                        ["09805", "Hạ Mỗ", "Xã", "Ha Mo"],
                        ["09796", "Hồng Hà", "Xã", "Hong Ha"],
                        ["09802", "Liên Hà", "Xã", "Lien Ha"],
                        ["09799", "Liên Hồng", "Xã", "Lien Hong"],
                        ["09808", "Liên Trung", "Xã", "Lien Trung"],
                        ["09784", "Phùng", "Thị trấn", "Phung"],
                        ["09811", "Phương Đình", "Xã", "Phuong Dinh"],
                        ["09829", "Song Phượng", "Xã", "Song Phuong"],
                        ["09817", "Tân Hội", "Xã", "Tan Hoi"],
                        ["09820", "Tân Lập", "Xã", "Tan Lap"],
                        ["09790", "Thọ An", "Xã", "Tho An"],
                        ["09793", "Thọ Xuân", "Xã", "Tho Xuan"],
                        ["09814", "Thượng Mỗ", "Xã", "Thuong Mo"],
                        ["09787", "Trung Châu", "Xã", "Trung Chau"]
                    ]
                ],
                [
                    "017", "Đông Anh", "Huyện", "Dong Anh",
                    [
                        ["00463", "Bắc Hồng", "Xã", "Bac Hong"],
                        ["00505", "Cổ Loa", "Xã", "Co Loa"],
                        ["00499", "Đại Mạch", "Xã", "Dai Mach"],
                        ["00454", "Đông Anh", "Thị trấn", "Dong Anh"],
                        ["00523", "Đông Hội", "Xã", "Dong Hoi"],
                        ["00496", "Dục Tú", "Xã", "Duc Tu"],
                        ["00508", "Hải Bối", "Xã", "Hai Boi"],
                        ["00493", "Kim Chung", "Xã", "Kim Chung"],
                        ["00490", "Kim Nỗ", "Xã", "Kim No"],
                        ["00484", "Liên Hà", "Xã", "Lien Ha"],
                        ["00520", "Mai Lâm", "Xã", "Mai Lam"],
                        ["00469", "Nam Hồng", "Xã", "Nam Hong"],
                        ["00466", "Nguyên Khê", "Xã", "Nguyen Khe"],
                        ["00517", "Tàm Xá", "Xã", "Tam Xa"],
                        ["00460", "Thuỵ Lâm", "Xã", "Thuy Lam"],
                        ["00472", "Tiên Dương", "Xã", "Tien Duong"],
                        ["00478", "Uy Nỗ", "Xã", "Uy No"],
                        ["00475", "Vân Hà", "Xã", "Van Ha"],
                        ["00481", "Vân Nội", "Xã", "Van Noi"],
                        ["00487", "Việt Hùng", "Xã", "Viet Hung"],
                        ["00502", "Vĩnh Ngọc", "Xã", "Vinh Ngoc"],
                        ["00514", "Võng La", "Xã", "Vong La"],
                        ["00511", "Xuân Canh", "Xã", "Xuan Canh"],
                        ["00457", "Xuân Nộn", "Xã", "Xuan Non"]
                    ]
                ],
                [
                    "006", "Đống Đa", "Quận", "Dong Da",
                    [
                        ["00178", "Cát Linh", "Phường", "Cat Linh"],
                        ["00196", "Hàng Bột", "Phường", "Hang Bot"],
                        ["00202", "Khâm Thiên", "Phường", "Kham Thien"],
                        ["00238", "Khương Thượng", "Phường", "Khuong Thuong"],
                        ["00229", "Kim Liên", "Phường", "Kim Lien"],
                        ["00199", "Láng Hạ", "Phường", "Lang Ha"],
                        ["00187", "Láng Thượng", "Phường", "Lang Thuong"],
                        ["00208", "Nam Đồng", "Phường", "Nam Dong"],
                        ["00235", "Ngã Tư Sở", "Phường", "Nga Tu So"],
                        ["00190", "Ô Chợ Dừa", "Phường", "O Cho Dua"],
                        ["00220", "Phương Liên", "Phường", "Phuong Lien"],
                        ["00232", "Phương Mai", "Phường", "Phuong Mai"],
                        ["00214", "Quang Trung", "Phường", "Quang Trung"],
                        ["00184", "Quốc Tử Giám", "Phường", "Quoc Tu Giam"],
                        ["00223", "Thịnh Quang", "Phường", "Thinh Quang"],
                        ["00205", "Thổ Quan", "Phường", "Tho Quan"],
                        ["00217", "Trung Liệt", "Phường", "Trung Liet"],
                        ["00211", "Trung Phụng", "Phường", "Trung Phung"],
                        ["00226", "Trung Tự", "Phường", "Trung Tu"],
                        ["00193", "Văn Chương", "Phường", "Van Chuong"],
                        ["00181", "Văn Miếu", "Phường", "Van Mieu"]
                    ]
                ],
                [
                    "018", "Gia Lâm", "Huyện", "Gia Lam",
                    [
                        ["00583", "Bát Tràng", "Xã", "Bat Trang"],
                        ["00553", "Cổ Bi", "Xã", "Co Bi"],
                        ["00577", "Đa Tốn", "Xã", "Da Ton"],
                        ["00556", "Đặng Xá", "Xã", "Dang Xa"],
                        ["00538", "Đình Xuyên", "Xã", "Dinh Xuyen"],
                        ["00574", "Đông Dư", "Xã", "Dong Du"],
                        ["00541", "Dương Hà", "Xã", "Duong Ha"],
                        ["00568", "Dương Quang", "Xã", "Duong Quang"],
                        ["00571", "Dương Xá", "Xã", "Duong Xa"],
                        ["00580", "Kiêu Kỵ", "Xã", "Kieu Ky"],
                        ["00586", "Kim Lan", "Xã", "Kim Lan"],
                        ["00562", "Kim Sơn", "Xã", "Kim Son"],
                        ["00550", "Lệ Chi", "Xã", "Le Chi"],
                        ["00535", "Ninh Hiệp", "Xã", "Ninh Hiep"],
                        ["00544", "Phù Đổng", "Xã", "Phu Dong"],
                        ["00559", "Phú Thị", "Xã", "Phu Thi"],
                        ["00565", "Trâu Quỳ", "Thị trấn", "Trau Quy"],
                        ["00547", "Trung Mầu", "Xã", "Trung Mau"],
                        ["00589", "Văn Đức", "Xã", "Van Duc"],
                        ["00529", "Yên Thường", "Xã", "Yen Thuong"],
                        ["00526", "Yên Viên", "Thị trấn", "Yen Vien"],
                        ["00532", "Yên Viên", "Xã", "Yen Vien"]
                    ]
                ],
                [
                    "268", "Hà Đông", "Quận", "Ha Dong",
                    [
                        ["10123", "Biên Giang", "Phường", "Bien Giang"],
                        ["10117", "Đồng Mai", "Phường", "Dong Mai"],
                        ["09886", "Dương Nội", "Phường", "Duong Noi"],
                        ["09556", "Hà Cầu", "Phường", "Ha Cau"],
                        ["09565", "Kiến Hưng", "Phường", "Kien Hung"],
                        ["09551", "La Khê", "Phường", "La Khe"],
                        ["09541", "Mộ Lao", "Phường", "Mo Lao"],
                        ["09538", "Nguyễn Trãi", "Phường", "Nguyen Trai"],
                        ["09552", "Phú La", "Phường", "Phu La"],
                        ["09568", "Phú Lãm", "Phường", "Phu Lam"],
                        ["09571", "Phú Lương", "Phường", "Phu Luong"],
                        ["09553", "Phúc La", "Phường", "Phuc La"],
                        ["09550", "Quang Trung", "Phường", "Quang Trung"],
                        ["09544", "Vạn Phúc", "Phường", "Van Phuc"],
                        ["09542", "Văn Quán", "Phường", "Van Quan"],
                        ["09562", "Yên Nghĩa", "Phường", "Yen Nghia"],
                        ["09547", "Yết Kiêu", "Phường", "Yet Kieu"]
                    ]
                ],
                [
                    "007", "Hai Bà Trưng", "Quận", "Hai Ba Trung",
                    [
                        ["00244", "Bạch Đằng", "Phường", "Bach Dang"],
                        ["00277", "Bách Khoa", "Phường", "Bach Khoa"],
                        ["00286", "Bạch Mai", "Phường", "Bach Mai"],
                        ["00274", "Cầu Dền", "Phường", "Cau Den"],
                        ["00265", "Đống Mác", "Phường", "Dong Mac"],
                        ["00259", "Đồng Nhân", "Phường", "Dong Nhan"],
                        ["00280", "Đồng Tâm", "Phường", "Dong Tam"],
                        ["00256", "Lê Đại Hành", "Phường", "Le Dai Hanh"],
                        ["00295", "Minh Khai", "Phường", "Minh Khai"],
                        ["00241", "Nguyễn Du", "Phường", "Nguyen Du"],
                        ["00247", "Phạm Đình Hổ", "Phường", "Pham Dinh Ho"],
                        ["00262", "Phố Huế", "Phường", "Pho Hue"],
                        ["00292", "Quỳnh Lôi", "Phường", "Quynh Loi"],
                        ["00289", "Quỳnh Mai", "Phường", "Quynh Mai"],
                        ["00268", "Thanh Lương", "Phường", "Thanh Luong"],
                        ["00271", "Thanh Nhàn", "Phường", "Thanh Nhan"],
                        ["00298", "Trương Định", "Phường", "Truong Dinh"],
                        ["00283", "Vĩnh Tuy", "Phường", "Vinh Tuy"]
                    ]
                ],
                [
                    "274", "Hoài Đức", "Huyện", "Hoai Duc",
                    [
                        ["09877", "An Khánh", "Xã", "An Khanh"],
                        ["09880", "An Thượng", "Xã", "An Thuong"],
                        ["09850", "Cát Quế", "Xã", "Cat Que"],
                        ["09865", "Đắc Sở", "Xã", "Dac So"],
                        ["09844", "Di Trạch", "Xã", "Di Trach"],
                        ["09892", "Đông La", "Xã", "Dong La"],
                        ["09847", "Đức Giang", "Xã", "Duc Giang"],
                        ["09835", "Đức Thượng", "Xã", "Duc Thuong"],
                        ["09841", "Dương Liễu", "Xã", "Duong Lieu"],
                        ["09853", "Kim Chung", "Xã", "Kim Chung"],
                        ["09889", "La Phù", "Xã", "La Phu"],
                        ["09868", "Lại Yên", "Xã", "Lai Yen"],
                        ["09838", "Minh Khai", "Xã", "Minh Khai"],
                        ["09859", "Sơn Đồng", "Xã", "Son Dong"],
                        ["09874", "Song Phương", "Xã", "Song Phuong"],
                        ["09871", "Tiền Yên", "Xã", "Tien Yen"],
                        ["09832", "Trạm Trôi", "Thị trấn", "Tram Troi"],
                        ["09862", "Vân Canh", "Xã", "Van Canh"],
                        ["09883", "Vân Côn", "Xã", "Van Con"],
                        ["09856", "Yên Sở", "Xã", "Yen So"]
                    ]
                ],
                [
                    "002", "Hoàn Kiếm", "Quận", "Hoan Kiem",
                    [
                        ["00067", "Chương Dương", "Phường", "Chuong Duong"],
                        ["00055", "Cửa Đông", "Phường", "Cua Dong"],
                        ["00073", "Cửa Nam", "Phường", "Cua Nam"],
                        ["00040", "Đồng Xuân", "Phường", "Dong Xuan"],
                        ["00061", "Hàng Bạc", "Phường", "Hang Bac"],
                        ["00088", "Hàng Bài", "Phường", "Hang Bai"],
                        ["00052", "Hàng Bồ", "Phường", "Hang Bo"],
                        ["00076", "Hàng Bông", "Phường", "Hang Bong"],
                        ["00046", "Hàng Buồm", "Phường", "Hang Buom"],
                        ["00049", "Hàng Đào", "Phường", "Hang Dao"],
                        ["00064", "Hàng Gai", "Phường", "Hang Gai"],
                        ["00043", "Hàng Mã", "Phường", "Hang Ma"],
                        ["00070", "Hàng Trống", "Phường", "Hang Trong"],
                        ["00058", "Lý Thái Tổ", "Phường", "Ly Thai To"],
                        ["00085", "Phan Chu Trinh", "Phường", "Phan Chu Trinh"],
                        ["00037", "Phúc Tân", "Phường", "Phuc Tan"],
                        ["00082", "Trần Hưng Đạo", "Phường", "Tran Hung Dao"],
                        ["00079", "Tràng Tiền", "Phường", "Trang Tien"]
                    ]
                ],
                [
                    "008", "Hoàng Mai", "Quận", "Hoang Mai",
                    [
                        ["00316", "Đại Kim", "Phường", "Dai Kim"],
                        ["00307", "Định Công", "Phường", "Dinh Cong"],
                        ["00325", "Giáp Bát", "Phường", "Giap Bat"],
                        ["00337", "Hoàng Liệt", "Phường", "Hoang Liet"],
                        ["00322", "Hoàng Văn Thụ", "Phường", "Hoang Van Thu"],
                        ["00328", "Lĩnh Nam", "Phường", "Linh Nam"],
                        ["00310", "Mai Động", "Phường", "Mai Dong"],
                        ["00319", "Tân Mai", "Phường", "Tan Mai"],
                        ["00301", "Thanh Trì", "Phường", "Thanh Tri"],
                        ["00331", "Thịnh Liệt", "Phường", "Thinh Liet"],
                        ["00334", "Trần Phú", "Phường", "Tran Phu"],
                        ["00313", "Tương Mai", "Phường", "Tuong Mai"],
                        ["00304", "Vĩnh Hưng", "Phường", "Vinh Hung"],
                        ["00340", "Yên Sở", "Phường", "Yen So"]
                    ]
                ],
                [
                    "004", "Long Biên", "Quận", "Long Bien",
                    [
                        ["00139", "Bồ Đề", "Phường", "Bo De"],
                        ["00154", "Cự Khối", "Phường", "Cu Khoi"],
                        ["00124", "Đức Giang", "Phường", "Duc Giang"],
                        ["00130", "Gia Thụy", "Phường", "Gia Thuy"],
                        ["00121", "Giang Biên", "Phường", "Giang Bien"],
                        ["00145", "Long Biên", "Phường", "Long Bien"],
                        ["00133", "Ngọc Lâm", "Phường", "Ngoc Lam"],
                        ["00118", "Ngọc Thụy", "Phường", "Ngoc Thuy"],
                        ["00151", "Phúc Đồng", "Phường", "Phuc Dong"],
                        ["00136", "Phúc Lợi", "Phường", "Phuc Loi"],
                        ["00142", "Sài Đồng", "Phường", "Sai Dong"],
                        ["00148", "Thạch Bàn", "Phường", "Thach Ban"],
                        ["00115", "Thượng Thanh", "Phường", "Thuong Thanh"],
                        ["00127", "Việt Hưng", "Phường", "Viet Hung"]
                    ]
                ],
                [
                    "250", "Mê Linh", "Huyện", "Me Linh",
                    [
                        ["08973", "Chi Đông", "Thị trấn", "Chi Dong"],
                        ["09004", "Chu Phan", "Xã", "Chu Phan"],
                        ["08974", "Đại Thịnh", "Xã", "Dai Thinh"],
                        ["09016", "Hoàng Kim", "Xã", "Hoang Kim"],
                        ["08977", "Kim Hoa", "Xã", "Kim Hoa"],
                        ["08998", "Liên Mạc", "Xã", "Lien Mac"],
                        ["09010", "Mê Linh", "Xã", "Me Linh"],
                        ["08989", "Quang Minh", "Thị trấn", "Quang Minh"],
                        ["08995", "Tam Đồng", "Xã", "Tam Dong"],
                        ["08980", "Thạch Đà", "Xã", "Thach Da"],
                        ["08992", "Thanh Lâm", "Xã", "Thanh Lam"],
                        ["09019", "Tiền Phong", "Xã", "Tien Phong"],
                        ["08983", "Tiến Thắng", "Xã", "Tien Thang"],
                        ["09007", "Tiến Thịnh", "Xã", "Tien Thinh"],
                        ["09022", "Tráng Việt", "Xã", "Trang Viet"],
                        ["08986", "Tự Lập", "Xã", "Tu Lap"],
                        ["09013", "Văn Khê", "Xã", "Van Khe"],
                        ["09001", "Vạn Yên", "Xã", "Van Yen"]
                    ]
                ],
                [
                    "282", "Mỹ Đức", "Huyện", "My Duc",
                    [
                        ["10462", "An Mỹ", "Xã", "An My"],
                        ["10504", "An Phú", "Xã", "An Phu"],
                        ["10495", "An Tiến", "Xã", "An Tien"],
                        ["10459", "Bột Xuyên", "Xã", "Bot Xuyen"],
                        ["10480", "Đại Hưng", "Xã", "Dai Hung"],
                        ["10441", "Đại Nghĩa", "Thị trấn", "Dai Nghia"],
                        ["10486", "Đốc Tín", "Xã", "Doc Tin"],
                        ["10444", "Đồng Tâm", "Xã", "Dong Tam"],
                        ["10465", "Hồng Sơn", "Xã", "Hong Son"],
                        ["10501", "Hợp Thanh", "Xã", "Hop Thanh"],
                        ["10498", "Hợp Tiến", "Xã", "Hop Tien"],
                        ["10492", "Hùng Tiến", "Xã", "Hung Tien"],
                        ["10489", "Hương Sơn", "Xã", "Huong Son"],
                        ["10468", "Lê Thanh", "Xã", "Le Thanh"],
                        ["10456", "Mỹ Thành", "Xã", "My Thanh"],
                        ["10477", "Phù Lưu Tế", "Xã", "Phu Luu Te"],
                        ["10453", "Phúc Lâm", "Xã", "Phuc Lam"],
                        ["10474", "Phùng Xá", "Xã", "Phung Xa"],
                        ["10447", "Thượng Lâm", "Xã", "Thuong Lam"],
                        ["10450", "Tuy Lai", "Xã", "Tuy Lai"],
                        ["10483", "Vạn Kim", "Xã", "Van Kim"],
                        ["10471", "Xuy Xá", "Xã", "Xuy Xa"]
                    ]
                ],
                [
                    "019", "Nam Từ Liêm", "Quận", "Nam Tu Liem",
                    [
                        ["00592", "Cầu Diễn", "Phường", "Cau Dien"],
                        ["00634", "Đại Mỗ", "Phường", "Dai Mo"],
                        ["00631", "Mễ Trì", "Phường", "Me Tri"],
                        ["00625", "Mỹ Đình 1", "Phường", "My Dinh 1"],
                        ["00626", "Mỹ Đình 2", "Phường", "My Dinh 2"],
                        ["00632", "Phú Đô", "Phường", "Phu Do"],
                        ["00623", "Phương Canh", "Phường", "Phuong Canh"],
                        ["00628", "Tây Mỗ", "Phường", "Tay Mo"],
                        ["00637", "Trung Văn", "Phường", "Trung Van"],
                        ["00622", "Xuân Phương", "Phường", "Xuan Phuong"]
                    ]
                ],
                [
                    "280", "Phú Xuyên", "Huyện", "Phu Xuyen",
                    [
                        ["10342", "Bạch Hạ", "Xã", "Bach Ha"],
                        ["10348", "Châu Can", "Xã", "Chau Can"],
                        ["10321", "Chuyên Mỹ", "Xã", "Chuyen My"],
                        ["10291", "Đại Thắng", "Xã", "Dai Thang"],
                        ["10336", "Đại Xuyên", "Xã", "Dai Xuyen"],
                        ["10303", "Hoàng Long", "Xã", "Hoang Long"],
                        ["10276", "Hồng Minh", "Xã", "Hong Minh"],
                        ["10300", "Hồng Thái", "Xã", "Hong Thai"],
                        ["10324", "Khai Thái", "Xã", "Khai Thai"],
                        ["10351", "Minh Tân", "Xã", "Minh Tan"],
                        ["10309", "Nam Phong", "Xã", "Nam Phong"],
                        ["10282", "Nam Tiến", "Xã", "Nam Tien"],
                        ["10312", "Nam Triều", "Xã", "Nam Trieu"],
                        ["10270", "Phú Minh", "Thị trấn", "Phu Minh"],
                        ["10294", "Phú Túc", "Xã", "Phu Tuc"],
                        ["10273", "Phú Xuyên", "Thị trấn", "Phu Xuyen"],
                        ["10339", "Phú Yên", "Xã", "Phu Yen"],
                        ["10327", "Phúc Tiến", "Xã", "Phuc Tien"],
                        ["10279", "Phượng Dực", "Xã", "Phuong Duc"],
                        ["10345", "Quang Lãng", "Xã", "Quang Lang"],
                        ["10306", "Quang Trung", "Xã", "Quang Trung"],
                        ["10318", "Sơn Hà", "Xã", "Son Ha"],
                        ["10315", "Tân Dân", "Xã", "Tan Dan"],
                        ["10333", "Tri Thủy", "Xã", "Tri Thuy"],
                        ["10288", "Tri Trung", "Xã", "Tri Trung"],
                        ["10297", "Văn Hoàng", "Xã", "Van Hoang"],
                        ["10330", "Vân Từ", "Xã", "Van Tu"]
                    ]
                ],
                [
                    "272", "Phúc Thọ", "Huyện", "Phuc Tho",
                    [
                        ["09751", "Hát Môn", "Xã", "Hat Mon"],
                        ["09778", "Hiệp Thuận", "Xã", "Hiep Thuan"],
                        ["09781", "Liên Hiệp", "Xã", "Lien Hiep"],
                        ["09745", "Long Xuyên", "Xã", "Long Xuyen"],
                        ["09766", "Ngọc Tảo", "Xã", "Ngoc Tao"],
                        ["09763", "Phúc Hòa", "Xã", "Phuc Hoa"],
                        ["09715", "Phúc Thọ", "Thị trấn", "Phuc Tho"],
                        ["09769", "Phụng Thượng", "Xã", "Phung Thuong"],
                        ["09733", "Sen Phương", "Xã", "Sen Phuong"],
                        ["09775", "Tam Hiệp", "Xã", "Tam Hiep"],
                        ["09772", "Tam Thuấn", "Xã", "Tam Thuan"],
                        ["09757", "Thanh Đa", "Xã", "Thanh Da"],
                        ["09742", "Thọ Lộc", "Xã", "Tho Loc"],
                        ["09748", "Thượng Cốc", "Xã", "Thuong Coc"],
                        ["09754", "Tích Giang", "Xã", "Tich Giang"],
                        ["09760", "Trạch Mỹ Lộc", "Xã", "Trach My Loc"],
                        ["09718", "Vân Hà", "Xã", "Van Ha"],
                        ["09724", "Vân Nam", "Xã", "Van Nam"],
                        ["09721", "Vân Phúc", "Xã", "Van Phuc"],
                        ["09739", "Võng Xuyên", "Xã", "Vong Xuyen"],
                        ["09727", "Xuân Đình", "Xã", "Xuan Dinh"]
                    ]
                ],
                [
                    "275", "Quốc Oai", "Huyện", "Quoc Oai",
                    [
                        ["09943", "Cấn Hữu", "Xã", "Can Huu"],
                        ["09931", "Cộng Hòa", "Xã", "Cong Hoa"],
                        ["09937", "Đại Thành", "Xã", "Dai Thanh"],
                        ["09919", "Đồng Quang", "Xã", "Dong Quang"],
                        ["04939", "Đông Xuân", "Xã", "Dong Xuan"],
                        ["09952", "Đông Yên", "Xã", "Dong Yen"],
                        ["09949", "Hòa Thạch", "Xã", "Hoa Thach"],
                        ["09913", "Liệp Tuyết", "Xã", "Liep Tuyet"],
                        ["09928", "Nghĩa Hương", "Xã", "Nghia Huong"],
                        ["09907", "Ngọc Liệp", "Xã", "Ngoc Liep"],
                        ["09910", "Ngọc Mỹ", "Xã", "Ngoc My"],
                        ["09922", "Phú Cát", "Xã", "Phu Cat"],
                        ["09940", "Phú Mãn", "Xã", "Phu Man"],
                        ["09901", "Phượng Cách", "Xã", "Phuong Cach"],
                        ["09895", "Quốc Oai", "Thị trấn", "Quoc Oai"],
                        ["09898", "Sài Sơn", "Xã", "Sai Son"],
                        ["09946", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["09934", "Tân Phú", "Xã", "Tan Phu"],
                        ["09916", "Thạch Thán", "Xã", "Thach Than"],
                        ["09925", "Tuyết Nghĩa", "Xã", "Tuyet Nghia"],
                        ["09904", "Yên Sơn", "Xã", "Yen Son"]
                    ]
                ],
                [
                    "016", "Sóc Sơn", "Huyện", "Soc Son",
                    [
                        ["00403", "Bắc Phú", "Xã", "Bac Phu"],
                        ["00379", "Bắc Sơn", "Xã", "Bac Son"],
                        ["00436", "Đông Xuân", "Xã", "Dong Xuan"],
                        ["00430", "Đức Hoà", "Xã", "Duc Hoa"],
                        ["00412", "Hiền Ninh", "Xã", "Hien Ninh"],
                        ["00385", "Hồng Kỳ", "Xã", "Hong Ky"],
                        ["00439", "Kim Lũ", "Xã", "Kim Lu"],
                        ["00427", "Mai Đình", "Xã", "Mai Dinh"],
                        ["00397", "Minh Phú", "Xã", "Minh Phu"],
                        ["00382", "Minh Trí", "Xã", "Minh Tri"],
                        ["00388", "Nam Sơn", "Xã", "Nam Son"],
                        ["00442", "Phú Cường", "Xã", "Phu Cuong"],
                        ["00400", "Phù Linh", "Xã", "Phu Linh"],
                        ["00448", "Phù Lỗ", "Xã", "Phu Lo"],
                        ["00445", "Phú Minh", "Xã", "Phu Minh"],
                        ["00409", "Quang Tiến", "Xã", "Quang Tien"],
                        ["00376", "Sóc Sơn", "Thị trấn", "Soc Son"],
                        ["00415", "Tân Dân", "Xã", "Tan Dan"],
                        ["00394", "Tân Hưng", "Xã", "Tan Hung"],
                        ["00406", "Tân Minh", "Xã", "Tan Minh"],
                        ["00433", "Thanh Xuân", "Xã", "Thanh Xuan"],
                        ["00418", "Tiên Dược", "Xã", "Tien Duoc"],
                        ["00391", "Trung Giã", "Xã", "Trung Gia"],
                        ["00421", "Việt Long", "Xã", "Viet Long"],
                        ["00424", "Xuân Giang", "Xã", "Xuan Giang"],
                        ["00451", "Xuân Thu", "Xã", "Xuan Thu"]
                    ]
                ],
                [
                    "269", "Sơn Tây", "Thị xã", "Son Tay",
                    [
                        ["09616", "Cổ Đông", "Xã", "Co Dong"],
                        ["09592", "Đường Lâm", "Xã", "Duong Lam"],
                        ["09610", "Kim Sơn", "Xã", "Kim Son"],
                        ["09574", "Lê Lợi", "Phường", "Le Loi"],
                        ["09580", "Ngô Quyền", "Phường", "Ngo Quyen"],
                        ["09577", "Phú Thịnh", "Phường", "Phu Thinh"],
                        ["09583", "Quang Trung", "Phường", "Quang Trung"],
                        ["09613", "Sơn Đông", "Xã", "Son Dong"],
                        ["09586", "Sơn Lộc", "Phường", "Son Loc"],
                        ["09604", "Thanh Mỹ", "Xã", "Thanh My"],
                        ["09601", "Trung Hưng", "Phường", "Trung Hung"],
                        ["09607", "Trung Sơn Trầm", "Phường", "Trung Son Tram"],
                        ["09595", "Viên Sơn", "Phường", "Vien Son"],
                        ["09589", "Xuân Khanh", "Phường", "Xuan Khanh"],
                        ["09598", "Xuân Sơn", "Xã", "Xuan Son"]
                    ]
                ],
                [
                    "003", "Tây Hồ", "Quận", "Tay Ho",
                    [
                        ["00109", "Bưởi", "Phường", "Buoi"],
                        ["00094", "Nhật Tân", "Phường", "Nhat Tan"],
                        ["00091", "Phú Thượng", "Phường", "Phu Thuong"],
                        ["00100", "Quảng An", "Phường", "Quang An"],
                        ["00112", "Thụy Khuê", "Phường", "Thuy Khue"],
                        ["00097", "Tứ Liên", "Phường", "Tu Lien"],
                        ["00103", "Xuân La", "Phường", "Xuan La"],
                        ["00106", "Yên Phụ", "Phường", "Yen Phu"]
                    ]
                ],
                [
                    "276", "Thạch Thất", "Huyện", "Thach That",
                    [
                        ["10006", "Bình Phú", "Xã", "Binh Phu"],
                        ["09982", "Bình Yên", "Xã", "Binh Yen"],
                        ["09961", "Cẩm Yên", "Xã", "Cam Yen"],
                        ["09991", "Cần Kiệm", "Xã", "Can Kiem"],
                        ["09973", "Canh Nậu", "Xã", "Canh Nau"],
                        ["09985", "Chàng Sơn", "Xã", "Chang Son"],
                        ["09958", "Đại Đồng", "Xã", "Dai Dong"],
                        ["09979", "Dị Nậu", "Xã", "Di Nau"],
                        ["10012", "Đồng Trúc", "Xã", "Dong Truc"],
                        ["10009", "Hạ Bằng", "Xã", "Ha Bang"],
                        ["09970", "Hương Ngải", "Xã", "Huong Ngai"],
                        ["09994", "Hữu Bằng", "Xã", "Huu Bang"],
                        ["09976", "Kim Quan", "Xã", "Kim Quan"],
                        ["09964", "Lại Thượng", "Xã", "Lai Thuong"],
                        ["09955", "Liên Quan", "Thị trấn", "Lien Quan"],
                        ["09967", "Phú Kim", "Xã", "Phu Kim"],
                        ["09997", "Phùng Xá", "Xã", "Phung Xa"],
                        ["10000", "Tân Xã", "Xã", "Tan Xa"],
                        ["09988", "Thạch Hoà", "Xã", "Thach Hoa"],
                        ["10003", "Thạch Xá", "Xã", "Thach Xa"],
                        ["04936", "Tiến Xuân", "Xã", "Tien Xuan"],
                        ["04930", "Yên Bình", "Xã", "Yen Binh"],
                        ["04927", "Yên Trung", "Xã", "Yen Trung"]
                    ]
                ],
                [
                    "278", "Thanh Oai", "Huyện", "Thanh Oai",
                    [
                        ["10126", "Bích Hòa", "Xã", "Bich Hoa"],
                        ["10135", "Bình Minh", "Xã", "Binh Minh"],
                        ["10174", "Cao Dương", "Xã", "Cao Duong"],
                        ["10132", "Cao Viên", "Xã", "Cao Vien"],
                        ["10120", "Cự Khê", "Xã", "Cu Khe"],
                        ["10168", "Dân Hòa", "Xã", "Dan Hoa"],
                        ["10153", "Đỗ Động", "Xã", "Do Dong"],
                        ["10180", "Hồng Dương", "Xã", "Hong Duong"],
                        ["10156", "Kim An", "Xã", "Kim An"],
                        ["10114", "Kim Bài", "Thị trấn", "Kim Bai"],
                        ["10159", "Kim Thư", "Xã", "Kim Thu"],
                        ["10171", "Liên Châu", "Xã", "Lien Chau"],
                        ["10129", "Mỹ Hưng", "Xã", "My Hung"],
                        ["10162", "Phương Trung", "Xã", "Phuong Trung"],
                        ["10138", "Tam Hưng", "Xã", "Tam Hung"],
                        ["10165", "Tân Ước", "Xã", "Tan Uoc"],
                        ["10141", "Thanh Cao", "Xã", "Thanh Cao"],
                        ["10147", "Thanh Mai", "Xã", "Thanh Mai"],
                        ["10144", "Thanh Thùy", "Xã", "Thanh Thuy"],
                        ["10150", "Thanh Văn", "Xã", "Thanh Van"],
                        ["10177", "Xuân Dương", "Xã", "Xuan Duong"]
                    ]
                ],
                [
                    "020", "Thanh Trì", "Huyện", "Thanh Tri",
                    [
                        ["00679", "Đại áng", "Xã", "Dai ang"],
                        ["00685", "Đông Mỹ", "Xã", "Dong My"],
                        ["00670", "Duyên Hà", "Xã", "Duyen Ha"],
                        ["00652", "Hữu Hoà", "Xã", "Huu Hoa"],
                        ["00682", "Liên Ninh", "Xã", "Lien Ninh"],
                        ["00673", "Ngọc Hồi", "Xã", "Ngoc Hoi"],
                        ["00667", "Ngũ Hiệp", "Xã", "Ngu Hiep"],
                        ["00649", "Tả Thanh Oai", "Xã", "Ta Thanh Oai"],
                        ["00655", "Tam Hiệp", "Xã", "Tam Hiep"],
                        ["00643", "Tân Triều", "Xã", "Tan Trieu"],
                        ["00646", "Thanh Liệt", "Xã", "Thanh Liet"],
                        ["00658", "Tứ Hiệp", "Xã", "Tu Hiep"],
                        ["00640", "Văn Điển", "Thị trấn", "Van Dien"],
                        ["00676", "Vạn Phúc", "Xã", "Van Phuc"],
                        ["00664", "Vĩnh Quỳnh", "Xã", "Vinh Quynh"],
                        ["00661", "Yên Mỹ", "Xã", "Yen My"]
                    ]
                ],
                [
                    "009", "Thanh Xuân", "Quận", "Thanh Xuan",
                    [
                        ["00361", "Hạ Đình", "Phường", "Ha Dinh"],
                        ["00364", "Khương Đình", "Phường", "Khuong Dinh"],
                        ["00352", "Khương Mai", "Phường", "Khuong Mai"],
                        ["00349", "Khương Trung", "Phường", "Khuong Trung"],
                        ["00373", "Kim Giang", "Phường", "Kim Giang"],
                        ["00343", "Nhân Chính", "Phường", "Nhan Chinh"],
                        ["00358", "Phương Liệt", "Phường", "Phuong Liet"],
                        ["00367", "Thanh Xuân Bắc", "Phường", "Thanh Xuan Bac"],
                        ["00370", "Thanh Xuân Nam", "Phường", "Thanh Xuan Nam"],
                        ["00355", "Thanh Xuân Trung", "Phường", "Thanh Xuan Trung"],
                        ["00346", "Thượng Đình", "Phường", "Thuong Dinh"]
                    ]
                ],
                [
                    "279", "Thường Tín", "Huyện", "Thuong Tin",
                    [
                        ["10237", "Chương Dương", "Xã", "Chuong Duong"],
                        ["10249", "Dũng Tiến", "Xã", "Dung Tien"],
                        ["10192", "Duyên Thái", "Xã", "Duyen Thai"],
                        ["10225", "Hà Hồi", "Xã", "Ha Hoi"],
                        ["10204", "Hiền Giang", "Xã", "Hien Giang"],
                        ["10198", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["10207", "Hồng Vân", "Xã", "Hong Van"],
                        ["10195", "Khánh Hà", "Xã", "Khanh Ha"],
                        ["10243", "Lê Lợi", "Xã", "Le Loi"],
                        ["10213", "Liên Phương", "Xã", "Lien Phuong"],
                        ["10267", "Minh Cường", "Xã", "Minh Cuong"],
                        ["10255", "Nghiêm Xuyên", "Xã", "Nghiem Xuyen"],
                        ["10231", "Nguyễn Trãi", "Xã", "Nguyen Trai"],
                        ["10189", "Nhị Khê", "Xã", "Nhi Khe"],
                        ["10186", "Ninh Sở", "Xã", "Ninh So"],
                        ["10234", "Quất Động", "Xã", "Quat Dong"],
                        ["10240", "Tân Minh", "Xã", "Tan Minh"],
                        ["10246", "Thắng Lợi", "Xã", "Thang Loi"],
                        ["10252", "Thống Nhất", "Xã", "Thong Nhat"],
                        ["10228", "Thư Phú", "Xã", "Thu Phu"],
                        ["10183", "Thường Tín", "Thị trấn", "Thuong Tin"],
                        ["10222", "Tiền Phong", "Xã", "Tien Phong"],
                        ["10258", "Tô Hiệu", "Xã", "To Hieu"],
                        ["10219", "Tự Nhiên", "Xã", "Tu Nhien"],
                        ["10201", "Văn Bình", "Xã", "Van Binh"],
                        ["10264", "Vạn Điểm", "Xã", "Van Diem"],
                        ["10216", "Văn Phú", "Xã", "Van Phu"],
                        ["10210", "Vân Tảo", "Xã", "Van Tao"],
                        ["10261", "Văn Tự", "Xã", "Van Tu"]
                    ]
                ],
                [
                    "281", "Ứng Hòa", "Huyện", "Ung Hoa",
                    [
                        ["10372", "Cao Thành", "Xã", "Cao Thanh"],
                        ["10432", "Đại Cường", "Xã", "Dai Cuong"],
                        ["10423", "Đại Hùng", "Xã", "Dai Hung"],
                        ["10420", "Đội Bình", "Xã", "Doi Binh"],
                        ["10426", "Đông Lỗ", "Xã", "Dong Lo"],
                        ["10390", "Đồng Tân", "Xã", "Dong Tan"],
                        ["10381", "Đồng Tiến", "Xã", "Dong Tien"],
                        ["10402", "Hòa Lâm", "Xã", "Hoa Lam"],
                        ["10414", "Hòa Nam", "Xã", "Hoa Nam"],
                        ["10417", "Hòa Phú", "Xã", "Hoa Phu"],
                        ["10363", "Hoa Sơn", "Xã", "Hoa Son"],
                        ["10405", "Hòa Xá", "Xã", "Hoa Xa"],
                        ["10438", "Hồng Quang", "Xã", "Hong Quang"],
                        ["10411", "Kim Đường", "Xã", "Kim Duong"],
                        ["10375", "Liên Bạt", "Xã", "Lien Bat"],
                        ["10435", "Lưu Hoàng", "Xã", "Luu Hoang"],
                        ["10399", "Minh Đức", "Xã", "Minh Duc"],
                        ["10429", "Phù Lưu", "Xã", "Phu Luu"],
                        ["10384", "Phương Tú", "Xã", "Phuong Tu"],
                        ["10366", "Quảng Phú Cầu", "Xã", "Quang Phu Cau"],
                        ["10378", "Sơn Công", "Xã", "Son Cong"],
                        ["10393", "Tảo Dương Văn", "Xã", "Tao Duong Van"],
                        ["10408", "Trầm Lộng", "Xã", "Tram Long"],
                        ["10387", "Trung Tú", "Xã", "Trung Tu"],
                        ["10369", "Trường Thịnh", "Xã", "Truong Thinh"],
                        ["10354", "Vân Đình", "Thị trấn", "Van Dinh"],
                        ["10396", "Vạn Thái", "Xã", "Van Thai"],
                        ["10357", "Viên An", "Xã", "Vien An"],
                        ["10360", "Viên Nội", "Xã", "Vien Noi"]
                    ]
                ]
            ]
        ],
        [
            "42", "Hà Tĩnh", "Tỉnh", "Ha Tinh",
            [
                [
                    "446", "Cẩm Xuyên", "Huyện", "Cam Xuyen",
                    [
                        ["18685", "Cẩm Bình", "Xã", "Cam Binh"],
                        ["18715", "Cẩm Duệ", "Xã", "Cam Due"],
                        ["18682", "Cẩm Dương", "Xã", "Cam Duong"],
                        ["18727", "Cẩm Hà", "Xã", "Cam Ha"],
                        ["18733", "Cẩm Hưng", "Xã", "Cam Hung"],
                        ["18748", "Cẩm Lạc", "Xã", "Cam Lac"],
                        ["18721", "Cẩm Lĩnh", "Xã", "Cam Linh"],
                        ["18730", "Cẩm Lộc", "Xã", "Cam Loc"],
                        ["18751", "Cẩm Minh", "Xã", "Cam Minh"],
                        ["18739", "Cẩm Mỹ", "Xã", "Cam My"],
                        ["18709", "Cẩm Nhượng", "Xã", "Cam Nhuong"],
                        ["18724", "Cẩm Quan", "Xã", "Cam Quan"],
                        ["18697", "Cẩm Quang", "Xã", "Cam Quang"],
                        ["18745", "Cẩm Sơn", "Xã", "Cam Son"],
                        ["18706", "Cẩm Thạch", "Xã", "Cam Thach"],
                        ["18694", "Cẩm Thành", "Xã", "Cam Thanh"],
                        ["18736", "Cẩm Thịnh", "Xã", "Cam Thinh"],
                        ["18742", "Cẩm Trung", "Xã", "Cam Trung"],
                        ["18691", "Cẩm Vĩnh", "Xã", "Cam Vinh"],
                        ["18673", "Cẩm Xuyên", "Thị trấn", "Cam Xuyen"],
                        ["18712", "Nam Phúc Thăng", "Xã", "Nam Phuc Thang"],
                        ["18676", "Thiên Cầm", "Thị trấn", "Thien Cam"],
                        ["18679", "Yên Hòa", "Xã", "Yen Hoa"]
                    ]
                ],
                [
                    "443", "Can Lộc", "Huyện", "Can Loc",
                    [
                        ["18484", "Đồng Lộc", "Thị trấn", "Dong Loc"],
                        ["18463", "Gia Hanh", "Xã", "Gia Hanh"],
                        ["18466", "Khánh Vĩnh Yên", "Xã", "Khanh Vinh Yen"],
                        ["18436", "Kim Song Trường", "Xã", "Kim Song Truong"],
                        ["18487", "Mỹ Lộc", "Xã", "My Loc"],
                        ["18406", "Nghèn", "Thị trấn", "Nghen"],
                        ["18454", "Phú Lộc", "Xã", "Phu Loc"],
                        ["18481", "Quang Lộc", "Xã", "Quang Loc"],
                        ["18490", "Sơn Lộc", "Xã", "Son Loc"],
                        ["18433", "Thanh Lộc", "Xã", "Thanh Loc"],
                        ["18415", "Thiên Lộc", "Xã", "Thien Loc"],
                        ["18418", "Thuần Thiện", "Xã", "Thuan Thien"],
                        ["18478", "Thượng Lộc", "Xã", "Thuong Loc"],
                        ["18439", "Thường Nga", "Xã", "Thuong Nga"],
                        ["18472", "Trung Lộc", "Xã", "Trung Loc"],
                        ["18445", "Tùng Lộc", "Xã", "Tung Loc"],
                        ["18427", "Vượng Lộc", "Xã", "Vuong Loc"],
                        ["18475", "Xuân Lộc", "Xã", "Xuan Loc"]
                    ]
                ],
                [
                    "440", "Đức Thọ", "Huyện", "Duc Tho",
                    [
                        ["18298", "An Dũng", "Xã", "An Dung"],
                        ["18262", "Bùi La Nhân", "Xã", "Bui La Nhan"],
                        ["18304", "Đức Đồng", "Xã", "Duc Dong"],
                        ["18307", "Đức Lạng", "Xã", "Duc Lang"],
                        ["18229", "Đức Thọ", "Thị trấn", "Duc Tho"],
                        ["18280", "Hòa Lạc", "Xã", "Hoa Lac"],
                        ["18277", "Lâm Trung Thủy", "Xã", "Lam Trung Thuy"],
                        ["18247", "Liên Minh", "Xã", "Lien Minh"],
                        ["18235", "Quang Vĩnh", "Xã", "Quang Vinh"],
                        ["18283", "Tân Dân", "Xã", "Tan Dan"],
                        ["18310", "Tân Hương", "Xã", "Tan Huong"],
                        ["18274", "Thanh Bình Thịnh", "Xã", "Thanh Binh Thinh"],
                        ["18244", "Trường Sơn", "Xã", "Truong Son"],
                        ["18259", "Tùng Ảnh", "Xã", "Tung Anh"],
                        ["18241", "Tùng Châu", "Xã", "Tung Chau"],
                        ["18253", "Yên Hồ", "Xã", "Yen Ho"]
                    ]
                ],
                [
                    "436", "Hà Tĩnh", "Thành phố", "Ha Tinh",
                    [
                        ["18076", "Bắc Hà", "Phường", "Bac Ha"],
                        ["18082", "Đại Nài", "Phường", "Dai Nai"],
                        ["18103", "Đồng Môn", "Xã", "Dong Mon"],
                        ["18085", "Hà Huy Tập", "Phường", "Ha Huy Tap"],
                        ["18073", "Nam Hà", "Phường", "Nam Ha"],
                        ["18077", "Nguyễn Du", "Phường", "Nguyen Du"],
                        ["18079", "Tân Giang", "Phường", "Tan Giang"],
                        ["18112", "Thạch Bình", "Xã", "Thach Binh"],
                        ["18100", "Thạch Hạ", "Xã", "Thach Ha"],
                        ["18109", "Thạch Hưng", "Xã", "Thach Hung"],
                        ["18094", "Thạch Linh", "Phường", "Thach Linh"],
                        ["18091", "Thạch Quý", "Phường", "Thach Quy"],
                        ["18088", "Thạch Trung", "Xã", "Thach Trung"],
                        ["18070", "Trần Phú", "Phường", "Tran Phu"],
                        ["18097", "Văn Yên", "Phường", "Van Yen"]
                    ]
                ],
                [
                    "437", "Hồng Lĩnh", "Thị xã", "Hong Linh",
                    [
                        ["18115", "Bắc Hồng", "Phường", "Bac Hong"],
                        ["18127", "Đậu Liêu", "Phường", "Dau Lieu"],
                        ["18124", "Đức Thuận", "Phường", "Duc Thuan"],
                        ["18118", "Nam Hồng", "Phường", "Nam Hong"],
                        ["18130", "Thuận Lộc", "Xã", "Thuan Loc"],
                        ["18121", "Trung Lương", "Phường", "Trung Luong"]
                    ]
                ],
                [
                    "444", "Hương Khê", "Huyện", "Huong Khe",
                    [
                        ["18499", "Điền Mỹ", "Xã", "Dien My"],
                        ["18532", "Gia Phố", "Xã", "Gia Pho"],
                        ["18502", "Hà Linh", "Xã", "Ha Linh"],
                        ["18508", "Hòa Hải", "Xã", "Hoa Hai"],
                        ["18523", "Hương Bình", "Xã", "Huong Binh"],
                        ["18538", "Hương Đô", "Xã", "Huong Do"],
                        ["18517", "Hương Giang", "Xã", "Huong Giang"],
                        ["18496", "Hương Khê", "Thị trấn", "Huong Khe"],
                        ["18556", "Hương Lâm", "Xã", "Huong Lam"],
                        ["18559", "Hương Liên", "Xã", "Huong Lien"],
                        ["18526", "Hương Long", "Xã", "Huong Long"],
                        ["18505", "Hương Thủy", "Xã", "Huong Thuy"],
                        ["18550", "Hương Trà", "Xã", "Huong Tra"],
                        ["18553", "Hương Trạch", "Xã", "Huong Trach"],
                        ["18541", "Hương Vĩnh", "Xã", "Huong Vinh"],
                        ["18544", "Hương Xuân", "Xã", "Huong Xuan"],
                        ["18520", "Lộc Yên", "Xã", "Loc Yen"],
                        ["18529", "Phú Gia", "Xã", "Phu Gia"],
                        ["18535", "Phú Phong", "Xã", "Phu Phong"],
                        ["18514", "Phúc Đồng", "Xã", "Phuc Dong"],
                        ["18547", "Phúc Trạch", "Xã", "Phuc Trach"]
                    ]
                ],
                [
                    "439", "Hương Sơn", "Huyện", "Huong Son",
                    [
                        ["18136", " Tây Sơn", "Thị trấn", " Tay Son"],
                        ["18163", "An Hòa Thịnh", "Xã", "An Hoa Thinh"],
                        ["18211", "Kim Hoa", "Xã", "Kim Hoa"],
                        ["18133", "Phố Châu", "Thị trấn", "Pho Chau"],
                        ["18184", "Quang Diệm", "Xã", "Quang Diem"],
                        ["18190", "Sơn Bằng", "Xã", "Son Bang"],
                        ["18193", "Sơn Bình", "Xã", "Son Binh"],
                        ["18178", "Sơn Châu", "Xã", "Son Chau"],
                        ["18157", "Sơn Giang", "Xã", "Son Giang"],
                        ["18214", "Sơn Hàm", "Xã", "Son Ham"],
                        ["18139", "Sơn Hồng", "Xã", "Son Hong"],
                        ["18196", "Sơn Kim 1", "Xã", "Son Kim 1"],
                        ["18199", "Sơn Kim 2", "Xã", "Son Kim 2"],
                        ["18145", "Sơn Lâm", "Xã", "Son Lam"],
                        ["18148", "Sơn Lễ", "Xã", "Son Le"],
                        ["18160", "Sơn Lĩnh", "Xã", "Son Linh"],
                        ["18205", "Sơn Long", "Xã", "Son Long"],
                        ["18175", "Sơn Ninh", "Xã", "Son Ninh"],
                        ["18217", "Sơn Phú", "Xã", "Son Phu"],
                        ["18172", "Sơn Tây", "Xã", "Son Tay"],
                        ["18142", "Sơn Tiến", "Xã", "Son Tien"],
                        ["18202", "Sơn Trà", "Xã", "Son Tra"],
                        ["18187", "Sơn Trung", "Xã", "Son Trung"],
                        ["18223", "Sơn Trường", "Xã", "Son Truong"],
                        ["18181", "Tân Mỹ Hà", "Xã", "Tan My Ha"]
                    ]
                ],
                [
                    "447", "Kỳ Anh", "Huyện", "Ky Anh",
                    [
                        ["18760", "Kỳ Bắc", "Xã", "Ky Bac"],
                        ["18811", "Kỳ Châu", "Xã", "Ky Chau"],
                        ["18775", "Kỳ Đồng", "Xã", "Ky Dong"],
                        ["18772", "Kỳ Giang", "Xã", "Ky Giang"],
                        ["18802", "Kỳ Hải", "Xã", "Ky Hai"],
                        ["18778", "Kỳ Khang", "Xã", "Ky Khang"],
                        ["18850", "Kỳ Lạc", "Xã", "Ky Lac"],
                        ["18766", "Kỳ Phong", "Xã", "Ky Phong"],
                        ["18763", "Kỳ Phú", "Xã", "Ky Phu"],
                        ["18844", "Kỳ Sơn", "Xã", "Ky Son"],
                        ["18814", "Kỳ Tân", "Xã", "Ky Tan"],
                        ["18793", "Kỳ Tây", "Xã", "Ky Tay"],
                        ["18790", "Kỳ Thọ", "Xã", "Ky Tho"],
                        ["18805", "Kỳ Thư", "Xã", "Ky Thu"],
                        ["18799", "Kỳ Thượng", "Xã", "Ky Thuong"],
                        ["18769", "Kỳ Tiến", "Xã", "Ky Tien"],
                        ["18787", "Kỳ Trung", "Xã", "Ky Trung"],
                        ["18784", "Kỳ Văn", "Xã", "Ky Van"],
                        ["18757", "Kỳ Xuân", "Xã", "Ky Xuan"],
                        ["18838", "Lâm Hợp", "Xã", "Lam Hop"]
                    ]
                ],
                [
                    "449", "Kỳ Anh", "Thị xã", "Ky Anh",
                    [
                        ["18754", "Hưng Trí", "Phường", "Hung Tri"],
                        ["18808", "Kỳ Hà", "Xã", "Ky Ha"],
                        ["18829", "Kỳ Hoa", "Xã", "Ky Hoa"],
                        ["18841", "Kỳ Liên", "Phường", "Ky Lien"],
                        ["18796", "Kỳ Lợi", "Xã", "Ky Loi"],
                        ["18835", "Kỳ Long", "Phường", "Ky Long"],
                        ["18847", "Kỳ Nam", "Xã", "Ky Nam"],
                        ["18781", "Kỳ Ninh", "Xã", "Ky Ninh"],
                        ["18832", "Kỳ Phương", "Phường", "Ky Phuong"],
                        ["18823", "Kỳ Thịnh", "Phường", "Ky Thinh"],
                        ["18820", "Kỳ Trinh", "Phường", "Ky Trinh"]
                    ]
                ],
                [
                    "448", "Lộc Hà", "Huyện", "Loc Ha",
                    [
                        ["18430", "Bình An", "Xã", "Binh An"],
                        ["18598", "Hộ Độ", "Xã", "Ho Do"],
                        ["18412", "Hồng Lộc", "Xã", "Hong Loc"],
                        ["18457", "Ích Hậu", "Xã", "Ich Hau"],
                        ["18568", "Lộc Hà", "Thị trấn", "Loc Ha"],
                        ["18670", "Mai Phụ", "Xã", "Mai Phu"],
                        ["18493", "Phù Lưu", "Xã", "Phu Luu"],
                        ["18409", "Tân Lộc", "Xã", "Tan Loc"],
                        ["18583", "Thạch Châu", "Xã", "Thach Chau"],
                        ["18580", "Thạch Kim", "Xã", "Thach Kim"],
                        ["18577", "Thạch Mỹ", "Xã", "Thach My"],
                        ["18421", "Thịnh Lộc", "Xã", "Thinh Loc"]
                    ]
                ],
                [
                    "442", "Nghi Xuân", "Huyện", "Nghi Xuan",
                    [
                        ["18391", "Cỗ Đạm", "Xã", "Co Dam"],
                        ["18403", "Cương Gián", "Xã", "Cuong Gian"],
                        ["18358", "Đan Trường", "Xã", "Dan Truong"],
                        ["18373", "Tiên Điền", "Thị trấn", "Tien Dien"],
                        ["18352", "Xuân An", "Thị trấn", "Xuan An"],
                        ["18370", "Xuân Giang", "Xã", "Xuan Giang"],
                        ["18367", "Xuân Hải", "Xã", "Xuan Hai"],
                        ["18355", "Xuân Hội", "Xã", "Xuan Hoi"],
                        ["18388", "Xuân Hồng", "Xã", "Xuan Hong"],
                        ["18400", "Xuân Lam", "Xã", "Xuan Lam"],
                        ["18394", "Xuân Liên", "Xã", "Xuan Lien"],
                        ["18397", "Xuân Lĩnh", "Xã", "Xuan Linh"],
                        ["18379", "Xuân Mỹ", "Xã", "Xuan My"],
                        ["18364", "Xuân Phổ", "Xã", "Xuan Pho"],
                        ["18382", "Xuân Thành", "Xã", "Xuan Thanh"],
                        ["18385", "Xuân Viên", "Xã", "Xuan Vien"],
                        ["18376", "Xuân Yên", "Xã", "Xuan Yen"]
                    ]
                ],
                [
                    "445", "Thạch Hà", "Huyện", "Thach Ha",
                    [
                        ["18595", "Đỉnh Bàn", "Xã", "Dinh Ban"],
                        ["18634", "Lưu Vĩnh Sơn", "Xã", "Luu Vinh Son"],
                        ["18667", "Nam Điền", "Xã", "Nam Dien"],
                        ["18565", "Ngọc Sơn", "Xã", "Ngoc Son"],
                        ["18652", "Tân Lâm Hương", "Xã", "Tan Lam Huong"],
                        ["18643", "Thạch Đài", "Xã", "Thach Dai"],
                        ["18562", "Thạch Hà", "Thị trấn", "Thach Ha"],
                        ["18571", "Thạch Hải", "Xã", "Thach Hai"],
                        ["18649", "Thạch Hội", "Xã", "Thach Hoi"],
                        ["18586", "Thạch Kênh", "Xã", "Thach Kenh"],
                        ["18604", "Thạch Khê", "Xã", "Thach Khe"],
                        ["18622", "Thạch Lạc", "Xã", "Thach Lac"],
                        ["18592", "Thạch Liên", "Xã", "Thach Lien"],
                        ["18607", "Thạch Long", "Xã", "Thach Long"],
                        ["18625", "Thạch Ngọc", "Xã", "Thach Ngoc"],
                        ["18589", "Thạch Sơn", "Xã", "Thach Son"],
                        ["18637", "Thạch Thắng", "Xã", "Thach Thang"],
                        ["18619", "Thạch Trị", "Xã", "Thach Tri"],
                        ["18631", "Thạch Văn", "Xã", "Thach Van"],
                        ["18658", "Thạch Xuân", "Xã", "Thach Xuan"],
                        ["18628", "Tượng Sơn", "Xã", "Tuong Son"],
                        ["18601", "Việt Tiến", "Xã", "Viet Tien"]
                    ]
                ],
                [
                    "441", "Vũ Quang", "Huyện", "Vu Quang",
                    [
                        ["18316", "Ân Phú", "Xã", "An Phu"],
                        ["18331", "Đức Bồng", "Xã", "Duc Bong"],
                        ["18319", "Đức Giang", "Xã", "Duc Giang"],
                        ["18328", "Đức Hương", "Xã", "Duc Huong"],
                        ["18334", "Đức Liên", "Xã", "Duc Lien"],
                        ["18322", "Đức Lĩnh", "Xã", "Duc Linh"],
                        ["18340", "Hương Minh", "Xã", "Huong Minh"],
                        ["18343", "Quang Thọ", "Xã", "Quang Tho"],
                        ["18325", "Thọ Điền", "Xã", "Tho Dien"],
                        ["18313", "Vũ Quang", "Thị trấn", "Vu Quang"]
                    ]
                ]
            ]
        ],
        [
            "30", "Hải Dương", "Tỉnh", "Hai Duong",
            [
                [
                    "296", "Bình Giang", "Huyện", "Binh Giang",
                    [
                        ["10975", "Bình Minh", "Xã", "Binh Minh"],
                        ["10996", "Bình Xuyên", "Xã", "Binh Xuyen"],
                        ["10984", "Cổ Bì", "Xã", "Co Bi"],
                        ["10978", "Hồng Khê", "Xã", "Hong Khe"],
                        ["10954", "Hùng Thắng", "Xã", "Hung Thang"],
                        ["10945", "Kẻ Sặt", "Thị trấn", "Ke Sat"],
                        ["10963", "Long Xuyên", "Xã", "Long Xuyen"],
                        ["10987", "Nhân Quyền", "Xã", "Nhan Quyen"],
                        ["10972", "Tân Hồng", "Xã", "Tan Hong"],
                        ["10966", "Tân Việt", "Xã", "Tan Viet"],
                        ["10990", "Thái Dương", "Xã", "Thai Duong"],
                        ["10993", "Thái Hòa", "Xã", "Thai Hoa"],
                        ["10981", "Thái Học", "Xã", "Thai Hoc"],
                        ["10969", "Thúc Kháng", "Xã", "Thuc Khang"],
                        ["10960", "Vĩnh Hồng", "Xã", "Vinh Hong"],
                        ["10951", "Vĩnh Hưng", "Xã", "Vinh Hung"]
                    ]
                ],
                [
                    "295", "Cẩm Giàng", "Huyện", "Cam Giang",
                    [
                        ["10936", "Cẩm Điền", "Xã", "Cam Dien"],
                        ["10942", "Cẩm Đoài", "Xã", "Cam Doai"],
                        ["10939", "Cẩm Đông", "Xã", "Cam Dong"],
                        ["10888", "Cẩm Giang", "Thị trấn", "Cam Giang"],
                        ["10897", "Cẩm Hoàng", "Xã", "Cam Hoang"],
                        ["10894", "Cẩm Hưng", "Xã", "Cam Hung"],
                        ["10933", "Cẩm Phúc", "Xã", "Cam Phuc"],
                        ["10900", "Cẩm Văn", "Xã", "Cam Van"],
                        ["10909", "Cẩm Vũ", "Xã", "Cam Vu"],
                        ["10927", "Cao An", "Xã", "Cao An"],
                        ["10918", "Định Sơn", "Xã", "Dinh Son"],
                        ["10912", "Đức Chính", "Xã", "Duc Chinh"],
                        ["10891", "Lai Cách", "Thị trấn", "Lai Cach"],
                        ["10924", "Lương Điền", "Xã", "Luong Dien"],
                        ["10903", "Ngọc Liên", "Xã", "Ngoc Lien"],
                        ["10930", "Tân Trường", "Xã", "Tan Truong"],
                        ["10906", "Thạch Lỗi", "Xã", "Thach Loi"]
                    ]
                ],
                [
                    "290", "Chí Linh", "Thành phố", "Chi Linh",
                    [
                        ["10594", "An Lạc", "Phường", "An Lac"],
                        ["10558", "Bắc An", "Xã", "Bac An"],
                        ["10552", "Bến Tắm", "Phường", "Ben Tam"],
                        ["10582", "Chí Minh", "Phường", "Chi Minh"],
                        ["10576", "Cổ Thành", "Phường", "Co Thanh"],
                        ["10570", "Cộng Hoà", "Phường", "Cong Hoa"],
                        ["10600", "Đồng Lạc", "Phường", "Dong Lac"],
                        ["10555", "Hoàng Hoa Thám", "Xã", "Hoang Hoa Tham"],
                        ["10573", "Hoàng Tân", "Phường", "Hoang Tan"],
                        ["10567", "Hoàng Tiến", "Phường", "Hoang Tien"],
                        ["10561", "Hưng Đạo", "Xã", "Hung Dao"],
                        ["10564", "Lê Lợi", "Xã", "Le Loi"],
                        ["10591", "Nhân Huệ", "Xã", "Nhan Hue"],
                        ["10546", "Phả Lại", "Phường", "Pha Lai"],
                        ["10549", "Sao Đỏ", "Phường", "Sao Do"],
                        ["10603", "Tân Dân", "Phường", "Tan Dan"],
                        ["10588", "Thái Học", "Phường", "Thai Hoc"],
                        ["10579", "Văn An", "Phường", "Van An"],
                        ["10585", "Văn Đức", "Phường", "Van Duc"]
                    ]
                ],
                [
                    "297", "Gia Lộc", "Huyện", "Gia Loc",
                    [
                        ["11056", "Đoàn Thượng", "Xã", "Doan Thuong"],
                        ["11065", "Đồng Quang", "Xã", "Dong Quang"],
                        ["11071", "Đức Xương", "Xã", "Duc Xuong"],
                        ["11035", "Gia Khánh", "Xã", "Gia Khanh"],
                        ["10999", "Gia Lộc", "Thị trấn", "Gia Loc"],
                        ["11038", "Gia Lương", "Xã", "Gia Luong"],
                        ["11029", "Gia Tân", "Xã", "Gia Tan"],
                        ["11047", "Hoàng Diệu", "Xã", "Hoang Dieu"],
                        ["11050", "Hồng Hưng", "Xã", "Hong Hung"],
                        ["11041", "Lê Lợi", "Xã", "Le Loi"],
                        ["11068", "Nhật Tân", "Xã", "Nhat Tan"],
                        ["11053", "Phạm Trấn", "Xã", "Pham Tran"],
                        ["11062", "Quang Minh", "Xã", "Quang Minh"],
                        ["11032", "Tân Tiến", "Xã", "Tan Tien"],
                        ["11059", "Thống Kênh", "Xã", "Thong Kenh"],
                        ["11008", "Thống Nhất", "Xã", "Thong Nhat"],
                        ["11044", "Toàn Thắng", "Xã", "Toan Thang"],
                        ["11020", "Yết Kiêu", "Xã", "Yet Kieu"]
                    ]
                ],
                [
                    "288", "Hải Dương", "Thành phố", "Hai Duong",
                    [
                        ["10660", "Ái Quốc", "Phường", "Ai Quoc"],
                        ["10663", "An Thượng", "Xã", "An Thuong"],
                        ["10510", "Bình Hàn", "Phường", "Binh Han"],
                        ["10507", "Cẩm Thượng", "Phường", "Cam Thuong"],
                        ["11017", "Gia Xuyên", "Xã", "Gia Xuyen"],
                        ["10537", "Hải Tân", "Phường", "Hai Tan"],
                        ["10534", "Lê Thanh Nghị", "Phường", "Le Thanh Nghi"],
                        ["11005", "Liên Hồng", "Xã", "Lien Hong"],
                        ["10672", "Nam Đồng", "Phường", "Nam Dong"],
                        ["10513", "Ngọc Châu", "Phường", "Ngoc Chau"],
                        ["11077", "Ngọc Sơn", "Xã", "Ngoc Son"],
                        ["10519", "Nguyễn Trãi", "Phường", "Nguyen Trai"],
                        ["10514", "Nhị Châu", "Phường", "Nhi Chau"],
                        ["10522", "Phạm Ngũ Lão", "Phường", "Pham Ngu Lao"],
                        ["10516", "Quang Trung", "Phường", "Quang Trung"],
                        ["10822", "Quyết Thắng", "Xã", "Quyet Thang"],
                        ["10532", "Tân Bình", "Phường", "Tan Binh"],
                        ["11011", "Tân Hưng", "Phường", "Tan Hung"],
                        ["11002", "Thạch Khôi", "Phường", "Thach Khoi"],
                        ["10531", "Thanh Bình", "Phường", "Thanh Binh"],
                        ["10837", "Tiền Tiến", "Xã", "Tien Tien"],
                        ["10525", "Trần Hưng Đạo", "Phường", "Tran Hung Dao"],
                        ["10528", "Trần Phú", "Phường", "Tran Phu"],
                        ["10540", "Tứ Minh", "Phường", "Tu Minh"],
                        ["10543", "Việt Hoà", "Phường", "Viet Hoa"]
                    ]
                ],
                [
                    "293", "Kim Thành", "Huyện", "Kim Thanh",
                    [
                        ["10798", "Bình Dân", "Xã", "Binh Dan"],
                        ["10762", "Cổ Dũng", "Xã", "Co Dung"],
                        ["10756", "Cộng Hòa", "Xã", "Cong Hoa"],
                        ["10810", "Đại Đức", "Xã", "Dai Duc"],
                        ["10804", "Đồng Cẩm", "Xã", "Dong Cam"],
                        ["10780", "Kim Anh", "Xã", "Kim Anh"],
                        ["10792", "Kim Đính", "Xã", "Kim Dinh"],
                        ["10783", "Kim Liên", "Xã", "Kim Lien"],
                        ["10786", "Kim Tân", "Xã", "Kim Tan"],
                        ["10771", "Kim Xuyên", "Xã", "Kim Xuyen"],
                        ["10753", "Lai Vu", "Xã", "Lai Vu"],
                        ["10807", "Liên Hòa", "Xã", "Lien Hoa"],
                        ["10777", "Ngũ Phúc", "Xã", "Ngu Phuc"],
                        ["10750", "Phú Thái", "Thị trấn", "Phu Thai"],
                        ["10774", "Phúc Thành A", "Xã", "Phuc Thanh A"],
                        ["10801", "Tam Kỳ", "Xã", "Tam Ky"],
                        ["10759", "Thượng Vũ", "Xã", "Thuong Vu"],
                        ["10768", "Tuấn Việt", "Xã", "Tuan Viet"]
                    ]
                ],
                [
                    "292", "Kinh Môn", "Thị xã", "Kinh Mon",
                    [
                        ["10675", "An Lưu", "Phường", "An Luu"],
                        ["10732", "An Phụ", "Phường", "An Phu"],
                        ["10723", "An Sinh", "Phường", "An Sinh"],
                        ["10678", "Bạch Đằng", "Xã", "Bach Dang"],
                        ["10696", "Duy Tân", "Phường", "Duy Tan"],
                        ["10744", "Hiến Thành", "Phường", "Hien Thanh"],
                        ["10735", "Hiệp An", "Phường", "Hiep An"],
                        ["10708", "Hiệp Hòa", "Xã", "Hiep Hoa"],
                        ["10726", "Hiệp Sơn", "Phường", "Hiep Son"],
                        ["10687", "Hoành Sơn", "Xã", "Hoanh Son"],
                        ["10720", "Lạc Long", "Xã", "Lac Long"],
                        ["10684", "Lê Ninh", "Xã", "Le Ninh"],
                        ["10738", "Long Xuyên", "Phường", "Long Xuyen"],
                        ["10747", "Minh Hòa", "Xã", "Minh Hoa"],
                        ["10702", "Minh Tân", "Phường", "Minh Tan"],
                        ["10693", "Phạm Thái", "Phường", "Pham Thai"],
                        ["10714", "Phú Thứ", "Phường", "Phu Thu"],
                        ["10705", "Quang Thành", "Xã", "Quang Thanh"],
                        ["10699", "Tân Dân", "Phường", "Tan Dan"],
                        ["10741", "Thái Thịnh", "Phường", "Thai Thinh"],
                        ["10717", "Thăng Long", "Xã", "Thang Long"],
                        ["10681", "Thất Hùng", "Phường", "That Hung"],
                        ["10729", "Thượng Quận", "Xã", "Thuong Quan"]
                    ]
                ],
                [
                    "291", "Nam Sách", "Huyện", "Nam Sach",
                    [
                        ["10630", "An Bình", "Xã", "An Binh"],
                        ["10645", "An Lâm", "Xã", "An Lam"],
                        ["10636", "An Sơn", "Xã", "An Son"],
                        ["10639", "Cộng Hòa", "Xã", "Cong Hoa"],
                        ["10657", "Đồng Lạc", "Xã", "Dong Lac"],
                        ["10618", "Hiệp Cát", "Xã", "Hiep Cat"],
                        ["10654", "Hồng Phong", "Xã", "Hong Phong"],
                        ["10615", "Hợp Tiến", "Xã", "Hop Tien"],
                        ["10666", "Minh Tân", "Xã", "Minh Tan"],
                        ["10627", "Nam Chính", "Xã", "Nam Chinh"],
                        ["10651", "Nam Hồng", "Xã", "Nam Hong"],
                        ["10609", "Nam Hưng", "Xã", "Nam Hung"],
                        ["10606", "Nam Sách", "Thị trấn", "Nam Sach"],
                        ["10612", "Nam Tân", "Xã", "Nam Tan"],
                        ["10633", "Nam Trung", "Xã", "Nam Trung"],
                        ["10648", "Phú Điền", "Xã", "Phu Dien"],
                        ["10624", "Quốc Tuấn", "Xã", "Quoc Tuan"],
                        ["10642", "Thái Tân", "Xã", "Thai Tan"],
                        ["10621", "Thanh Quang", "Xã", "Thanh Quang"]
                    ]
                ],
                [
                    "299", "Ninh Giang", "Huyện", "Ninh Giang",
                    [
                        ["11173", "An Đức", "Xã", "An Duc"],
                        ["11203", "Đồng Tâm", "Xã", "Dong Tam"],
                        ["11188", "Đông Xuyên", "Xã", "Dong Xuyen"],
                        ["11227", "Hiệp Lực", "Xã", "Hiep Luc"],
                        ["11215", "Hồng Dụ", "Xã", "Hong Du"],
                        ["11167", "Hồng Đức", "Xã", "Hong Duc"],
                        ["11224", "Hồng Phong", "Xã", "Hong Phong"],
                        ["11230", "Hồng Phúc", "Xã", "Hong Phuc"],
                        ["11233", "Hưng Long", "Xã", "Hung Long"],
                        ["11209", "Kiến Quốc", "Xã", "Kien Quoc"],
                        ["11164", "Nghĩa An", "Xã", "Nghia An"],
                        ["11155", "Ninh Giang", "Thị trấn", "Ninh Giang"],
                        ["11200", "Ninh Hải", "Xã", "Ninh Hai"],
                        ["11179", "Tân Hương", "Xã", "Tan Huong"],
                        ["11197", "Tân Phong", "Xã", "Tan Phong"],
                        ["11206", "Tân Quang", "Xã", "Tan Quang"],
                        ["11161", "Ứng Hoè", "Xã", "Ung Hoe"],
                        ["11218", "Văn Hội", "Xã", "Van Hoi"],
                        ["11176", "Vạn Phúc", "Xã", "Van Phuc"],
                        ["11185", "Vĩnh Hòa", "Xã", "Vinh Hoa"]
                    ]
                ],
                [
                    "294", "Thanh Hà", "Huyện", "Thanh Ha",
                    [
                        ["10864", "An Phượng", "Xã", "An Phuong"],
                        ["10828", "Cẩm Chế", "Xã", "Cam Che"],
                        ["10816", "Hồng Lạc", "Xã", "Hong Lac"],
                        ["10843", "Liên Mạc", "Xã", "Lien Mac"],
                        ["10840", "Tân An", "Xã", "Tan An"],
                        ["10825", "Tân Việt", "Xã", "Tan Viet"],
                        ["10831", "Thanh An", "Xã", "Thanh An"],
                        ["10882", "Thanh Cường", "Xã", "Thanh Cuong"],
                        ["10813", "Thanh Hà", "Thị trấn", "Thanh Ha"],
                        ["10846", "Thanh Hải", "Xã", "Thanh Hai"],
                        ["10879", "Thanh Hồng", "Xã", "Thanh Hong"],
                        ["10849", "Thanh Khê", "Xã", "Thanh Khe"],
                        ["10834", "Thanh Lang", "Xã", "Thanh Lang"],
                        ["10876", "Thanh Quang", "Xã", "Thanh Quang"],
                        ["10867", "Thanh Sơn", "Xã", "Thanh Son"],
                        ["10861", "Thanh Thủy", "Xã", "Thanh Thuy"],
                        ["10852", "Thanh Xá", "Xã", "Thanh Xa"],
                        ["10855", "Thanh Xuân", "Xã", "Thanh Xuan"],
                        ["10819", "Việt Hồng", "Xã", "Viet Hong"],
                        ["10885", "Vĩnh Lập", "Xã", "Vinh Lap"]
                    ]
                ],
                [
                    "300", "Thanh Miện", "Huyện", "Thanh Mien",
                    [
                        ["11278", "Cao Thắng", "Xã", "Cao Thang"],
                        ["11281", "Chi Lăng Bắc", "Xã", "Chi Lang Bac"],
                        ["11284", "Chi Lăng Nam", "Xã", "Chi Lang Nam"],
                        ["11263", "Đoàn Kết", "Xã", "Doan Ket"],
                        ["11251", "Đoàn Tùng", "Xã", "Doan Tung"],
                        ["11293", "Hồng Phong", "Xã", "Hong Phong"],
                        ["11254", "Hồng Quang", "Xã", "Hong Quang"],
                        ["11260", "Lam Sơn", "Xã", "Lam Son"],
                        ["11266", "Lê Hồng", "Xã", "Le Hong"],
                        ["11248", "Ngô Quyền", "Xã", "Ngo Quyen"],
                        ["11275", "Ngũ Hùng", "Xã", "Ngu Hung"],
                        ["11245", "Phạm Kha", "Xã", "Pham Kha"],
                        ["11257", "Tân Trào", "Xã", "Tan Trao"],
                        ["11287", "Thanh Giang", "Xã", "Thanh Giang"],
                        ["11239", "Thanh Miện", "Thị trấn", "Thanh Mien"],
                        ["11242", "Thanh Tùng", "Xã", "Thanh Tung"],
                        ["11269", "Tứ Cường", "Xã", "Tu Cuong"]
                    ]
                ],
                [
                    "298", "Tứ Kỳ", "Huyện", "Tu Ky",
                    [
                        ["11125", "An Thanh", "Xã", "An Thanh"],
                        ["11092", "Bình Lăng", "Xã", "Binh Lang"],
                        ["11095", "Chí Minh", "Xã", "Chi Minh"],
                        ["11140", "Cộng Lạc", "Xã", "Cong Lac"],
                        ["11119", "Đại Hợp", "Xã", "Dai Hop"],
                        ["11083", "Đại Sơn", "Xã", "Dai Son"],
                        ["11110", "Dân Chủ", "Xã", "Dan Chu"],
                        ["11149", "Hà Kỳ", "Xã", "Ha Ky"],
                        ["11152", "Hà Thanh", "Xã", "Ha Thanh"],
                        ["11086", "Hưng Đạo", "Xã", "Hung Dao"],
                        ["11128", "Minh Đức", "Xã", "Minh Duc"],
                        ["11089", "Ngọc Kỳ", "Xã", "Ngoc Ky"],
                        ["11146", "Nguyên Giáp", "Xã", "Nguyen Giap"],
                        ["11137", "Phượng Kỳ", "Xã", "Phuong Ky"],
                        ["11116", "Quang Khải", "Xã", "Quang Khai"],
                        ["11122", "Quảng Nghiệp", "Xã", "Quang Nghiep"],
                        ["11101", "Quang Phục", "Xã", "Quang Phuc"],
                        ["11134", "Quang Trung", "Xã", "Quang Trung"],
                        ["11098", "Tái Sơn", "Xã", "Tai Son"],
                        ["11113", "Tân Kỳ", "Xã", "Tan Ky"],
                        ["11143", "Tiên Động", "Xã", "Tien Dong"],
                        ["11074", "Tứ Kỳ", "Thị trấn", "Tu Ky"],
                        ["11131", "Văn Tố", "Xã", "Van To"]
                    ]
                ]
            ]
        ],
        [
            "31", "Hải Phòng", "Thành phố", "Hai Phong",
            [
                [
                    "312", "An Dương", "Huyện", "An Duong",
                    [
                        ["11623", "An Đồng", "Xã", "An Dong"],
                        ["11581", "An Dương", "Thị trấn", "An Duong"],
                        ["11590", "An Hoà", "Xã", "An Hoa"],
                        ["11602", "An Hồng", "Xã", "An Hong"],
                        ["11599", "An Hưng", "Xã", "An Hung"],
                        ["11605", "Bắc Sơn", "Xã", "Bac Son"],
                        ["11587", "Đại Bản", "Xã", "Dai Ban"],
                        ["11614", "Đặng Cương", "Xã", "Dang Cuong"],
                        ["11617", "Đồng Thái", "Xã", "Dong Thai"],
                        ["11593", "Hồng Phong", "Xã", "Hong Phong"],
                        ["11626", "Hồng Thái", "Xã", "Hong Thai"],
                        ["11611", "Lê Lợi", "Xã", "Le Loi"],
                        ["11584", "Lê Thiện", "Xã", "Le Thien"],
                        ["11608", "Nam Sơn", "Xã", "Nam Son"],
                        ["11620", "Quốc Tuấn", "Xã", "Quoc Tuan"],
                        ["11596", "Tân Tiến", "Xã", "Tan Tien"]
                    ]
                ],
                [
                    "313", "An Lão", "Huyện", "An Lao",
                    [
                        ["11629", "An Lão", "Thị trấn", "An Lao"],
                        ["11677", "An Thái", "Xã", "An Thai"],
                        ["11653", "An Thắng", "Xã", "An Thang"],
                        ["11674", "An Thọ", "Xã", "An Tho"],
                        ["11641", "An Tiến", "Xã", "An Tien"],
                        ["11632", "Bát Trang", "Xã", "Bat Trang"],
                        ["11671", "Chiến Thắng", "Xã", "Chien Thang"],
                        ["11668", "Mỹ Đức", "Xã", "My Duc"],
                        ["11644", "Quang Hưng", "Xã", "Quang Hung"],
                        ["11647", "Quang Trung", "Xã", "Quang Trung"],
                        ["11650", "Quốc Tuấn", "Xã", "Quoc Tuan"],
                        ["11659", "Tân Dân", "Xã", "Tan Dan"],
                        ["11665", "Tân Viên", "Xã", "Tan Vien"],
                        ["11662", "Thái Sơn", "Xã", "Thai Son"],
                        ["11656", "Trường Sơn", "Thị trấn", "Truong Son"],
                        ["11638", "Trường Thành", "Xã", "Truong Thanh"],
                        ["11635", "Trường Thọ", "Xã", "Truong Tho"]
                    ]
                ],
                [
                    "318", "Bạch Long Vĩ", "Huyện", "Bach Long Vi",
                    []
                ],
                [
                    "317", "Cát Hải", "Huyện", "Cat Hai",
                    [
                        ["11914", "Cát Bà", "Thị trấn", "Cat Ba"],
                        ["11917", "Cát Hải", "Thị trấn", "Cat Hai"],
                        ["11923", "Đồng Bài", "Xã", "Dong Bai"],
                        ["11935", "Gia Luận", "Xã", "Gia Luan"],
                        ["11938", "Hiền Hào", "Xã", "Hien Hao"],
                        ["11926", "Hoàng Châu", "Xã", "Hoang Chau"],
                        ["11920", "Nghĩa Lộ", "Xã", "Nghia Lo"],
                        ["11932", "Phù Long", "Xã", "Phu Long"],
                        ["11941", "Trân Châu", "Xã", "Tran Chau"],
                        ["11929", "Văn Phong", "Xã", "Van Phong"],
                        ["11944", "Việt Hải", "Xã", "Viet Hai"],
                        ["11947", "Xuân Đám", "Xã", "Xuan Dam"]
                    ]
                ],
                [
                    "308", "Đồ Sơn", "Quận", "Do Son",
                    [
                        ["11467", "Bàng La", "Phường", "Bang La"],
                        ["11458", "Hải Sơn", "Phường", "Hai Son"],
                        ["11737", "Hợp Đức", "Phường", "Hop Duc"],
                        ["11465", "Minh Đức", "Phường", "Minh Duc"],
                        ["11455", "Ngọc Xuyên", "Phường", "Ngoc Xuyen"],
                        ["11461", "Vạn Hương", "Phường", "Van Huong"]
                    ]
                ],
                [
                    "309", "Dương Kinh", "Quận", "Duong Kinh",
                    [
                        ["11689", "Anh Dũng", "Phường", "Anh Dung"],
                        ["11683", "Đa Phúc", "Phường", "Da Phuc"],
                        ["11692", "Hải Thành", "Phường", "Hai Thanh"],
                        ["11707", "Hoà Nghĩa", "Phường", "Hoa Nghia"],
                        ["11686", "Hưng Đạo", "Phường", "Hung Dao"],
                        ["11740", "Tân Thành", "Phường", "Tan Thanh"]
                    ]
                ],
                [
                    "306", "Hải An", "Quận", "Hai An",
                    [
                        ["11422", "Cát Bi", "Phường", "Cat Bi"],
                        ["11416", "Đằng Hải", "Phường", "Dang Hai"],
                        ["11413", "Đằng Lâm", "Phường", "Dang Lam"],
                        ["11410", "Đông Hải 1", "Phường", "Dong Hai 1"],
                        ["11411", "Đông Hải 2", "Phường", "Dong Hai 2"],
                        ["11419", "Nam Hải", "Phường", "Nam Hai"],
                        ["11414", "Thành Tô", "Phường", "Thanh To"],
                        ["11425", "Tràng Cát", "Phường", "Trang Cat"]
                    ]
                ],
                [
                    "303", "Hồng Bàng", "Quận", "Hong Bang",
                    [
                        ["11308", "Hạ Lý", "Phường", "Ha Ly"],
                        ["11320", "Hoàng Văn Thụ", "Phường", "Hoang Van Thu"],
                        ["11299", "Hùng Vương", "Phường", "Hung Vuong"],
                        ["11311", "Minh Khai", "Phường", "Minh Khai"],
                        ["11323", "Phan Bội Châu", "Phường", "Phan Boi Chau"],
                        ["11296", "Quán Toan", "Phường", "Quan Toan"],
                        ["11302", "Sở Dầu", "Phường", "So Dau"],
                        ["11305", "Thượng Lý", "Phường", "Thuong Ly"],
                        ["11314", "Trại Chuối", "Phường", "Trai Chuoi"]
                    ]
                ],
                [
                    "307", "Kiến An", "Quận", "Kien An",
                    [
                        ["11434", "Bắc Sơn", "Phường", "Bac Son"],
                        ["11431", "Đồng Hoà", "Phường", "Dong Hoa"],
                        ["11429", "Lãm Hà", "Phường", "Lam Ha"],
                        ["11437", "Nam Sơn", "Phường", "Nam Son"],
                        ["11440", "Ngọc Sơn", "Phường", "Ngoc Son"],
                        ["11449", "Phù Liễn", "Phường", "Phu Lien"],
                        ["11428", "Quán Trữ", "Phường", "Quan Tru"],
                        ["11443", "Trần Thành Ngọ", "Phường", "Tran Thanh Ngo"],
                        ["11452", "Tràng Minh", "Phường", "Trang Minh"],
                        ["11446", "Văn Đẩu", "Phường", "Van Dau"]
                    ]
                ],
                [
                    "314", "Kiến Thuỵ", "Huyện", "Kien Thuy",
                    [
                        ["11704", "Đại Đồng", "Xã", "Dai Dong"],
                        ["11728", "Đại Hà", "Xã", "Dai Ha"],
                        ["11752", "Đại Hợp", "Xã", "Dai Hop"],
                        ["11746", "Đoàn Xá", "Xã", "Doan Xa"],
                        ["11695", "Đông Phương", "Xã", "Dong Phuong"],
                        ["11716", "Du Lễ", "Xã", "Du Le"],
                        ["11701", "Hữu Bằng", "Xã", "Huu Bang"],
                        ["11713", "Kiến Quốc", "Xã", "Kien Quoc"],
                        ["11725", "Minh Tân", "Xã", "Minh Tan"],
                        ["11731", "Ngũ Đoan", "Xã", "Ngu Doan"],
                        ["11710", "Ngũ Phúc", "Xã", "Ngu Phuc"],
                        ["11680", "Núi Đối", "Thị trấn", "Nui Doi"],
                        ["11734", "Tân Phong", "Xã", "Tan Phong"],
                        ["11743", "Tân Trào", "Xã", "Tan Trao"],
                        ["11722", "Thanh Sơn", "Xã", "Thanh Son"],
                        ["11698", "Thuận Thiên", "Xã", "Thuan Thien"],
                        ["11719", "Thuỵ Hương", "Xã", "Thuy Huong"],
                        ["11749", "Tú Sơn", "Xã", "Tu Son"]
                    ]
                ],
                [
                    "305", "Lê Chân", "Quận", "Le Chan",
                    [
                        ["11371", "An Biên", "Phường", "An Bien"],
                        ["11377", "An Dương", "Phường", "An Duong"],
                        ["11368", "Cát Dài", "Phường", "Cat Dai"],
                        ["11395", "Đông Hải", "Phường", "Dong Hai"],
                        ["11389", "Dư Hàng", "Phường", "Du Hang"],
                        ["11404", "Dư Hàng Kênh", "Phường", "Du Hang Kenh"],
                        ["11392", "Hàng Kênh", "Phường", "Hang Kenh"],
                        ["11383", "Hồ Nam", "Phường", "Ho Nam"],
                        ["11405", "Kênh Dương", "Phường", "Kenh Duong"],
                        ["11374", "Lam Sơn", "Phường", "Lam Son"],
                        ["11401", "Nghĩa Xá", "Phường", "Nghia Xa"],
                        ["11398", "Niệm Nghĩa", "Phường", "Niem Nghia"],
                        ["11386", "Trại Cau", "Phường", "Trai Cau"],
                        ["11380", "Trần Nguyên Hãn", "Phường", "Tran Nguyen Han"],
                        ["11407", "Vĩnh Niệm", "Phường", "Vinh Niem"]
                    ]
                ],
                [
                    "304", "Ngô Quyền", "Quận", "Ngo Quyen",
                    [
                        ["11344", "Cầu Đất", "Phường", "Cau Dat"],
                        ["11338", "Cầu Tre", "Phường", "Cau Tre"],
                        ["11359", "Đằng Giang", "Phường", "Dang Giang"],
                        ["11350", "Đông Khê", "Phường", "Dong Khe"],
                        ["11365", "Đổng Quốc Bình", "Phường", "Dong Quoc Binh"],
                        ["11347", "Gia Viên", "Phường", "Gia Vien"],
                        ["11341", "Lạc Viên", "Phường", "Lac Vien"],
                        ["11362", "Lạch Tray", "Phường", "Lach Tray"],
                        ["11356", "Lê Lợi", "Phường", "Le Loi"],
                        ["11329", "Máy Chai", "Phường", "May Chai"],
                        ["11332", "Máy Tơ", "Phường", "May To"],
                        ["11335", "Vạn Mỹ", "Phường", "Van My"]
                    ]
                ],
                [
                    "311", "Thuỷ Nguyên", "Huyện", "Thuy Nguyen",
                    [
                        ["11533", "An Lư", "Xã", "An Lu"],
                        ["11479", "An Sơn", "Xã", "An Son"],
                        ["11518", "Cao Nhân", "Xã", "Cao Nhan"],
                        ["11509", "Chính Mỹ", "Xã", "Chinh My"],
                        ["11524", "Đông Sơn", "Xã", "Dong Son"],
                        ["11578", "Dương Quan", "Xã", "Duong Quan"],
                        ["11497", "Gia Đức", "Xã", "Gia Duc"],
                        ["11494", "Gia Minh", "Xã", "Gia Minh"],
                        ["11527", "Hoà Bình", "Xã", "Hoa Binh"],
                        ["11572", "Hoa Động", "Xã", "Hoa Dong"],
                        ["11566", "Hoàng Động", "Xã", "Hoang Dong"],
                        ["11515", "Hợp Thành", "Xã", "Hop Thanh"],
                        ["11512", "Kênh Giang", "Xã", "Kenh Giang"],
                        ["11554", "Kiền Bái", "Xã", "Kien Bai"],
                        ["11482", "Kỳ Sơn", "Xã", "Ky Son"],
                        ["11476", "Lại Xuân", "Xã", "Lai Xuan"],
                        ["11569", "Lâm Động", "Xã", "Lam Dong"],
                        ["11551", "Lập Lễ", "Xã", "Lap Le"],
                        ["11485", "Liên Khê", "Xã", "Lien Khe"],
                        ["11488", "Lưu Kiếm", "Xã", "Luu Kiem"],
                        ["11491", "Lưu Kỳ", "Xã", "Luu Ky"],
                        ["11473", "Minh Đức", "Thị trấn", "Minh Duc"],
                        ["11500", "Minh Tân", "Xã", "Minh Tan"],
                        ["11521", "Mỹ Đồng", "Xã", "My Dong"],
                        ["11539", "Ngũ Lão", "Xã", "Ngu Lao"],
                        ["11470", "Núi Đèo", "Thị trấn", "Nui Deo"],
                        ["11548", "Phả Lễ", "Xã", "Pha Le"],
                        ["11503", "Phù Ninh", "Xã", "Phu Ninh"],
                        ["11542", "Phục Lễ", "Xã", "Phuc Le"],
                        ["11506", "Quảng Thanh", "Xã", "Quang Thanh"],
                        ["11545", "Tam Hưng", "Xã", "Tam Hung"],
                        ["11575", "Tân Dương", "Xã", "Tan Duong"],
                        ["11557", "Thiên Hương", "Xã", "Thien Huong"],
                        ["11563", "Thuỷ Đường", "Xã", "Thuy Duong"],
                        ["11560", "Thuỷ Sơn", "Xã", "Thuy Son"],
                        ["11536", "Thuỷ Triều", "Xã", "Thuy Trieu"],
                        ["11530", "Trung Hà", "Xã", "Trung Ha"]
                    ]
                ],
                [
                    "315", "Tiên Lãng", "Huyện", "Tien Lang",
                    [
                        ["11803", "Bắc Hưng", "Xã", "Bac Hung"],
                        ["11788", "Bạch Đằng", "Xã", "Bach Dang"],
                        ["11779", "Cấp Tiến", "Xã", "Cap Tien"],
                        ["11758", "Đại Thắng", "Xã", "Dai Thang"],
                        ["11785", "Đoàn Lập", "Xã", "Doan Lap"],
                        ["11815", "Đông Hưng", "Xã", "Dong Hung"],
                        ["11809", "Hùng Thắng", "Xã", "Hung Thang"],
                        ["11773", "Khởi Nghĩa", "Xã", "Khoi Nghia"],
                        ["11782", "Kiến Thiết", "Xã", "Kien Thiet"],
                        ["11806", "Nam Hưng", "Xã", "Nam Hung"],
                        ["11791", "Quang Phục", "Xã", "Quang Phuc"],
                        ["11770", "Quyết Tiến", "Xã", "Quyet Tien"],
                        ["11812", "Tây Hưng", "Xã", "Tay Hung"],
                        ["11761", "Tiên Cường", "Xã", "Tien Cuong"],
                        ["11755", "Tiên Lãng", "Thị trấn", "Tien Lang"],
                        ["11800", "Tiên Minh", "Xã", "Tien Minh"],
                        ["11797", "Tiên Thắng", "Xã", "Tien Thang"],
                        ["11776", "Tiên Thanh", "Xã", "Tien Thanh"],
                        ["11794", "Toàn Thắng", "Xã", "Toan Thang"],
                        ["11764", "Tự Cường", "Xã", "Tu Cuong"],
                        ["11821", "Vinh Quang", "Xã", "Vinh Quang"]
                    ]
                ],
                [
                    "316", "Vĩnh Bảo", "Huyện", "Vinh Bao",
                    [
                        ["11854", "An Hoà", "Xã", "An Hoa"],
                        ["11902", "Cao Minh", "Xã", "Cao Minh"],
                        ["11905", "Cổ Am", "Xã", "Co Am"],
                        ["11899", "Cộng Hiền", "Xã", "Cong Hien"],
                        ["11875", "Đồng Minh", "Xã", "Dong Minh"],
                        ["11827", "Dũng Tiến", "Xã", "Dung Tien"],
                        ["11830", "Giang Biên", "Xã", "Giang Bien"],
                        ["11848", "Hiệp Hoà", "Xã", "Hiep Hoa"],
                        ["11890", "Hoà Bình", "Xã", "Hoa Binh"],
                        ["11869", "Hưng Nhân", "Xã", "Hung Nhan"],
                        ["11851", "Hùng Tiến", "Xã", "Hung Tien"],
                        ["11881", "Liên Am", "Xã", "Lien Am"],
                        ["11884", "Lý Học", "Xã", "Ly Hoc"],
                        ["11863", "Nhân Hoà", "Xã", "Nhan Hoa"],
                        ["11887", "Tam Cường", "Xã", "Tam Cuong"],
                        ["11866", "Tam Đa", "Xã", "Tam Da"],
                        ["11857", "Tân Hưng", "Xã", "Tan Hung"],
                        ["11860", "Tân Liên", "Xã", "Tan Lien"],
                        ["11833", "Thắng Thuỷ", "Xã", "Thang Thuy"],
                        ["11878", "Thanh Lương", "Xã", "Thanh Luong"],
                        ["11893", "Tiền Phong", "Xã", "Tien Phong"],
                        ["11911", "Trấn Dương", "Xã", "Tran Duong"],
                        ["11836", "Trung Lập", "Xã", "Trung Lap"],
                        ["11839", "Việt Tiến", "Xã", "Viet Tien"],
                        ["11842", "Vĩnh An", "Xã", "Vinh An"],
                        ["11824", "Vĩnh Bảo", "Thị trấn", "Vinh Bao"],
                        ["11845", "Vĩnh Long", "Xã", "Vinh Long"],
                        ["11896", "Vĩnh Phong", "Xã", "Vinh Phong"],
                        ["11872", "Vinh Quang", "Xã", "Vinh Quang"],
                        ["11908", "Vĩnh Tiến", "Xã", "Vinh Tien"]
                    ]
                ]
            ]
        ],
        [
            "93", "Hậu Giang", "Tỉnh", "Hau Giang",
            [
                [
                    "933", "Châu Thành", "Huyện", "Chau Thanh",
                    [
                        ["31375", "Đông Phú", "Xã", "Dong Phu"],
                        ["31384", "Đông Phước", "Xã", "Dong Phuoc"],
                        ["31387", "Đông Phước A", "Xã", "Dong Phuoc A"],
                        ["31369", "Đông Thạnh", "Xã", "Dong Thanh"],
                        ["31381", "Mái Dầm", "Thị trấn", "Mai Dam"],
                        ["31366", "Ngã Sáu", "Thị Trấn", "Nga Sau"],
                        ["31378", "Phú Hữu", "Xã", "Phu Huu"],
                        ["31379", "Phú Tân", "Xã", "Phu Tan"]
                    ]
                ],
                [
                    "932", "Châu Thành A", "Huyện", "Chau Thanh A",
                    [
                        ["31346", "Bảy Ngàn", "Thị trấn", "Bay Ngan"],
                        ["31362", "Cái Tắc", "Thị trấn", "Cai Tac"],
                        ["31342", "Một Ngàn", "Thị trấn", "Mot Ngan"],
                        ["31357", "Nhơn Nghĩa A", "Xã", "Nhon Nghia A"],
                        ["31359", "Rạch Gòi", "Thị trấn", "Rach Goi"],
                        ["31345", "Tân Hoà", "Xã", "Tan Hoa"],
                        ["31363", "Tân Phú Thạnh", "Xã", "Tan Phu Thanh"],
                        ["31360", "Thạnh Xuân", "Xã", "Thanh Xuan"],
                        ["31351", "Trường Long A", "Xã", "Truong Long A"],
                        ["31348", "Trường Long Tây", "Xã", "Truong Long Tay"]
                    ]
                ],
                [
                    "936", "Long Mỹ", "Huyện", "Long My",
                    [
                        ["31493", "Lương Nghĩa", "Xã", "Luong Nghia"],
                        ["31492", "Lương Tâm", "Xã", "Luong Tam"],
                        ["31484", "Thuận Hòa", "Xã", "Thuan Hoa"],
                        ["31483", "Thuận Hưng", "Xã", "Thuan Hung"],
                        ["31486", "Vĩnh Thuận Đông", "Xã", "Vinh Thuan Dong"],
                        ["31489", "Vĩnh Viễn", "Thị trấn", "Vinh Vien"],
                        ["31490", "Vĩnh Viễn A", "Xã", "Vinh Vien A"],
                        ["31495", "Xà Phiên", "Xã", "Xa Phien"]
                    ]
                ],
                [
                    "937", "Long Mỹ", "Thị xã", "Long My",
                    [
                        ["31473", "Bình Thạnh", "Phường", "Binh Thanh"],
                        ["31474", "Long Bình", "Xã", "Long Binh"],
                        ["31480", "Long Phú", "Xã", "Long Phu"],
                        ["31477", "Long Trị", "Xã", "Long Tri"],
                        ["31478", "Long Trị A", "Xã", "Long Tri A"],
                        ["31481", "Tân Phú", "Xã", "Tan Phu"],
                        ["31471", "Thuận An", "Phường", "Thuan An"],
                        ["31472", "Trà Lồng", "Phường", "Tra Long"],
                        ["31475", "Vĩnh Tường", "Phường", "Vinh Tuong"]
                    ]
                ],
                [
                    "931", "Ngã Bảy", "Thành phố", "Nga Bay",
                    [
                        ["31411", "Đại Thành", "Xã", "Dai Thanh"],
                        ["31344", "Hiệp Lợi", "Phường", "Hiep Loi"],
                        ["31343", "Hiệp Thành", "Phường", "Hiep Thanh"],
                        ["31341", "Lái Hiếu", "Phường", "Lai Hieu"],
                        ["31340", "Ngã Bảy", "Phường", "Nga Bay"],
                        ["31414", "Tân Thành", "Xã", "Tan Thanh"]
                    ]
                ],
                [
                    "934", "Phụng Hiệp", "Huyện", "Phung Hiep",
                    [
                        ["31402", "Bình Thành", "Xã", "Binh Thanh"],
                        ["31433", "Búng Tàu", "Thị trấn", "Bung Tau"],
                        ["31396", "Cây Dương", "Thị trấn", "Cay Duong"],
                        ["31429", "Hiệp Hưng", "Xã", "Hiep Hung"],
                        ["31423", "Hòa An", "Xã", "Hoa An"],
                        ["31420", "Hòa Mỹ", "Xã", "Hoa My"],
                        ["31393", "Kinh Cùng", "Thị trấn", "Kinh Cung"],
                        ["31408", "Long Thạnh", "Xã", "Long Thanh"],
                        ["31417", "Phụng Hiệp", "Xã", "Phung Hiep"],
                        ["31426", "Phương Bình", "Xã", "Phuong Binh"],
                        ["31435", "Phương Phú", "Xã", "Phuong Phu"],
                        ["31399", "Tân Bình", "Xã", "Tan Binh"],
                        ["31438", "Tân Long", "Xã", "Tan Long"],
                        ["31432", "Tân Phước Hưng", "Xã", "Tan Phuoc Hung"],
                        ["31405", "Thạnh Hòa", "Xã", "Thanh Hoa"]
                    ]
                ],
                [
                    "930", "Vị Thanh", "Thành phố", "Vi Thanh",
                    [
                        ["31336", "Hoả Lựu", "Xã", "Hoa Luu"],
                        ["31339", "Hoả Tiến", "Xã", "Hoa Tien"],
                        ["31318", "I", "Phường", "I"],
                        ["31321", "III", "Phường", "III"],
                        ["31324", "IV", "Phường", "IV"],
                        ["31338", "Tân Tiến", "Xã", "Tan Tien"],
                        ["31327", "V", "Phường", "V"],
                        ["31330", "VII", "Phường", "VII"],
                        ["31333", "Vị Tân", "Xã", "Vi Tan"]
                    ]
                ],
                [
                    "935", "Vị Thuỷ", "Huyện", "Vi Thuy",
                    [
                        ["31441", "Nàng Mau", "Thị trấn", "Nang Mau"],
                        ["31468", "Vị Bình", "Xã", "Vi Binh"],
                        ["31462", "Vị Đông", "Xã", "Vi Dong"],
                        ["31450", "Vị Thắng", "Xã", "Vi Thang"],
                        ["31465", "Vị Thanh", "Xã", "Vi Thanh"],
                        ["31447", "Vị Thuỷ", "Xã", "Vi Thuy"],
                        ["31444", "Vị Trung", "Xã", "Vi Trung"],
                        ["31453", "Vĩnh Thuận Tây", "Xã", "Vinh Thuan Tay"],
                        ["31456", "Vĩnh Trung", "Xã", "Vinh Trung"],
                        ["31459", "Vĩnh Tường", "Xã", "Vinh Tuong"]
                    ]
                ]
            ]
        ],
        [
            "79", "Hồ Chí Minh", "Thành phố", "Ho Chi Minh",
            [
                [
                    "760", "1", "Quận", "1",
                    [
                        ["26740", "Bến Nghé", "Phường", "Ben Nghe"],
                        ["26743", "Bến Thành", "Phường", "Ben Thanh"],
                        ["26761", "Cầu Kho", "Phường", "Cau Kho"],
                        ["26752", "Cầu Ông Lãnh", "Phường", "Cau Ong Lanh"],
                        ["26755", "Cô Giang", "Phường", "Co Giang"],
                        ["26737", "Đa Kao", "Phường", "Da Kao"],
                        ["26758", "Nguyễn Cư Trinh", "Phường", "Nguyen Cu Trinh"],
                        ["26746", "Nguyễn Thái Bình", "Phường", "Nguyen Thai Binh"],
                        ["26749", "Phạm Ngũ Lão", "Phường", "Pham Ngu Lao"],
                        ["26734", "Tân Định", "Phường", "Tan Dinh"]
                    ]
                ],
                [
                    "770", "3", "Quận", "3",
                    [
                        ["27160", "01", "Phường", "01"],
                        ["27157", "02", "Phường", "02"],
                        ["27154", "03", "Phường", "03"],
                        ["27148", "04", "Phường", "04"],
                        ["27151", "05", "Phường", "05"],
                        ["27142", "09", "Phường", "09"],
                        ["27145", "10", "Phường", "10"],
                        ["27133", "11", "Phường", "11"],
                        ["27130", "12", "Phường", "12"],
                        ["27136", "13", "Phường", "13"],
                        ["27127", "14", "Phường", "14"],
                        ["27139", "Võ Thị Sáu", "Phường", "Vo Thi Sau"]
                    ]
                ],
                [
                    "773", "4", "Quận", "4",
                    [
                        ["27298", "01", "Phường", "01"],
                        ["27292", "02", "Phường", "02"],
                        ["27286", "03", "Phường", "03"],
                        ["27283", "04", "Phường", "04"],
                        ["27265", "06", "Phường", "06"],
                        ["27268", "08", "Phường", "08"],
                        ["27262", "09", "Phường", "09"],
                        ["27271", "10", "Phường", "10"],
                        ["27259", "13", "Phường", "13"],
                        ["27280", "14", "Phường", "14"],
                        ["27295", "15", "Phường", "15"],
                        ["27289", "16", "Phường", "16"],
                        ["27277", "18", "Phường", "18"]
                    ]
                ],
                [
                    "774", "5", "Quận", "5",
                    [
                        ["27325", "01", "Phường", "01"],
                        ["27313", "02", "Phường", "02"],
                        ["27307", "03", "Phường", "03"],
                        ["27301", "04", "Phường", "04"],
                        ["27334", "05", "Phường", "05"],
                        ["27337", "06", "Phường", "06"],
                        ["27322", "07", "Phường", "07"],
                        ["27316", "08", "Phường", "08"],
                        ["27304", "09", "Phường", "09"],
                        ["27340", "10", "Phường", "10"],
                        ["27328", "11", "Phường", "11"],
                        ["27310", "12", "Phường", "12"],
                        ["27343", "13", "Phường", "13"],
                        ["27331", "14", "Phường", "14"]
                    ]
                ],
                [
                    "775", "6", "Quận", "6",
                    [
                        ["27370", "01", "Phường", "01"],
                        ["27367", "02", "Phường", "02"],
                        ["27379", "03", "Phường", "03"],
                        ["27373", "04", "Phường", "04"],
                        ["27361", "05", "Phường", "05"],
                        ["27355", "06", "Phường", "06"],
                        ["27382", "07", "Phường", "07"],
                        ["27376", "08", "Phường", "08"],
                        ["27352", "09", "Phường", "09"],
                        ["27385", "10", "Phường", "10"],
                        ["27364", "11", "Phường", "11"],
                        ["27358", "12", "Phường", "12"],
                        ["27349", "13", "Phường", "13"],
                        ["27346", "14", "Phường", "14"]
                    ]
                ],
                [
                    "778", "7", "Quận", "7",
                    [
                        ["27478", "Bình Thuận", "Phường", "Binh Thuan"],
                        ["27493", "Phú Mỹ", "Phường", "Phu My"],
                        ["27484", "Phú Thuận", "Phường", "Phu Thuan"],
                        ["27475", "Tân Hưng", "Phường", "Tan Hung"],
                        ["27472", "Tân Kiểng", "Phường", "Tan Kieng"],
                        ["27490", "Tân Phong", "Phường", "Tan Phong"],
                        ["27487", "Tân Phú", "Phường", "Tan Phu"],
                        ["27481", "Tân Quy", "Phường", "Tan Quy"],
                        ["27466", "Tân Thuận Đông", "Phường", "Tan Thuan Dong"],
                        ["27469", "Tân Thuận Tây", "Phường", "Tan Thuan Tay"]
                    ]
                ],
                [
                    "776", "8", "Quận", "8",
                    [
                        ["27394", "01", "Phường", "01"],
                        ["27391", "02", "Phường", "02"],
                        ["27397", "03", "Phường", "03"],
                        ["27409", "04", "Phường", "04"],
                        ["27418", "05", "Phường", "05"],
                        ["27424", "06", "Phường", "06"],
                        ["27433", "07", "Phường", "07"],
                        ["27388", "08", "Phường", "08"],
                        ["27403", "09", "Phường", "09"],
                        ["27406", "10", "Phường", "10"],
                        ["27400", "11", "Phường", "11"],
                        ["27415", "12", "Phường", "12"],
                        ["27412", "13", "Phường", "13"],
                        ["27421", "14", "Phường", "14"],
                        ["27427", "15", "Phường", "15"],
                        ["27430", "16", "Phường", "16"]
                    ]
                ],
                [
                    "771", "10", "Quận", "10",
                    [
                        ["27184", "01", "Phường", "01"],
                        ["27190", "02", "Phường", "02"],
                        ["27193", "04", "Phường", "04"],
                        ["27199", "05", "Phường", "05"],
                        ["27202", "06", "Phường", "06"],
                        ["27196", "07", "Phường", "07"],
                        ["27187", "08", "Phường", "08"],
                        ["27181", "09", "Phường", "09"],
                        ["27178", "10", "Phường", "10"],
                        ["27175", "11", "Phường", "11"],
                        ["27172", "12", "Phường", "12"],
                        ["27166", "13", "Phường", "13"],
                        ["27169", "14", "Phường", "14"],
                        ["27163", "15", "Phường", "15"]
                    ]
                ],
                [
                    "772", "11", "Quận", "11",
                    [
                        ["27247", "01", "Phường", "01"],
                        ["27250", "02", "Phường", "02"],
                        ["27220", "03", "Phường", "03"],
                        ["27244", "04", "Phường", "04"],
                        ["27211", "05", "Phường", "05"],
                        ["27241", "06", "Phường", "06"],
                        ["27238", "07", "Phường", "07"],
                        ["27229", "08", "Phường", "08"],
                        ["27232", "09", "Phường", "09"],
                        ["27223", "10", "Phường", "10"],
                        ["27217", "11", "Phường", "11"],
                        ["27235", "12", "Phường", "12"],
                        ["27226", "13", "Phường", "13"],
                        ["27214", "14", "Phường", "14"],
                        ["27208", "15", "Phường", "15"],
                        ["27253", "16", "Phường", "16"]
                    ]
                ],
                [
                    "761", "12", "Quận", "12",
                    [
                        ["26779", "An Phú Đông", "Phường", "An Phu Dong"],
                        ["26788", "Đông Hưng Thuận", "Phường", "Dong Hung Thuan"],
                        ["26770", "Hiệp Thành", "Phường", "Hiep Thanh"],
                        ["26776", "Tân Chánh Hiệp", "Phường", "Tan Chanh Hiep"],
                        ["26787", "Tân Hưng Thuận", "Phường", "Tan Hung Thuan"],
                        ["26782", "Tân Thới Hiệp", "Phường", "Tan Thoi Hiep"],
                        ["26791", "Tân Thới Nhất", "Phường", "Tan Thoi Nhat"],
                        ["26767", "Thạnh Lộc", "Phường", "Thanh Loc"],
                        ["26764", "Thạnh Xuân", "Phường", "Thanh Xuan"],
                        ["26773", "Thới An", "Phường", "Thoi An"],
                        ["26785", "Trung Mỹ Tây", "Phường", "Trung My Tay"]
                    ]
                ],
                [
                    "785", "Bình Chánh", "Huyện", "Binh Chanh",
                    [
                        ["27625", "An Phú Tây", "Xã", "An Phu Tay"],
                        ["27637", "Bình Chánh", "Xã", "Binh Chanh"],
                        ["27619", "Bình Hưng", "Xã", "Binh Hung"],
                        ["27607", "Bình Lợi", "Xã", "Binh Loi"],
                        ["27631", "Đa Phước", "Xã", "Da Phuoc"],
                        ["27628", "Hưng Long", "Xã", "Hung Long"],
                        ["27610", "Lê Minh Xuân", "Xã", "Le Minh Xuan"],
                        ["27598", "Phạm Văn Hai", "Xã", "Pham Van Hai"],
                        ["27622", "Phong Phú", "Xã", "Phong Phu"],
                        ["27640", "Quy Đức", "Xã", "Quy Duc"],
                        ["27616", "Tân Kiên", "Xã", "Tan Kien"],
                        ["27613", "Tân Nhựt", "Xã", "Tan Nhut"],
                        ["27634", "Tân Quý Tây", "Xã", "Tan Quy Tay"],
                        ["27595", "Tân Túc", "Thị trấn", "Tan Tuc"],
                        ["27601", "Vĩnh Lộc A", "Xã", "Vinh Loc A"],
                        ["27604", "Vĩnh Lộc B", "Xã", "Vinh Loc B"]
                    ]
                ],
                [
                    "777", "Bình Tân", "Quận", "Binh Tan",
                    [
                        ["27460", " An Lạc", "Phường", " An Lac"],
                        ["27463", "An Lạc A", "Phường", "An Lac A"],
                        ["27436", "Bình Hưng Hòa", "Phường", "Binh Hung Hoa"],
                        ["27439", "Bình Hưng Hoà A", "Phường", "Binh Hung Hoa A"],
                        ["27442", "Bình Hưng Hoà B", "Phường", "Binh Hung Hoa B"],
                        ["27445", "Bình Trị Đông", "Phường", "Binh Tri Dong"],
                        ["27448", "Bình Trị Đông A", "Phường", "Binh Tri Dong A"],
                        ["27451", "Bình Trị Đông B", "Phường", "Binh Tri Dong B"],
                        ["27454", "Tân Tạo", "Phường", "Tan Tao"],
                        ["27457", "Tân Tạo A", "Phường", "Tan Tao A"]
                    ]
                ],
                [
                    "765", "Bình Thạnh", "Quận", "Binh Thanh",
                    [
                        ["26944", "01", "Phường", "01"],
                        ["26941", "02", "Phường", "02"],
                        ["26947", "03", "Phường", "03"],
                        ["26923", "05", "Phường", "05"],
                        ["26932", "06", "Phường", "06"],
                        ["26926", "07", "Phường", "07"],
                        ["26908", "11", "Phường", "11"],
                        ["26917", "12", "Phường", "12"],
                        ["26905", "13", "Phường", "13"],
                        ["26935", "14", "Phường", "14"],
                        ["26938", "15", "Phường", "15"],
                        ["26950", "17", "Phường", "17"],
                        ["26959", "19", "Phường", "19"],
                        ["26953", "21", "Phường", "21"],
                        ["26956", "22", "Phường", "22"],
                        ["26929", "24", "Phường", "24"],
                        ["26920", "25", "Phường", "25"],
                        ["26914", "26", "Phường", "26"],
                        ["26911", "27", "Phường", "27"],
                        ["26962", "28", "Phường", "28"]
                    ]
                ],
                [
                    "787", "Cần Giờ", "Huyện", "Can Gio",
                    [
                        ["27673", "An Thới Đông", "Xã", "An Thoi Dong"],
                        ["27667", "Bình Khánh", "Xã", "Binh Khanh"],
                        ["27664", "Cần Thạnh", "Thị trấn", "Can Thanh"],
                        ["27679", "Long Hòa", "Xã", "Long Hoa"],
                        ["27682", "Lý Nhơn", "Xã", "Ly Nhon"],
                        ["27670", "Tam Thôn Hiệp", "Xã", "Tam Thon Hiep"],
                        ["27676", "Thạnh An", "Xã", "Thanh An"]
                    ]
                ],
                [
                    "783", "Củ Chi", "Huyện", "Cu Chi",
                    [
                        ["27508", "An Nhơn Tây", "Xã", "An Nhon Tay"],
                        ["27502", "An Phú", "Xã", "An Phu"],
                        ["27550", "Bình Mỹ", "Xã", "Binh My"],
                        ["27496", "Củ Chi", "Thị trấn", "Cu Chi"],
                        ["27544", "Hòa Phú", "Xã", "Hoa Phu"],
                        ["27511", "Nhuận Đức", "Xã", "Nhuan Duc"],
                        ["27514", "Phạm Văn Cội", "Xã", "Pham Van Coi"],
                        ["27517", "Phú Hòa Đông", "Xã", "Phu Hoa Dong"],
                        ["27499", "Phú Mỹ Hưng", "Xã", "Phu My Hung"],
                        ["27529", "Phước Hiệp", "Xã", "Phuoc Hiep"],
                        ["27526", "Phước Thạnh", "Xã", "Phuoc Thanh"],
                        ["27535", "Phước Vĩnh An", "Xã", "Phuoc Vinh An"],
                        ["27532", "Tân An Hội", "Xã", "Tan An Hoi"],
                        ["27553", "Tân Phú Trung", "Xã", "Tan Phu Trung"],
                        ["27547", "Tân Thạnh Đông", "Xã", "Tan Thanh Dong"],
                        ["27541", "Tân Thạnh Tây", "Xã", "Tan Thanh Tay"],
                        ["27556", "Tân Thông Hội", "Xã", "Tan Thong Hoi"],
                        ["27538", "Thái Mỹ", "Xã", "Thai My"],
                        ["27523", "Trung An", "Xã", "Trung An"],
                        ["27520", "Trung Lập Hạ", "Xã", "Trung Lap Ha"],
                        ["27505", "Trung Lập Thượng", "Xã", "Trung Lap Thuong"]
                    ]
                ],
                [
                    "764", "Gò Vấp", "Quận", "Go Vap",
                    [
                        ["26896", "01", "Phường", "01"],
                        ["26902", "03", "Phường", "03"],
                        ["26893", "04", "Phường", "04"],
                        ["26887", "05", "Phường", "05"],
                        ["26876", "6", "Phường", "6"],
                        ["26890", "07", "Phường", "07"],
                        ["26898", "8", "Phường", "8"],
                        ["26897", "9", "Phường", "9"],
                        ["26884", "10", "Phường", "10"],
                        ["26899", "11", "Phường", "11"],
                        ["26881", "12", "Phường", "12"],
                        ["26872", "13", "Phường", "13"],
                        ["26882", "14", "Phường", "14"],
                        ["26869", "15", "Phường", "15"],
                        ["26878", "16", "Phường", "16"],
                        ["26875", "17", "Phường", "17"]
                    ]
                ],
                [
                    "784", "Hóc Môn", "Huyện", "Hoc Mon",
                    [
                        ["27592", "Bà Điểm", "Xã", "Ba Diem"],
                        ["27568", "Đông Thạnh", "Xã", "Dong Thanh"],
                        ["27559", "Hóc Môn", "Thị trấn", "Hoc Mon"],
                        ["27565", "Nhị Bình", "Xã", "Nhi Binh"],
                        ["27562", "Tân Hiệp", "Xã", "Tan Hiep"],
                        ["27571", "Tân Thới Nhì", "Xã", "Tan Thoi Nhi"],
                        ["27580", "Tân Xuân", "Xã", "Tan Xuan"],
                        ["27574", "Thới Tam Thôn", "Xã", "Thoi Tam Thon"],
                        ["27586", "Trung Chánh", "Xã", "Trung Chanh"],
                        ["27583", "Xuân Thới Đông", "Xã", "Xuan Thoi Dong"],
                        ["27577", "Xuân Thới Sơn", "Xã", "Xuan Thoi Son"],
                        ["27589", "Xuân Thới Thượng", "Xã", "Xuan Thoi Thuong"]
                    ]
                ],
                [
                    "786", "Nhà Bè", "Huyện", "Nha Be",
                    [
                        ["27661", "Hiệp Phước", "Xã", "Hiep Phuoc"],
                        ["27658", "Long Thới", "Xã", "Long Thoi"],
                        ["27643", "Nhà Bè", "Thị trấn", "Nha Be"],
                        ["27652", "Nhơn Đức", "Xã", "Nhon Duc"],
                        ["27655", "Phú Xuân", "Xã", "Phu Xuan"],
                        ["27646", "Phước Kiển", "Xã", "Phuoc Kien"],
                        ["27649", "Phước Lộc", "Xã", "Phuoc Loc"]
                    ]
                ],
                [
                    "768", "Phú Nhuận", "Quận", "Phu Nhuan",
                    [
                        ["27058", "01", "Phường", "01"],
                        ["27061", "02", "Phường", "02"],
                        ["27055", "03", "Phường", "03"],
                        ["27043", "04", "Phường", "04"],
                        ["27046", "05", "Phường", "05"],
                        ["27052", "07", "Phường", "07"],
                        ["27064", "08", "Phường", "08"],
                        ["27049", "09", "Phường", "09"],
                        ["27070", "10", "Phường", "10"],
                        ["27073", "11", "Phường", "11"],
                        ["27085", "13", "Phường", "13"],
                        ["27067", "15", "Phường", "15"],
                        ["27076", "17", "Phường", "17"]
                    ]
                ],
                [
                    "766", "Tân Bình", "Quận", "Tan Binh",
                    [
                        ["26977", "01", "Phường", "01"],
                        ["26965", "02", "Phường", "02"],
                        ["26980", "03", "Phường", "03"],
                        ["26968", "04", "Phường", "04"],
                        ["26989", "05", "Phường", "05"],
                        ["26995", "06", "Phường", "06"],
                        ["26986", "07", "Phường", "07"],
                        ["26998", "08", "Phường", "08"],
                        ["27001", "09", "Phường", "09"],
                        ["26992", "10", "Phường", "10"],
                        ["26983", "11", "Phường", "11"],
                        ["26971", "12", "Phường", "12"],
                        ["26974", "13", "Phường", "13"],
                        ["27004", "14", "Phường", "14"],
                        ["27007", "15", "Phường", "15"]
                    ]
                ],
                [
                    "767", "Tân Phú", "Quận", "Tan Phu",
                    [
                        ["27037", "Hiệp Tân", "Phường", "Hiep Tan"],
                        ["27034", "Hòa Thạnh", "Phường", "Hoa Thanh"],
                        ["27028", "Phú Thạnh", "Phường", "Phu Thanh"],
                        ["27025", "Phú Thọ Hòa", "Phường", "Phu Tho Hoa"],
                        ["27031", "Phú Trung", "Phường", "Phu Trung"],
                        ["27016", "Sơn Kỳ", "Phường", "Son Ky"],
                        ["27019", "Tân Quý", "Phường", "Tan Quy"],
                        ["27010", "Tân Sơn Nhì", "Phường", "Tan Son Nhi"],
                        ["27022", "Tân Thành", "Phường", "Tan Thanh"],
                        ["27040", "Tân Thới Hòa", "Phường", "Tan Thoi Hoa"],
                        ["27013", "Tây Thạnh", "Phường", "Tay Thanh"]
                    ]
                ],
                [
                    "769", "Thủ Đức", "Thành phố", "Thu Duc",
                    [
                        ["27094", "An Khánh", "Phường", "An Khanh"],
                        ["27115", "An Lợi Đông", "Phường", "An Loi Dong"],
                        ["27091", "An Phú", "Phường", "An Phu"],
                        ["26797", "Bình Chiểu", "Phường", "Binh Chieu"],
                        ["26824", "Bình Thọ", "Phường", "Binh Tho"],
                        ["27097", "Bình Trưng Đông", "Phường", "Binh Trung Dong"],
                        ["27100", "Bình Trưng Tây", "Phường", "Binh Trung Tay"],
                        ["27109", "Cát Lái", "Phường", "Cat Lai"],
                        ["26812", "Hiệp Bình Chánh", "Phường", "Hiep Binh Chanh"],
                        ["26809", "Hiệp Bình Phước", "Phường", "Hiep Binh Phuoc"],
                        ["26839", "Hiệp Phú", "Phường", "Hiep Phu"],
                        ["26815", "Linh Chiểu", "Phường", "Linh Chieu"],
                        ["26821", "Linh Đông", "Phường", "Linh Dong"],
                        ["26818", "Linh Tây", "Phường", "Linh Tay"],
                        ["26800", "Linh Trung", "Phường", "Linh Trung"],
                        ["26794", "Linh Xuân", "Phường", "Linh Xuan"],
                        ["26830", "Long Bình", "Phường", "Long Binh"],
                        ["26857", "Long Phước", "Phường", "Long Phuoc"],
                        ["26833", "Long Thạnh Mỹ", "Phường", "Long Thanh My"],
                        ["26860", "Long Trường", "Phường", "Long Truong"],
                        ["26866", "Phú Hữu", "Phường", "Phu Huu"],
                        ["26863", "Phước Bình", "Phường", "Phuoc Binh"],
                        ["26851", "Phước Long A", "Phường", "Phuoc Long A"],
                        ["26848", "Phước Long B", "Phường", "Phuoc Long B"],
                        ["26803", "Tam Bình", "Phường", "Tam Binh"],
                        ["26806", "Tam Phú", "Phường", "Tam Phu"],
                        ["26836", "Tân Phú", "Phường", "Tan Phu"],
                        ["26842", "Tăng Nhơn Phú A", "Phường", "Tang Nhon Phu A"],
                        ["26845", "Tăng Nhơn Phú B", "Phường", "Tang Nhon Phu B"],
                        ["27112", "Thạnh Mỹ Lợi", "Phường", "Thanh My Loi"],
                        ["27088", "Thảo Điền", "Phường", "Thao Dien"],
                        ["27118", "Thủ Thiêm", "Phường", "Thu Thiem"],
                        ["26854", "Trường Thạnh", "Phường", "Truong Thanh"],
                        ["26827", "Trường Thọ", "Phường", "Truong Tho"]
                    ]
                ]
            ]
        ],
        [
            "17", "Hoà Bình", "Tỉnh", "Hoa Binh",
            [
                [
                    "154", "Cao Phong", "Huyện", "Cao Phong",
                    [
                        ["05098", "Bắc Phong", "Xã", "Bac Phong"],
                        ["05092", "Bình Thanh", "Xã", "Binh Thanh"],
                        ["05089", "Cao Phong", "Thị trấn", "Cao Phong"],
                        ["05116", "Dũng Phong", "Xã", "Dung Phong"],
                        ["05104", "Hợp Phong", "Xã", "Hop Phong"],
                        ["05119", "Nam Phong", "Xã", "Nam Phong"],
                        ["05110", "Tây Phong", "Xã", "Tay Phong"],
                        ["05125", "Thạch Yên", "Xã", "Thach Yen"],
                        ["05101", "Thu Phong", "Xã", "Thu Phong"],
                        ["05095", "Thung Nai", "Xã", "Thung Nai"]
                    ]
                ],
                [
                    "150", "Đà Bắc", "Huyện", "Da Bac",
                    [
                        ["04876", "Cao Sơn", "Xã", "Cao Son"],
                        ["04831", "Đà Bắc", "Thị trấn", "Da Bac"],
                        ["04858", "Đoàn Kết", "Xã", "Doan Ket"],
                        ["04852", "Đồng Chum", "Xã", "Dong Chum"],
                        ["04861", "Đồng Ruộng", "Xã", "Dong Ruong"],
                        ["04840", "Giáp Đắt", "Xã", "Giap Dat"],
                        ["04885", "Hiền Lương", "Xã", "Hien Luong"],
                        ["04846", "Mường Chiềng", "Xã", "Muong Chieng"],
                        ["04834", "Nánh Nghê", "Xã", "Nanh Nghe"],
                        ["04855", "Tân Minh", "Xã", "Tan Minh"],
                        ["04849", "Tân Pheo", "Xã", "Tan Pheo"],
                        ["04888", "Tiền Phong", "Xã", "Tien Phong"],
                        ["04879", "Toàn Sơn", "Xã", "Toan Son"],
                        ["04870", "Trung Thành", "Xã", "Trung Thanh"],
                        ["04867", "Tú Lý", "Xã", "Tu Ly"],
                        ["04891", "Vầy Nưa", "Xã", "Vay Nua"],
                        ["04873", "Yên Hòa", "Xã", "Yen Hoa"]
                    ]
                ],
                [
                    "148", "Hòa Bình", "Thành phố", "Hoa Binh",
                    [
                        ["04819", "Dân Chủ", "Phường", "Dan Chu"],
                        ["04921", "Độc Lập", "Xã", "Doc Lap"],
                        ["04804", "Đồng Tiến", "Phường", "Dong Tien"],
                        ["04825", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["04903", "Hợp Thành", "Xã", "Hop Thanh"],
                        ["04798", "Hữu Nghị", "Phường", "Huu Nghi"],
                        ["04894", "Kỳ Sơn", "Phường", "Ky Son"],
                        ["04912", "Mông Hóa", "Xã", "Mong Hoa"],
                        ["04807", "Phương Lâm", "Phường", "Phuong Lam"],
                        ["04906", "Quang Tiến", "Xã", "Quang Tien"],
                        ["04816", "Quỳnh Lâm", "Phường", "Quynh Lam"],
                        ["04792", "Tân Hòa", "Phường", "Tan Hoa"],
                        ["04801", "Tân Thịnh", "Phường", "Tan Thinh"],
                        ["04789", "Thái Bình", "Phường", "Thai Binh"],
                        ["04795", "Thịnh Lang", "Phường", "Thinh Lang"],
                        ["04897", "Thịnh Minh", "Xã", "Thinh Minh"],
                        ["04828", "Thống Nhất", "Phường", "Thong Nhat"],
                        ["04918", "Trung Minh", "Phường", "Trung Minh"],
                        ["04813", "Yên Mông", "Xã", "Yen Mong"]
                    ]
                ],
                [
                    "153", "Kim Bôi", "Huyện", "Kim Boi",
                    [
                        ["04990", "Bình Sơn", "Xã", "Binh Son"],
                        ["04978", "Bo", "Thị trấn", "Bo"],
                        ["05077", "Cuối Hạ", "Xã", "Cuoi Ha"],
                        ["05014", "Đông Bắc", "Xã", "Dong Bac"],
                        ["04984", "Đú Sáng", "Xã", "Du Sang"],
                        ["05038", "Hợp Tiến", "Xã", "Hop Tien"],
                        ["04987", "Hùng Sơn", "Xã", "Hung Son"],
                        ["05065", "Kim Bôi", "Xã", "Kim Boi"],
                        ["05035", "Kim Lập", "Xã", "Kim Lap"],
                        ["05083", "Mi Hòa", "Xã", "Mi Hoa"],
                        ["05068", "Nam Thượng", "Xã", "Nam Thuong"],
                        ["05086", "Nuông Dăm", "Xã", "Nuong Dam"],
                        ["05080", "Sào Báy", "Xã", "Sao Bay"],
                        ["04999", "Tú Sơn", "Xã", "Tu Son"],
                        ["05026", "Vĩnh Đồng", "Xã", "Vinh Dong"],
                        ["05005", "Vĩnh Tiến", "Xã", "Vinh Tien"],
                        ["05017", "Xuân Thủy", "Xã", "Xuan Thuy"]
                    ]
                ],
                [
                    "157", "Lạc Sơn", "Huyện", "Lac Son",
                    [
                        ["05347", "Ân Nghĩa", "Xã", "An Nghia"],
                        ["05308", "Bình Hẻm", "Xã", "Binh Hem"],
                        ["05323", "Chí Đạo", "Xã", "Chi Dao"],
                        ["05320", "Định Cư", "Xã", "Dinh Cu"],
                        ["05332", "Hương Nhượng", "Xã", "Huong Nhuong"],
                        ["05272", "Miền Đồi", "Xã", "Mien Doi"],
                        ["05275", "Mỹ Thành", "Xã", "My Thanh"],
                        ["05350", "Ngọc Lâu", "Xã", "Ngoc Lau"],
                        ["05329", "Ngọc Sơn", "Xã", "Ngoc Son"],
                        ["05290", "Nhân Nghĩa", "Xã", "Nhan Nghia"],
                        ["05269", "Quý Hòa", "Xã", "Quy Hoa"],
                        ["05299", "Quyết Thắng", "Xã", "Quyet Thang"],
                        ["05287", "Tân Lập", "Xã", "Tan Lap"],
                        ["05344", "Tân Mỹ", "Xã", "Tan My"],
                        ["05293", "Thượng Cốc", "Xã", "Thuong Coc"],
                        ["05338", "Tự Do", "Xã", "Tu Do"],
                        ["05278", "Tuân Đạo", "Xã", "Tuan Dao"],
                        ["05281", "Văn Nghĩa", "Xã", "Van Nghia"],
                        ["05284", "Văn Sơn", "Xã", "Van Son"],
                        ["05266", "Vụ Bản", "Thị trấn", "Vu Ban"],
                        ["05335", "Vũ Bình", "Xã", "Vu Binh"],
                        ["05302", "Xuất Hóa", "Xã", "Xuat Hoa"],
                        ["05341", "Yên Nghiệp", "Xã", "Yen Nghiep"],
                        ["05305", "Yên Phú", "Xã", "Yen Phu"]
                    ]
                ],
                [
                    "159", "Lạc Thủy", "Huyện", "Lac Thuy",
                    [
                        ["05428", "An Bình", "Xã", "An Binh"],
                        ["04981", "Ba Hàng Đồi", "Thị trấn", "Ba Hang Doi"],
                        ["05392", "Chi Nê", "Thị trấn", "Chi Ne"],
                        ["05419", "Đồng Tâm", "Xã", "Dong Tam"],
                        ["05404", "Hưng Thi", "Xã", "Hung Thi"],
                        ["05413", "Khoan Dụ", "Xã", "Khoan Du"],
                        ["05395", "Phú Nghĩa", "Xã", "Phu Nghia"],
                        ["05398", "Phú Thành", "Xã", "Phu Thanh"],
                        ["05425", "Thống Nhất", "Xã", "Thong Nhat"],
                        ["05422", "Yên Bồng", "Xã", "Yen Bong"]
                    ]
                ],
                [
                    "152", "Lương Sơn", "Huyện", "Luong Son",
                    [
                        ["05008", "Cao Dương", "Xã", "Cao Duong"],
                        ["04957", "Cao Sơn", "Xã", "Cao Son"],
                        ["04960", "Cư Yên", "Xã", "Cu Yen"],
                        ["04945", "Hòa Sơn", "Xã", "Hoa Son"],
                        ["04942", "Lâm Sơn", "Xã", "Lam Son"],
                        ["04969", "Liên Sơn", "Xã", "Lien Son"],
                        ["04924", "Lương Sơn", "Thị trấn", "Luong Son"],
                        ["04954", "Nhuận Trạch", "Xã", "Nhuan Trach"],
                        ["04951", "Tân Vinh", "Xã", "Tan Vinh"],
                        ["05047", "Thanh Cao", "Xã", "Thanh Cao"],
                        ["05041", "Thanh Sơn", "Xã", "Thanh Son"]
                    ]
                ],
                [
                    "156", "Mai Châu", "Huyện", "Mai Chau",
                    [
                        ["05227", "Bao La", "Xã", "Bao La"],
                        ["05248", "Chiềng Châu", "Xã", "Chieng Chau"],
                        ["05224", "Cun Pheo", "Xã", "Cun Pheo"],
                        ["05221", "Đồng Tân", "Xã", "Dong Tan"],
                        ["05212", "Hang Kia", "Xã", "Hang Kia"],
                        ["05200", "Mai Châu", "Thị trấn", "Mai Chau"],
                        ["05251", "Mai Hạ", "Xã", "Mai Ha"],
                        ["05257", "Mai Hịch", "Xã", "Mai Hich"],
                        ["05242", "Nà Phòn", "Xã", "Na Phon"],
                        ["05209", "Pà Cò", "Xã", "Pa Co"],
                        ["05245", "Săm Khóe", "Xã", "Sam Khoe"],
                        ["05206", "Sơn Thủy", "Xã", "Son Thuy"],
                        ["04882", "Tân Thành", "Xã", "Tan Thanh"],
                        ["05254", "Thành Sơn", "Xã", "Thanh Son"],
                        ["05233", "Tòng Đậu", "Xã", "Tong Dau"],
                        ["05263", "Vạn Mai", "Xã", "Van Mai"]
                    ]
                ],
                [
                    "155", "Tân Lạc", "Huyện", "Tan Lac",
                    [
                        ["05173", "Đông Lai", "Xã", "Dong Lai"],
                        ["05197", "Gia Mô", "Xã", "Gia Mo"],
                        ["05191", "Lỗ Sơn", "Xã", "Lo Son"],
                        ["05128", "Mãn Đức", "Thị trấn", "Man Duc"],
                        ["05143", "Mỹ Hòa", "Xã", "My Hoa"],
                        ["05194", "Ngổ Luông", "Xã", "Ngo Luong"],
                        ["05170", "Ngọc Mỹ", "Xã", "Ngoc My"],
                        ["05182", "Nhân Mỹ", "Xã", "Nhan My"],
                        ["05158", "Phong Phú", "Xã", "Phong Phu"],
                        ["05140", "Phú Cường", "Xã", "Phu Cuong"],
                        ["05137", "Phú Vinh", "Xã", "Phu Vinh"],
                        ["05152", "Quyết Chiến", "Xã", "Quyet Chien"],
                        ["05134", "Suối Hoa", "Xã", "Suoi Hoa"],
                        ["05167", "Thanh Hối", "Xã", "Thanh Hoi"],
                        ["05164", "Tử Nê", "Xã", "Tu Ne"],
                        ["05176", "Vân Sơn", "Xã", "Van Son"]
                    ]
                ],
                [
                    "158", "Yên Thủy", "Huyện", "Yen Thuy",
                    [
                        ["05365", "Bảo Hiệu", "Xã", "Bao Hieu"],
                        ["05368", "Đa Phúc", "Xã", "Da Phuc"],
                        ["05380", "Đoàn Kết", "Xã", "Doan Ket"],
                        ["05353", "Hàng Trạm", "Thị trấn", "Hang Tram"],
                        ["05371", "Hữu Lợi", "Xã", "Huu Loi"],
                        ["05362", "Lạc Lương", "Xã", "Lac Luong"],
                        ["05356", "Lạc Sỹ", "Xã", "Lac Sy"],
                        ["05374", "Lạc Thịnh", "Xã", "Lac Thinh"],
                        ["05389", "Ngọc Lương", "Xã", "Ngoc Luong"],
                        ["05383", "Phú Lai", "Xã", "Phu Lai"],
                        ["05386", "Yên Trị", "Xã", "Yen Tri"]
                    ]
                ]
            ]
        ],
        [
            "33", "Hưng Yên", "Tỉnh", "Hung Yen",
            [
                [
                    "329", "Ân Thi", "Huyện", "An Thi",
                    [
                        ["12142", "Ân Thi", "Thị trấn", "An Thi"],
                        ["12148", "Bắc Sơn", "Xã", "Bac Son"],
                        ["12151", "Bãi Sậy", "Xã", "Bai Say"],
                        ["12181", "Cẩm Ninh", "Xã", "Cam Ninh"],
                        ["12187", "Đa Lộc", "Xã", "Da Loc"],
                        ["12178", "Đặng Lễ", "Xã", "Dang Le"],
                        ["12154", "Đào Dương", "Xã", "Dao Duong"],
                        ["12202", "Hạ Lễ", "Xã", "Ha Le"],
                        ["12190", "Hồ Tùng Mậu", "Xã", "Ho Tung Mau"],
                        ["12169", "Hoàng Hoa Thám", "Xã", "Hoang Hoa Tham"],
                        ["12199", "Hồng Quang", "Xã", "Hong Quang"],
                        ["12196", "Hồng Vân", "Xã", "Hong Van"],
                        ["12184", "Nguyễn Trãi", "Xã", "Nguyen Trai"],
                        ["12145", "Phù Ủng", "Xã", "Phu Ung"],
                        ["12172", "Quảng Lãng", "Xã", "Quang Lang"],
                        ["12163", "Quang Vinh", "Xã", "Quang Vinh"],
                        ["12157", "Tân Phúc", "Xã", "Tan Phuc"],
                        ["12193", "Tiền Phong", "Xã", "Tien Phong"],
                        ["12160", "Vân Du", "Xã", "Van Du"],
                        ["12175", "Văn Nhuệ", "Xã", "Van Nhue"],
                        ["12166", "Xuân Trúc", "Xã", "Xuan Truc"]
                    ]
                ],
                [
                    "323", "Hưng Yên", "Thành phố", "Hung Yen",
                    [
                        ["11956", "An Tảo", "Phường", "An Tao"],
                        ["11983", "Bảo Khê", "Xã", "Bao Khe"],
                        ["11953", "Hiến Nam", "Phường", "Hien Nam"],
                        ["12388", "Hoàng Hanh", "Xã", "Hoang Hanh"],
                        ["11968", "Hồng Châu", "Phường", "Hong Chau"],
                        ["11977", "Hồng Nam", "Xã", "Hong Nam"],
                        ["12334", "Hùng Cường", "Xã", "Hung Cuong"],
                        ["11950", "Lam Sơn", "Phường", "Lam Son"],
                        ["11959", "Lê Lợi", "Phường", "Le Loi"],
                        ["11974", "Liên Phương", "Xã", "Lien Phuong"],
                        ["11962", "Minh Khai", "Phường", "Minh Khai"],
                        ["12331", "Phú Cường", "Xã", "Phu Cuong"],
                        ["12382", "Phương Chiểu", "Xã", "Phuong Chieu"],
                        ["11980", "Quảng Châu", "Xã", "Quang Chau"],
                        ["11965", "Quang Trung", "Phường", "Quang Trung"],
                        ["12385", "Tân Hưng", "Xã", "Tan Hung"],
                        ["11971", "Trung Nghĩa", "Xã", "Trung Nghia"]
                    ]
                ],
                [
                    "330", "Khoái Châu", "Huyện", "Khoai Chau",
                    [
                        ["12229", "An Vĩ", "Xã", "An Vi"],
                        ["12235", "Bình Kiều", "Xã", "Binh Kieu"],
                        ["12211", "Bình Minh", "Xã", "Binh Minh"],
                        ["12265", "Chí Tân", "Xã", "Chi Tan"],
                        ["12214", "Dạ Trạch", "Xã", "Da Trach"],
                        ["12268", "Đại Hưng", "Xã", "Dai Hung"],
                        ["12262", "Đại Tập", "Xã", "Dai Tap"],
                        ["12238", "Dân Tiến", "Xã", "Dan Tien"],
                        ["12232", "Đông Kết", "Xã", "Dong Ket"],
                        ["12259", "Đông Ninh", "Xã", "Dong Ninh"],
                        ["12208", "Đông Tảo", "Xã", "Dong Tao"],
                        ["12241", "Đồng Tiến", "Xã", "Dong Tien"],
                        ["12217", "Hàm Tử", "Xã", "Ham Tu"],
                        ["12244", "Hồng Tiến", "Xã", "Hong Tien"],
                        ["12205", "Khoái Châu", "Thị trấn", "Khoai Chau"],
                        ["12250", "Liên Khê", "Xã", "Lien Khe"],
                        ["12277", "Nhuế Dương", "Xã", "Nhue Duong"],
                        ["12220", "Ông Đình", "Xã", "Ong Dinh"],
                        ["12253", "Phùng Hưng", "Xã", "Phung Hung"],
                        ["12247", "Tân Châu", "Xã", "Tan Chau"],
                        ["12223", "Tân Dân", "Xã", "Tan Dan"],
                        ["12274", "Thành Công", "Xã", "Thanh Cong"],
                        ["12271", "Thuần Hưng", "Xã", "Thuan Hung"],
                        ["12226", "Tứ Dân", "Xã", "Tu Dan"],
                        ["12256", "Việt Hòa", "Xã", "Viet Hoa"]
                    ]
                ],
                [
                    "331", "Kim Động", "Huyện", "Kim Dong",
                    [
                        ["12304", "Chính Nghĩa", "Xã", "Chinh Nghia"],
                        ["12298", "Đồng Thanh", "Xã", "Dong Thanh"],
                        ["12316", "Đức Hợp", "Xã", "Duc Hop"],
                        ["12328", "Hiệp Cường", "Xã", "Hiep Cuong"],
                        ["12319", "Hùng An", "Xã", "Hung An"],
                        ["12280", "Lương Bằng", "Thị trấn", "Luong Bang"],
                        ["12313", "Mai Động", "Xã", "Mai Dong"],
                        ["12283", "Nghĩa Dân", "Xã", "Nghia Dan"],
                        ["12322", "Ngọc Thanh", "Xã", "Ngoc Thanh"],
                        ["12307", "Nhân La", "Xã", "Nhan La"],
                        ["12292", "Phạm Ngũ Lão", "Xã", "Pham Ngu Lao"],
                        ["12310", "Phú Thịnh", "Xã", "Phu Thinh"],
                        ["12301", "Song Mai", "Xã", "Song Mai"],
                        ["12295", "Thọ Vinh", "Xã", "Tho Vinh"],
                        ["12286", "Toàn Thắng", "Xã", "Toan Thang"],
                        ["12289", "Vĩnh Xá", "Xã", "Vinh Xa"],
                        ["12325", "Vũ Xá", "Xã", "Vu Xa"]
                    ]
                ],
                [
                    "328", "Mỹ Hào", "Thị xã", "My Hao",
                    [
                        ["12124", "Bạch Sam", "Phường", "Bach Sam"],
                        ["12103", "Bần Yên Nhân", "Phường", "Ban Yen Nhan"],
                        ["12109", "Cẩm Xá", "Xã", "Cam Xa"],
                        ["12121", "Dị Sử", "Phường", "Di Su"],
                        ["12112", "Dương Quang", "Xã", "Duong Quang"],
                        ["12115", "Hòa Phong", "Xã", "Hoa Phong"],
                        ["12139", "Hưng Long", "Xã", "Hung Long"],
                        ["12127", "Minh Đức", "Phường", "Minh Duc"],
                        ["12136", "Ngọc Lâm", "Xã", "Ngoc Lam"],
                        ["12118", "Nhân Hòa", "Phường", "Nhan Hoa"],
                        ["12106", "Phan Đình Phùng", "Phường", "Phan Dinh Phung"],
                        ["12130", "Phùng Chí Kiên", "Phường", "Phung Chi Kien"],
                        ["12133", "Xuân Dục", "Xã", "Xuan Duc"]
                    ]
                ],
                [
                    "333", "Phù Cừ", "Huyện", "Phu Cu",
                    [
                        ["12412", "Đình Cao", "Xã", "Dinh Cao"],
                        ["12406", "Đoàn Đào", "Xã", "Doan Dao"],
                        ["12403", "Minh Hoàng", "Xã", "Minh Hoang"],
                        ["12394", "Minh Tân", "Xã", "Minh Tan"],
                        ["12424", "Minh Tiến", "Xã", "Minh Tien"],
                        ["12427", "Nguyên Hòa", "Xã", "Nguyen Hoa"],
                        ["12415", "Nhật Quang", "Xã", "Nhat Quang"],
                        ["12397", "Phan Sào Nam", "Xã", "Phan Sao Nam"],
                        ["12400", "Quang Hưng", "Xã", "Quang Hung"],
                        ["12421", "Tam Đa", "Xã", "Tam Da"],
                        ["12418", "Tiền Tiến", "Xã", "Tien Tien"],
                        ["12409", "Tống Phan", "Xã", "Tong Phan"],
                        ["12430", "Tống Trân", "Xã", "Tong Tran"],
                        ["12391", "Trần Cao", "Thị trấn", "Tran Cao"]
                    ]
                ],
                [
                    "332", "Tiên Lữ", "Huyện", "Tien Lu",
                    [
                        ["12355", "An Viên", "Xã", "An Vien"],
                        ["12376", "Cương Chính", "Xã", "Cuong Chinh"],
                        ["12349", "Dị Chế", "Xã", "Di Che"],
                        ["12358", "Đức Thắng", "Xã", "Duc Thang"],
                        ["12364", "Hải Triều", "Xã", "Hai Trieu"],
                        ["12340", "Hưng Đạo", "Xã", "Hung Dao"],
                        ["12352", "Lệ Xá", "Xã", "Le Xa"],
                        ["12379", "Minh Phượng", "Xã", "Minh Phuong"],
                        ["12343", "Ngô Quyền", "Xã", "Ngo Quyen"],
                        ["12346", "Nhật Tân", "Xã", "Nhat Tan"],
                        ["12370", "Thiện Phiến", "Xã", "Thien Phien"],
                        ["12367", "Thủ Sỹ", "Xã", "Thu Sy"],
                        ["12373", "Thụy Lôi", "Xã", "Thuy Loi"],
                        ["12361", "Trung Dũng", "Xã", "Trung Dung"],
                        ["12337", "Vương", "Thị trấn", "Vuong"]
                    ]
                ],
                [
                    "326", "Văn Giang", "Huyện", "Van Giang",
                    [
                        ["12025", "Cửu Cao", "Xã", "Cuu Cao"],
                        ["12040", "Liên Nghĩa", "Xã", "Lien Nghia"],
                        ["12034", "Long Hưng", "Xã", "Long Hung"],
                        ["12049", "Mễ Sở", "Xã", "Me So"],
                        ["12031", "Nghĩa Trụ", "Xã", "Nghia Tru"],
                        ["12028", "Phụng Công", "Xã", "Phung Cong"],
                        ["12043", "Tân Tiến", "Xã", "Tan Tien"],
                        ["12046", "Thắng Lợi", "Xã", "Thang Loi"],
                        ["12019", "Văn Giang", "Thị trấn", "Van Giang"],
                        ["12037", "Vĩnh Khúc", "Xã", "Vinh Khuc"],
                        ["12022", "Xuân Quan", "Xã", "Xuan Quan"]
                    ]
                ],
                [
                    "325", "Văn Lâm", "Huyện", "Van Lam",
                    [
                        ["11992", "Chỉ Đạo", "Xã", "Chi Dao"],
                        ["11995", "Đại Đồng", "Xã", "Dai Dong"],
                        ["12004", "Đình Dù", "Xã", "Dinh Du"],
                        ["11989", "Lạc Đạo", "Xã", "Lac Dao"],
                        ["12016", "Lạc Hồng", "Xã", "Lac Hong"],
                        ["12010", "Lương Tài", "Xã", "Luong Tai"],
                        ["12007", "Minh Hải", "Xã", "Minh Hai"],
                        ["11986", "Như Quỳnh", "Thị trấn", "Nhu Quynh"],
                        ["12001", "Tân Quang", "Xã", "Tan Quang"],
                        ["12013", "Trưng Trắc", "Xã", "Trung Trac"],
                        ["11998", "Việt Hưng", "Xã", "Viet Hung"]
                    ]
                ],
                [
                    "327", "Yên Mỹ", "Huyện", "Yen My",
                    [
                        ["12061", "Đồng Than", "Xã", "Dong Than"],
                        ["12055", "Giai Phạm", "Xã", "Giai Pham"],
                        ["12070", "Hoàn Long", "Xã", "Hoan Long"],
                        ["12067", "Liêu Xá", "Xã", "Lieu Xa"],
                        ["12097", "Lý Thường Kiệt", "Xã", "Ly Thuong Kiet"],
                        ["12091", "Minh Châu", "Xã", "Minh Chau"],
                        ["12058", "Nghĩa Hiệp", "Xã", "Nghia Hiep"],
                        ["12064", "Ngọc Long", "Xã", "Ngoc Long"],
                        ["12073", "Tân Lập", "Xã", "Tan Lap"],
                        ["12100", "Tân Việt", "Xã", "Tan Viet"],
                        ["12076", "Thanh Long", "Xã", "Thanh Long"],
                        ["12085", "Trung Hòa", "Xã", "Trung Hoa"],
                        ["12094", "Trung Hưng", "Xã", "Trung Hung"],
                        ["12082", "Việt Cường", "Xã", "Viet Cuong"],
                        ["12088", "Yên Hòa", "Xã", "Yen Hoa"],
                        ["12052", "Yên Mỹ", "Thị trấn", "Yen My"],
                        ["12079", "Yên Phú", "Xã", "Yen Phu"]
                    ]
                ]
            ]
        ],
        [
            "56", "Khánh Hòa", "Tỉnh", "Khanh Hoa",
            [
                [
                    "570", "Cam Lâm", "Huyện", "Cam Lam",
                    [
                        ["22465", "Cam An Bắc", "Xã", "Cam An Bac"],
                        ["22471", "Cam An Nam", "Xã", "Cam An Nam"],
                        ["22453", "Cam Đức", "Thị trấn", "Cam Duc"],
                        ["22441", "Cam Hải Đông", "Xã", "Cam Hai Dong"],
                        ["22444", "Cam Hải Tây", "Xã", "Cam Hai Tay"],
                        ["22450", "Cam Hiệp Bắc", "Xã", "Cam Hiep Bac"],
                        ["22456", "Cam Hiệp Nam", "Xã", "Cam Hiep Nam"],
                        ["22438", "Cam Hòa", "Xã", "Cam Hoa"],
                        ["22459", "Cam Phước Tây", "Xã", "Cam Phuoc Tay"],
                        ["22435", "Cam Tân", "Xã", "Cam Tan"],
                        ["22462", "Cam Thành Bắc", "Xã", "Cam Thanh Bac"],
                        ["22447", "Sơn Tân", "Xã", "Son Tan"],
                        ["22708", "Suối Cát", "Xã", "Suoi Cat"],
                        ["22711", "Suối Tân", "Xã", "Suoi Tan"]
                    ]
                ],
                [
                    "569", "Cam Ranh", "Thành phố", "Cam Ranh",
                    [
                        ["22423", "Ba Ngòi", "Phường", "Ba Ngoi"],
                        ["22486", "Cam Bình", "Xã", "Cam Binh"],
                        ["22483", "Cam Lập", "Xã", "Cam Lap"],
                        ["22432", "Cam Linh", "Phường", "Cam Linh"],
                        ["22417", "Cam Lộc", "Phường", "Cam Loc"],
                        ["22429", "Cam Lợi", "Phường", "Cam Loi"],
                        ["22408", "Cam Nghĩa", "Phường", "Cam Nghia"],
                        ["22420", "Cam Phú", "Phường", "Cam Phu"],
                        ["22411", "Cam Phúc Bắc", "Phường", "Cam Phuc Bac"],
                        ["22414", "Cam Phúc Nam", "Phường", "Cam Phuc Nam"],
                        ["22474", "Cam Phước Đông", "Xã", "Cam Phuoc Dong"],
                        ["22468", "Cam Thành Nam", "Xã", "Cam Thanh Nam"],
                        ["22480", "Cam Thịnh Đông", "Xã", "Cam Thinh Dong"],
                        ["22477", "Cam Thịnh Tây", "Xã", "Cam Thinh Tay"],
                        ["22426", "Cam Thuận", "Phường", "Cam Thuan"]
                    ]
                ],
                [
                    "574", "Diên Khánh", "Huyện", "Dien Khanh",
                    [
                        ["22696", "Bình Lộc", "Xã", "Binh Loc"],
                        ["22693", "Diên An", "Xã", "Dien An"],
                        ["22657", "Diên Điền", "Xã", "Dien Dien"],
                        ["22666", "Diên Đồng", "Xã", "Dien Dong"],
                        ["22684", "Diên Hòa", "Xã", "Dien Hoa"],
                        ["22651", "Diên Khánh", "Thị trấn", "Dien Khanh"],
                        ["22678", "Diên Lạc", "Xã", "Dien Lac"],
                        ["22654", "Diên Lâm", "Xã", "Dien Lam"],
                        ["22669", "Diên Phú", "Xã", "Dien Phu"],
                        ["22675", "Diên Phước", "Xã", "Dien Phuoc"],
                        ["22663", "Diên Sơn", "Xã", "Dien Son"],
                        ["22681", "Diên Tân", "Xã", "Dien Tan"],
                        ["22687", "Diên Thạnh", "Xã", "Dien Thanh"],
                        ["22672", "Diên Thọ", "Xã", "Dien Tho"],
                        ["22690", "Diên Toàn", "Xã", "Dien Toan"],
                        ["22660", "Diên Xuân", "Xã", "Dien Xuan"],
                        ["22702", "Suối Hiệp", "Xã", "Suoi Hiep"],
                        ["22705", "Suối Tiên", "Xã", "Suoi Tien"]
                    ]
                ],
                [
                    "575", "Khánh Sơn", "Huyện", "Khanh Son",
                    [
                        ["22732", "Ba Cụm Bắc", "Xã", "Ba Cum Bac"],
                        ["22735", "Ba Cụm Nam", "Xã", "Ba Cum Nam"],
                        ["22726", "Sơn Bình", "Xã", "Son Binh"],
                        ["22723", "Sơn Hiệp", "Xã", "Son Hiep"],
                        ["22720", "Sơn Lâm", "Xã", "Son Lam"],
                        ["22729", "Sơn Trung", "Xã", "Son Trung"],
                        ["22717", "Thành Sơn", "Xã", "Thanh Son"],
                        ["22714", "Tô Hạp", "Thị trấn", "To Hap"]
                    ]
                ],
                [
                    "573", "Khánh Vĩnh", "Huyện", "Khanh Vinh",
                    [
                        ["22636", "Cầu Bà", "Xã", "Cau Ba"],
                        ["22633", "Giang Ly", "Xã", "Giang Ly"],
                        ["22615", "Khánh Bình", "Xã", "Khanh Binh"],
                        ["22621", "Khánh Đông", "Xã", "Khanh Dong"],
                        ["22612", "Khánh Hiệp", "Xã", "Khanh Hiep"],
                        ["22627", "Khánh Nam", "Xã", "Khanh Nam"],
                        ["22645", "Khánh Phú", "Xã", "Khanh Phu"],
                        ["22642", "Khánh Thành", "Xã", "Khanh Thanh"],
                        ["22624", "Khánh Thượng", "Xã", "Khanh Thuong"],
                        ["22618", "Khánh Trung", "Xã", "Khanh Trung"],
                        ["22609", "Khánh Vĩnh", "Thị trấn", "Khanh Vinh"],
                        ["22639", "Liên Sang", "Xã", "Lien Sang"],
                        ["22648", "Sơn Thái", "Xã", "Son Thai"],
                        ["22630", "Sông Cầu", "Xã", "Song Cau"]
                    ]
                ],
                [
                    "568", "Nha Trang", "Thành phố", "Nha Trang",
                    [
                        ["22363", "Lộc Thọ", "Phường", "Loc Tho"],
                        ["22336", "Ngọc Hiệp", "Phường", "Ngoc Hiep"],
                        ["22405", "Phước Đồng", "Xã", "Phuoc Dong"],
                        ["22357", "Phước Hải", "Phường", "Phuoc Hai"],
                        ["22372", "Phước Hòa", "Phường", "Phuoc Hoa"],
                        ["22378", "Phước Long", "Phường", "Phuoc Long"],
                        ["22360", "Phước Tân", "Phường", "Phuoc Tan"],
                        ["22366", "Phước Tiến", "Phường", "Phuoc Tien"],
                        ["22351", "Phương Sài", "Phường", "Phuong Sai"],
                        ["22354", "Phương Sơn", "Phường", "Phuong Son"],
                        ["22369", "Tân Lập", "Phường", "Tan Lap"],
                        ["22345", "Vạn Thắng", "Phường", "Van Thang"],
                        ["22348", "Vạn Thạnh", "Phường", "Van Thanh"],
                        ["22330", "Vĩnh Hải", "Phường", "Vinh Hai"],
                        ["22399", "Vĩnh Hiệp", "Xã", "Vinh Hiep"],
                        ["22327", "Vĩnh Hòa", "Phường", "Vinh Hoa"],
                        ["22384", "Vĩnh Lương", "Xã", "Vinh Luong"],
                        ["22390", "Vĩnh Ngọc", "Xã", "Vinh Ngoc"],
                        ["22375", "Vĩnh Nguyên", "Phường", "Vinh Nguyen"],
                        ["22333", "Vĩnh Phước", "Phường", "Vinh Phuoc"],
                        ["22387", "Vĩnh Phương", "Xã", "Vinh Phuong"],
                        ["22402", "Vĩnh Thái", "Xã", "Vinh Thai"],
                        ["22393", "Vĩnh Thạnh", "Xã", "Vinh Thanh"],
                        ["22339", "Vĩnh Thọ", "Phường", "Vinh Tho"],
                        ["22396", "Vĩnh Trung", "Xã", "Vinh Trung"],
                        ["22381", "Vĩnh Trường", "Phường", "Vinh Truong"],
                        ["22342", "Xương Huân", "Phường", "Xuong Huan"]
                    ]
                ],
                [
                    "572", "Ninh Hòa", "Thị xã", "Ninh Hoa",
                    [
                        ["22540", "Ninh An", "Xã", "Ninh An"],
                        ["22576", "Ninh Bình", "Xã", "Ninh Binh"],
                        ["22570", "Ninh Đa", "Phường", "Ninh Da"],
                        ["22561", "Ninh Diêm", "Phường", "Ninh Diem"],
                        ["22564", "Ninh Đông", "Xã", "Ninh Dong"],
                        ["22591", "Ninh Giang", "Phường", "Ninh Giang"],
                        ["22594", "Ninh Hà", "Phường", "Ninh Ha"],
                        ["22543", "Ninh Hải", "Phường", "Ninh Hai"],
                        ["22528", "Ninh Hiệp", "Phường", "Ninh Hiep"],
                        ["22597", "Ninh Hưng", "Xã", "Ninh Hung"],
                        ["22603", "Ninh Ích", "Xã", "Ninh Ich"],
                        ["22600", "Ninh Lộc", "Xã", "Ninh Loc"],
                        ["22582", "Ninh Phú", "Xã", "Ninh Phu"],
                        ["22573", "Ninh Phụng", "Xã", "Ninh Phung"],
                        ["22579", "Ninh Phước", "Xã", "Ninh Phuoc"],
                        ["22588", "Ninh Quang", "Xã", "Ninh Quang"],
                        ["22552", "Ninh Sim", "Xã", "Ninh Sim"],
                        ["22531", "Ninh Sơn", "Xã", "Ninh Son"],
                        ["22585", "Ninh Tân", "Xã", "Ninh Tan"],
                        ["22534", "Ninh Tây", "Xã", "Ninh Tay"],
                        ["22558", "Ninh Thân", "Xã", "Ninh Than"],
                        ["22546", "Ninh Thọ", "Xã", "Ninh Tho"],
                        ["22537", "Ninh Thượng", "Xã", "Ninh Thuong"],
                        ["22567", "Ninh Thủy", "Phường", "Ninh Thuy"],
                        ["22549", "Ninh Trung", "Xã", "Ninh Trung"],
                        ["22606", "Ninh Vân", "Xã", "Ninh Van"],
                        ["22555", "Ninh Xuân", "Xã", "Ninh Xuan"]
                    ]
                ],
                [
                    "576", "Trường Sa", "Huyện", "Truong Sa",
                    [
                        ["22739", "Sinh Tồn", "Xã", "Sinh Ton"],
                        ["22737", "Song Tử Tây", "Xã", "Song Tu Tay"],
                        ["22736", "Trường Sa", "Thị trấn", "Truong Sa"]
                    ]
                ],
                [
                    "571", "Vạn Ninh", "Huyện", "Van Ninh",
                    [
                        ["22492", "Đại Lãnh", "Xã", "Dai Lanh"],
                        ["22501", "Vạn Bình", "Xã", "Van Binh"],
                        ["22489", "Vạn Giã", "Thị trấn", "Van Gia"],
                        ["22525", "Vạn Hưng", "Xã", "Van Hung"],
                        ["22507", "Vạn Khánh", "Xã", "Van Khanh"],
                        ["22498", "Vạn Long", "Xã", "Van Long"],
                        ["22513", "Vạn Lương", "Xã", "Van Luong"],
                        ["22510", "Vạn Phú", "Xã", "Van Phu"],
                        ["22495", "Vạn Phước", "Xã", "Van Phuoc"],
                        ["22516", "Vạn Thắng", "Xã", "Van Thang"],
                        ["22519", "Vạn Thạnh", "Xã", "Van Thanh"],
                        ["22504", "Vạn Thọ", "Xã", "Van Tho"],
                        ["22522", "Xuân Sơn", "Xã", "Xuan Son"]
                    ]
                ]
            ]
        ],
        [
            "91", "Kiên Giang", "Tỉnh", "Kien Giang",
            [
                [
                    "908", "An Biên", "Huyện", "An Bien",
                    [
                        ["31006", "Đông Thái", "Xã", "Dong Thai"],
                        ["31009", "Đông Yên", "Xã", "Dong Yen"],
                        ["30997", "Hưng Yên", "Xã", "Hung Yen"],
                        ["31000", "Nam Thái", "Xã", "Nam Thai"],
                        ["31003", "Nam Thái A", "Xã", "Nam Thai A"],
                        ["30994", "Nam Yên", "Xã", "Nam Yen"],
                        ["30988", "Tây Yên", "Xã", "Tay Yen"],
                        ["30991", "Tây Yên A", "Xã", "Tay Yen A"],
                        ["30985", "Thứ Ba", "Thị trấn", "Thu Ba"]
                    ]
                ],
                [
                    "909", "An Minh", "Huyện", "An Minh",
                    [
                        ["31024", "Đông Hòa", "Xã", "Dong Hoa"],
                        ["31033", "Đông Hưng", "Xã", "Dong Hung"],
                        ["31036", "Đông Hưng A", "Xã", "Dong Hung A"],
                        ["31039", "Đông Hưng B", "Xã", "Dong Hung B"],
                        ["31030", "Đông Thạnh", "Xã", "Dong Thanh"],
                        ["31031", "Tân Thạnh", "Xã", "Tan Thanh"],
                        ["31018", "Thứ Mười Một", "Thị trấn", "Thu Muoi Mot"],
                        ["31021", "Thuận Hoà", "Xã", "Thuan Hoa"],
                        ["31042", "Vân Khánh", "Xã", "Van Khanh"],
                        ["31045", "Vân Khánh Đông", "Xã", "Van Khanh Dong"],
                        ["31048", "Vân Khánh Tây", "Xã", "Van Khanh Tay"]
                    ]
                ],
                [
                    "905", "Châu Thành", "Huyện", "Chau Thanh",
                    [
                        ["30898", "Bình An", "Xã", "Binh An"],
                        ["30889", "Giục Tượng", "Xã", "Giuc Tuong"],
                        ["30895", "Minh Hòa", "Xã", "Minh Hoa"],
                        ["30880", "Minh Lương", "Thị trấn", "Minh Luong"],
                        ["30887", "Mong Thọ", "Xã", "Mong Tho"],
                        ["30883", "Mong Thọ A", "Xã", "Mong Tho A"],
                        ["30886", "Mong Thọ B", "Xã", "Mong Tho B"],
                        ["30901", "Thạnh Lộc", "Xã", "Thanh Loc"],
                        ["30892", "Vĩnh Hòa Hiệp", "Xã", "Vinh Hoa Hiep"],
                        ["30893", "Vĩnh Hoà Phú", "Xã", "Vinh Hoa Phu"]
                    ]
                ],
                [
                    "914", "Giang Thành", "Huyện", "Giang Thanh",
                    [
                        ["30797", "Phú Lợi", "Xã", "Phu Loi"],
                        ["30799", "Phú Mỹ", "Xã", "Phu My"],
                        ["30796", "Tân Khánh Hòa", "Xã", "Tan Khanh Hoa"],
                        ["30793", "Vĩnh Điều", "Xã", "Vinh Dieu"],
                        ["30791", "Vĩnh Phú", "Xã", "Vinh Phu"]
                    ]
                ],
                [
                    "906", "Giồng Riềng", "Huyện", "Giong Rieng",
                    [
                        ["30949", " Hòa Thuận", "Xã", " Hoa Thuan"],
                        ["30922", "Bàn Tân Định", "Xã", "Ban Tan Dinh"],
                        ["30919", "Bàn Thạch", "Xã", "Ban Thach"],
                        ["30904", "Giồng Riềng", "Thị Trấn", "Giong Rieng"],
                        ["30940", "Hoà An", "Xã", "Hoa An"],
                        ["30934", "Hòa Hưng", "Xã", "Hoa Hung"],
                        ["30937", "Hoà Lợi", "Xã", "Hoa Loi"],
                        ["30943", "Long Thạnh", "Xã", "Long Thanh"],
                        ["30928", "Ngọc Chúc", "Xã", "Ngoc Chuc"],
                        ["30950", "Ngọc Hoà", "Xã", "Ngoc Hoa"],
                        ["30925", "Ngọc Thành", "Xã", "Ngoc Thanh"],
                        ["30931", "Ngọc Thuận", "Xã", "Ngoc Thuan"],
                        ["30917", "Thạnh Bình", "Xã", "Thanh Binh"],
                        ["30916", "Thạnh Hòa", "Xã", "Thanh Hoa"],
                        ["30907", "Thạnh Hưng", "Xã", "Thanh Hung"],
                        ["30913", "Thạnh Lộc", "Xã", "Thanh Loc"],
                        ["30910", "Thạnh Phước", "Xã", "Thanh Phuoc"],
                        ["30947", "Vĩnh Phú", "Xã", "Vinh Phu"],
                        ["30946", "Vĩnh Thạnh", "Xã", "Vinh Thanh"]
                    ]
                ],
                [
                    "907", "Gò Quao", "Huyện", "Go Quao",
                    [
                        ["30964", "Định An", "Xã", "Dinh An"],
                        ["30958", "Định Hòa", "Xã", "Dinh Hoa"],
                        ["30952", "Gò Quao", "Thị trấn", "Go Quao"],
                        ["30961", "Thới Quản", "Xã", "Thoi Quan"],
                        ["30967", "Thủy Liễu", "Xã", "Thuy Lieu"],
                        ["30955", "Vĩnh Hòa Hưng Bắc", "Xã", "Vinh Hoa Hung Bac"],
                        ["30970", "Vĩnh Hòa Hưng Nam", "Xã", "Vinh Hoa Hung Nam"],
                        ["30973", "Vĩnh Phước A", "Xã", "Vinh Phuoc A"],
                        ["30976", "Vĩnh Phước B", "Xã", "Vinh Phuoc B"],
                        ["30982", "Vĩnh Thắng", "Xã", "Vinh Thang"],
                        ["30979", "Vĩnh Tuy", "Xã", "Vinh Tuy"]
                    ]
                ],
                [
                    "900", "Hà Tiên", "Thành phố", "Ha Tien",
                    [
                        ["30772", "Bình San", "Phường", "Binh San"],
                        ["30769", "Đông Hồ", "Phường", "Dong Ho"],
                        ["30778", "Mỹ Đức", "Phường", "My Duc"],
                        ["30775", "Pháo Đài", "Phường", "Phao Dai"],
                        ["30784", "Thuận Yên", "Xã", "Thuan Yen"],
                        ["30781", "Tiên Hải", "Xã", "Tien Hai"],
                        ["30766", "Tô Châu", "Phường", "To Chau"]
                    ]
                ],
                [
                    "903", "Hòn Đất", "Huyện", "Hon Dat",
                    [
                        ["30826", "Bình Giang", "Xã", "Binh Giang"],
                        ["30823", "Bình Sơn", "Xã", "Binh Son"],
                        ["30817", "Hòn Đất", "Thị trấn", "Hon Dat"],
                        ["30840", "Lình Huỳnh", "Xã", "Linh Huynh"],
                        ["30832", "Mỹ Hiệp Sơn", "Xã", "My Hiep Son"],
                        ["30844", "Mỹ Lâm", "Xã", "My Lam"],
                        ["30847", "Mỹ Phước", "Xã", "My Phuoc"],
                        ["30828", "Mỹ Thái", "Xã", "My Thai"],
                        ["30838", "Mỹ Thuận", "Xã", "My Thuan"],
                        ["30829", "Nam Thái Sơn", "Xã", "Nam Thai Son"],
                        ["30820", "Sóc Sơn", "Thị trấn", "Soc Son"],
                        ["30836", "Sơn Bình", "Xã", "Son Binh"],
                        ["30835", "Sơn Kiên", "Xã", "Son Kien"],
                        ["30841", "Thổ Sơn", "Xã", "Tho Son"]
                    ]
                ],
                [
                    "912", "Kiên Hải", "Huyện", "Kien Hai",
                    [
                        ["31114", "An Sơn", "Xã", "An Son"],
                        ["31108", "Hòn Tre", "Xã", "Hon Tre"],
                        ["31111", "Lại Sơn", "Xã", "Lai Son"],
                        ["31115", "Nam Du", "Xã", "Nam Du"]
                    ]
                ],
                [
                    "902", "Kiên Lương", "Huyện", "Kien Luong",
                    [
                        ["30808", "Bình An", "Xã", "Binh An"],
                        ["30809", "Bình Trị", "Xã", "Binh Tri"],
                        ["30805", "Dương Hòa", "Xã", "Duong Hoa"],
                        ["30802", "Hòa Điền", "Xã", "Hoa Dien"],
                        ["30814", "Hòn Nghệ", "Xã", "Hon Nghe"],
                        ["30790", "Kiên Bình", "Xã", "Kien Binh"],
                        ["30787", "Kiên Lương", "Thị trấn", "Kien Luong"],
                        ["30811", "Sơn Hải", "Xã", "Son Hai"]
                    ]
                ],
                [
                    "911", "Phú Quốc", "Thành phố", "Phu Quoc",
                    [
                        ["31081", "An Thới", "Phường", "An Thoi"],
                        ["31102", "Bãi Thơm", "Xã", "Bai Thom"],
                        ["31084", "Cửa Cạn", "Xã", "Cua Can"],
                        ["31090", "Cửa Dương", "Xã", "Cua Duong"],
                        ["31078", "Dương Đông", "Phường", "Duong Dong"],
                        ["31096", "Dương Tơ", "Xã", "Duong To"],
                        ["31087", "Gành Dầu", "Xã", "Ganh Dau"],
                        ["31093", "Hàm Ninh", "Xã", "Ham Ninh"],
                        ["31105", "Thổ Châu", "Xã", "Tho Chau"]
                    ]
                ],
                [
                    "899", "Rạch Giá", "Thành phố", "Rach Gia",
                    [
                        ["30751", "An Bình", "Phường", "An Binh"],
                        ["30748", "An Hòa", "Phường", "An Hoa"],
                        ["30763", "Phi Thông", "Xã", "Phi Thong"],
                        ["30754", "Rạch Sỏi", "Phường", "Rach Soi"],
                        ["30742", "Vĩnh Bảo", "Phường", "Vinh Bao"],
                        ["30739", "Vĩnh Hiệp", "Phường", "Vinh Hiep"],
                        ["30745", "Vĩnh Lạc", "Phường", "Vinh Lac"],
                        ["30757", "Vĩnh Lợi", "Phường", "Vinh Loi"],
                        ["30736", "Vĩnh Quang", "Phường", "Vinh Quang"],
                        ["30733", "Vĩnh Thanh", "Phường", "Vinh Thanh"],
                        ["30730", "Vĩnh Thanh Vân", "Phường", "Vinh Thanh Van"],
                        ["30760", "Vĩnh Thông", "Phường", "Vinh Thong"]
                    ]
                ],
                [
                    "904", "Tân Hiệp", "Huyện", "Tan Hiep",
                    [
                        ["30871", "Tân An", "Xã", "Tan An"],
                        ["30850", "Tân Hiệp", "Thị trấn", "Tan Hiep"],
                        ["30868", "Tân Hiệp A", "Xã", "Tan Hiep A"],
                        ["30859", "Tân Hiệp B", "Xã", "Tan Hiep B"],
                        ["30860", "Tân Hoà", "Xã", "Tan Hoa"],
                        ["30853", "Tân Hội", "Xã", "Tan Hoi"],
                        ["30856", "Tân Thành", "Xã", "Tan Thanh"],
                        ["30865", "Thạnh Đông", "Xã", "Thanh Dong"],
                        ["30874", "Thạnh Đông A", "Xã", "Thanh Dong A"],
                        ["30862", "Thạnh Đông B", "Xã", "Thanh Dong B"],
                        ["30877", "Thạnh Trị", "Xã", "Thanh Tri"]
                    ]
                ],
                [
                    "913", "U Minh Thượng", "Huyện", "U Minh Thuong",
                    [
                        ["31027", "An Minh Bắc", "Xã", "An Minh Bac"],
                        ["31057", "Hoà Chánh", "Xã", "Hoa Chanh"],
                        ["31066", "Minh Thuận", "Xã", "Minh Thuan"],
                        ["31012", "Thạnh Yên", "Xã", "Thanh Yen"],
                        ["31015", "Thạnh Yên A", "Xã", "Thanh Yen A"],
                        ["31054", "Vĩnh Hòa", "Xã", "Vinh Hoa"]
                    ]
                ],
                [
                    "910", "Vĩnh Thuận", "Huyện", "Vinh Thuan",
                    [
                        ["31064", "Bình Minh", "Xã", "Binh Minh"],
                        ["31074", "Phong Đông", "Xã", "Phong Dong"],
                        ["31072", "Tân Thuận", "Xã", "Tan Thuan"],
                        ["31060", "Vĩnh Bình Bắc", "Xã", "Vinh Binh Bac"],
                        ["31063", "Vĩnh Bình Nam", "Xã", "Vinh Binh Nam"],
                        ["31075", "Vĩnh Phong", "Xã", "Vinh Phong"],
                        ["31051", "Vĩnh Thuận", "Thị trấn", "Vinh Thuan"],
                        ["31069", "Vĩnh Thuận", "Xã", "Vinh Thuan"]
                    ]
                ]
            ]
        ],
        [
            "62", "Kon Tum", "Tỉnh", "Kon Tum",
            [
                [
                    "610", "Đắk Glei", "Huyện", "Dak Glei",
                    [
                        ["23344", "Đắk Blô", "Xã", "Dak Blo"],
                        ["23356", "Đắk Choong", "Xã", "Dak Choong"],
                        ["23341", "Đắk Glei", "Thị trấn", "Dak Glei"],
                        ["23371", "Đắk KRoong", "Xã", "Dak KRoong"],
                        ["23368", "Đắk Long", "Xã", "Dak Long"],
                        ["23347", "Đắk Man", "Xã", "Dak Man"],
                        ["23374", "Đắk Môn", "Xã", "Dak Mon"],
                        ["23350", "Đắk Nhoong", "Xã", "Dak Nhoong"],
                        ["23353", "Đắk Pék", "Xã", "Dak Pek"],
                        ["23362", "Mường Hoong", "Xã", "Muong Hoong"],
                        ["23365", "Ngọc Linh", "Xã", "Ngoc Linh"],
                        ["23359", "Xốp", "Xã", "Xop"]
                    ]
                ],
                [
                    "615", "Đắk Hà", "Huyện", "Dak Ha",
                    [
                        ["23506", "Đắk HRing", "Xã", "Dak HRing"],
                        ["23500", "Đắk Hà", "Thị trấn", "Dak Ha"],
                        ["23524", "Đắk La", "Xã", "Dak La"],
                        ["23504", "Đăk Long", "Xã", "Dak Long"],
                        ["23512", "Đắk Mar", "Xã", "Dak Mar"],
                        ["23510", "Đăk Ngọk", "Xã", "Dak Ngok"],
                        ["23503", "Đắk PXi", "Xã", "Dak PXi"],
                        ["23509", "Đắk Ui", "Xã", "Dak Ui"],
                        ["23521", "Hà Mòn", "Xã", "Ha Mon"],
                        ["23518", "Ngok Réo", "Xã", "Ngok Reo"],
                        ["23515", "Ngok Wang", "Xã", "Ngok Wang"]
                    ]
                ],
                [
                    "612", "Đắk Tô", "Huyện", "Dak To",
                    [
                        ["23427", "Đắk Rơ Nga", "Xã", "Dak Ro Nga"],
                        ["23401", "Đắk Tô", "Thị trấn", "Dak To"],
                        ["23430", "Đắk Trăm", "Xã", "Dak Tram"],
                        ["23440", "Diên Bình", "Xã", "Dien Binh"],
                        ["23434", "Kon Đào", "Xã", "Kon Dao"],
                        ["23428", "Ngọk Tụ", "Xã", "Ngok Tu"],
                        ["23443", "Pô Kô", "Xã", "Po Ko"],
                        ["23437", "Tân Cảnh", "Xã", "Tan Canh"],
                        ["23431", "Văn Lem", "Xã", "Van Lem"]
                    ]
                ],
                [
                    "618", "Ia H' Drai", "Huyện", "Ia H' Drai",
                    [
                        ["23535", "Ia Đal", "Xã", "Ia Dal"],
                        ["23537", "Ia Dom", "Xã", "Ia Dom"],
                        ["23538", "Ia Tơi", "Xã", "Ia Toi"]
                    ]
                ],
                [
                    "613", "Kon Plông", "Huyện", "Kon Plong",
                    [
                        ["23452", "Đắk Nên", "Xã", "Dak Nen"],
                        ["23455", "Đắk Ring", "Xã", "Dak Ring"],
                        ["23461", "Đắk Tăng", "Xã", "Dak Tang"],
                        ["23476", "Hiếu", "Xã", "Hieu"],
                        ["23458", "Măng Buk", "Xã", "Mang Buk"],
                        ["23470", "Măng Cành", "Xã", "Mang Canh"],
                        ["23473", "Măng Đen", "Thị trấn", "Mang Den"],
                        ["23464", "Ngok Tem", "Xã", "Ngok Tem"],
                        ["23467", "Pờ Ê", "Xã", "Po E"]
                    ]
                ],
                [
                    "614", "Kon Rẫy", "Huyện", "Kon Ray",
                    [
                        ["23482", "Đắk Kôi", "Xã", "Dak Koi"],
                        ["23491", "Đắk Pne", "Xã", "Dak Pne"],
                        ["23488", "Đắk Ruồng", "Xã", "Dak Ruong"],
                        ["23479", "Đắk Rve", "Thị trấn", "Dak Rve"],
                        ["23485", "Đắk Tơ Lung", "Xã", "Dak To Lung"],
                        ["23494", "Đắk Tờ Re", "Xã", "Dak To Re"],
                        ["23497", "Tân Lập", "Xã", "Tan Lap"]
                    ]
                ],
                [
                    "608", "Kon Tum", "Thành phố", "Kon Tum",
                    [
                        ["23332", "Chư Hreng", "Xã", "Chu Hreng"],
                        ["23323", "Đắk Blà", "Xã", "Dak Bla"],
                        ["23311", "Đắk Cấm", "Xã", "Dak Cam"],
                        ["23327", "Đăk Năng", "Xã", "Dak Nang"],
                        ["23335", "Đắk Rơ Wa", "Xã", "Dak Ro Wa"],
                        ["23329", "Đoàn Kết", "Xã", "Doan Ket"],
                        ["23284", "Duy Tân", "Phường", "Duy Tan"],
                        ["23338", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["23326", "Ia Chim", "Xã", "Ia Chim"],
                        ["23314", "Kroong", "Xã", "Kroong"],
                        ["23302", "Lê Lợi", "Phường", "Le Loi"],
                        ["23296", "Ngô Mây", "Phường", "Ngo May"],
                        ["23317", "Ngọk Bay", "Xã", "Ngok Bay"],
                        ["23305", "Nguyễn Trãi", "Phường", "Nguyen Trai"],
                        ["23281", "Quang Trung", "Phường", "Quang Trung"],
                        ["23287", "Quyết Thắng", "Phường", "Quyet Thang"],
                        ["23293", "Thắng Lợi", "Phường", "Thang Loi"],
                        ["23299", "Thống Nhất", "Phường", "Thong Nhat"],
                        ["23308", "Trần Hưng Đạo", "Phường", "Tran Hung Dao"],
                        ["23290", "Trường Chinh", "Phường", "Truong Chinh"],
                        ["23320", "Vinh Quang", "Xã", "Vinh Quang"]
                    ]
                ],
                [
                    "611", "Ngọc Hồi", "Huyện", "Ngoc Hoi",
                    [
                        ["23395", "Bờ Y", "Xã", "Bo Y"],
                        ["23380", "Đắk Ang", "Xã", "Dak Ang"],
                        ["23383", "Đắk Dục", "Xã", "Dak Duc"],
                        ["23392", "Đắk Kan", "Xã", "Dak Kan"],
                        ["23386", "Đắk Nông", "Xã", "Dak Nong"],
                        ["23389", "Đắk Xú", "Xã", "Dak Xu"],
                        ["23377", "Plei Kần", "Thị trấn", "Plei Kan"],
                        ["23398", "Sa Loong", "Xã", "Sa Loong"]
                    ]
                ],
                [
                    "616", "Sa Thầy", "Huyện", "Sa Thay",
                    [
                        ["23534", "Hơ Moong", "Xã", "Ho Moong"],
                        ["23536", "Mô Rai", "Xã", "Mo Rai"],
                        ["23530", "Rơ Kơi", "Xã", "Ro Koi"],
                        ["23545", "Sa Bình", "Xã", "Sa Binh"],
                        ["23542", "Sa Nghĩa", "Xã", "Sa Nghia"],
                        ["23533", "Sa Nhơn", "Xã", "Sa Nhon"],
                        ["23539", "Sa Sơn", "Xã", "Sa Son"],
                        ["23527", "Sa Thầy", "Thị trấn", "Sa Thay"],
                        ["23551", "Ya Tăng", "Xã", "Ya Tang"],
                        ["23548", "Ya Xiêr", "Xã", "Ya Xier"],
                        ["23554", "Ya ly", "Xã", "Ya ly"]
                    ]
                ],
                [
                    "617", "Tu Mơ Rông", "Huyện", "Tu Mo Rong",
                    [
                        ["23425", "Đắk Hà", "Xã", "Dak Ha"],
                        ["23407", "Đắk Na", "Xã", "Dak Na"],
                        ["23417", "Đắk Rơ Ông", "Xã", "Dak Ro Ong"],
                        ["23416", "Đắk Sao", "Xã", "Dak Sao"],
                        ["23419", "Đắk Tờ Kan", "Xã", "Dak To Kan"],
                        ["23410", "Măng Ri", "Xã", "Mang Ri"],
                        ["23404", "Ngọc Lây", "Xã", "Ngoc Lay"],
                        ["23413", "Ngọc Yêu", "Xã", "Ngoc Yeu"],
                        ["23446", "Tê Xăng", "Xã", "Te Xang"],
                        ["23422", "Tu Mơ Rông", "Xã", "Tu Mo Rong"],
                        ["23449", "Văn Xuôi", "Xã", "Van Xuoi"]
                    ]
                ]
            ]
        ],
        [
            "12", "Lai Châu", "Tỉnh", "Lai Chau",
            [
                [
                    "105", "Lai Châu", "Thành phố", "Lai Chau",
                    [
                        ["03389", "Đoàn Kết", "Phường", "Doan Ket"],
                        ["03408", "Đông Phong", "Phường", "Dong Phong"],
                        ["03386", "Quyết Thắng", "Phường", "Quyet Thang"],
                        ["03388", "Quyết Tiến", "Phường", "Quyet Tien"],
                        ["03409", "San Thàng", "Xã", "San Thang"],
                        ["03403", "Sùng Phài", "Xã", "Sung Phai"],
                        ["03387", "Tân Phong", "Phường", "Tan Phong"]
                    ]
                ],
                [
                    "107", "Mường Tè", "Huyện", "Muong Te",
                    [
                        ["03466", "Bum Nưa", "Xã", "Bum Nua"],
                        ["03454", "Bum Tở", "Xã", "Bum To"],
                        ["03439", "Ka Lăng", "Xã", "Ka Lang"],
                        ["03469", "Kan Hồ", "Xã", "Kan Ho"],
                        ["03451", "Mù Cả", "Xã", "Mu Ca"],
                        ["03433", "Mường Tè", "Thị trấn", "Muong Te"],
                        ["03445", "Mường Tè", "Xã", "Muong Te"],
                        ["03457", "Nậm Khao", "Xã", "Nam Khao"],
                        ["03448", "Pa Vệ Sử", "Xã", "Pa Ve Su"],
                        ["03442", "Pa ủ", "Xã", "Pa u"],
                        ["03440", "Tá Bạ", "Xã", "Ta Ba"],
                        ["03463", "Tà Tổng", "Xã", "Ta Tong"],
                        ["03436", "Thu Lũm", "Xã", "Thu Lum"],
                        ["03467", "Vàng San", "Xã", "Vang San"]
                    ]
                ],
                [
                    "112", "Nậm Nhùn", "Huyện", "Nam Nhun",
                    [
                        ["03460", "Hua Bun", "Xã", "Hua Bun"],
                        ["03481", "Lê Lợi", "Xã", "Le Loi"],
                        ["03472", "Mường Mô", "Xã", "Muong Mo"],
                        ["03502", "Nậm Ban", "Xã", "Nam Ban"],
                        ["03473", "Nậm Chà", "Xã", "Nam Cha"],
                        ["03475", "Nậm Hàng", "Xã", "Nam Hang"],
                        ["03474", "Nậm Manh", "Xã", "Nam Manh"],
                        ["03434", "Nậm Nhùn", "Thị trấn", "Nam Nhun"],
                        ["03488", "Nậm Pì", "Xã", "Nam Pi"],
                        ["03484", "Pú Đao", "Xã", "Pu Dao"],
                        ["03503", "Trung Chải", "Xã", "Trung Chai"]
                    ]
                ],
                [
                    "109", "Phong Thổ", "Huyện", "Phong Tho",
                    [
                        ["03577", "Bản Lang", "Xã", "Ban Lang"],
                        ["03571", "Dào San", "Xã", "Dao San"],
                        ["03580", "Hoang Thèn", "Xã", "Hoang Then"],
                        ["03490", "Huổi Luông", "Xã", "Huoi Luong"],
                        ["03583", "Khổng Lào", "Xã", "Khong Lao"],
                        ["03391", "Lả Nhì Thàng", "Xã", "La Nhi Thang"],
                        ["03574", "Ma Ly Pho", "Xã", "Ma Ly Pho"],
                        ["03553", "Mồ Sì San", "Xã", "Mo Si San"],
                        ["03568", "Mù Sang", "Xã", "Mu Sang"],
                        ["03589", "Mường So", "Xã", "Muong So"],
                        ["03586", "Nậm Xe", "Xã", "Nam Xe"],
                        ["03559", "Pa Vây Sử", "Xã", "Pa Vay Su"],
                        ["03549", "Phong Thổ", "Thị trấn", "Phong Tho"],
                        ["03550", "Sì Lở Lầu", "Xã", "Si Lo Lau"],
                        ["03592", "Sin Suối Hồ", "Xã", "Sin Suoi Ho"],
                        ["03565", "Tông Qua Lìn", "Xã", "Tong Qua Lin"],
                        ["03562", "Vàng Ma Chải", "Xã", "Vang Ma Chai"]
                    ]
                ],
                [
                    "108", "Sìn Hồ", "Huyện", "Sin Ho",
                    [
                        ["03538", "Căn Co", "Xã", "Can Co"],
                        ["03487", "Chăn Nưa", "Xã", "Chan Nua"],
                        ["03499", "Hồng Thu", "Xã", "Hong Thu"],
                        ["03529", "Làng Mô", "Xã", "Lang Mo"],
                        ["03509", "Lùng Thàng", "Xã", "Lung Thang"],
                        ["03508", "Ma Quai", "Xã", "Ma Quai"],
                        ["03526", "Nậm Cha", "Xã", "Nam Cha"],
                        ["03544", "Nậm Cuổi", "Xã", "Nam Cuoi"],
                        ["03547", "Nậm Hăn", "Xã", "Nam Han"],
                        ["03535", "Nậm Mạ", "Xã", "Nam Ma"],
                        ["03517", "Nậm Tăm", "Xã", "Nam Tam"],
                        ["03532", "Noong Hẻo", "Xã", "Noong Heo"],
                        ["03527", "Pa Khoá", "Xã", "Pa Khoa"],
                        ["03493", "Pa Tần", "Xã", "Pa Tan"],
                        ["03505", "Phăng Sô Lin", "Xã", "Phang So Lin"],
                        ["03496", "Phìn Hồ", "Xã", "Phin Ho"],
                        ["03523", "Pu Sam Cáp", "Xã", "Pu Sam Cap"],
                        ["03514", "Sà Dề Phìn", "Xã", "Sa De Phin"],
                        ["03478", "Sìn Hồ", "Thị trấn", "Sin Ho"],
                        ["03520", "Tả Ngảo", "Xã", "Ta Ngao"],
                        ["03511", "Tả Phìn", "Xã", "Ta Phin"],
                        ["03541", "Tủa Sín Chải", "Xã", "Tua Sin Chai"]
                    ]
                ],
                [
                    "106", "Tam Đường", "Huyện", "Tam Duong",
                    [
                        ["03424", "Bản Bo", "Xã", "Ban Bo"],
                        ["03418", "Bản Giang", "Xã", "Ban Giang"],
                        ["03421", "Bản Hon", "Xã", "Ban Hon"],
                        ["03412", "Bình Lư", "Xã", "Binh Lu"],
                        ["03405", "Giang Ma", "Xã", "Giang Ma"],
                        ["03406", "Hồ Thầu", "Xã", "Ho Thau"],
                        ["03430", "Khun Há", "Xã", "Khun Ha"],
                        ["03427", "Nà Tăm", "Xã", "Na Tam"],
                        ["03415", "Nùng Nàng", "Xã", "Nung Nang"],
                        ["03413", "Sơn Bình", "Xã", "Son Binh"],
                        ["03400", "Tả Lèng", "Xã", "Ta Leng"],
                        ["03390", "Tam Đường", "Thị trấn", "Tam Duong"],
                        ["03394", "Thèn Sin", "Xã", "Then Sin"]
                    ]
                ],
                [
                    "111", "Tân Uyên", "Huyện", "Tan Uyen",
                    [
                        ["03607", "Hố Mít", "Xã", "Ho Mit"],
                        ["03601", "Mường Khoa", "Xã", "Muong Khoa"],
                        ["03610", "Nậm Cần", "Xã", "Nam Can"],
                        ["03613", "Nậm Sỏ", "Xã", "Nam So"],
                        ["03616", "Pắc Ta", "Xã", "Pac Ta"],
                        ["03602", "Phúc Khoa", "Xã", "Phuc Khoa"],
                        ["03622", "Tà Mít", "Xã", "Ta Mit"],
                        ["03598", "Tân Uyên", "Thị trấn", "Tan Uyen"],
                        ["03604", "Thân Thuộc", "Xã", "Than Thuoc"],
                        ["03605", "Trung Đồng", "Xã", "Trung Dong"]
                    ]
                ],
                [
                    "110", "Than Uyên", "Huyện", "Than Uyen",
                    [
                        ["03632", "Hua Nà", "Xã", "Hua Na"],
                        ["03643", "Khoen On", "Xã", "Khoen On"],
                        ["03631", "Mường Cang", "Xã", "Muong Cang"],
                        ["03637", "Mường Kim", "Xã", "Muong Kim"],
                        ["03625", "Mường Mít", "Xã", "Muong Mit"],
                        ["03619", "Mường Than", "Xã", "Muong Than"],
                        ["03628", "Pha Mu", "Xã", "Pha Mu"],
                        ["03618", "Phúc Than", "Xã", "Phuc Than"],
                        ["03640", "Tà Gia", "Xã", "Ta Gia"],
                        ["03634", "Tà Hừa", "Xã", "Ta Hua"],
                        ["03638", "Tà Mung", "Xã", "Ta Mung"],
                        ["03595", "Than Uyên", "Thị trấn", "Than Uyen"]
                    ]
                ]
            ]
        ],
        [
            "68", "Lâm Đồng", "Tỉnh", "Lam Dong",
            [
                [
                    "680", "Bảo Lâm", "Huyện", "Bao Lam",
                    [
                        ["25069", "B' Lá", "Xã", "B' La"],
                        ["25084", "Lộc An", "Xã", "Loc An"],
                        ["25066", "Lộc Bắc", "Xã", "Loc Bac"],
                        ["25057", "Lộc Bảo", "Xã", "Loc Bao"],
                        ["25081", "Lộc Đức", "Xã", "Loc Duc"],
                        ["25060", "Lộc Lâm", "Xã", "Loc Lam"],
                        ["25093", "Lộc Nam", "Xã", "Loc Nam"],
                        ["25072", "Lộc Ngãi", "Xã", "Loc Ngai"],
                        ["25063", "Lộc Phú", "Xã", "Loc Phu"],
                        ["25075", "Lộc Quảng", "Xã", "Loc Quang"],
                        ["25078", "Lộc Tân", "Xã", "Loc Tan"],
                        ["25054", "Lộc Thắng", "Thị trấn", "Loc Thang"],
                        ["25090", "Lộc Thành", "Xã", "Loc Thanh"],
                        ["25087", "Tân Lạc", "Xã", "Tan Lac"]
                    ]
                ],
                [
                    "673", "Bảo Lộc", "Thành phố", "Bao Loc",
                    [
                        ["24823", "1", "Phường", "1"],
                        ["24820", "2", "Phường", "2"],
                        ["24826", "B'lao", "Phường", "B'lao"],
                        ["24844", "Đại Lào", "Xã", "Dai Lao"],
                        ["24832", "Đạm Bri", "Xã", "Dam Bri"],
                        ["24841", "Lộc Châu", "Xã", "Loc Chau"],
                        ["24838", "Lộc Nga", "Xã", "Loc Nga"],
                        ["24814", "Lộc Phát", "Phường", "Loc Phat"],
                        ["24829", "Lộc Sơn", "Phường", "Loc Son"],
                        ["24835", "Lộc Thanh", "Xã", "Loc Thanh"],
                        ["24817", "Lộc Tiến", "Phường", "Loc Tien"]
                    ]
                ],
                [
                    "683", "Cát Tiên", "Huyện", "Cat Tien",
                    [
                        ["25159", "Cát Tiên", "Thị trấn", "Cat Tien"],
                        ["25192", "Đồng Nai Thượng", "Xã", "Dong Nai Thuong"],
                        ["25183", "Đức Phổ", "Xã", "Duc Pho"],
                        ["25168", "Gia Viễn", "Xã", "Gia Vien"],
                        ["25171", "Nam Ninh", "Xã", "Nam Ninh"],
                        ["25180", "Phước Cát ", "Thị trấn", "Phuoc Cat "],
                        ["25165", "Phước Cát 2", "Xã", "Phuoc Cat 2"],
                        ["25189", "Quảng Ngãi", "Xã", "Quang Ngai"],
                        ["25162", "Tiên Hoàng", "Xã", "Tien Hoang"]
                    ]
                ],
                [
                    "681", "Đạ Huoai", "Huyện", "Da Huoai",
                    [
                        ["25096", "Đạ M'ri", "Thị trấn", "Da M'ri"],
                        ["25111", "Đạ Oai", "Xã", "Da Oai"],
                        ["25114", "Đạ Ploa", "Xã", "Da Ploa"],
                        ["25108", "Đạ Tồn", "Xã", "Da Ton"],
                        ["25120", "Đoàn Kết", "Xã", "Doan Ket"],
                        ["25105", "Hà Lâm", "Xã", "Ha Lam"],
                        ["25099", "Ma Đa Guôi", "Thị trấn", "Ma Da Guoi"],
                        ["25117", "Ma Đa Guôi", "Xã", "Ma Da Guoi"],
                        ["25123", "Phước Lộc", "Xã", "Phuoc Loc"]
                    ]
                ],
                [
                    "672", "Đà Lạt", "Thành phố", "Da Lat",
                    [
                        ["24784", "1", "Phường", "1"],
                        ["24781", "2", "Phường", "2"],
                        ["24802", "3", "Phường", "3"],
                        ["24793", "4", "Phường", "4"],
                        ["24790", "5", "Phường", "5"],
                        ["24787", "6", "Phường", "6"],
                        ["24769", "7", "Phường", "7"],
                        ["24772", "8", "Phường", "8"],
                        ["24778", "9", "Phường", "9"],
                        ["24796", "10", "Phường", "10"],
                        ["24799", "11", "Phường", "11"],
                        ["24775", "12", "Phường", "12"],
                        ["24808", "Tà Nung", "Xã", "Ta Nung"],
                        ["24810", "Trạm Hành", "Xã", "Tram Hanh"],
                        ["24805", "Xuân Thọ", "Xã", "Xuan Tho"],
                        ["24811", "Xuân Trường", "Xã", "Xuan Truong"]
                    ]
                ],
                [
                    "682", "Đạ Tẻh", "Huyện", "Da Teh",
                    [
                        ["25129", "An Nhơn", "Xã", "An Nhon"],
                        ["25153", "Đạ Kho", "Xã", "Da Kho"],
                        ["25141", "Đạ Lây", "Xã", "Da Lay"],
                        ["25156", "Đạ Pal", "Xã", "Da Pal"],
                        ["25126", "Đạ Tẻh", "Thị trấn", "Da Teh"],
                        ["25135", "Mỹ Đức", "Xã", "My Duc"],
                        ["25138", "Quảng Trị", "Xã", "Quang Tri"],
                        ["25132", "Quốc Oai", "Xã", "Quoc Oai"],
                        ["25147", "Triệu Hải", "Xã", "Trieu Hai"]
                    ]
                ],
                [
                    "674", "Đam Rông", "Huyện", "Dam Rong",
                    [
                        ["24889", "Đạ K' Nàng", "Xã", "Da K' Nang"],
                        ["24856", "Đạ Long", "Xã", "Da Long"],
                        ["24859", "Đạ M' Rong", "Xã", "Da M' Rong"],
                        ["24875", "Đạ Rsal", "Xã", "Da Rsal"],
                        ["24853", "Đạ Tông", "Xã", "Da Tong"],
                        ["24874", "Liêng Srônh", "Xã", "Lieng Sronh"],
                        ["24886", "Phi Liêng", "Xã", "Phi Lieng"],
                        ["24877", "Rô Men", "Xã", "Ro Men"]
                    ]
                ],
                [
                    "679", "Di Linh", "Huyện", "Di Linh",
                    [
                        ["25033", "Bảo Thuận", "Xã", "Bao Thuan"],
                        ["25000", "Di Linh", "Thị trấn", "Di Linh"],
                        ["25018", "Đinh Lạc", "Xã", "Dinh Lac"],
                        ["25024", "Đinh Trang Hòa", "Xã", "Dinh Trang Hoa"],
                        ["25003", "Đinh Trang Thượng", "Xã", "Dinh Trang Thuong"],
                        ["25051", "Gia Bắc", "Xã", "Gia Bac"],
                        ["25015", "Gia Hiệp", "Xã", "Gia Hiep"],
                        ["25030", "Gung Ré", "Xã", "Gung Re"],
                        ["25045", "Hòa Bắc", "Xã", "Hoa Bac"],
                        ["25042", "Hòa Nam", "Xã", "Hoa Nam"],
                        ["25036", "Hòa Ninh", "Xã", "Hoa Ninh"],
                        ["25039", "Hòa Trung", "Xã", "Hoa Trung"],
                        ["25027", "Liên Đầm", "Xã", "Lien Dam"],
                        ["25048", "Sơn Điền", "Xã", "Son Dien"],
                        ["25021", "Tam Bố", "Xã", "Tam Bo"],
                        ["25009", "Tân Châu", "Xã", "Tan Chau"],
                        ["25007", "Tân Lâm", "Xã", "Tan Lam"],
                        ["25012", "Tân Nghĩa", "Xã", "Tan Nghia"],
                        ["25006", "Tân Thượng", "Xã", "Tan Thuong"]
                    ]
                ],
                [
                    "677", "Đơn Dương", "Huyện", "Don Duong",
                    [
                        ["24928", "D'Ran", "Thị trấn", "D'Ran"],
                        ["24937", "Đạ Ròn", "Xã", "Da Ron"],
                        ["24943", "Ka Đô", "Xã", "Ka Do"],
                        ["24949", "Ka Đơn", "Xã", "Ka Don"],
                        ["24940", "Lạc Lâm", "Xã", "Lac Lam"],
                        ["24934", "Lạc Xuân", "Xã", "Lac Xuan"],
                        ["24955", "Pró", "Xã", "Pro"],
                        ["24946", "Quảng Lập", "Xã", "Quang Lap"],
                        ["24931", "Thạnh Mỹ", "Thị trấn", "Thanh My"],
                        ["24952", "Tu Tra", "Xã", "Tu Tra"]
                    ]
                ],
                [
                    "678", "Đức Trọng", "Huyện", "Duc Trong",
                    [
                        ["24970", "Bình Thạnh", "Xã", "Binh Thanh"],
                        ["24994", "Đà Loan", "Xã", "Da Loan"],
                        ["24989", "Đa Quyn", "Xã", "Da Quyn"],
                        ["24961", "Hiệp An", "Xã", "Hiep An"],
                        ["24967", "Hiệp Thạnh", "Xã", "Hiep Thanh"],
                        ["24964", "Liên Hiệp", "Xã", "Lien Hiep"],
                        ["24958", "Liên Nghĩa", "Thị trấn", "Lien Nghia"],
                        ["24973", "N'Thol Hạ", "Xã", "N'Thol Ha"],
                        ["24985", "Ninh Gia", "Xã", "Ninh Gia"],
                        ["24997", "Ninh Loan", "Xã", "Ninh Loan"],
                        ["24982", "Phú Hội", "Xã", "Phu Hoi"],
                        ["24991", "Tà Hine", "Xã", "Ta Hine"],
                        ["24988", "Tà Năng", "Xã", "Ta Nang"],
                        ["24976", "Tân Hội", "Xã", "Tan Hoi"],
                        ["24979", "Tân Thành", "Xã", "Tan Thanh"]
                    ]
                ],
                [
                    "675", "Lạc Dương", "Huyện", "Lac Duong",
                    [
                        ["24847", "Đạ Chais", "Xã", "Da Chais"],
                        ["24848", "Đạ Nhim", "Xã", "Da Nhim"],
                        ["24865", "Đạ Sar", "Xã", "Da Sar"],
                        ["24850", "Đưng KNớ", "Xã", "Dung KNo"],
                        ["24846", "Lạc Dương", "Thị trấn", "Lac Duong"],
                        ["24862", "Lát", "Xã", "Lat"]
                    ]
                ],
                [
                    "676", "Lâm Hà", "Huyện", "Lam Ha",
                    [
                        ["24895", "Đạ Đờn", "Xã", "Da Don"],
                        ["24922", "Đan Phượng", "Xã", "Dan Phuong"],
                        ["24871", "Đinh Văn", "Thị trấn", "Dinh Van"],
                        ["24901", "Đông Thanh", "Xã", "Dong Thanh"],
                        ["24904", "Gia Lâm", "Xã", "Gia Lam"],
                        ["24913", "Hoài Đức", "Xã", "Hoai Duc"],
                        ["24919", "Liên Hà", "Xã", "Lien Ha"],
                        ["24892", "Mê Linh", "Xã", "Me Linh"],
                        ["24868", "Nam Ban", "Thị trấn", "Nam Ban"],
                        ["24925", "Nam Hà", "Xã", "Nam Ha"],
                        ["24883", "Phi Tô", "Xã", "Phi To"],
                        ["24880", "Phú Sơn", "Xã", "Phu Son"],
                        ["24898", "Phúc Thọ", "Xã", "Phuc Tho"],
                        ["24916", "Tân Hà", "Xã", "Tan Ha"],
                        ["24907", "Tân Thanh", "Xã", "Tan Thanh"],
                        ["24910", "Tân Văn", "Xã", "Tan Van"]
                    ]
                ]
            ]
        ],
        [
            "20", "Lạng Sơn", "Tỉnh", "Lang Son",
            [
                [
                    "185", "Bắc Sơn", "Huyện", "Bac Son",
                    [
                        ["06343", "Bắc Quỳnh", "Xã", "Bac Quynh"],
                        ["06325", "Bắc Sơn", "Thị trấn", "Bac Son"],
                        ["06364", "Chiến Thắng", "Xã", "Chien Thang"],
                        ["06358", "Chiêu Vũ", "Xã", "Chieu Vu"],
                        ["06337", "Đồng ý", "Xã", "Dong y"],
                        ["06349", "Hưng Vũ", "Xã", "Hung Vu"],
                        ["06328", "Long Đống", "Xã", "Long Dong"],
                        ["06376", "Nhất Hòa", "Xã", "Nhat Hoa"],
                        ["06382", "Nhất Tiến", "Xã", "Nhat Tien"],
                        ["06361", "Tân Hương", "Xã", "Tan Huong"],
                        ["06352", "Tân Lập", "Xã", "Tan Lap"],
                        ["06379", "Tân Thành", "Xã", "Tan Thanh"],
                        ["06340", "Tân Tri", "Xã", "Tan Tri"],
                        ["06370", "Trấn Yên", "Xã", "Tran Yen"],
                        ["06331", "Vạn Thủy", "Xã", "Van Thuy"],
                        ["06367", "Vũ Lăng", "Xã", "Vu Lang"],
                        ["06373", "Vũ Lễ", "Xã", "Vu Le"],
                        ["06355", "Vũ Sơn", "Xã", "Vu Son"]
                    ]
                ],
                [
                    "181", "Bình Gia", "Huyện", "Binh Gia",
                    [
                        ["06112", "Bình Gia", "Thị trấn", "Binh Gia"],
                        ["06118", "Bình La", "Xã", "Binh La"],
                        ["06103", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["06073", "Hoa Thám", "Xã", "Hoa Tham"],
                        ["06100", "Hoàng Văn Thụ", "Xã", "Hoang Van Thu"],
                        ["06079", "Hồng Phong", "Xã", "Hong Phong"],
                        ["06115", "Hồng Thái", "Xã", "Hong Thai"],
                        ["06067", "Hưng Đạo", "Xã", "Hung Dao"],
                        ["06094", "Minh Khai", "Xã", "Minh Khai"],
                        ["06106", "Mông Ân", "Xã", "Mong An"],
                        ["06088", "Quang Trung", "Xã", "Quang Trung"],
                        ["06076", "Quý Hòa", "Xã", "Quy Hoa"],
                        ["06109", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["06121", "Tân Văn", "Xã", "Tan Van"],
                        ["06085", "Thiện Hòa", "Xã", "Thien Hoa"],
                        ["06097", "Thiện Long", "Xã", "Thien Long"],
                        ["06091", "Thiện Thuật", "Xã", "Thien Thuat"],
                        ["06070", "Vĩnh Yên", "Xã", "Vinh Yen"],
                        ["06082", "Yên Lỗ", "Xã", "Yen Lo"]
                    ]
                ],
                [
                    "183", "Cao Lộc", "Huyện", "Cao Loc",
                    [
                        ["06190", "Bảo Lâm", "Xã", "Bao Lam"],
                        ["06217", "Bình Trung", "Xã", "Binh Trung"],
                        ["06196", "Cao Lâu", "Xã", "Cao Lau"],
                        ["06187", "Cao Lộc", "Thị trấn", "Cao Loc"],
                        ["06232", "Công Sơn", "Xã", "Cong Son"],
                        ["06184", "Đồng Đăng", "Thị trấn", "Dong Dang"],
                        ["06235", "Gia Cát", "Xã", "Gia Cat"],
                        ["06220", "Hải Yến", "Xã", "Hai Yen"],
                        ["06223", "Hòa Cư", "Xã", "Hoa Cu"],
                        ["06205", "Hồng Phong", "Xã", "Hong Phong"],
                        ["06226", "Hợp Thành", "Xã", "Hop Thanh"],
                        ["06211", "Lộc Yên", "Xã", "Loc Yen"],
                        ["06238", "Mẫu Sơn", "Xã", "Mau Son"],
                        ["06214", "Phú Xá", "Xã", "Phu Xa"],
                        ["06244", "Tân Liên", "Xã", "Tan Lien"],
                        ["06250", "Tân Thành", "Xã", "Tan Thanh"],
                        ["06199", "Thạch Đạn", "Xã", "Thach Dan"],
                        ["06193", "Thanh Lòa", "Xã", "Thanh Loa"],
                        ["06208", "Thụy Hùng", "Xã", "Thuy Hung"],
                        ["06241", "Xuân Long", "Xã", "Xuan Long"],
                        ["06202", "Xuất Lễ", "Xã", "Xuat Le"],
                        ["06247", "Yên Trạch", "Xã", "Yen Trach"]
                    ]
                ],
                [
                    "187", "Chi Lăng", "Huyện", "Chi Lang",
                    [
                        ["06478", "Bắc Thủy", "Xã", "Bac Thuy"],
                        ["06487", "Bằng Hữu", "Xã", "Bang Huu"],
                        ["06493", "Bằng Mạc", "Xã", "Bang Mac"],
                        ["06466", "Chi Lăng", "Thị trấn", "Chi Lang"],
                        ["06523", "Chi Lăng", "Xã", "Chi Lang"],
                        ["06481", "Chiến Thắng", "Xã", "Chien Thang"],
                        ["06463", "Đồng Mỏ", "Thị trấn", "Dong Mo"],
                        ["06475", "Gia Lộc", "Xã", "Gia Loc"],
                        ["06508", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["06514", "Hữu Kiên", "Xã", "Huu Kien"],
                        ["06499", "Lâm Sơn", "Xã", "Lam Son"],
                        ["06502", "Liên Sơn", "Xã", "Lien Son"],
                        ["06484", "Mai Sao", "Xã", "Mai Sao"],
                        ["06496", "Nhân Lý", "Xã", "Nhan Ly"],
                        ["06517", "Quan Sơn", "Xã", "Quan Son"],
                        ["06490", "Thượng Cường", "Xã", "Thuong Cuong"],
                        ["06469", "Vân An", "Xã", "Van An"],
                        ["06505", "Vạn Linh", "Xã", "Van Linh"],
                        ["06472", "Vân Thủy", "Xã", "Van Thuy"],
                        ["06520", "Y Tịch", "Xã", "Y Tich"]
                    ]
                ],
                [
                    "189", "Đình Lập", "Huyện", "Dinh Lap",
                    [
                        ["06646", "Bắc Lãng", "Xã", "Bac Lang"],
                        ["06619", "Bắc Xa", "Xã", "Bac Xa"],
                        ["06622", "Bính Xá", "Xã", "Binh Xa"],
                        ["06637", "Châu Sơn", "Xã", "Chau Son"],
                        ["06634", "Cường Lợi", "Xã", "Cuong Loi"],
                        ["06613", "Đình Lập", "Thị trấn", "Dinh Lap"],
                        ["06628", "Đình Lập", "Xã", "Dinh Lap"],
                        ["06643", "Đồng Thắng", "Xã", "Dong Thang"],
                        ["06625", "Kiên Mộc", "Xã", "Kien Moc"],
                        ["06640", "Lâm Ca", "Xã", "Lam Ca"],
                        ["06616", "NT Thái Bình", "Thị trấn", "NT Thai Binh"],
                        ["06631", "Thái Bình", "Xã", "Thai Binh"]
                    ]
                ],
                [
                    "186", "Hữu Lũng", "Huyện", "Huu Lung",
                    [
                        ["06427", "Cai Kinh", "Xã", "Cai Kinh"],
                        ["06424", "Đồng Tân", "Xã", "Dong Tan"],
                        ["06436", "Đồng Tiến", "Xã", "Dong Tien"],
                        ["06451", "Hồ Sơn", "Xã", "Ho Son"],
                        ["06397", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["06430", "Hòa Lạc", "Xã", "Hoa Lac"],
                        ["06445", "Hòa Sơn", "Xã", "Hoa Son"],
                        ["06460", "Hòa Thắng", "Xã", "Hoa Thang"],
                        ["06388", "Hữu Liên", "Xã", "Huu Lien"],
                        ["06385", "Hữu Lũng", "Thị trấn", "Huu Lung"],
                        ["06457", "Minh Hòa", "Xã", "Minh Hoa"],
                        ["06448", "Minh Sơn", "Xã", "Minh Son"],
                        ["06415", "Minh Tiến", "Xã", "Minh Tien"],
                        ["06418", "Nhật Tiến", "Xã", "Nhat Tien"],
                        ["06394", "Quyết Thắng", "Xã", "Quyet Thang"],
                        ["06454", "Sơn Hà", "Xã", "Son Ha"],
                        ["06442", "Tân Thành", "Xã", "Tan Thanh"],
                        ["06421", "Thanh Sơn", "Xã", "Thanh Son"],
                        ["06406", "Thiện Tân", "Xã", "Thien Tan"],
                        ["06433", "Vân Nham", "Xã", "Van Nham"],
                        ["06391", "Yên Bình", "Xã", "Yen Binh"],
                        ["06403", "Yên Sơn", "Xã", "Yen Son"],
                        ["06400", "Yên Thịnh", "Xã", "Yen Thinh"],
                        ["06412", "Yên Vượng", "Xã", "Yen Vuong"]
                    ]
                ],
                [
                    "178", "Lạng Sơn", "Thành phố", "Lang Son",
                    [
                        ["05983", "Chi Lăng", "Phường", "Chi Lang"],
                        ["05980", "Đông Kinh", "Phường", "Dong Kinh"],
                        ["05986", "Hoàng Đồng", "Xã", "Hoang Dong"],
                        ["05971", "Hoàng Văn Thụ", "Phường", "Hoang Van Thu"],
                        ["05992", "Mai Pha", "Xã", "Mai Pha"],
                        ["05989", "Quảng Lạc", "Xã", "Quang Lac"],
                        ["05974", "Tam Thanh", "Phường", "Tam Thanh"],
                        ["05977", "Vĩnh Trại", "Phường", "Vinh Trai"]
                    ]
                ],
                [
                    "188", "Lộc Bình", "Huyện", "Loc Binh",
                    [
                        ["06610", "Ái Quốc", "Xã", "Ai Quoc"],
                        ["06553", "Đồng Bục", "Xã", "Dong Buc"],
                        ["06592", "Đông Quan", "Xã", "Dong Quan"],
                        ["06550", "Hữu Khánh", "Xã", "Huu Khanh"],
                        ["06598", "Hữu Lân", "Xã", "Huu Lan"],
                        ["06544", "Khánh Xuân", "Xã", "Khanh Xuan"],
                        ["06565", "Khuất Xá", "Xã", "Khuat Xa"],
                        ["06529", "Lộc Bình", "Thị trấn", "Loc Binh"],
                        ["06601", "Lợi Bác", "Xã", "Loi Bac"],
                        ["06532", "Mẫu Sơn", "Xã", "Mau Son"],
                        ["06595", "Minh Hiệp", "Xã", "Minh Hiep"],
                        ["06526", "Na Dương", "Thị trấn", "Na Duong"],
                        ["06604", "Nam Quan", "Xã", "Nam Quan"],
                        ["06589", "Sàn Viên", "Xã", "San Vien"],
                        ["06559", "Tam Gia", "Xã", "Tam Gia"],
                        ["06577", "Thống Nhất", "Xã", "Thong Nhat"],
                        ["06574", "Tĩnh Bắc", "Xã", "Tinh Bac"],
                        ["06562", "Tú Đoạn", "Xã", "Tu Doan"],
                        ["06547", "Tú Mịch", "Xã", "Tu Mich"],
                        ["06607", "Xuân Dương", "Xã", "Xuan Duong"],
                        ["06541", "Yên Khoái", "Xã", "Yen Khoai"]
                    ]
                ],
                [
                    "180", "Tràng Định", "Huyện", "Trang Dinh",
                    [
                        ["06010", "Cao Minh", "Xã", "Cao Minh"],
                        ["06034", "Chi Lăng", "Xã", "Chi Lang"],
                        ["06013", "Chí Minh", "Xã", "Chi Minh"],
                        ["06040", "Đại Đồng", "Xã", "Dai Dong"],
                        ["06043", "Đào Viên", "Xã", "Dao Vien"],
                        ["06046", "Đề Thám", "Xã", "De Tham"],
                        ["06001", "Đoàn Kết", "Xã", "Doan Ket"],
                        ["06025", "Đội Cấn", "Xã", "Doi Can"],
                        ["06055", "Hùng Sơn", "Xã", "Hung Son"],
                        ["06061", "Hùng Việt", "Xã", "Hung Viet"],
                        ["06049", "Kháng Chiến", "Xã", "Khang Chien"],
                        ["05998", "Khánh Long", "Xã", "Khanh Long"],
                        ["06031", "Kim Đồng", "Xã", "Kim Dong"],
                        ["06004", "Quốc Khánh", "Xã", "Quoc Khanh"],
                        ["06058", "Quốc Việt", "Xã", "Quoc Viet"],
                        ["06028", "Tân Minh", "Xã", "Tan Minh"],
                        ["06019", "Tân Tiến", "Xã", "Tan Tien"],
                        ["06022", "Tân Yên", "Xã", "Tan Yen"],
                        ["05995", "Thất Khê", "Thị trấn", "That Khe"],
                        ["06016", "Tri Phương", "Xã", "Tri Phuong"],
                        ["06037", "Trung Thành", "Xã", "Trung Thanh"],
                        ["06007", "Vĩnh Tiến", "Xã", "Vinh Tien"]
                    ]
                ],
                [
                    "182", "Văn Lãng", "Huyện", "Van Lang",
                    [
                        ["06178", " Hoàng Văn Thụ", "Xã", " Hoang Van Thu"],
                        ["06139", "Bắc Hùng", "Xã", "Bac Hung"],
                        ["06133", "Bắc La", "Xã", "Bac La"],
                        ["06154", "Bắc Việt", "Xã", "Bac Viet"],
                        ["06160", "Gia Miễn", "Xã", "Gia Mien"],
                        ["06157", "Hoàng Việt", "Xã", "Hoang Viet"],
                        ["06151", "Hội Hoan", "Xã", "Hoi Hoan"],
                        ["06175", "Hồng Thái", "Xã", "Hong Thai"],
                        ["06124", "Na Sầm", "Thị trấn", "Na Sam"],
                        ["06181", "Nhạc Kỳ", "Xã", "Nhac Ky"],
                        ["06172", "Tân Mỹ", "Xã", "Tan My"],
                        ["06142", "Tân Tác", "Xã", "Tan Tac"],
                        ["06166", "Tân Thanh", "Xã", "Tan Thanh"],
                        ["06163", "Thành Hòa", "Xã", "Thanh Hoa"],
                        ["06148", "Thanh Long", "Xã", "Thanh Long"],
                        ["06136", "Thụy Hùng", "Xã", "Thuy Hung"],
                        ["06127", "Trùng Khánh", "Xã", "Trung Khanh"]
                    ]
                ],
                [
                    "184", "Văn Quan", "Huyện", "Van Quan",
                    [
                        ["06283", "An Sơn", "Xã", "An Son"],
                        ["06298", "Bình Phúc", "Xã", "Binh Phuc"],
                        ["06280", "Điềm He", "Xã", "Diem He"],
                        ["06295", "Đồng Giáp", "Xã", "Dong Giap"],
                        ["06274", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["06322", "Hữu Lễ", "Xã", "Huu Le"],
                        ["06286", "Khánh Khê", "Xã", "Khanh Khe"],
                        ["06268", "Liên Hội", "Xã", "Lien Hoi"],
                        ["06292", "Lương Năng", "Xã", "Luong Nang"],
                        ["06307", "Tân Đoàn", "Xã", "Tan Doan"],
                        ["06256", "Trấn Ninh", "Xã", "Tran Ninh"],
                        ["06301", "Tràng Các", "Xã", "Trang Cac"],
                        ["06316", "Tràng Phái", "Xã", "Trang Phai"],
                        ["06313", "Tri Lễ", "Xã", "Tri Le"],
                        ["06277", "Tú Xuyên", "Xã", "Tu Xuyen"],
                        ["06253", "Văn Quan", "Thị trấn", "Van Quan"],
                        ["06319", "Yên Phúc", "Xã", "Yen Phuc"]
                    ]
                ]
            ]
        ],
        [
            "10", "Lào Cai", "Tỉnh", "Lao Cai",
            [
                [
                    "085", "Bắc Hà", "Huyện", "Bac Ha",
                    [
                        ["02839", "Bắc Hà", "Thị trấn", "Bac Ha"],
                        ["02899", "Bản Cái", "Xã", "Ban Cai"],
                        ["02869", "Bản Liền", "Xã", "Ban Lien"],
                        ["02866", "Bản Phố", "Xã", "Ban Pho"],
                        ["02890", "Bảo Nhai", "Xã", "Bao Nhai"],
                        ["02896", "Cốc Lầu", "Xã", "Coc Lau"],
                        ["02878", "Cốc Ly", "Xã", "Coc Ly"],
                        ["02863", "Hoàng Thu Phố", "Xã", "Hoang Thu Pho"],
                        ["02842", "Lùng Cải", "Xã", "Lung Cai"],
                        ["02848", "Lùng Phình", "Xã", "Lung Phinh"],
                        ["02875", "Na Hối", "Xã", "Na Hoi"],
                        ["02884", "Nậm Đét", "Xã", "Nam Det"],
                        ["02887", "Nậm Khánh", "Xã", "Nam Khanh"],
                        ["02893", "Nậm Lúc", "Xã", "Nam Luc"],
                        ["02881", "Nậm Mòn", "Xã", "Nam Mon"],
                        ["02872", "Tà Chải", "Xã", "Ta Chai"],
                        ["02854", "Tả Củ Tỷ", "Xã", "Ta Cu Ty"],
                        ["02851", "Tả Van Chư", "Xã", "Ta Van Chu"],
                        ["02857", "Thải Giàng Phố", "Xã", "Thai Giang Pho"]
                    ]
                ],
                [
                    "086", "Bảo Thắng", "Huyện", "Bao Thang",
                    [
                        ["02914", "Bản Cầm", "Xã", "Ban Cam"],
                        ["02911", "Bản Phiệt", "Xã", "Ban Phiet"],
                        ["02923", "Gia Phú", "Xã", "Gia Phu"],
                        ["02902", "N.T Phong Hải", "Thị trấn", "N.T Phong Hai"],
                        ["02905", "Phố Lu", "Thị trấn", "Pho Lu"],
                        ["02920", "Phong Niên", "Xã", "Phong Nien"],
                        ["02944", "Phú Nhuận", "Xã", "Phu Nhuan"],
                        ["02938", "Sơn Hà", "Xã", "Son Ha"],
                        ["02929", "Sơn Hải", "Xã", "Son Hai"],
                        ["02908", "Tằng Loỏng", "Thị trấn", "Tang Loong"],
                        ["02917", "Thái Niên", "Xã", "Thai Nien"],
                        ["02935", "Trì Quang", "Xã", "Tri Quang"],
                        ["02932", "Xuân Giao", "Xã", "Xuan Giao"],
                        ["02926", "Xuân Quang", "Xã", "Xuan Quang"]
                    ]
                ],
                [
                    "087", "Bảo Yên", "Huyện", "Bao Yen",
                    [
                        ["02989", "Bảo Hà", "Xã", "Bao Ha"],
                        ["02974", "Cam Cọn", "Xã", "Cam Con"],
                        ["02959", "Điện Quan", "Xã", "Dien Quan"],
                        ["02971", "Kim Sơn", "Xã", "Kim Son"],
                        ["02992", "Lương Sơn", "Xã", "Luong Son"],
                        ["02977", "Minh Tân", "Xã", "Minh Tan"],
                        ["02953", "Nghĩa Đô", "Xã", "Nghia Do"],
                        ["02947", "Phố Ràng", "Thị trấn", "Pho Rang"],
                        ["02998", "Phúc Khánh", "Xã", "Phuc Khanh"],
                        ["02965", "Tân Dương", "Xã", "Tan Duong"],
                        ["02950", "Tân Tiến", "Xã", "Tan Tien"],
                        ["02968", "Thượng Hà", "Xã", "Thuong Ha"],
                        ["02983", "Việt Tiến", "Xã", "Viet Tien"],
                        ["02956", "Vĩnh Yên", "Xã", "Vinh Yen"],
                        ["02962", "Xuân Hoà", "Xã", "Xuan Hoa"],
                        ["02980", "Xuân Thượng", "Xã", "Xuan Thuong"],
                        ["02986", "Yên Sơn", "Xã", "Yen Son"]
                    ]
                ],
                [
                    "082", "Bát Xát", "Huyện", "Bat Xat",
                    [
                        ["02692", "A Lù", "Xã", "A Lu"],
                        ["02686", "A Mú Sung", "Xã", "A Mu Sung"],
                        ["02716", "Bản Qua", "Xã", "Ban Qua"],
                        ["02710", "Bản Vược", "Xã", "Ban Vuoc"],
                        ["02725", "Bản Xèo", "Xã", "Ban Xeo"],
                        ["02683", "Bát Xát", "Thị trấn", "Bat Xat"],
                        ["02704", "Cốc Mỳ", "Xã", "Coc My"],
                        ["02707", "Dền Sáng", "Xã", "Den Sang"],
                        ["02722", "Dền Thàng", "Xã", "Den Thang"],
                        ["02728", "Mường Hum", "Xã", "Muong Hum"],
                        ["02719", "Mường Vi", "Xã", "Muong Vi"],
                        ["02689", "Nậm Chạc", "Xã", "Nam Chac"],
                        ["02740", "Nậm Pung", "Xã", "Nam Pung"],
                        ["02737", "Pa Cheo", "Xã", "Pa Cheo"],
                        ["02743", "Phìn Ngan", "Xã", "Phin Ngan"],
                        ["02734", "Quang Kim", "Xã", "Quang Kim"],
                        ["02713", "Sàng Ma Sáo", "Xã", "Sang Ma Sao"],
                        ["02749", "Tòng Sành", "Xã", "Tong Sanh"],
                        ["02695", "Trịnh Tường", "Xã", "Trinh Tuong"],
                        ["02731", "Trung Lèng Hồ", "Xã", "Trung Leng Ho"],
                        ["02701", "Y Tý", "Xã", "Y Ty"]
                    ]
                ],
                [
                    "080", "Lào Cai", "Thành phố", "Lao Cai",
                    [
                        ["02668", "Bắc Cường", "Phường", "Bac Cuong"],
                        ["02650", "Bắc Lệnh", "Phường", "Bac Lenh"],
                        ["02658", "Bình Minh", "Phường", "Binh Minh"],
                        ["02674", "Cam Đường", "Xã", "Cam Duong"],
                        ["02644", "Cốc Lếu", "Phường", "Coc Leu"],
                        ["02746", "Cốc San", "Xã", "Coc San"],
                        ["02662", "Đồng Tuyển", "Xã", "Dong Tuyen"],
                        ["02635", "Duyên Hải", "Phường", "Duyen Hai"],
                        ["02680", "Hợp Thành", "Xã", "Hop Thanh"],
                        ["02647", "Kim Tân", "Phường", "Kim Tan"],
                        ["02641", "Lào Cai", "Phường", "Lao Cai"],
                        ["02671", "Nam Cường", "Phường", "Nam Cuong"],
                        ["02653", "Pom Hán", "Phường", "Pom Han"],
                        ["02677", "Tả Phời", "Xã", "Ta Phoi"],
                        ["02659", "Thống Nhất", "Xã", "Thong Nhat"],
                        ["02665", "Vạn Hoà", "Xã", "Van Hoa"],
                        ["02656", "Xuân Tăng", "Phường", "Xuan Tang"]
                    ]
                ],
                [
                    "083", "Mường Khương", "Huyện", "Muong Khuong",
                    [
                        ["02788", "Bản Lầu", "Xã", "Ban Lau"],
                        ["02797", "Bản Sen", "Xã", "Ban Sen"],
                        ["02782", "Cao Sơn", "Xã", "Cao Son"],
                        ["02764", "Dìn Chin", "Xã", "Din Chin"],
                        ["02791", "La Pan Tẩn", "Xã", "La Pan Tan"],
                        ["02776", "Lùng Khấu Nhin", "Xã", "Lung Khau Nhin"],
                        ["02785", "Lùng Vai", "Xã", "Lung Vai"],
                        ["02761", "Mường Khương", "Thị trấn", "Muong Khuong"],
                        ["02770", "Nậm Chảy", "Xã", "Nam Chay"],
                        ["02773", "Nấm Lư", "Xã", "Nam Lu"],
                        ["02752", "Pha Long", "Xã", "Pha Long"],
                        ["02767", "Tả Gia Khâu", "Xã", "Ta Gia Khau"],
                        ["02755", "Tả Ngải Chồ", "Xã", "Ta Ngai Cho"],
                        ["02794", "Tả Thàng", "Xã", "Ta Thang"],
                        ["02779", "Thanh Bình", "Xã", "Thanh Binh"],
                        ["02758", "Tung Chung Phố", "Xã", "Tung Chung Pho"]
                    ]
                ],
                [
                    "088", "Sa Pa", "Thị xã", "Sa Pa",
                    [
                        ["03046", "Bản Hồ", "Xã", "Ban Ho"],
                        ["03028", "Cầu Mây", "Phường", "Cau May"],
                        ["03016", "Hàm Rồng", "Phường", "Ham Rong"],
                        ["03019", "Hoàng Liên", "Xã", "Hoang Lien"],
                        ["03052", "Liên Minh", "Xã", "Lien Minh"],
                        ["03043", "Mường Bo", "Xã", "Muong Bo"],
                        ["03037", "Mường Hoa", "Xã", "Muong Hoa"],
                        ["03004", "Ngũ Chỉ Sơn", "Xã", "Ngu Chi Son"],
                        ["03003", "Ô Quý Hồ", "Phường", "O Quy Ho"],
                        ["03006", "Phan Si Păng", "Phường", "Phan Si Pang"],
                        ["03001", "Sa Pa", "Phường", "Sa Pa"],
                        ["03002", "Sa Pả", "Phường", "Sa Pa"],
                        ["03013", "Tả Phìn", "Xã", "Ta Phin"],
                        ["03040", "Tả Van", "Xã", "Ta Van"],
                        ["03022", "Thanh Bình", "Xã", "Thanh Binh"],
                        ["03010", "Trung Chải", "Xã", "Trung Chai"]
                    ]
                ],
                [
                    "084", "Si Ma Cai", "Huyện", "Si Ma Cai",
                    [
                        ["02806", "Bản Mế", "Xã", "Ban Me"],
                        ["02821", "Cán Cấu", "Xã", "Can Cau"],
                        ["02818", "Lùng Thẩn", "Xã", "Lung Than"],
                        ["02800", "Nàn Sán", "Xã", "Nan San"],
                        ["02836", "Nàn Xín", "Xã", "Nan Xin"],
                        ["02827", "Quan Hồ Thẩn", "Xã", "Quan Ho Than"],
                        ["02812", "Sán Chải", "Xã", "San Chai"],
                        ["02809", "Si Ma Cai", "Thị trấn", "Si Ma Cai"],
                        ["02824", "Sín Chéng", "Xã", "Sin Cheng"],
                        ["02803", "Thào Chư Phìn", "Xã", "Thao Chu Phin"]
                    ]
                ],
                [
                    "089", "Văn Bàn", "Huyện", "Van Ban",
                    [
                        ["03091", "Chiềng Ken", "Xã", "Chieng Ken"],
                        ["03088", "Dần Thàng", "Xã", "Dan Thang"],
                        ["03106", "Dương Quỳ", "Xã", "Duong Quy"],
                        ["03097", "Hoà Mạc", "Xã", "Hoa Mac"],
                        ["03055", "Khánh Yên", "Thị trấn", "Khanh Yen"],
                        ["03103", "Khánh Yên Hạ", "Xã", "Khanh Yen Ha"],
                        ["03082", "Khánh Yên Thượng", "Xã", "Khanh Yen Thuong"],
                        ["03100", "Khánh Yên Trung", "Xã", "Khanh Yen Trung"],
                        ["03094", "Làng Giàng", "Xã", "Lang Giang"],
                        ["03118", "Liêm Phú", "Xã", "Liem Phu"],
                        ["03112", "Minh Lương", "Xã", "Minh Luong"],
                        ["03076", "Nậm Chầy", "Xã", "Nam Chay"],
                        ["03067", "Nậm Mả", "Xã", "Nam Ma"],
                        ["03073", "Nậm Rạng", "Xã", "Nam Rang"],
                        ["03109", "Nậm Tha", "Xã", "Nam Tha"],
                        ["03121", "Nậm Xây", "Xã", "Nam Xay"],
                        ["03085", "Nậm Xé", "Xã", "Nam Xe"],
                        ["03064", "Sơn Thuỷ", "Xã", "Son Thuy"],
                        ["03079", "Tân An", "Xã", "Tan An"],
                        ["03070", "Tân Thượng", "Xã", "Tan Thuong"],
                        ["03115", "Thẩm Dương", "Xã", "Tham Duong"],
                        ["03061", "Võ Lao", "Xã", "Vo Lao"]
                    ]
                ]
            ]
        ],
        [
            "80", "Long An", "Tỉnh", "Long An",
            [
                [
                    "803", "Bến Lức", "Huyện", "Ben Luc",
                    [
                        ["28012", "An Thạnh", "Xã", "An Thanh"],
                        ["27991", "Bến Lức", "Thị trấn", "Ben Luc"],
                        ["28015", "Bình Đức", "Xã", "Binh Duc"],
                        ["28024", "Long Hiệp", "Xã", "Long Hiep"],
                        ["27997", "Lương Bình", "Xã", "Luong Binh"],
                        ["28003", "Lương Hòa", "Xã", "Luong Hoa"],
                        ["28018", "Mỹ Yên", "Xã", "My Yen"],
                        ["28033", "Nhựt Chánh", "Xã", "Nhut Chanh"],
                        ["28030", "Phước Lợi", "Xã", "Phuoc Loi"],
                        ["28009", "Tân Bửu", "Xã", "Tan Buu"],
                        ["28006", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["28027", "Thạnh Đức", "Xã", "Thanh Duc"],
                        ["28000", "Thạnh Hòa", "Xã", "Thanh Hoa"],
                        ["27994", "Thạnh Lợi", "Xã", "Thanh Loi"],
                        ["28021", "Thanh Phú", "Xã", "Thanh Phu"]
                    ]
                ],
                [
                    "806", "Cần Đước", "Huyện", "Can Duoc",
                    [
                        ["28108", "Cần Đước", "Thị trấn", "Can Duoc"],
                        ["28126", "Long Cang", "Xã", "Long Cang"],
                        ["28117", "Long Định", "Xã", "Long Dinh"],
                        ["28123", "Long Hòa", "Xã", "Long Hoa"],
                        ["28144", "Long Hựu Đông", "Xã", "Long Huu Dong"],
                        ["28153", "Long Hựu Tây", "Xã", "Long Huu Tay"],
                        ["28114", "Long Khê", "Xã", "Long Khe"],
                        ["28129", "Long Sơn", "Xã", "Long Son"],
                        ["28111", "Long Trạch", "Xã", "Long Trach"],
                        ["28135", "Mỹ Lệ", "Xã", "My Le"],
                        ["28150", "Phước Đông", "Xã", "Phuoc Dong"],
                        ["28141", "Phước Tuy", "Xã", "Phuoc Tuy"],
                        ["28120", "Phước Vân", "Xã", "Phuoc Van"],
                        ["28147", "Tân Ân", "Xã", "Tan An"],
                        ["28156", "Tân Chánh", "Xã", "Tan Chanh"],
                        ["28138", "Tân Lân", "Xã", "Tan Lan"],
                        ["28132", "Tân Trạch", "Xã", "Tan Trach"]
                    ]
                ],
                [
                    "807", "Cần Giuộc", "Huyện", "Can Giuoc",
                    [
                        ["28159", "Cần Giuộc", "Thị trấn", "Can Giuoc"],
                        ["28204", "Đông Thạnh", "Xã", "Dong Thanh"],
                        ["28198", "Long An", "Xã", "Long An"],
                        ["28168", "Long Hậu", "Xã", "Long Hau"],
                        ["28201", "Long Phụng", "Xã", "Long Phung"],
                        ["28165", "Long Thượng", "Xã", "Long Thuong"],
                        ["28177", "Mỹ Lộc", "Xã", "My Loc"],
                        ["28174", "Phước Hậu", "Xã", "Phuoc Hau"],
                        ["28180", "Phước Lại", "Xã", "Phuoc Lai"],
                        ["28183", "Phước Lâm", "Xã", "Phuoc Lam"],
                        ["28162", "Phước Lý", "Xã", "Phuoc Ly"],
                        ["28195", "Phước Vĩnh Đông", "Xã", "Phuoc Vinh Dong"],
                        ["28192", "Phước Vĩnh Tây", "Xã", "Phuoc Vinh Tay"],
                        ["28207", "Tân Tập", "Xã", "Tan Tap"],
                        ["28189", "Thuận Thành", "Xã", "Thuan Thanh"]
                    ]
                ],
                [
                    "808", "Châu Thành", "Huyện", "Chau Thanh",
                    [
                        ["28240", "An Lục Long", "Xã", "An Luc Long"],
                        ["28213", "Bình Quới", "Xã", "Binh Quoi"],
                        ["28237", "Dương Xuân Hội", "Xã", "Duong Xuan Hoi"],
                        ["28228", "Hiệp Thạnh", "Xã", "Hiep Thanh"],
                        ["28216", "Hòa Phú", "Xã", "Hoa Phu"],
                        ["28243", "Long Trì", "Xã", "Long Tri"],
                        ["28219", "Phú Ngãi Trị", "Xã", "Phu Ngai Tri"],
                        ["28231", "Phước Tân Hưng", "Xã", "Phuoc Tan Hung"],
                        ["28210", "Tầm Vu", "Thị trấn", "Tam Vu"],
                        ["28234", "Thanh Phú Long", "Xã", "Thanh Phu Long"],
                        ["28246", "Thanh Vĩnh Đông", "Xã", "Thanh Vinh Dong"],
                        ["28225", "Thuận Mỹ", "Xã", "Thuan My"],
                        ["28222", "Vĩnh Công", "Xã", "Vinh Cong"]
                    ]
                ],
                [
                    "802", "Đức Hòa", "Huyện", "Duc Hoa",
                    [
                        ["27943", "An Ninh Đông", "Xã", "An Ninh Dong"],
                        ["27946", "An Ninh Tây", "Xã", "An Ninh Tay"],
                        ["27937", "Đức Hòa", "Thị trấn", "Duc Hoa"],
                        ["27982", "Đức Hòa Đông", "Xã", "Duc Hoa Dong"],
                        ["27985", "Đức Hòa Hạ", "Xã", "Duc Hoa Ha"],
                        ["27967", "Đức Hòa Thượng", "Xã", "Duc Hoa Thuong"],
                        ["27958", "Đức Lập Hạ", "Xã", "Duc Lap Ha"],
                        ["27955", "Đức Lập Thượng", "Xã", "Duc Lap Thuong"],
                        ["27931", "Hậu Nghĩa", "Thị trấn", "Hau Nghia"],
                        ["27934", "Hiệp Hòa", "Thị trấn", "Hiep Hoa"],
                        ["27952", "Hiệp Hòa", "Xã", "Hiep Hoa"],
                        ["27973", "Hòa Khánh Đông", "Xã", "Hoa Khanh Dong"],
                        ["27979", "Hòa Khánh Nam", "Xã", "Hoa Khanh Nam"],
                        ["27970", "Hòa Khánh Tây", "Xã", "Hoa Khanh Tay"],
                        ["27988", "Hựu Thạnh", "Xã", "Huu Thanh"],
                        ["27940", "Lộc Giang", "Xã", "Loc Giang"],
                        ["27964", "Mỹ Hạnh Bắc", "Xã", "My Hanh Bac"],
                        ["27976", "Mỹ Hạnh Nam", "Xã", "My Hanh Nam"],
                        ["27949", "Tân Mỹ", "Xã", "Tan My"],
                        ["27961", "Tân Phú", "Xã", "Tan Phu"]
                    ]
                ],
                [
                    "801", "Đức Huệ", "Huyện", "Duc Hue",
                    [
                        ["27919", "Bình Hòa Bắc", "Xã", "Binh Hoa Bac"],
                        ["27922", "Bình Hòa Hưng", "Xã", "Binh Hoa Hung"],
                        ["27925", "Bình Hòa Nam", "Xã", "Binh Hoa Nam"],
                        ["27916", "Bình Thành", "Xã", "Binh Thanh"],
                        ["27898", "Đông Thành", "Thị trấn", "Dong Thanh"],
                        ["27928", "Mỹ Bình", "Xã", "My Binh"],
                        ["27901", "Mỹ Quý Đông", "Xã", "My Quy Dong"],
                        ["27907", "Mỹ Quý Tây", "Xã", "My Quy Tay"],
                        ["27904", "Mỹ Thạnh Bắc", "Xã", "My Thanh Bac"],
                        ["27913", "Mỹ Thạnh Đông", "Xã", "My Thanh Dong"],
                        ["27910", "Mỹ Thạnh Tây", "Xã", "My Thanh Tay"]
                    ]
                ],
                [
                    "795", "Kiến Tường", "Thị xã", "Kien Tuong",
                    [
                        ["27787", "1", "Phường", "1"],
                        ["27788", "2", "Phường", "2"],
                        ["27806", "3", "Phường", "3"],
                        ["27793", "Bình Hiệp", "Xã", "Binh Hiep"],
                        ["27799", "Bình Tân", "Xã", "Binh Tan"],
                        ["27817", "Thạnh Hưng", "Xã", "Thanh Hung"],
                        ["27790", "Thạnh Trị", "Xã", "Thanh Tri"],
                        ["27805", "Tuyên Thạnh", "Xã", "Tuyen Thanh"]
                    ]
                ],
                [
                    "798", "Mộc Hóa", "Huyện", "Moc Hoa",
                    [
                        ["27811", "Bình Hòa Đông", "Xã", "Binh Hoa Dong"],
                        ["27796", "Bình Hòa Tây", "Xã", "Binh Hoa Tay"],
                        ["27808", "Bình Hòa Trung", "Xã", "Binh Hoa Trung"],
                        ["27814", "Bình Phong Thạnh", "Thị trấn", "Binh Phong Thanh"],
                        ["27802", "Bình Thạnh", "Xã", "Binh Thanh"],
                        ["27820", "Tân Lập", "Xã", "Tan Lap"],
                        ["27823", "Tân Thành", "Xã", "Tan Thanh"]
                    ]
                ],
                [
                    "794", "Tân An", "Thành phố", "Tan An",
                    [
                        ["27694", "1", "Phường", "1"],
                        ["27688", "2", "Phường", "2"],
                        ["27697", "3", "Phường", "3"],
                        ["27691", "4", "Phường", "4"],
                        ["27685", "5", "Phường", "5"],
                        ["27700", "6", "Phường", "6"],
                        ["27698", "7", "Phường", "7"],
                        ["27718", "An Vĩnh Ngãi", "Xã", "An Vinh Ngai"],
                        ["27712", "Bình Tâm", "Xã", "Binh Tam"],
                        ["27703", "Hướng Thọ Phú", "Xã", "Huong Tho Phu"],
                        ["27715", "Khánh Hậu", "Phường", "Khanh Hau"],
                        ["27709", "Lợi Bình Nhơn", "Xã", "Loi Binh Nhon"],
                        ["27706", "Nhơn Thạnh Trung", "Xã", "Nhon Thanh Trung"],
                        ["27692", "Tân Khánh", "Phường", "Tan Khanh"]
                    ]
                ],
                [
                    "796", "Tân Hưng", "Huyện", "Tan Hung",
                    [
                        ["27730", "Hưng Điền", "Xã", "Hung Dien"],
                        ["27727", "Hưng Điền B", "Xã", "Hung Dien B"],
                        ["27724", "Hưng Hà", "Xã", "Hung Ha"],
                        ["27736", "Hưng Thạnh", "Xã", "Hung Thanh"],
                        ["27721", "Tân Hưng", "Thị trấn", "Tan Hung"],
                        ["27733", "Thạnh Hưng", "Xã", "Thanh Hung"],
                        ["27754", "Vĩnh Bửu", "Xã", "Vinh Buu"],
                        ["27751", "Vĩnh Châu A", "Xã", "Vinh Chau A"],
                        ["27742", "Vĩnh Châu B", "Xã", "Vinh Chau B"],
                        ["27748", "Vĩnh Đại", "Xã", "Vinh Dai"],
                        ["27745", "Vĩnh Lợi", "Xã", "Vinh Loi"],
                        ["27739", "Vĩnh Thạnh", "Xã", "Vinh Thanh"]
                    ]
                ],
                [
                    "799", "Tân Thạnh", "Huyện", "Tan Thanh",
                    [
                        ["27829", "Bắc Hòa", "Xã", "Bac Hoa"],
                        ["27841", "Hậu Thạnh Đông", "Xã", "Hau Thanh Dong"],
                        ["27832", "Hậu Thạnh Tây", "Xã", "Hau Thanh Tay"],
                        ["27847", "Kiến Bình", "Xã", "Kien Binh"],
                        ["27844", "Nhơn Hoà", "Xã", "Nhon Hoa"],
                        ["27835", "Nhơn Hòa Lập", "Xã", "Nhon Hoa Lap"],
                        ["27859", "Nhơn Ninh", "Xã", "Nhon Ninh"],
                        ["27853", "Tân Bình", "Xã", "Tan Binh"],
                        ["27862", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["27838", "Tân Lập", "Xã", "Tan Lap"],
                        ["27856", "Tân Ninh", "Xã", "Tan Ninh"],
                        ["27826", "Tân Thạnh", "Thị trấn", "Tan Thanh"],
                        ["27850", "Tân Thành", "Xã", "Tan Thanh"]
                    ]
                ],
                [
                    "805", "Tân Trụ", "Huyện", "Tan Tru",
                    [
                        ["28096", "Bình Lãng", "Xã", "Binh Lang"],
                        ["28099", "Bình Tịnh", "Xã", "Binh Tinh"],
                        ["28090", "Bình Trinh Đông", "Xã", "Binh Trinh Dong"],
                        ["28102", "Đức Tân", "Xã", "Duc Tan"],
                        ["28087", "Lạc Tấn", "Xã", "Lac Tan"],
                        ["28105", "Nhựt Ninh", "Xã", "Nhut Ninh"],
                        ["28084", "Quê Mỹ Thạnh", "Xã", "Que My Thanh"],
                        ["28078", "Tân Bình", "Xã", "Tan Binh"],
                        ["28093", "Tân Phước Tây", "Xã", "Tan Phuoc Tay"],
                        ["28075", "Tân Trụ", "Thị trấn", "Tan Tru"]
                    ]
                ],
                [
                    "800", "Thạnh Hóa", "Huyện", "Thanh Hoa",
                    [
                        ["27892", "Tân Đông", "Xã", "Tan Dong"],
                        ["27868", "Tân Hiệp", "Xã", "Tan Hiep"],
                        ["27889", "Tân Tây", "Xã", "Tan Tay"],
                        ["27895", "Thạnh An", "Xã", "Thanh An"],
                        ["27865", "Thạnh Hóa", "Thị trấn", "Thanh Hoa"],
                        ["27877", "Thạnh Phú", "Xã", "Thanh Phu"],
                        ["27874", "Thạnh Phước", "Xã", "Thanh Phuoc"],
                        ["27871", "Thuận Bình", "Xã", "Thuan Binh"],
                        ["27880", "Thuận Nghĩa Hòa", "Xã", "Thuan Nghia Hoa"],
                        ["27883", "Thủy Đông", "Xã", "Thuy Dong"],
                        ["27886", "Thủy Tây", "Xã", "Thuy Tay"]
                    ]
                ],
                [
                    "804", "Thủ Thừa", "Huyện", "Thu Thua",
                    [
                        ["28054", "Bình An", "Xã", "Binh An"],
                        ["28063", "Bình Thạnh", "Xã", "Binh Thanh"],
                        ["28039", "Long Thạnh", "Xã", "Long Thanh"],
                        ["28045", "Long Thuận", "Xã", "Long Thuan"],
                        ["28060", "Mỹ An", "Xã", "My An"],
                        ["28048", "Mỹ Lạc", "Xã", "My Lac"],
                        ["28066", "Mỹ Phú", "Xã", "My Phu"],
                        ["28051", "Mỹ Thạnh", "Xã", "My Thanh"],
                        ["28057", "Nhị Thành", "Xã", "Nhi Thanh"],
                        ["28072", "Tân Long", "Xã", "Tan Long"],
                        ["28042", "Tân Thành", "Xã", "Tan Thanh"],
                        ["28036", "Thủ Thừa", "Thị trấn", "Thu Thua"]
                    ]
                ],
                [
                    "797", "Vĩnh Hưng", "Huyện", "Vinh Hung",
                    [
                        ["27760", "Hưng Điền A", "Xã", "Hung Dien A"],
                        ["27763", "Khánh Hưng", "Xã", "Khanh Hung"],
                        ["27772", "Thái Bình Trung", "Xã", "Thai Binh Trung"],
                        ["27766", "Thái Trị", "Xã", "Thai Tri"],
                        ["27781", "Tuyên Bình", "Xã", "Tuyen Binh"],
                        ["27784", "Tuyên Bình Tây", "Xã", "Tuyen Binh Tay"],
                        ["27775", "Vĩnh Bình", "Xã", "Vinh Binh"],
                        ["27757", "Vĩnh Hưng", "Thị trấn", "Vinh Hung"],
                        ["27778", "Vĩnh Thuận", "Xã", "Vinh Thuan"],
                        ["27769", "Vĩnh Trị", "Xã", "Vinh Tri"]
                    ]
                ]
            ]
        ],
        [
            "36", "Nam Định", "Tỉnh", "Nam Dinh",
            [
                [
                    "365", "Giao Thủy", "Huyện", "Giao Thuy",
                    [
                        ["14206", "Bạch Long", "Xã", "Bach Long"],
                        ["14170", "Bình Hòa", "Xã", "Binh Hoa"],
                        ["14182", "Giao An", "Xã", "Giao An"],
                        ["14188", "Giao Châu", "Xã", "Giao Chau"],
                        ["14176", "Giao Hà", "Xã", "Giao Ha"],
                        ["14203", "Giao Hải", "Xã", "Giao Hai"],
                        ["14155", "Giao Hương", "Xã", "Giao Huong"],
                        ["14185", "Giao Lạc", "Xã", "Giao Lac"],
                        ["14209", "Giao Long", "Xã", "Giao Long"],
                        ["14179", "Giao Nhân", "Xã", "Giao Nhan"],
                        ["14212", "Giao Phong", "Xã", "Giao Phong"],
                        ["14191", "Giao Tân", "Xã", "Giao Tan"],
                        ["14164", "Giao Thanh", "Xã", "Giao Thanh"],
                        ["14161", "Giao Thiện", "Xã", "Giao Thien"],
                        ["14200", "Giao Thịnh", "Xã", "Giao Thinh"],
                        ["14173", "Giao Tiến", "Xã", "Giao Tien"],
                        ["14197", "Giao Xuân", "Xã", "Giao Xuan"],
                        ["14194", "Giao Yến", "Xã", "Giao Yen"],
                        ["14167", "Hoành Sơn", "Xã", "Hoanh Son"],
                        ["14158", "Hồng Thuận", "Xã", "Hong Thuan"],
                        ["14149", "Ngô Đồng", "Thị trấn", "Ngo Dong"],
                        ["14152", "Quất Lâm", "Thị trấn", "Quat Lam"]
                    ]
                ],
                [
                    "366", "Hải Hậu", "Huyện", "Hai Hau",
                    [
                        ["14218", "Cồn", "Thị trấn", "Con"],
                        ["14284", "Hải An", "Xã", "Hai An"],
                        ["14236", "Hải Anh", "Xã", "Hai Anh"],
                        ["14242", "Hải Bắc", "Xã", "Hai Bac"],
                        ["14311", "Hải Châu", "Xã", "Hai Chau"],
                        ["14305", "Hải Chính", "Xã", "Hai Chinh"],
                        ["14299", "Hải Cường", "Xã", "Hai Cuong"],
                        ["14269", "Hải Đông", "Xã", "Hai Dong"],
                        ["14260", "Hải Đường", "Xã", "Hai Duong"],
                        ["14296", "Hải Giang", "Xã", "Hai Giang"],
                        ["14251", "Hải Hà", "Xã", "Hai Ha"],
                        ["14317", "Hải Hòa", "Xã", "Hai Hoa"],
                        ["14239", "Hải Hưng", "Xã", "Hai Hung"],
                        ["14263", "Hải Lộc", "Xã", "Hai Loc"],
                        ["14254", "Hải Long", "Xã", "Hai Long"],
                        ["14290", "Hải Lý", "Xã", "Hai Ly"],
                        ["14233", "Hải Minh", "Xã", "Hai Minh"],
                        ["14224", "Hải Nam", "Xã", "Hai Nam"],
                        ["14302", "Hải Ninh", "Xã", "Hai Ninh"],
                        ["14281", "Hải Phong", "Xã", "Hai Phong"],
                        ["14293", "Hải Phú", "Xã", "Hai Phu"],
                        ["14245", "Hải Phúc", "Xã", "Hai Phuc"],
                        ["14257", "Hải Phương", "Xã", "Hai Phuong"],
                        ["14266", "Hải Quang", "Xã", "Hai Quang"],
                        ["14272", "Hải Sơn", "Xã", "Hai Son"],
                        ["14275", "Hải Tân", "Xã", "Hai Tan"],
                        ["14287", "Hải Tây", "Xã", "Hai Tay"],
                        ["14248", "Hải Thanh", "Xã", "Hai Thanh"],
                        ["14314", "Hải Triều", "Xã", "Hai Trieu"],
                        ["14227", "Hải Trung", "Xã", "Hai Trung"],
                        ["14230", "Hải Vân", "Xã", "Hai Van"],
                        ["14308", "Hải Xuân", "Xã", "Hai Xuan"],
                        ["14221", "Thịnh Long", "Thị trấn", "Thinh Long"],
                        ["14215", "Yên Định", "Thị trấn", "Yen Dinh"]
                    ]
                ],
                [
                    "358", "Mỹ Lộc", "Huyện", "My Loc",
                    [
                        ["13711", "Mỹ Hà", "Xã", "My Ha"],
                        ["13729", "Mỹ Hưng", "Xã", "My Hung"],
                        ["13708", "Mỹ Lộc", "Thị trấn", "My Loc"],
                        ["13726", "Mỹ Phúc", "Xã", "My Phuc"],
                        ["13723", "Mỹ Tân", "Xã", "My Tan"],
                        ["13717", "Mỹ Thắng", "Xã", "My Thang"],
                        ["13738", "Mỹ Thành", "Xã", "My Thanh"],
                        ["13735", "Mỹ Thịnh", "Xã", "My Thinh"],
                        ["13732", "Mỹ Thuận", "Xã", "My Thuan"],
                        ["13714", "Mỹ Tiến", "Xã", "My Tien"],
                        ["13720", "Mỹ Trung", "Xã", "My Trung"]
                    ]
                ],
                [
                    "356", "Nam Định", "Thành phố", "Nam Dinh",
                    [
                        ["13654", "Bà Triệu", "Phường", "Ba Trieu"],
                        ["13648", "Cửa Bắc", "Phường", "Cua Bac"],
                        ["13690", "Cửa Nam", "Phường", "Cua Nam"],
                        ["13633", "Hạ Long", "Phường", "Ha Long"],
                        ["13702", "Lộc An", "Xã", "Loc An"],
                        ["13684", "Lộc Hạ", "Phường", "Loc Ha"],
                        ["13693", "Lộc Hòa", "Phường", "Loc Hoa"],
                        ["13687", "Lộc Vượng", "Phường", "Loc Vuong"],
                        ["13699", "Mỹ Xá", "Phường", "My Xa"],
                        ["13696", "Nam Phong", "Xã", "Nam Phong"],
                        ["13705", "Nam Vân", "Xã", "Nam Van"],
                        ["13672", "Năng Tĩnh", "Phường", "Nang Tinh"],
                        ["13663", "Ngô Quyền", "Phường", "Ngo Quyen"],
                        ["13651", "Nguyễn Du", "Phường", "Nguyen Du"],
                        ["13660", "Phan Đình Phùng", "Phường", "Phan Dinh Phung"],
                        ["13645", "Quang Trung", "Phường", "Quang Trung"],
                        ["13681", "Thống Nhất", "Phường", "Thong Nhat"],
                        ["13669", "Trần Đăng Ninh", "Phường", "Tran Dang Ninh"],
                        ["13666", "Trần Hưng Đạo", "Phường", "Tran Hung Dao"],
                        ["13678", "Trần Quang Khải", "Phường", "Tran Quang Khai"],
                        ["13636", "Trần Tế Xương", "Phường", "Tran Te Xuong"],
                        ["13657", "Trường Thi", "Phường", "Truong Thi"],
                        ["13675", "Văn Miếu", "Phường", "Van Mieu"],
                        ["13639", "Vị Hoàng", "Phường", "Vi Hoang"],
                        ["13642", "Vị Xuyên", "Phường", "Vi Xuyen"]
                    ]
                ],
                [
                    "362", "Nam Trực", "Huyện", "Nam Truc",
                    [
                        ["14011", "Bình Minh", "Xã", "Binh Minh"],
                        ["13972", "Điền Xá", "Xã", "Dien Xa"],
                        ["14014", "Đồng Sơn", "Xã", "Dong Son"],
                        ["13984", "Hồng Quang", "Xã", "Hong Quang"],
                        ["13990", "Nam Cường", "Xã", "Nam Cuong"],
                        ["14002", "Nam Dương", "Xã", "Nam Duong"],
                        ["13966", "Nam Giang", "Thị trấn", "Nam Giang"],
                        ["14020", "Nam Hải", "Xã", "Nam Hai"],
                        ["13999", "Nam Hoa", "Xã", "Nam Hoa"],
                        ["13993", "Nam Hồng", "Xã", "Nam Hong"],
                        ["13996", "Nam Hùng", "Xã", "Nam Hung"],
                        ["14008", "Nam Lợi", "Xã", "Nam Loi"],
                        ["13969", "Nam Mỹ", "Xã", "Nam My"],
                        ["14023", "Nam Thái", "Xã", "Nam Thai"],
                        ["13978", "Nam Thắng", "Xã", "Nam Thang"],
                        ["14005", "Nam Thanh", "Xã", "Nam Thanh"],
                        ["14017", "Nam Tiến", "Xã", "Nam Tien"],
                        ["13981", "Nam Toàn", "Xã", "Nam Toan"],
                        ["13975", "Nghĩa An", "Xã", "Nghia An"],
                        ["13987", "Tân Thịnh", "Xã", "Tan Thinh"]
                    ]
                ],
                [
                    "361", "Nghĩa Hưng", "Huyện", "Nghia Hung",
                    [
                        ["13909", "Hoàng Nam", "Xã", "Hoang Nam"],
                        ["13891", "Liễu Đề", "Thị trấn", "Lieu De"],
                        ["13963", "Nam Điền", "Xã", "Nam Dien"],
                        ["13933", "Nghĩa Bình", "Xã", "Nghia Binh"],
                        ["13912", "Nghĩa Châu", "Xã", "Nghia Chau"],
                        ["13897", "Nghĩa Đồng", "Xã", "Nghia Dong"],
                        ["13957", "Nghĩa Hải", "Xã", "Nghia Hai"],
                        ["13924", "Nghĩa Hồng", "Xã", "Nghia Hong"],
                        ["13942", "Nghĩa Hùng", "Xã", "Nghia Hung"],
                        ["13921", "Nghĩa Lạc", "Xã", "Nghia Lac"],
                        ["13945", "Nghĩa Lâm", "Xã", "Nghia Lam"],
                        ["13954", "Nghĩa Lợi", "Xã", "Nghia Loi"],
                        ["13903", "Nghĩa Minh", "Xã", "Nghia Minh"],
                        ["13927", "Nghĩa Phong", "Xã", "Nghia Phong"],
                        ["13930", "Nghĩa Phú", "Xã", "Nghia Phu"],
                        ["13918", "Nghĩa Sơn", "Xã", "Nghia Son"],
                        ["13939", "Nghĩa Tân", "Xã", "Nghia Tan"],
                        ["13906", "Nghĩa Thái", "Xã", "Nghia Thai"],
                        ["13948", "Nghĩa Thành", "Xã", "Nghia Thanh"],
                        ["13900", "Nghĩa Thịnh", "Xã", "Nghia Thinh"],
                        ["13915", "Nghĩa Trung", "Xã", "Nghia Trung"],
                        ["13951", "Phúc Thắng", "Xã", "Phuc Thang"],
                        ["13936", "Quỹ Nhất", "Thị trấn", "Quy Nhat"],
                        ["13894", "Rạng Đông", "Thị trấn", "Rang Dong"]
                    ]
                ],
                [
                    "363", "Trực Ninh", "Huyện", "Truc Ninh",
                    [
                        ["14056", "Cát Thành", "Thị trấn", "Cat Thanh"],
                        ["14026", "Cổ Lễ", "Thị trấn", "Co Le"],
                        ["14038", "Liêm Hải", "Xã", "Liem Hai"],
                        ["14077", "Ninh Cường", "Thị trấn", "Ninh Cuong"],
                        ["14029", "Phương Định", "Xã", "Phuong Dinh"],
                        ["14032", "Trực Chính", "Xã", "Truc Chinh"],
                        ["14074", "Trực Cường", "Xã", "Truc Cuong"],
                        ["14071", "Trực Đại", "Xã", "Truc Dai"],
                        ["14047", "Trực Đạo", "Xã", "Truc Dao"],
                        ["14050", "Trực Hưng", "Xã", "Truc Hung"],
                        ["14083", "Trực Hùng", "Xã", "Truc Hung"],
                        ["14062", "Trực Khang", "Xã", "Truc Khang"],
                        ["14068", "Trực Mỹ", "Xã", "Truc My"],
                        ["14053", "Trực Nội", "Xã", "Truc Noi"],
                        ["14080", "Trực Thái", "Xã", "Truc Thai"],
                        ["14086", "Trực Thắng", "Xã", "Truc Thang"],
                        ["14059", "Trực Thanh", "Xã", "Truc Thanh"],
                        ["14065", "Trực Thuận", "Xã", "Truc Thuan"],
                        ["14041", "Trực Tuấn", "Xã", "Truc Tuan"],
                        ["14035", "Trung Đông", "Xã", "Trung Dong"],
                        ["14044", "Việt Hùng", "Xã", "Viet Hung"]
                    ]
                ],
                [
                    "359", "Vụ Bản", "Huyện", "Vu Ban",
                    [
                        ["13762", "Cộng Hòa", "Xã", "Cong Hoa"],
                        ["13756", "Đại An", "Xã", "Dai An"],
                        ["13786", "Đại Thắng", "Xã", "Dai Thang"],
                        ["13741", "Gôi", "Thị trấn", "Goi"],
                        ["13747", "Hiển Khánh", "Xã", "Hien Khanh"],
                        ["13753", "Hợp Hưng", "Xã", "Hop Hung"],
                        ["13780", "Kim Thái", "Xã", "Kim Thai"],
                        ["13774", "Liên Bảo", "Xã", "Lien Bao"],
                        ["13783", "Liên Minh", "Xã", "Lien Minh"],
                        ["13771", "Minh Tân", "Xã", "Minh Tan"],
                        ["13744", "Minh Thuận", "Xã", "Minh Thuan"],
                        ["13768", "Quang Trung", "Xã", "Quang Trung"],
                        ["13789", "Tam Thanh", "Xã", "Tam Thanh"],
                        ["13750", "Tân Khánh", "Xã", "Tan Khanh"],
                        ["13759", "Tân Thành", "Xã", "Tan Thanh"],
                        ["13777", "Thành Lợi", "Xã", "Thanh Loi"],
                        ["13765", "Trung Thành", "Xã", "Trung Thanh"],
                        ["13792", "Vĩnh Hào", "Xã", "Vinh Hao"]
                    ]
                ],
                [
                    "364", "Xuân Trường", "Huyện", "Xuan Truong",
                    [
                        ["14125", "Thọ Nghiệp", "Xã", "Tho Nghiep"],
                        ["14119", "Xuân Bắc", "Xã", "Xuan Bac"],
                        ["14092", "Xuân Châu", "Xã", "Xuan Chau"],
                        ["14107", "Xuân Đài", "Xã", "Xuan Dai"],
                        ["14146", "Xuân Hòa", "Xã", "Xuan Hoa"],
                        ["14095", "Xuân Hồng", "Xã", "Xuan Hong"],
                        ["14137", "Xuân Kiên", "Xã", "Xuan Kien"],
                        ["14116", "Xuân Ngọc", "Xã", "Xuan Ngoc"],
                        ["14143", "Xuân Ninh", "Xã", "Xuan Ninh"],
                        ["14104", "Xuân Phong", "Xã", "Xuan Phong"],
                        ["14128", "Xuân Phú", "Xã", "Xuan Phu"],
                        ["14122", "Xuân Phương", "Xã", "Xuan Phuong"],
                        ["14110", "Xuân Tân", "Xã", "Xuan Tan"],
                        ["14098", "Xuân Thành", "Xã", "Xuan Thanh"],
                        ["14101", "Xuân Thượng", "Xã", "Xuan Thuong"],
                        ["14113", "Xuân Thủy", "Xã", "Xuan Thuy"],
                        ["14140", "Xuân Tiến", "Xã", "Xuan Tien"],
                        ["14131", "Xuân Trung", "Xã", "Xuan Trung"],
                        ["14089", "Xuân Trường", "Thị trấn", "Xuan Truong"],
                        ["14134", "Xuân Vinh", "Xã", "Xuan Vinh"]
                    ]
                ],
                [
                    "360", "Ý Yên", "Huyện", "Y Yen",
                    [
                        ["13795", "Lâm", "Thị trấn", "Lam"],
                        ["13876", "Yên Bằng", "Xã", "Yen Bang"],
                        ["13825", "Yên Bình", "Xã", "Yen Binh"],
                        ["13822", "Yên Chính", "Xã", "Yen Chinh"],
                        ["13870", "Yên Cường", "Xã", "Yen Cuong"],
                        ["13879", "Yên Đồng", "Xã", "Yen Dong"],
                        ["13834", "Yên Dương", "Xã", "Yen Duong"],
                        ["13855", "Yên Hồng", "Xã", "Yen Hong"],
                        ["13840", "Yên Hưng", "Xã", "Yen Hung"],
                        ["13882", "Yên Khang", "Xã", "Yen Khang"],
                        ["13843", "Yên Khánh", "Xã", "Yen Khanh"],
                        ["13873", "Yên Lộc", "Xã", "Yen Loc"],
                        ["13807", "Yên Lợi", "Xã", "Yen Loi"],
                        ["13852", "Yên Lương", "Xã", "Yen Luong"],
                        ["13816", "Yên Minh", "Xã", "Yen Minh"],
                        ["13831", "Yên Mỹ", "Xã", "Yen My"],
                        ["13813", "Yên Nghĩa", "Xã", "Yen Nghia"],
                        ["13885", "Yên Nhân", "Xã", "Yen Nhan"],
                        ["13849", "Yên Ninh", "Xã", "Yen Ninh"],
                        ["13846", "Yên Phong", "Xã", "Yen Phong"],
                        ["13828", "Yên Phú", "Xã", "Yen Phu"],
                        ["13867", "Yên Phúc", "Xã", "Yen Phuc"],
                        ["13819", "Yên Phương", "Xã", "Yen Phuong"],
                        ["13858", "Yên Quang", "Xã", "Yen Quang"],
                        ["13804", "Yên Tân", "Xã", "Yen Tan"],
                        ["13864", "Yên Thắng", "Xã", "Yen Thang"],
                        ["13801", "Yên Thành", "Xã", "Yen Thanh"],
                        ["13810", "Yên Thọ", "Xã", "Yen Tho"],
                        ["13861", "Yên Tiến", "Xã", "Yen Tien"],
                        ["13888", "Yên Trị", "Xã", "Yen Tri"],
                        ["13798", "Yên Trung", "Xã", "Yen Trung"]
                    ]
                ]
            ]
        ],
        [
            "40", "Nghệ An", "Tỉnh", "Nghe An",
            [
                [
                    "424", "Anh Sơn", "Huyện", "Anh Son",
                    [
                        ["17329", "Anh Sơn", "Thị trấn", "Anh Son"],
                        ["17338", "Bình Sơn", "Xã", "Binh Son"],
                        ["17350", "Cẩm Sơn", "Xã", "Cam Son"],
                        ["17386", "Cao Sơn", "Xã", "Cao Son"],
                        ["17344", "Đỉnh Sơn", "Xã", "Dinh Son"],
                        ["17353", "Đức Sơn", "Xã", "Duc Son"],
                        ["17357", "Hoa Sơn", "Xã", "Hoa Son"],
                        ["17368", "Hội Sơn", "Xã", "Hoi Son"],
                        ["17347", "Hùng Sơn", "Xã", "Hung Son"],
                        ["17380", "Khai Sơn", "Xã", "Khai Son"],
                        ["17365", "Lạng Sơn", "Xã", "Lang Son"],
                        ["17383", "Lĩnh Sơn", "Xã", "Linh Son"],
                        ["17377", "Long Sơn", "Xã", "Long Son"],
                        ["17374", "Phúc Sơn", "Xã", "Phuc Son"],
                        ["17341", "Tam Sơn", "Xã", "Tam Son"],
                        ["17359", "Tào Sơn", "Xã", "Tao Son"],
                        ["17371", "Thạch Sơn", "Xã", "Thach Son"],
                        ["17335", "Thành Sơn", "Xã", "Thanh Son"],
                        ["17332", "Thọ Sơn", "Xã", "Tho Son"],
                        ["17356", "Tường Sơn", "Xã", "Tuong Son"],
                        ["17362", "Vĩnh Sơn", "Xã", "Vinh Son"]
                    ]
                ],
                [
                    "422", "Con Cuông", "Huyện", "Con Cuong",
                    [
                        ["17230", "Bình Chuẩn", "Xã", "Binh Chuan"],
                        ["17254", "Bồng Khê", "Xã", "Bong Khe"],
                        ["17236", "Cam Lâm", "Xã", "Cam Lam"],
                        ["17248", "Châu Khê", "Xã", "Chau Khe"],
                        ["17251", "Chi Khê", "Xã", "Chi Khe"],
                        ["17227", "Con Cuông", "Thị trấn", "Con Cuong"],
                        ["17242", "Đôn Phục", "Xã", "Don Phuc"],
                        ["17233", "Lạng Khê", "Xã", "Lang Khe"],
                        ["17260", "Lục Dạ", "Xã", "Luc Da"],
                        ["17245", "Mậu Đức", "Xã", "Mau Duc"],
                        ["17263", "Môn Sơn", "Xã", "Mon Son"],
                        ["17239", "Thạch Ngàn", "Xã", "Thach Ngan"],
                        ["17257", "Yên Khê", "Xã", "Yen Khe"]
                    ]
                ],
                [
                    "413", "Cửa Lò", "Thị xã", "Cua Lo",
                    [
                        ["16729", "Nghi Hải", "Phường", "Nghi Hai"],
                        ["16726", "Nghi Hòa", "Phường", "Nghi Hoa"],
                        ["16732", "Nghi Hương", "Phường", "Nghi Huong"],
                        ["16720", "Nghi Tân", "Phường", "Nghi Tan"],
                        ["16735", "Nghi Thu", "Phường", "Nghi Thu"],
                        ["16717", "Nghi Thuỷ", "Phường", "Nghi Thuy"],
                        ["16723", "Thu Thuỷ", "Phường", "Thu Thuy"]
                    ]
                ],
                [
                    "425", "Diễn Châu", "Huyện", "Dien Chau",
                    [
                        ["17500", "Diễn An", "Xã", "Dien An"],
                        ["17446", "Diễn Bích", "Xã", "Dien Bich"],
                        ["17476", "Diễn Cát", "Xã", "Dien Cat"],
                        ["17389", "Diễn Châu", "Thị trấn", "Dien Chau"],
                        ["17395", "Diễn Đoài", "Xã", "Dien Doai"],
                        ["17443", "Diễn Đồng", "Xã", "Dien Dong"],
                        ["17419", "Diễn Hải", "Xã", "Dien Hai"],
                        ["17449", "Diễn Hạnh", "Xã", "Dien Hanh"],
                        ["17461", "Diễn Hoa", "Xã", "Dien Hoa"],
                        ["17404", "Diễn Hoàng", "Xã", "Dien Hoang"],
                        ["17413", "Diễn Hồng", "Xã", "Dien Hong"],
                        ["17407", "Diễn Hùng", "Xã", "Dien Hung"],
                        ["17431", "Diễn Kim", "Xã", "Dien Kim"],
                        ["17434", "Diễn Kỷ", "Xã", "Dien Ky"],
                        ["17392", "Diễn Lâm", "Xã", "Dien Lam"],
                        ["17425", "Diễn Liên", "Xã", "Dien Lien"],
                        ["17494", "Diễn Lộc", "Xã", "Dien Loc"],
                        ["17491", "Diễn Lợi", "Xã", "Dien Loi"],
                        ["17410", "Diễn Mỹ", "Xã", "Dien My"],
                        ["17452", "Diễn Ngọc", "Xã", "Dien Ngoc"],
                        ["17458", "Diễn Nguyên", "Xã", "Dien Nguyen"],
                        ["17416", "Diễn Phong", "Xã", "Dien Phong"],
                        ["17503", "Diễn Phú", "Xã", "Dien Phu"],
                        ["17467", "Diễn Phúc", "Xã", "Dien Phuc"],
                        ["17455", "Diễn Quảng", "Xã", "Dien Quang"],
                        ["17482", "Diễn Tân", "Xã", "Dien Tan"],
                        ["17440", "Diễn Thái", "Xã", "Dien Thai"],
                        ["17464", "Diễn Thành", "Xã", "Dien Thanh"],
                        ["17422", "Diễn Tháp", "Xã", "Dien Thap"],
                        ["17479", "Diễn Thịnh", "Xã", "Dien Thinh"],
                        ["17488", "Diễn Thọ", "Xã", "Dien Tho"],
                        ["17497", "Diễn Trung", "Xã", "Dien Trung"],
                        ["17398", "Diễn Trường", "Xã", "Dien Truong"],
                        ["17428", "Diễn Vạn", "Xã", "Dien Van"],
                        ["17437", "Diễn Xuân", "Xã", "Dien Xuan"],
                        ["17401", "Diễn Yên", "Xã", "Dien Yen"],
                        ["17485", "Minh Châu", "Xã", "Minh Chau"]
                    ]
                ],
                [
                    "427", "Đô Lương", "Huyện", "Do Luong",
                    [
                        ["17638", "Bắc Sơn", "Xã", "Bac Son"],
                        ["17632", "Bài Sơn", "Xã", "Bai Son"],
                        ["17626", "Bồi Sơn", "Xã", "Boi Son"],
                        ["17668", "Đà Sơn", "Xã", "Da Son"],
                        ["17710", "Đại Sơn", "Xã", "Dai Son"],
                        ["17650", "Đặng Sơn", "Xã", "Dang Son"],
                        ["17617", "Đô Lương", "Thị trấn", "Do Luong"],
                        ["17653", "Đông Sơn", "Xã", "Dong Son"],
                        ["17619", "Giang Sơn Đông", "Xã", "Giang Son Dong"],
                        ["17620", "Giang Sơn Tây", "Xã", "Giang Son Tay"],
                        ["17701", "Hiến Sơn", "Xã", "Hien Son"],
                        ["17647", "Hòa Sơn", "Xã", "Hoa Son"],
                        ["17629", "Hồng Sơn", "Xã", "Hong Son"],
                        ["17671", "Lạc Sơn", "Xã", "Lac Son"],
                        ["17623", "Lam Sơn", "Xã", "Lam Son"],
                        ["17659", "Lưu Sơn", "Xã", "Luu Son"],
                        ["17692", "Minh Sơn", "Xã", "Minh Son"],
                        ["17704", "Mỹ Sơn", "Xã", "My Son"],
                        ["17656", "Nam Sơn", "Xã", "Nam Son"],
                        ["17635", "Ngọc Sơn", "Xã", "Ngoc Son"],
                        ["17698", "Nhân Sơn", "Xã", "Nhan Son"],
                        ["17680", "Quang Sơn", "Xã", "Quang Son"],
                        ["17674", "Tân Sơn", "Xã", "Tan Son"],
                        ["17677", "Thái Sơn", "Xã", "Thai Son"],
                        ["17683", "Thịnh Sơn", "Xã", "Thinh Son"],
                        ["17695", "Thuận Sơn", "Xã", "Thuan Son"],
                        ["17644", "Thượng Sơn", "Xã", "Thuong Son"],
                        ["17641", "Tràng Sơn", "Xã", "Trang Son"],
                        ["17707", "Trù Sơn", "Xã", "Tru Son"],
                        ["17686", "Trung Sơn", "Xã", "Trung Son"],
                        ["17665", "Văn Sơn", "Xã", "Van Son"],
                        ["17689", "Xuân Sơn", "Xã", "Xuan Son"],
                        ["17662", "Yên Sơn", "Xã", "Yen Son"]
                    ]
                ],
                [
                    "432", "Hoàng Mai", "Thị xã", "Hoang Mai",
                    [
                        ["17125", "Mai Hùng", "Phường", "Mai Hung"],
                        ["17128", "Quỳnh Dị", "Phường", "Quynh Di"],
                        ["17113", "Quỳnh Lập", "Xã", "Quynh Lap"],
                        ["17137", "Quỳnh Liên", "Xã", "Quynh Lien"],
                        ["17107", "Quỳnh Lộc", "Xã", "Quynh Loc"],
                        ["17134", "Quỳnh Phương", "Phường", "Quynh Phuong"],
                        ["17110", "Quỳnh Thiện", "Phường", "Quynh Thien"],
                        ["17116", "Quỳnh Trang", "Xã", "Quynh Trang"],
                        ["17104", "Quỳnh Vinh", "Xã", "Quynh Vinh"],
                        ["17131", "Quỳnh Xuân", "Phường", "Quynh Xuan"]
                    ]
                ],
                [
                    "431", "Hưng Nguyên", "Huyện", "Hung Nguyen",
                    [
                        ["18052", "Châu Nhân", "Xã", "Chau Nhan"],
                        ["18016", "Hưng Đạo", "Xã", "Hung Dao"],
                        ["18025", "Hưng Lĩnh", "Xã", "Hung Linh"],
                        ["18034", "Hưng Lợi", "Xã", "Hung Loi"],
                        ["18019", "Hưng Mỹ", "Xã", "Hung My"],
                        ["18037", "Hưng Nghĩa", "Xã", "Hung Nghia"],
                        ["18001", "Hưng Nguyên", "Thị trấn", "Hung Nguyen"],
                        ["18040", "Hưng Phúc", "Xã", "Hung Phuc"],
                        ["18031", "Hưng Tân", "Xã", "Hung Tan"],
                        ["18010", "Hưng Tây", "Xã", "Hung Tay"],
                        ["18064", "Hưng Thành", "Xã", "Hung Thanh"],
                        ["18022", "Hưng Thịnh", "Xã", "Hung Thinh"],
                        ["18028", "Hưng Thông", "Xã", "Hung Thong"],
                        ["18004", "Hưng Trung", "Xã", "Hung Trung"],
                        ["18007", "Hưng Yên", "Xã", "Hung Yen"],
                        ["18008", "Hưng Yên Bắc", "Xã", "Hung Yen Bac"],
                        ["18043", "Long Xá", "Xã", "Long Xa"],
                        ["18055", "Xuân Lam", "Xã", "Xuan Lam"]
                    ]
                ],
                [
                    "417", "Kỳ Sơn", "Huyện", "Ky Son",
                    [
                        ["16819", "Bắc Lý", "Xã", "Bac Ly"],
                        ["16840", "Bảo Nam", "Xã", "Bao Nam"],
                        ["16846", "Bảo Thắng", "Xã", "Bao Thang"],
                        ["16855", "Chiêu Lưu", "Xã", "Chieu Luu"],
                        ["16825", "Đoọc Mạy", "Xã", "Dooc May"],
                        ["16828", "Huồi Tụ", "Xã", "Huoi Tu"],
                        ["16861", "Hữu Kiệm", "Xã", "Huu Kiem"],
                        ["16849", "Hữu Lập", "Xã", "Huu Lap"],
                        ["16822", "Keng Đu", "Xã", "Keng Du"],
                        ["16867", "Mường Ải", "Xã", "Muong Ai"],
                        ["16831", "Mường Lống", "Xã", "Muong Long"],
                        ["16858", "Mường Típ", "Xã", "Muong Tip"],
                        ["16813", "Mường Xén", "Thị trấn", "Muong Xen"],
                        ["16816", "Mỹ Lý", "Xã", "My Ly"],
                        ["16834", "Na Loi", "Xã", "Na Loi"],
                        ["16870", "Na Ngoi", "Xã", "Na Ngoi"],
                        ["16837", "Nậm Cắn", "Xã", "Nam Can"],
                        ["16873", "Nậm Càn", "Xã", "Nam Can"],
                        ["16843", "Phà Đánh", "Xã", "Pha Danh"],
                        ["16852", "Tà Cạ", "Xã", "Ta Ca"],
                        ["16864", "Tây Sơn", "Xã", "Tay Son"]
                    ]
                ],
                [
                    "430", "Nam Đàn", "Huyện", "Nam Dan",
                    [
                        ["17977", "Hồng Long", "Xã", "Hong Long"],
                        ["17962", "Hùng Tiến", "Xã", "Hung Tien"],
                        ["17986", "Khánh Sơn", "Xã", "Khanh Son"],
                        ["17971", "Kim Liên", "Xã", "Kim Lien"],
                        ["17941", "Nam Anh", "Xã", "Nam Anh"],
                        ["17983", "Nam Cát", "Xã", "Nam Cat"],
                        ["17950", "Nam Đàn", "Thị trấn", "Nam Dan"],
                        ["17956", "Nam Giang", "Xã", "Nam Giang"],
                        ["17932", "Nam Hưng", "Xã", "Nam Hung"],
                        ["17998", "Nam Kim", "Xã", "Nam Kim"],
                        ["17953", "Nam Lĩnh", "Xã", "Nam Linh"],
                        ["17935", "Nam Nghĩa", "Xã", "Nam Nghia"],
                        ["17947", "Nam Thái", "Xã", "Nam Thai"],
                        ["17938", "Nam Thanh", "Xã", "Nam Thanh"],
                        ["17944", "Nam Xuân", "Xã", "Nam Xuan"],
                        ["17968", "Thượng Tân Lộc", "Xã", "Thuong Tan Loc"],
                        ["17989", "Trung Phúc Cường", "Xã", "Trung Phuc Cuong"],
                        ["17959", "Xuân Hòa", "Xã", "Xuan Hoa"],
                        ["17980", "Xuân Lâm", "Xã", "Xuan Lam"]
                    ]
                ],
                [
                    "429", "Nghi Lộc", "Huyện", "Nghi Loc",
                    [
                        ["17878", "Khánh Hợp", "Xã", "Khanh Hop"],
                        ["17884", "Nghi Công Bắc", "Xã", "Nghi Cong Bac"],
                        ["17887", "Nghi Công Nam", "Xã", "Nghi Cong Nam"],
                        ["17899", "Nghi Diên", "Xã", "Nghi Dien"],
                        ["17842", "Nghi Đồng", "Xã", "Nghi Dong"],
                        ["17875", "Nghi Hoa", "Xã", "Nghi Hoa"],
                        ["17839", "Nghi Hưng", "Xã", "Nghi Hung"],
                        ["17854", "Nghi Kiều", "Xã", "Nghi Kieu"],
                        ["17848", "Nghi Lâm", "Xã", "Nghi Lam"],
                        ["17866", "Nghi Long", "Xã", "Nghi Long"],
                        ["17857", "Nghi Mỹ", "Xã", "Nghi My"],
                        ["17902", "Nghi Phong", "Xã", "Nghi Phong"],
                        ["17860", "Nghi Phương", "Xã", "Nghi Phuong"],
                        ["17851", "Nghi Quang", "Xã", "Nghi Quang"],
                        ["17890", "Nghi Thạch", "Xã", "Nghi Thach"],
                        ["17926", "Nghi Thái", "Xã", "Nghi Thai"],
                        ["17845", "Nghi Thiết", "Xã", "Nghi Thiet"],
                        ["17881", "Nghi Thịnh", "Xã", "Nghi Thinh"],
                        ["17863", "Nghi Thuận", "Xã", "Nghi Thuan"],
                        ["17836", "Nghi Tiến", "Xã", "Nghi Tien"],
                        ["17893", "Nghi Trung", "Xã", "Nghi Trung"],
                        ["17896", "Nghi Trường", "Xã", "Nghi Truong"],
                        ["17830", "Nghi Văn", "Xã", "Nghi Van"],
                        ["17911", "Nghi Vạn", "Xã", "Nghi Van"],
                        ["17869", "Nghi Xá", "Xã", "Nghi Xa"],
                        ["17905", "Nghi Xuân", "Xã", "Nghi Xuan"],
                        ["17833", "Nghi Yên", "Xã", "Nghi Yen"],
                        ["17917", "Phúc Thọ", "Xã", "Phuc Tho"],
                        ["17827", "Quán Hành", "Thị trấn", "Quan Hanh"]
                    ]
                ],
                [
                    "419", "Nghĩa Đàn", "Huyện", "Nghia Dan",
                    [
                        ["17023", "Nghĩa An", "Xã", "Nghia An"],
                        ["16960", "Nghĩa Bình", "Xã", "Nghia Binh"],
                        ["16941", "Nghĩa Đàn", "Thị trấn", "Nghia Dan"],
                        ["17020", "Nghĩa Đức", "Xã", "Nghia Duc"],
                        ["16996", "Nghĩa Hiếu", "Xã", "Nghia Hieu"],
                        ["16984", "Nghĩa Hội", "Xã", "Nghia Hoi"],
                        ["16975", "Nghĩa Hồng", "Xã", "Nghia Hong"],
                        ["16972", "Nghĩa Hưng", "Xã", "Nghia Hung"],
                        ["17032", "Nghĩa Khánh", "Xã", "Nghia Khanh"],
                        ["16948", "Nghĩa Lạc", "Xã", "Nghia Lac"],
                        ["16951", "Nghĩa Lâm", "Xã", "Nghia Lam"],
                        ["17029", "Nghĩa Lộc", "Xã", "Nghia Loc"],
                        ["16957", "Nghĩa Lợi", "Xã", "Nghia Loi"],
                        ["17026", "Nghĩa Long", "Xã", "Nghia Long"],
                        ["16942", "Nghĩa Mai", "Xã", "Nghia Mai"],
                        ["16966", "Nghĩa Minh", "Xã", "Nghia Minh"],
                        ["16969", "Nghĩa Phú", "Xã", "Nghia Phu"],
                        ["16954", "Nghĩa Sơn", "Xã", "Nghia Son"],
                        ["16987", "Nghĩa Thành", "Xã", "Nghia Thanh"],
                        ["16978", "Nghĩa Thịnh", "Xã", "Nghia Thinh"],
                        ["16963", "Nghĩa Thọ", "Xã", "Nghia Tho"],
                        ["16981", "Nghĩa Trung", "Xã", "Nghia Trung"],
                        ["16945", "Nghĩa Yên", "Xã", "Nghia Yen"]
                    ]
                ],
                [
                    "415", "Quế Phong", "Huyện", "Que Phong",
                    [
                        ["16774", "Căm Muộn", "Xã", "Cam Muon"],
                        ["16759", "Châu Kim", "Xã", "Chau Kim"],
                        ["16765", "Châu Thôn", "Xã", "Chau Thon"],
                        ["16744", "Đồng Văn", "Xã", "Dong Van"],
                        ["16747", "Hạnh Dịch", "Xã", "Hanh Dich"],
                        ["16738", "Kim Sơn", "Thị trấn", "Kim Son"],
                        ["16763", "Mường Nọc", "Xã", "Muong Noc"],
                        ["16753", "Nậm Giải", "Xã", "Nam Giai"],
                        ["16768", "Nậm Nhoóng", "Xã", "Nam Nhoong"],
                        ["16771", "Quang Phong", "Xã", "Quang Phong"],
                        ["16741", "Thông Thụ", "Xã", "Thong Thu"],
                        ["16750", "Tiền Phong", "Xã", "Tien Phong"],
                        ["16756", "Tri Lễ", "Xã", "Tri Le"]
                    ]
                ],
                [
                    "416", "Quỳ Châu", "Huyện", "Quy Chau",
                    [
                        ["16780", "Châu Bính", "Xã", "Chau Binh"],
                        ["16804", "Châu Bình", "Xã", "Chau Binh"],
                        ["16795", "Châu Hạnh", "Xã", "Chau Hanh"],
                        ["16807", "Châu Hoàn", "Xã", "Chau Hoan"],
                        ["16786", "Châu Hội", "Xã", "Chau Hoi"],
                        ["16789", "Châu Nga", "Xã", "Chau Nga"],
                        ["16801", "Châu Phong", "Xã", "Chau Phong"],
                        ["16798", "Châu Thắng", "Xã", "Chau Thang"],
                        ["16783", "Châu Thuận", "Xã", "Chau Thuan"],
                        ["16792", "Châu Tiến", "Xã", "Chau Tien"],
                        ["16810", "Diên Lãm", "Xã", "Dien Lam"],
                        ["16777", "Tân Lạc", "Thị trấn", "Tan Lac"]
                    ]
                ],
                [
                    "420", "Quỳ Hợp", "Huyện", "Quy Hop",
                    [
                        ["17095", "Bắc Sơn", "Xã", "Bac Son"],
                        ["17062", "Châu Cường", "Xã", "Chau Cuong"],
                        ["17080", "Châu Đình", "Xã", "Chau Dinh"],
                        ["17044", "Châu Hồng", "Xã", "Chau Hong"],
                        ["17056", "Châu Lộc", "Xã", "Chau Loc"],
                        ["17089", "Châu Lý", "Xã", "Chau Ly"],
                        ["17065", "Châu Quang", "Xã", "Chau Quang"],
                        ["17077", "Châu Thái", "Xã", "Chau Thai"],
                        ["17050", "Châu Thành", "Xã", "Chau Thanh"],
                        ["17041", "Châu Tiến", "Xã", "Chau Tien"],
                        ["17047", "Đồng Hợp", "Xã", "Dong Hop"],
                        ["17092", "Hạ Sơn", "Xã", "Ha Son"],
                        ["17053", "Liên Hợp", "Xã", "Lien Hop"],
                        ["17071", "Minh Hợp", "Xã", "Minh Hop"],
                        ["17086", "Nam Sơn", "Xã", "Nam Son"],
                        ["17074", "Nghĩa Xuân", "Xã", "Nghia Xuan"],
                        ["17035", "Quỳ Hợp", "Thị trấn", "Quy Hop"],
                        ["17059", "Tam Hợp", "Xã", "Tam Hop"],
                        ["17068", "Thọ Hợp", "Xã", "Tho Hop"],
                        ["17083", "Văn Lợi", "Xã", "Van Loi"],
                        ["17038", "Yên Hợp", "Xã", "Yen Hop"]
                    ]
                ],
                [
                    "421", "Quỳnh Lưu", "Huyện", "Quynh Luu",
                    [
                        ["17206", "An Hòa", "Xã", "An Hoa"],
                        ["17098", "Cầu Giát", "Thị trấn", "Cau Giat"],
                        ["17146", "Ngọc Sơn", "Xã", "Ngoc Son"],
                        ["17185", "Quỳnh Bá", "Xã", "Quynh Ba"],
                        ["17158", "Quỳnh Bảng", "Xã", "Quynh Bang"],
                        ["17122", "Quỳnh Châu", "Xã", "Quynh Chau"],
                        ["17191", "Quỳnh Diễn", "Xã", "Quynh Dien"],
                        ["17173", "Quỳnh Đôi", "Xã", "Quynh Doi"],
                        ["17197", "Quỳnh Giang", "Xã", "Quynh Giang"],
                        ["17167", "Quỳnh Hậu", "Xã", "Quynh Hau"],
                        ["17152", "Quỳnh Hoa", "Xã", "Quynh Hoa"],
                        ["17179", "Quỳnh Hồng", "Xã", "Quynh Hong"],
                        ["17194", "Quỳnh Hưng", "Xã", "Quynh Hung"],
                        ["17170", "Quỳnh Lâm", "Xã", "Quynh Lam"],
                        ["17221", "Quỳnh Long", "Xã", "Quynh Long"],
                        ["17176", "Quỳnh Lương", "Xã", "Quynh Luong"],
                        ["17188", "Quỳnh Minh", "Xã", "Quynh Minh"],
                        ["17161", "Quỳnh Mỹ", "Xã", "Quynh My"],
                        ["17203", "Quỳnh Nghĩa", "Xã", "Quynh Nghia"],
                        ["17200", "Quỳnh Ngọc", "Xã", "Quynh Ngoc"],
                        ["17149", "Quỳnh Tam", "Xã", "Quynh Tam"],
                        ["17119", "Quỳnh Tân", "Xã", "Quynh Tan"],
                        ["17155", "Quỳnh Thạch", "Xã", "Quynh Thach"],
                        ["17101", "Quỳnh Thắng", "Xã", "Quynh Thang"],
                        ["17164", "Quỳnh Thanh", "Xã", "Quynh Thanh"],
                        ["17215", "Quỳnh Thọ", "Xã", "Quynh Tho"],
                        ["17218", "Quỳnh Thuận", "Xã", "Quynh Thuan"],
                        ["17143", "Quỳnh Văn", "Xã", "Quynh Van"],
                        ["17182", "Quỳnh Yên", "Xã", "Quynh Yen"],
                        ["17212", "Sơn Hải", "Xã", "Son Hai"],
                        ["17140", "Tân Sơn", "Xã", "Tan Son"],
                        ["17224", "Tân Thắng", "Xã", "Tan Thang"],
                        ["17209", "Tiến Thủy", "Xã", "Tien Thuy"]
                    ]
                ],
                [
                    "423", "Tân Kỳ", "Huyện", "Tan Ky",
                    [
                        ["17287", "Đồng Văn", "Xã", "Dong Van"],
                        ["17278", "Giai Xuân", "Xã", "Giai Xuan"],
                        ["17317", "Hương Sơn", "Xã", "Huong Son"],
                        ["17314", "Kỳ Sơn", "Xã", "Ky Son"],
                        ["17320", "Kỳ Tân", "Xã", "Ky Tan"],
                        ["17281", "Nghĩa Bình", "Xã", "Nghia Binh"],
                        ["17284", "Nghĩa Đồng", "Xã", "Nghia Dong"],
                        ["17308", "Nghĩa Dũng", "Xã", "Nghia Dung"],
                        ["17326", "Nghĩa Hành", "Xã", "Nghia Hanh"],
                        ["17296", "Nghĩa Hoàn", "Xã", "Nghia Hoan"],
                        ["17293", "Nghĩa Hợp", "Xã", "Nghia Hop"],
                        ["17299", "Nghĩa Phúc", "Xã", "Nghia Phuc"],
                        ["17290", "Nghĩa Thái", "Xã", "Nghia Thai"],
                        ["17323", "Phú Sơn", "Xã", "Phu Son"],
                        ["17305", "Tân An", "Xã", "Tan An"],
                        ["17269", "Tân Hợp", "Xã", "Tan Hop"],
                        ["17325", "Tân Hương", "Xã", "Tan Huong"],
                        ["17266", "Tân Kỳ", "Thị trấn", "Tan Ky"],
                        ["17311", "Tân Long", "Xã", "Tan Long"],
                        ["17272", "Tân Phú", "Xã", "Tan Phu"],
                        ["17275", "Tân Xuân", "Xã", "Tan Xuan"],
                        ["17302", "Tiên Kỳ", "Xã", "Tien Ky"]
                    ]
                ],
                [
                    "414", "Thái Hoà", "Thị xã", "Thai Hoa",
                    [
                        ["17017", "Đông Hiếu", "Xã", "Dong Hieu"],
                        ["16939", "Hoà Hiếu", "Phường", "Hoa Hieu"],
                        ["17003", "Long Sơn", "Phường", "Long Son"],
                        ["17008", "Nghĩa Mỹ", "Xã", "Nghia My"],
                        ["17014", "Nghĩa Thuận", "Xã", "Nghia Thuan"],
                        ["17005", "Nghĩa Tiến", "Xã", "Nghia Tien"],
                        ["16993", "Quang Phong", "Phường", "Quang Phong"],
                        ["16994", "Quang Tiến", "Phường", "Quang Tien"],
                        ["17011", "Tây Hiếu", "Xã", "Tay Hieu"]
                    ]
                ],
                [
                    "428", "Thanh Chương", "Huyện", "Thanh Chuong",
                    [
                        ["17716", "Cát Văn", "Xã", "Cat Van"],
                        ["17749", "Đại Đồng", "Xã", "Dai Dong"],
                        ["17764", "Đồng Văn", "Xã", "Dong Van"],
                        ["17722", "Hạnh Lâm", "Xã", "Hanh Lam"],
                        ["17759", "Ngọc Lâm", "Xã", "Ngoc Lam"],
                        ["17767", "Ngọc Sơn", "Xã", "Ngoc Son"],
                        ["17728", "Phong Thịnh", "Xã", "Phong Thinh"],
                        ["17773", "Thanh An", "Xã", "Thanh An"],
                        ["17776", "Thanh Chi", "Xã", "Thanh Chi"],
                        ["17713", "Thanh Chương", "Thị trấn", "Thanh Chuong"],
                        ["17752", "Thanh Đồng", "Xã", "Thanh Dong"],
                        ["17824", "Thanh Đức", "Xã", "Thanh Duc"],
                        ["17782", "Thanh Dương", "Xã", "Thanh Duong"],
                        ["17809", "Thanh Giang", "Xã", "Thanh Giang"],
                        ["17806", "Thanh Hà", "Xã", "Thanh Ha"],
                        ["17725", "Thanh Hòa", "Xã", "Thanh Hoa"],
                        ["17758", "Thanh Hương", "Xã", "Thanh Huong"],
                        ["17800", "Thanh Khai", "Xã", "Thanh Khai"],
                        ["17788", "Thanh Khê", "Xã", "Thanh Khe"],
                        ["17815", "Thanh Lâm", "Xã", "Thanh Lam"],
                        ["17743", "Thanh Liên", "Xã", "Thanh Lien"],
                        ["17761", "Thanh Lĩnh", "Xã", "Thanh Linh"],
                        ["17794", "Thanh Long", "Xã", "Thanh Long"],
                        ["17785", "Thanh Lương", "Xã", "Thanh Luong"],
                        ["17818", "Thanh Mai", "Xã", "Thanh Mai"],
                        ["17734", "Thanh Mỹ", "Xã", "Thanh My"],
                        ["17755", "Thanh Ngọc", "Xã", "Thanh Ngoc"],
                        ["17719", "Thanh Nho", "Xã", "Thanh Nho"],
                        ["17731", "Thanh Phong", "Xã", "Thanh Phong"],
                        ["17723", "Thanh Sơn", "Xã", "Thanh Son"],
                        ["17770", "Thanh Thịnh", "Xã", "Thanh Thinh"],
                        ["17797", "Thanh Thủy", "Xã", "Thanh Thuy"],
                        ["17737", "Thanh Tiên", "Xã", "Thanh Tien"],
                        ["17812", "Thanh Tùng", "Xã", "Thanh Tung"],
                        ["17821", "Thanh Xuân", "Xã", "Thanh Xuan"],
                        ["17803", "Thanh Yên", "Xã", "Thanh Yen"],
                        ["17791", "Võ Liệt", "Xã", "Vo Liet"],
                        ["17779", "Xuân Tường", "Xã", "Xuan Tuong"]
                    ]
                ],
                [
                    "418", "Tương Dương", "Huyện", "Tuong Duong",
                    [
                        ["16885", "Hữu Khuông", "Xã", "Huu Khuong"],
                        ["16906", "Lưỡng Minh", "Xã", "Luong Minh"],
                        ["16915", "Lưu Kiền", "Xã", "Luu Kien"],
                        ["16879", "Mai Sơn", "Xã", "Mai Son"],
                        ["16903", "Nga My", "Xã", "Nga My"],
                        ["16882", "Nhôn Mai", "Xã", "Nhon Mai"],
                        ["16927", "Tam Đình", "Xã", "Tam Dinh"],
                        ["16936", "Tam Hợp", "Xã", "Tam Hop"],
                        ["16933", "Tam Quang", "Xã", "Tam Quang"],
                        ["16924", "Tam Thái", "Xã", "Tam Thai"],
                        ["16876", "Thạch Giám", "Thị trấn", "Thach Giam"],
                        ["16921", "Xá Lượng", "Xã", "Xa Luong"],
                        ["16904", "Xiêng My", "Xã", "Xieng My"],
                        ["16909", "Yên Hòa", "Xã", "Yen Hoa"],
                        ["16912", "Yên Na", "Xã", "Yen Na"],
                        ["16930", "Yên Thắng", "Xã", "Yen Thang"],
                        ["16900", "Yên Tĩnh", "Xã", "Yen Tinh"]
                    ]
                ],
                [
                    "412", "Vinh", "Thành phố", "Vinh",
                    [
                        ["16693", "Bến Thủy", "Phường", "Ben Thuy"],
                        ["16678", "Cửa Nam", "Phường", "Cua Nam"],
                        ["16684", "Đội Cung", "Phường", "Doi Cung"],
                        ["16663", "Đông Vĩnh", "Phường", "Dong Vinh"],
                        ["16666", "Hà Huy Tập", "Phường", "Ha Huy Tap"],
                        ["16696", "Hồng Sơn", "Phường", "Hong Son"],
                        ["16672", "Hưng Bình", "Phường", "Hung Binh"],
                        ["18013", "Hưng Chính", "Xã", "Hung Chinh"],
                        ["16705", "Hưng Đông", "Xã", "Hung Dong"],
                        ["16675", "Hưng Dũng", "Phường", "Hung Dung"],
                        ["16711", "Hưng Hòa", "Xã", "Hung Hoa"],
                        ["16708", "Hưng Lộc", "Xã", "Hung Loc"],
                        ["16673", "Hưng Phúc", "Phường", "Hung Phuc"],
                        ["16669", "Lê Lợi", "Phường", "Le Loi"],
                        ["16687", "Lê Mao", "Phường", "Le Mao"],
                        ["17914", "Nghi Ân", "Xã", "Nghi An"],
                        ["17923", "Nghi Đức", "Xã", "Nghi Duc"],
                        ["17920", "Nghi Kim", "Xã", "Nghi Kim"],
                        ["17908", "Nghi Liên", "Xã", "Nghi Lien"],
                        ["16702", "Nghi Phú", "Xã", "Nghi Phu"],
                        ["16670", "Quán Bàu", "Phường", "Quan Bau"],
                        ["16681", "Quang Trung", "Phường", "Quang Trung"],
                        ["16699", "Trung Đô", "Phường", "Trung Do"],
                        ["16690", "Trường Thi", "Phường", "Truong Thi"],
                        ["16714", "Vinh Tân", "Phường", "Vinh Tan"]
                    ]
                ],
                [
                    "426", "Yên Thành", "Huyện", "Yen Thanh",
                    [
                        ["17569", "Bắc Thành", "Xã", "Bac Thanh"],
                        ["17605", "Bảo Thành", "Xã", "Bao Thanh"],
                        ["17611", "Công Thành", "Xã", "Cong Thanh"],
                        ["17599", "Đại Thành", "Xã", "Dai Thanh"],
                        ["17527", "Đô Thành", "Xã", "Do Thanh"],
                        ["17545", "Đồng Thành", "Xã", "Dong Thanh"],
                        ["17518", "Đức Thành", "Xã", "Duc Thanh"],
                        ["17524", "Hậu Thành", "Xã", "Hau Thanh"],
                        ["17551", "Hoa Thành", "Xã", "Hoa Thanh"],
                        ["17542", "Hồng Thành", "Xã", "Hong Thanh"],
                        ["17563", "Hợp Thành", "Xã", "Hop Thanh"],
                        ["17525", "Hùng Thành", "Xã", "Hung Thanh"],
                        ["17593", "Khánh Thành", "Xã", "Khanh Thanh"],
                        ["17521", "Kim Thành", "Xã", "Kim Thanh"],
                        ["17512", "Lăng Thành", "Xã", "Lang Thanh"],
                        ["17602", "Liên Thành", "Xã", "Lien Thanh"],
                        ["17578", "Long Thành", "Xã", "Long Thanh"],
                        ["17590", "Lý Thành", "Xã", "Ly Thanh"],
                        ["17509", "Mã Thành", "Xã", "Ma Thanh"],
                        ["17581", "Minh Thành", "Xã", "Minh Thanh"],
                        ["17608", "Mỹ Thành", "Xã", "My Thanh"],
                        ["17584", "Nam Thành", "Xã", "Nam Thanh"],
                        ["17572", "Nhân Thành", "Xã", "Nhan Thanh"],
                        ["17548", "Phú Thành", "Xã", "Phu Thanh"],
                        ["17539", "Phúc Thành", "Xã", "Phuc Thanh"],
                        ["17533", "Quang Thành", "Xã", "Quang Thanh"],
                        ["17614", "Sơn Thành", "Xã", "Son Thanh"],
                        ["17515", "Tân Thành", "Xã", "Tan Thanh"],
                        ["17554", "Tăng Thành", "Xã", "Tang Thanh"],
                        ["17536", "Tây Thành", "Xã", "Tay Thanh"],
                        ["17560", "Thịnh Thành", "Xã", "Thinh Thanh"],
                        ["17530", "Thọ Thành", "Xã", "Tho Thanh"],
                        ["17510", "Tiến Thành", "Xã", "Tien Thanh"],
                        ["17575", "Trung Thành", "Xã", "Trung Thanh"],
                        ["17557", "Văn Thành", "Xã", "Van Thanh"],
                        ["17596", "Viên Thành", "Xã", "Vien Thanh"],
                        ["17587", "Vĩnh Thành", "Xã", "Vinh Thanh"],
                        ["17566", "Xuân Thành", "Xã", "Xuan Thanh"],
                        ["17506", "Yên Thành", "Thị trấn", "Yen Thanh"]
                    ]
                ]
            ]
        ],
        [
            "37", "Ninh Bình", "Tỉnh", "Ninh Binh",
            [
                [
                    "373", "Gia Viễn", "Huyện", "Gia Vien",
                    [
                        ["14467", "Gia Hòa", "Xã", "Gia Hoa"],
                        ["14470", "Gia Hưng", "Xã", "Gia Hung"],
                        ["14515", "Gia Lạc", "Xã", "Gia Lac"],
                        ["14488", "Gia Lập", "Xã", "Gia Lap"],
                        ["14512", "Gia Minh", "Xã", "Gia Minh"],
                        ["14524", "Gia Phong", "Xã", "Gia Phong"],
                        ["14482", "Gia Phú", "Xã", "Gia Phu"],
                        ["14500", "Gia Phương", "Xã", "Gia Phuong"],
                        ["14521", "Gia Sinh", "Xã", "Gia Sinh"],
                        ["14503", "Gia Tân", "Xã", "Gia Tan"],
                        ["14506", "Gia Thắng", "Xã", "Gia Thang"],
                        ["14476", "Gia Thanh", "Xã", "Gia Thanh"],
                        ["14497", "Gia Thịnh", "Xã", "Gia Thinh"],
                        ["14518", "Gia Tiến", "Xã", "Gia Tien"],
                        ["14494", "Gia Trấn", "Xã", "Gia Tran"],
                        ["14509", "Gia Trung", "Xã", "Gia Trung"],
                        ["14479", "Gia Vân", "Xã", "Gia Van"],
                        ["14491", "Gia Vượng", "Xã", "Gia Vuong"],
                        ["14485", "Gia Xuân", "Xã", "Gia Xuan"],
                        ["14473", "Liên Sơn", "Xã", "Lien Son"],
                        ["14464", "Me", "Thị trấn", "Me"]
                    ]
                ],
                [
                    "374", "Hoa Lư", "Huyện", "Hoa Lu",
                    [
                        ["14557", "Ninh An", "Xã", "Ninh An"],
                        ["14530", "Ninh Giang", "Xã", "Ninh Giang"],
                        ["14548", "Ninh Hải", "Xã", "Ninh Hai"],
                        ["14542", "Ninh Hòa", "Xã", "Ninh Hoa"],
                        ["14536", "Ninh Khang", "Xã", "Ninh Khang"],
                        ["14539", "Ninh Mỹ", "Xã", "Ninh My"],
                        ["14551", "Ninh Thắng", "Xã", "Ninh Thang"],
                        ["14554", "Ninh Vân", "Xã", "Ninh Van"],
                        ["14545", "Ninh Xuân", "Xã", "Ninh Xuan"],
                        ["14527", "Thiên Tôn", "Thị trấn", "Thien Ton"],
                        ["14533", "Trường Yên", "Xã", "Truong Yen"]
                    ]
                ],
                [
                    "376", "Kim Sơn", "Huyện", "Kim Son",
                    [
                        ["14638", "Ân Hòa", "Xã", "An Hoa"],
                        ["14623", "Bình Minh", "Thị trấn", "Binh Minh"],
                        ["14653", "Chất Bình", "Xã", "Chat Binh"],
                        ["14689", "Cồn Thoi", "Xã", "Con Thoi"],
                        ["14677", "Định Hóa", "Xã", "Dinh Hoa"],
                        ["14656", "Đồng Hướng", "Xã", "Dong Huong"],
                        ["14629", "Hồi Ninh", "Xã", "Hoi Ninh"],
                        ["14641", "Hùng Tiến", "Xã", "Hung Tien"],
                        ["14659", "Kim Chính", "Xã", "Kim Chinh"],
                        ["14635", "Kim Định", "Xã", "Kim Dinh"],
                        ["14698", "Kim Đông", "Xã", "Kim Dong"],
                        ["14692", "Kim Hải", "Xã", "Kim Hai"],
                        ["14686", "Kim Mỹ", "Xã", "Kim My"],
                        ["14683", "Kim Tân", "Xã", "Kim Tan"],
                        ["14695", "Kim Trung", "Xã", "Kim Trung"],
                        ["14674", "Lai Thành", "Xã", "Lai Thanh"],
                        ["14665", "Lưu Phương", "Xã", "Luu Phuong"],
                        ["14650", "Như Hòa", "Xã", "Nhu Hoa"],
                        ["14620", "Phát Diệm", "Thị trấn", "Phat Diem"],
                        ["14647", "Quang Thiện", "Xã", "Quang Thien"],
                        ["14668", "Tân Thành", "Xã", "Tan Thanh"],
                        ["14662", "Thượng Kiệm", "Xã", "Thuong Kiem"],
                        ["14680", "Văn Hải", "Xã", "Van Hai"],
                        ["14632", "Xuân Chính", "Xã", "Xuan Chinh"],
                        ["14671", "Yên Lộc", "Xã", "Yen Loc"]
                    ]
                ],
                [
                    "372", "Nho Quan", "Huyện", "Nho Quan",
                    [
                        ["14404", "Cúc Phương", "Xã", "Cuc Phuong"],
                        ["14416", "Đồng Phong", "Xã", "Dong Phong"],
                        ["14410", "Đức Long", "Xã", "Duc Long"],
                        ["14389", "Gia Lâm", "Xã", "Gia Lam"],
                        ["14392", "Gia Sơn", "Xã", "Gia Son"],
                        ["14398", "Gia Thủy", "Xã", "Gia Thuy"],
                        ["14401", "Gia Tường", "Xã", "Gia Tuong"],
                        ["14449", "Kỳ Phú", "Xã", "Ky Phu"],
                        ["14413", "Lạc Vân", "Xã", "Lac Van"],
                        ["14422", "Lạng Phong", "Xã", "Lang Phong"],
                        ["14383", "Nho Quan", "Thị trấn", "Nho Quan"],
                        ["14446", "Phú Lộc", "Xã", "Phu Loc"],
                        ["14458", "Phú Long", "Xã", "Phu Long"],
                        ["14407", "Phú Sơn", "Xã", "Phu Son"],
                        ["14461", "Quảng Lạc", "Xã", "Quang Lac"],
                        ["14452", "Quỳnh Lưu", "Xã", "Quynh Luu"],
                        ["14455", "Sơn Hà", "Xã", "Son Ha"],
                        ["14437", "Sơn Lai", "Xã", "Son Lai"],
                        ["14440", "Sơn Thành", "Xã", "Son Thanh"],
                        ["14395", "Thạch Bình", "Xã", "Thach Binh"],
                        ["14434", "Thanh Lạc", "Xã", "Thanh Lac"],
                        ["14425", "Thượng Hòa", "Xã", "Thuong Hoa"],
                        ["14428", "Văn Phong", "Xã", "Van Phong"],
                        ["14443", "Văn Phú", "Xã", "Van Phu"],
                        ["14431", "Văn Phương", "Xã", "Van Phuong"],
                        ["14386", "Xích Thổ", "Xã", "Xich Tho"],
                        ["14419", "Yên Quang", "Xã", "Yen Quang"]
                    ]
                ],
                [
                    "369", "Ninh Bình", "Thành phố", "Ninh Binh",
                    [
                        ["14332", "Bích Đào", "Phường", "Bich Dao"],
                        ["14320", "Đông Thành", "Phường", "Dong Thanh"],
                        ["14338", "Nam Bình", "Phường", "Nam Binh"],
                        ["14341", "Nam Thành", "Phường", "Nam Thanh"],
                        ["14344", "Ninh Khánh", "Phường", "Ninh Khanh"],
                        ["14347", "Ninh Nhất", "Xã", "Ninh Nhat"],
                        ["14359", "Ninh Phong", "Phường", "Ninh Phong"],
                        ["14353", "Ninh Phúc", "Xã", "Ninh Phuc"],
                        ["14356", "Ninh Sơn", "Phường", "Ninh Son"],
                        ["14350", "Ninh Tiến", "Xã", "Ninh Tien"],
                        ["14335", "Phúc Thành", "Phường", "Phuc Thanh"],
                        ["14323", "Tân Thành", "Phường", "Tan Thanh"],
                        ["14326", "Thanh Bình", "Phường", "Thanh Binh"],
                        ["14329", "Vân Giang", "Phường", "Van Giang"]
                    ]
                ],
                [
                    "370", "Tam Điệp", "Thành phố", "Tam Diep",
                    [
                        ["14362", "Bắc Sơn", "Phường", "Bac Son"],
                        ["14380", "Đông Sơn", "Xã", "Dong Son"],
                        ["14368", "Nam Sơn", "Phường", "Nam Son"],
                        ["14377", "Quang Sơn", "Xã", "Quang Son"],
                        ["14375", "Tân Bình", "Phường", "Tan Binh"],
                        ["14369", "Tây Sơn", "Phường", "Tay Son"],
                        ["14365", "Trung Sơn", "Phường", "Trung Son"],
                        ["14374", "Yên Bình", "Phường", "Yen Binh"],
                        ["14371", "Yên Sơn", "Xã", "Yen Son"]
                    ]
                ],
                [
                    "375", "Yên Khánh", "Huyện", "Yen Khanh",
                    [
                        ["14575", "Khánh An", "Xã", "Khanh An"],
                        ["14602", "Khánh Công", "Xã", "Khanh Cong"],
                        ["14581", "Khánh Cư", "Xã", "Khanh Cu"],
                        ["14578", "Khánh Cường", "Xã", "Khanh Cuong"],
                        ["14587", "Khánh Hải", "Xã", "Khanh Hai"],
                        ["14569", "Khánh Hòa", "Xã", "Khanh Hoa"],
                        ["14599", "Khánh Hội", "Xã", "Khanh Hoi"],
                        ["14617", "Khánh Hồng", "Xã", "Khanh Hong"],
                        ["14572", "Khánh Lợi", "Xã", "Khanh Loi"],
                        ["14593", "Khánh Mậu", "Xã", "Khanh Mau"],
                        ["14611", "Khánh Nhạc", "Xã", "Khanh Nhac"],
                        ["14566", "Khánh Phú", "Xã", "Khanh Phu"],
                        ["14608", "Khánh Thành", "Xã", "Khanh Thanh"],
                        ["14584", "Khánh Thiện", "Xã", "Khanh Thien"],
                        ["14614", "Khánh Thủy", "Xã", "Khanh Thuy"],
                        ["14563", "Khánh Tiên", "Xã", "Khanh Tien"],
                        ["14590", "Khánh Trung", "Xã", "Khanh Trung"],
                        ["14596", "Khánh Vân", "Xã", "Khanh Van"],
                        ["14560", "Yên Ninh", "Thị trấn", "Yen Ninh"]
                    ]
                ],
                [
                    "377", "Yên Mô", "Huyện", "Yen Mo",
                    [
                        ["14707", "Khánh Dương", "Xã", "Khanh Duong"],
                        ["14713", "Khánh Thịnh", "Xã", "Khanh Thinh"],
                        ["14704", "Khánh Thượng", "Xã", "Khanh Thuong"],
                        ["14710", "Mai Sơn", "Xã", "Mai Son"],
                        ["14746", "Yên Đồng", "Xã", "Yen Dong"],
                        ["14722", "Yên Hòa", "Xã", "Yen Hoa"],
                        ["14731", "Yên Hưng", "Xã", "Yen Hung"],
                        ["14752", "Yên Lâm", "Xã", "Yen Lam"],
                        ["14743", "Yên Mạc", "Xã", "Yen Mac"],
                        ["14740", "Yên Mỹ", "Xã", "Yen My"],
                        ["14737", "Yên Nhân", "Xã", "Yen Nhan"],
                        ["14719", "Yên Phong", "Xã", "Yen Phong"],
                        ["14749", "Yên Thái", "Xã", "Yen Thai"],
                        ["14725", "Yên Thắng", "Xã", "Yen Thang"],
                        ["14734", "Yên Thành", "Xã", "Yen Thanh"],
                        ["14701", "Yên Thịnh", "Thị trấn", "Yen Thinh"],
                        ["14728", "Yên Từ", "Xã", "Yen Tu"]
                    ]
                ]
            ]
        ],
        [
            "58", "Ninh Thuận", "Tỉnh", "Ninh Thuan",
            [
                [
                    "584", "Bác Ái", "Huyện", "Bac Ai",
                    [
                        ["22783", "Phước Bình", "Xã", "Phuoc Binh"],
                        ["22804", "Phước Chính", "Xã", "Phuoc Chinh"],
                        ["22801", "Phước Đại", "Xã", "Phuoc Dai"],
                        ["22786", "Phước Hòa", "Xã", "Phuoc Hoa"],
                        ["22789", "Phước Tân", "Xã", "Phuoc Tan"],
                        ["22795", "Phước Thắng", "Xã", "Phuoc Thang"],
                        ["22798", "Phước Thành", "Xã", "Phuoc Thanh"],
                        ["22792", "Phước Tiến", "Xã", "Phuoc Tien"],
                        ["22807", "Phước Trung", "Xã", "Phuoc Trung"]
                    ]
                ],
                [
                    "586", "Ninh Hải", "Huyện", "Ninh Hai",
                    [
                        ["22861", "Hộ Hải", "Xã", "Ho Hai"],
                        ["22834", "Khánh Hải", "Thị trấn", "Khanh Hai"],
                        ["22867", "Nhơn Hải", "Xã", "Nhon Hai"],
                        ["22852", "Phương Hải", "Xã", "Phuong Hai"],
                        ["22855", "Tân Hải", "Xã", "Tan Hai"],
                        ["22868", "Thanh Hải", "Xã", "Thanh Hai"],
                        ["22864", "Tri Hải", "Xã", "Tri Hai"],
                        ["22846", "Vĩnh Hải", "Xã", "Vinh Hai"],
                        ["22858", "Xuân Hải", "Xã", "Xuan Hai"]
                    ]
                ],
                [
                    "587", "Ninh Phước", "Huyện", "Ninh Phuoc",
                    [
                        ["22888", "An Hải", "Xã", "An Hai"],
                        ["22870", "Phước Dân", "Thị trấn", "Phuoc Dan"],
                        ["22894", "Phước Hải", "Xã", "Phuoc Hai"],
                        ["22879", "Phước Hậu", "Xã", "Phuoc Hau"],
                        ["22891", "Phước Hữu", "Xã", "Phuoc Huu"],
                        ["22873", "Phước Sơn", "Xã", "Phuoc Son"],
                        ["22876", "Phước Thái", "Xã", "Phuoc Thai"],
                        ["22882", "Phước Thuận", "Xã", "Phuoc Thuan"],
                        ["22912", "Phước Vinh", "Xã", "Phuoc Vinh"]
                    ]
                ],
                [
                    "585", "Ninh Sơn", "Huyện", "Ninh Son",
                    [
                        ["22825", "Hòa Sơn", "Xã", "Hoa Son"],
                        ["22813", "Lâm Sơn", "Xã", "Lam Son"],
                        ["22816", "Lương Sơn", "Xã", "Luong Son"],
                        ["22828", "Ma Nới", "Xã", "Ma Noi"],
                        ["22822", "Mỹ Sơn", "Xã", "My Son"],
                        ["22831", "Nhơn Sơn", "Xã", "Nhon Son"],
                        ["22819", "Quảng Sơn", "Xã", "Quang Son"],
                        ["22810", "Tân Sơn", "Thị trấn", "Tan Son"]
                    ]
                ],
                [
                    "582", "Phan Rang-Tháp Chàm", "Thành phố", "Phan Rang-Thap Cham",
                    [
                        ["22744", "Bảo An", "Phường", "Bao An"],
                        ["22765", "Đài Sơn", "Phường", "Dai Son"],
                        ["22762", "Đạo Long", "Phường", "Dao Long"],
                        ["22738", "Đô Vinh", "Phường", "Do Vinh"],
                        ["22768", "Đông Hải", "Phường", "Dong Hai"],
                        ["22759", "Kinh Dinh", "Phường", "Kinh Dinh"],
                        ["22779", "Mỹ Bình", "Phường", "My Binh"],
                        ["22771", "Mỹ Đông", "Phường", "My Dong"],
                        ["22780", "Mỹ Hải", "Phường", "My Hai"],
                        ["22753", "Mỹ Hương", "Phường", "My Huong"],
                        ["22747", "Phủ Hà", "Phường", "Phu Ha"],
                        ["22741", "Phước Mỹ", "Phường", "Phuoc My"],
                        ["22756", "Tấn Tài", "Phường", "Tan Tai"],
                        ["22774", "Thành Hải", "Xã", "Thanh Hai"],
                        ["22750", "Thanh Sơn", "Phường", "Thanh Son"],
                        ["22777", "Văn Hải", "Phường", "Van Hai"]
                    ]
                ],
                [
                    "588", "Thuận Bắc", "Huyện", "Thuan Bac",
                    [
                        ["22856", "Bắc Phong", "Xã", "Bac Phong"],
                        ["22853", "Bắc Sơn", "Xã", "Bac Son"],
                        ["22840", "Công Hải", "Xã", "Cong Hai"],
                        ["22849", "Lợi Hải", "Xã", "Loi Hai"],
                        ["22837", "Phước Chiến", "Xã", "Phuoc Chien"],
                        ["22843", "Phước Kháng", "Xã", "Phuoc Khang"]
                    ]
                ],
                [
                    "589", "Thuận Nam", "Huyện", "Thuan Nam",
                    [
                        ["22910", "Cà Ná", "Xã", "Ca Na"],
                        ["22900", "Nhị Hà", "Xã", "Nhi Ha"],
                        ["22909", "Phước Diêm", "Xã", "Phuoc Diem"],
                        ["22903", "Phước Dinh", "Xã", "Phuoc Dinh"],
                        ["22885", "Phước Hà", "Xã", "Phuoc Ha"],
                        ["22906", "Phước Minh", "Xã", "Phuoc Minh"],
                        ["22897", "Phước Nam", "Xã", "Phuoc Nam"],
                        ["22898", "Phước Ninh", "Xã", "Phuoc Ninh"]
                    ]
                ]
            ]
        ],
        [
            "25", "Phú Thọ", "Tỉnh", "Phu Tho",
            [
                [
                    "235", "Cẩm Khê", "Huyện", "Cam Khe",
                    [
                        ["08341", "Cẩm Khê", "Thị trấn", "Cam Khe"],
                        ["08383", "Cấp Dẫn", "Xã", "Cap Dan"],
                        ["08413", "Chương Xá", "Xã", "Chuong Xa"],
                        ["08428", "Điêu Lương", "Xã", "Dieu Luong"],
                        ["08431", "Đồng Lương", "Xã", "Dong Luong"],
                        ["08416", "Hùng Việt", "Xã", "Hung Viet"],
                        ["08401", "Hương Lung", "Xã", "Huong Lung"],
                        ["08353", "Minh Tân", "Xã", "Minh Tan"],
                        ["08350", "Ngô Xá", "Xã", "Ngo Xa"],
                        ["08392", "Phú Khê", "Xã", "Phu Khe"],
                        ["08407", "Phú Lạc", "Xã", "Phu Lac"],
                        ["08356", "Phượng Vĩ", "Xã", "Phuong Vi"],
                        ["08395", "Sơn Tình", "Xã", "Son Tinh"],
                        ["08404", "Tạ Xá", "Xã", "Ta Xa"],
                        ["08377", "Tam Sơn", "Xã", "Tam Son"],
                        ["08362", "Thụy Liễu", "Xã", "Thuy Lieu"],
                        ["08344", "Tiên Lương", "Xã", "Tien Luong"],
                        ["08374", "Tùng Khê", "Xã", "Tung Khe"],
                        ["08347", "Tuy Lộc", "Xã", "Tuy Loc"],
                        ["08380", "Văn Bán", "Xã", "Van Ban"],
                        ["08419", "Văn Khúc", "Xã", "Van Khuc"],
                        ["08389", "Xương Thịnh", "Xã", "Xuong Thinh"],
                        ["08422", "Yên Dưỡng", "Xã", "Yen Duong"],
                        ["08398", "Yên Tập", "Xã", "Yen Tap"]
                    ]
                ],
                [
                    "230", "Đoan Hùng", "Huyện", "Doan Hung",
                    [
                        ["07996", "Bằng Doãn", "Xã", "Bang Doan"],
                        ["07981", "Bằng Luân", "Xã", "Bang Luan"],
                        ["08050", "Ca Đình", "Xã", "Ca Dinh"],
                        ["08047", "Chân Mộng", "Xã", "Chan Mong"],
                        ["07999", "Chí Đám", "Xã", "Chi Dam"],
                        ["07969", "Đoan Hùng", "Thị trấn", "Doan Hung"],
                        ["08014", "Hợp Nhất", "Xã", "Hop Nhat"],
                        ["08029", "Hùng Long", "Xã", "Hung Long"],
                        ["07975", "Hùng Xuyên", "Xã", "Hung Xuyen"],
                        ["07993", "Minh Lương", "Xã", "Minh Luong"],
                        ["08044", "Minh Phú", "Xã", "Minh Phu"],
                        ["08041", "Minh Tiến", "Xã", "Minh Tien"],
                        ["08008", "Ngọc Quan", "Xã", "Ngoc Quan"],
                        ["07987", "Phú Lâm", "Xã", "Phu Lam"],
                        ["08005", "Phúc Lai", "Xã", "Phuc Lai"],
                        ["08017", "Sóc Đăng", "Xã", "Soc Dang"],
                        ["08023", "Tây Cốc", "Xã", "Tay Coc"],
                        ["08038", "Tiêu Sơn", "Xã", "Tieu Son"],
                        ["08035", "Vân Đồn", "Xã", "Van Don"],
                        ["07984", "Vân Du", "Xã", "Van Du"],
                        ["08032", "Vụ Quang", "Xã", "Vu Quang"],
                        ["08026", "Yên Kiện", "Xã", "Yen Kien"]
                    ]
                ],
                [
                    "231", "Hạ Hoà", "Huyện", "Ha Hoa",
                    [
                        ["08095", "Ấm Hạ", "Xã", "Am Ha"],
                        ["08125", "Bằng Giã", "Xã", "Bang Gia"],
                        ["08056", "Đại Phạm", "Xã", "Dai Pham"],
                        ["08062", "Đan Thượng", "Xã", "Dan Thuong"],
                        ["08092", "Gia Điền", "Xã", "Gia Dien"],
                        ["08053", "Hạ Hoà", "Thị trấn", "Ha Hoa"],
                        ["08065", "Hà Lương", "Xã", "Ha Luong"],
                        ["08080", "Hiền Lương", "Xã", "Hien Luong"],
                        ["08104", "Hương Xạ", "Xã", "Huong Xa"],
                        ["08122", "Lang Sơn", "Xã", "Lang Son"],
                        ["08140", "Minh Côi", "Xã", "Minh Coi"],
                        ["08119", "Minh Hạc", "Xã", "Minh Hac"],
                        ["08089", "Phương Viên", "Xã", "Phuong Vien"],
                        ["08071", "Tứ Hiệp", "Xã", "Tu Hiep"],
                        ["08134", "Văn Lang", "Xã", "Van Lang"],
                        ["08143", "Vĩnh Chân", "Xã", "Vinh Chan"],
                        ["08131", "Vô Tranh", "Xã", "Vo Tranh"],
                        ["08110", "Xuân Áng", "Xã", "Xuan Ang"],
                        ["08113", "Yên Kỳ", "Xã", "Yen Ky"],
                        ["08128", "Yên Luật", "Xã", "Yen Luat"]
                    ]
                ],
                [
                    "237", "Lâm Thao", "Huyện", "Lam Thao",
                    [
                        ["08539", "Bản Nguyên", "Xã", "Ban Nguyen"],
                        ["08527", "Cao Xá", "Xã", "Cao Xa"],
                        ["08498", "Hùng Sơn", "Thị trấn", "Hung Son"],
                        ["08494", "Lâm Thao", "Thị trấn", "Lam Thao"],
                        ["08521", "Phùng Nguyên", "Xã", "Phung Nguyen"],
                        ["08518", "Sơn Vi", "Xã", "Son Vi"],
                        ["08512", "Thạch Sơn", "Xã", "Thach Son"],
                        ["08497", "Tiên Kiên", "Xã", "Tien Kien"],
                        ["08536", "Tứ Xã", "Xã", "Tu Xa"],
                        ["08533", "Vĩnh Lại", "Xã", "Vinh Lai"],
                        ["08509", "Xuân Huy", "Xã", "Xuan Huy"],
                        ["08500", "Xuân Lũng", "Xã", "Xuan Lung"]
                    ]
                ],
                [
                    "233", "Phù Ninh", "Huyện", "Phu Ninh",
                    [
                        ["08272", "An Đạo", "Xã", "An Dao"],
                        ["08254", "Bảo Thanh", "Xã", "Bao Thanh"],
                        ["08275", "Bình Phú", "Xã", "Binh Phu"],
                        ["08260", "Gia Thanh", "Xã", "Gia Thanh"],
                        ["08251", "Hạ Giáp", "Xã", "Ha Giap"],
                        ["08234", "Lệ Mỹ", "Xã", "Le My"],
                        ["08236", "Liên Hoa", "Xã", "Lien Hoa"],
                        ["08230", "Phong Châu", "Thị trấn", "Phong Chau"],
                        ["08257", "Phú Lộc", "Xã", "Phu Loc"],
                        ["08233", "Phú Mỹ", "Xã", "Phu My"],
                        ["08266", "Phú Nham", "Xã", "Phu Nham"],
                        ["08278", "Phù Ninh", "Xã", "Phu Ninh"],
                        ["08263", "Tiên Du", "Xã", "Tien Du"],
                        ["08248", "Tiên Phú", "Xã", "Tien Phu"],
                        ["08239", "Trạm Thản", "Xã", "Tram Than"],
                        ["08242", "Trị Quận", "Xã", "Tri Quan"],
                        ["08245", "Trung Giáp", "Xã", "Trung Giap"]
                    ]
                ],
                [
                    "228", "Phú Thọ", "Thị xã", "Phu Tho",
                    [
                        ["07948", "Âu Cơ", "Phường", "Au Co"],
                        ["07951", "Hà Lộc", "Xã", "Ha Loc"],
                        ["07963", "Hà Thạch", "Xã", "Ha Thach"],
                        ["07942", "Hùng Vương", "Phường", "Hung Vuong"],
                        ["07945", "Phong Châu", "Phường", "Phong Chau"],
                        ["07954", "Phú Hộ", "Xã", "Phu Ho"],
                        ["07960", "Thanh Minh", "Xã", "Thanh Minh"],
                        ["07966", "Thanh Vinh", "Phường", "Thanh Vinh"],
                        ["07957", "Văn Lung", "Xã", "Van Lung"]
                    ]
                ],
                [
                    "236", "Tam Nông", "Huyện", "Tam Nong",
                    [
                        ["08443", "Bắc Sơn", "Xã", "Bac Son"],
                        ["08491", "Dân Quyền", "Xã", "Dan Quyen"],
                        ["08482", "Dị Nậu", "Xã", "Di Nau"],
                        ["08440", "Hiền Quan", "Xã", "Hien Quan"],
                        ["08434", "Hưng Hoá", "Thị trấn", "Hung Hoa"],
                        ["08473", "Hương Nộn", "Xã", "Huong Non"],
                        ["08461", "Lam Sơn", "Xã", "Lam Son"],
                        ["08470", "Quang Húc", "Xã", "Quang Huc"],
                        ["08476", "Tề Lễ", "Xã", "Te Le"],
                        ["08446", "Thanh Uyên", "Xã", "Thanh Uyen"],
                        ["08479", "Thọ Văn", "Xã", "Tho Van"],
                        ["08467", "Vạn Xuân", "Xã", "Van Xuan"]
                    ]
                ],
                [
                    "240", "Tân Sơn", "Huyện", "Tan Son",
                    [
                        ["08557", "Đồng Sơn", "Xã", "Dong Son"],
                        ["08554", "Kiệt Sơn", "Xã", "Kiet Son"],
                        ["08617", "Kim Thượng", "Xã", "Kim Thuong"],
                        ["08560", "Lai Đồng", "Xã", "Lai Dong"],
                        ["08608", "Long Cốc", "Xã", "Long Coc"],
                        ["08593", "Minh Đài", "Xã", "Minh Dai"],
                        ["08569", "Mỹ Thuận", "Xã", "My Thuan"],
                        ["08620", "Tam Thanh", "Xã", "Tam Thanh"],
                        ["08566", "Tân Phú", "Xã", "Tan Phu"],
                        ["08578", "Tân Sơn", "Xã", "Tan Son"],
                        ["08548", "Thạch Kiệt", "Xã", "Thach Kiet"],
                        ["08545", "Thu Cúc", "Xã", "Thu Cuc"],
                        ["08551", "Thu Ngạc", "Xã", "Thu Ngac"],
                        ["08596", "Văn Luông", "Xã", "Van Luong"],
                        ["08626", "Vinh Tiền", "Xã", "Vinh Tien"],
                        ["08590", "Xuân Đài", "Xã", "Xuan Dai"],
                        ["08599", "Xuân Sơn", "Xã", "Xuan Son"]
                    ]
                ],
                [
                    "232", "Thanh Ba", "Huyện", "Thanh Ba",
                    [
                        ["08206", "Chí Tiên", "Xã", "Chi Tien"],
                        ["08161", "Đại An", "Xã", "Dai An"],
                        ["08221", "Đỗ Sơn", "Xã", "Do Son"],
                        ["08224", "Đỗ Xuyên", "Xã", "Do Xuyen"],
                        ["08158", "Đông Lĩnh", "Xã", "Dong Linh"],
                        ["08209", "Đông Thành", "Xã", "Dong Thanh"],
                        ["08170", "Đồng Xuân", "Xã", "Dong Xuan"],
                        ["08164", "Hanh Cù", "Xã", "Hanh Cu"],
                        ["08203", "Hoàng Cương", "Xã", "Hoang Cuong"],
                        ["08197", "Khải Xuân", "Xã", "Khai Xuan"],
                        ["08227", "Lương Lỗ", "Xã", "Luong Lo"],
                        ["08200", "Mạn Lạn", "Xã", "Man Lan"],
                        ["08179", "Ninh Dân", "Xã", "Ninh Dan"],
                        ["08173", "Quảng Yên", "Xã", "Quang Yen"],
                        ["08215", "Sơn Cương", "Xã", "Son Cuong"],
                        ["08152", "Thanh Ba", "Thị trấn", "Thanh Ba"],
                        ["08218", "Thanh Hà", "Xã", "Thanh Ha"],
                        ["08156", "Vân Lĩnh", "Xã", "Van Linh"],
                        ["08194", "Võ Lao", "Xã", "Vo Lao"]
                    ]
                ],
                [
                    "238", "Thanh Sơn", "Huyện", "Thanh Son",
                    [
                        ["08614", "Cự Đồng", "Xã", "Cu Dong"],
                        ["08602", "Cự Thắng", "Xã", "Cu Thang"],
                        ["08572", "Địch Quả", "Xã", "Dich Qua"],
                        ["08638", "Đông Cửu", "Xã", "Dong Cuu"],
                        ["08575", "Giáp Lai", "Xã", "Giap Lai"],
                        ["08632", "Hương Cần", "Xã", "Huong Can"],
                        ["08635", "Khả Cửu", "Xã", "Kha Cuu"],
                        ["08653", "Lương Nha", "Xã", "Luong Nha"],
                        ["08563", "Sơn Hùng", "Xã", "Son Hung"],
                        ["08641", "Tân Lập", "Xã", "Tan Lap"],
                        ["08629", "Tân Minh", "Xã", "Tan Minh"],
                        ["08605", "Tất Thắng", "Xã", "Tat Thang"],
                        ["08587", "Thạch Khoán", "Xã", "Thach Khoan"],
                        ["08623", "Thắng Sơn", "Xã", "Thang Son"],
                        ["08542", "Thanh Sơn", "Thị trấn", "Thanh Son"],
                        ["08581", "Thục Luyện", "Xã", "Thuc Luyen"],
                        ["08650", "Thượng Cửu", "Xã", "Thuong Cuu"],
                        ["08659", "Tinh Nhuệ", "Xã", "Tinh Nhue"],
                        ["08611", "Văn Miếu", "Xã", "Van Mieu"],
                        ["08584", "Võ Miếu", "Xã", "Vo Mieu"],
                        ["08644", "Yên Lãng", "Xã", "Yen Lang"],
                        ["08647", "Yên Lương", "Xã", "Yen Luong"],
                        ["08656", "Yên Sơn", "Xã", "Yen Son"]
                    ]
                ],
                [
                    "239", "Thanh Thuỷ", "Huyện", "Thanh Thuy",
                    [
                        ["08680", "Bảo Yên", "Xã", "Bao Yen"],
                        ["08662", "Đào Xá", "Xã", "Dao Xa"],
                        ["08683", "Đoan Hạ", "Xã", "Doan Ha"],
                        ["08686", "Đồng Trung", "Xã", "Dong Trung"],
                        ["08689", "Hoàng Xá", "Xã", "Hoang Xa"],
                        ["08677", "Sơn Thủy", "Xã", "Son Thuy"],
                        ["08671", "Tân Phương", "Xã", "Tan Phuong"],
                        ["08665", "Thạch Đồng", "Xã", "Thach Dong"],
                        ["08674", "Thanh Thủy", "Thị trấn", "Thanh Thuy"],
                        ["08701", "Tu Vũ", "Xã", "Tu Vu"],
                        ["08668", "Xuân Lộc", "Xã", "Xuan Loc"]
                    ]
                ],
                [
                    "227", "Việt Trì", "Thành phố", "Viet Tri",
                    [
                        ["07912", "Bạch Hạc", "Phường", "Bach Hac"],
                        ["07915", "Bến Gót", "Phường", "Ben Got"],
                        ["08506", "Chu Hóa", "Xã", "Chu Hoa"],
                        ["07888", "Dữu Lâu", "Phường", "Duu Lau"],
                        ["07900", "Gia Cẩm", "Phường", "Gia Cam"],
                        ["08287", "Hùng Lô", "Xã", "Hung Lo"],
                        ["08503", "Hy Cương", "Xã", "Hy Cuong"],
                        ["08281", "Kim Đức", "Xã", "Kim Duc"],
                        ["07933", "Minh Nông", "Phường", "Minh Nong"],
                        ["07927", "Minh Phương", "Phường", "Minh Phuong"],
                        ["07894", "Nông Trang", "Phường", "Nong Trang"],
                        ["07921", "Phượng Lâu", "Xã", "Phuong Lau"],
                        ["07936", "Sông Lô", "Xã", "Song Lo"],
                        ["07897", "Tân Dân", "Phường", "Tan Dan"],
                        ["08515", "Thanh Đình", "Xã", "Thanh Dinh"],
                        ["07909", "Thanh Miếu", "Phường", "Thanh Mieu"],
                        ["07906", "Thọ Sơn", "Phường", "Tho Son"],
                        ["07924", "Thụy Vân", "Xã", "Thuy Van"],
                        ["07903", "Tiên Cát", "Phường", "Tien Cat"],
                        ["07930", "Trưng Vương", "Xã", "Trung Vuong"],
                        ["07891", "Vân Cơ", "Phường", "Van Co"],
                        ["07918", "Vân Phú", "Phường", "Van Phu"]
                    ]
                ],
                [
                    "234", "Yên Lập", "Huyện", "Yen Lap",
                    [
                        ["08320", "Đồng Lạc", "Xã", "Dong Lac"],
                        ["08326", "Đồng Thịnh", "Xã", "Dong Thinh"],
                        ["08314", "Hưng Long", "Xã", "Hung Long"],
                        ["08299", "Lương Sơn", "Xã", "Luong Son"],
                        ["08332", "Minh Hòa", "Xã", "Minh Hoa"],
                        ["08293", "Mỹ Lung", "Xã", "My Lung"],
                        ["08296", "Mỹ Lương", "Xã", "My Luong"],
                        ["08317", "Nga Hoàng", "Xã", "Nga Hoang"],
                        ["08338", "Ngọc Đồng", "Xã", "Ngoc Dong"],
                        ["08335", "Ngọc Lập", "Xã", "Ngoc Lap"],
                        ["08329", "Phúc Khánh", "Xã", "Phuc Khanh"],
                        ["08323", "Thượng Long", "Xã", "Thuong Long"],
                        ["08311", "Trung Sơn", "Xã", "Trung Son"],
                        ["08302", "Xuân An", "Xã", "Xuan An"],
                        ["08308", "Xuân Thủy", "Xã", "Xuan Thuy"],
                        ["08305", "Xuân Viên", "Xã", "Xuan Vien"],
                        ["08290", "Yên Lập", "Thị trấn", "Yen Lap"]
                    ]
                ]
            ]
        ],
        [
            "54", "Phú Yên", "Tỉnh", "Phu Yen",
            [
                [
                    "564", "Đông Hòa", "Thị xã", "Dong Hoa",
                    [
                        ["22246", "Hòa Hiệp Bắc", "Phường", "Hoa Hiep Bac"],
                        ["22282", "Hòa Hiệp Nam", "Phường", "Hoa Hiep Nam"],
                        ["22261", "Hoà Hiệp Trung", "Phường", "Hoa Hiep Trung"],
                        ["22297", "Hòa Tâm", "Xã", "Hoa Tam"],
                        ["22267", "Hòa Tân Đông", "Xã", "Hoa Tan Dong"],
                        ["22243", "Hòa Thành", "Xã", "Hoa Thanh"],
                        ["22258", "Hoà Vinh", "Phường", "Hoa Vinh"],
                        ["22291", "Hòa Xuân Đông", "Xã", "Hoa Xuan Dong"],
                        ["22300", "Hòa Xuân Nam", "Xã", "Hoa Xuan Nam"],
                        ["22279", "Hòa Xuân Tây", "Phường", "Hoa Xuan Tay"]
                    ]
                ],
                [
                    "558", "Đồng Xuân", "Huyện", "Dong Xuan",
                    [
                        ["22084", "Đa Lộc", "Xã", "Da Loc"],
                        ["22081", "La Hai", "Thị trấn", "La Hai"],
                        ["22087", "Phú Mỡ", "Xã", "Phu Mo"],
                        ["22090", "Xuân Lãnh", "Xã", "Xuan Lanh"],
                        ["22093", "Xuân Long", "Xã", "Xuan Long"],
                        ["22111", "Xuân Phước", "Xã", "Xuan Phuoc"],
                        ["22096", "Xuân Quang 1", "Xã", "Xuan Quang 1"],
                        ["22102", "Xuân Quang 2", "Xã", "Xuan Quang 2"],
                        ["22108", "Xuân Quang 3", "Xã", "Xuan Quang 3"],
                        ["22099", "Xuân Sơn Bắc", "Xã", "Xuan Son Bac"],
                        ["22105", "Xuân Sơn Nam", "Xã", "Xuan Son Nam"]
                    ]
                ],
                [
                    "563", "Phú Hoà", "Huyện", "Phu Hoa",
                    [
                        ["22315", "Hòa An", "Xã", "Hoa An"],
                        ["22318", "Hòa Định Đông", "Xã", "Hoa Dinh Dong"],
                        ["22321", "Hòa Định Tây", "Xã", "Hoa Dinh Tay"],
                        ["22309", "Hòa Hội", "Xã", "Hoa Hoi"],
                        ["22303", "Hòa Quang Bắc", "Xã", "Hoa Quang Bac"],
                        ["22306", "Hòa Quang Nam", "Xã", "Hoa Quang Nam"],
                        ["22324", "Hòa Thắng", "Xã", "Hoa Thang"],
                        ["22312", "Hòa Trị", "Xã", "Hoa Tri"],
                        ["22319", "Phú Hoà", "Thị Trấn", "Phu Hoa"]
                    ]
                ],
                [
                    "560", "Sơn Hòa", "Huyện", "Son Hoa",
                    [
                        ["22180", "Cà Lúi", "Xã", "Ca Lui"],
                        ["22165", "Củng Sơn", "Thị trấn", "Cung Son"],
                        ["22192", "Eachà Rang", "Xã", "Eacha Rang"],
                        ["22195", "Krông Pa", "Xã", "Krong Pa"],
                        ["22168", "Phước Tân", "Xã", "Phuoc Tan"],
                        ["22174", "Sơn Định", "Xã", "Son Dinh"],
                        ["22201", "Sơn Hà", "Xã", "Son Ha"],
                        ["22171", "Sơn Hội", "Xã", "Son Hoi"],
                        ["22177", "Sơn Long", "Xã", "Son Long"],
                        ["22189", "Sơn Nguyên", "Xã", "Son Nguyen"],
                        ["22183", "Sơn Phước", "Xã", "Son Phuoc"],
                        ["22186", "Sơn Xuân", "Xã", "Son Xuan"],
                        ["22198", "Suối Bạc", "Xã", "Suoi Bac"],
                        ["22204", "Suối Trai", "Xã", "Suoi Trai"]
                    ]
                ],
                [
                    "557", "Sông Cầu", "Thị xã", "Song Cau",
                    [
                        ["22060", "Xuân Bình", "Xã", "Xuan Binh"],
                        ["22066", "Xuân Cảnh", "Xã", "Xuan Canh"],
                        ["22076", "Xuân Đài", "Phường", "Xuan Dai"],
                        ["22054", "Xuân Hải", "Xã", "Xuan Hai"],
                        ["22052", "Xuân Lâm", "Xã", "Xuan Lam"],
                        ["22057", "Xuân Lộc", "Xã", "Xuan Loc"],
                        ["22051", "Xuân Phú", "Phường", "Xuan Phu"],
                        ["22072", "Xuân Phương", "Xã", "Xuan Phuong"],
                        ["22053", "Xuân Thành", "Phường", "Xuan Thanh"],
                        ["22069", "Xuân Thịnh", "Xã", "Xuan Thinh"],
                        ["22075", "Xuân Thọ 1", "Xã", "Xuan Tho 1"],
                        ["22078", "Xuân Thọ 2", "Xã", "Xuan Tho 2"],
                        ["22073", "Xuân Yên", "Phường", "Xuan Yen"]
                    ]
                ],
                [
                    "561", "Sông Hinh", "Huyện", "Song Hinh",
                    [
                        ["22222", "Đức Bình Đông", "Xã", "Duc Binh Dong"],
                        ["22213", "Đức Bình Tây", "Xã", "Duc Binh Tay"],
                        ["22216", "Ea Bá", "Xã", "Ea Ba"],
                        ["22210", "Ea Lâm", "Xã", "Ea Lam"],
                        ["22225", "EaBar", "Xã", "EaBar"],
                        ["22228", "EaBia", "Xã", "EaBia"],
                        ["22231", "EaTrol", "Xã", "EaTrol"],
                        ["22237", "Ealy", "Xã", "Ealy"],
                        ["22207", "Hai Riêng", "Thị trấn", "Hai Rieng"],
                        ["22219", "Sơn Giang", "Xã", "Son Giang"],
                        ["22234", "Sông Hinh", "Xã", "Song Hinh"]
                    ]
                ],
                [
                    "562", "Tây Hoà", "Huyện", "Tay Hoa",
                    [
                        ["22252", "Hòa Bình 1", "Xã", "Hoa Binh 1"],
                        ["22276", "Hòa Đồng", "Xã", "Hoa Dong"],
                        ["22285", "Hòa Mỹ Đông", "Xã", "Hoa My Dong"],
                        ["22288", "Hòa Mỹ Tây", "Xã", "Hoa My Tay"],
                        ["22264", "Hòa Phong", "Xã", "Hoa Phong"],
                        ["22270", "Hòa Phú", "Xã", "Hoa Phu"],
                        ["22273", "Hòa Tân Tây", "Xã", "Hoa Tan Tay"],
                        ["22294", "Hòa Thịnh", "Xã", "Hoa Thinh"],
                        ["22255", "Phú Thứ", "Thị trấn", "Phu Thu"],
                        ["22250", "Sơn Thành Đông", "Xã", "Son Thanh Dong"],
                        ["22249", "Sơn Thành Tây", "Xã", "Son Thanh Tay"]
                    ]
                ],
                [
                    "559", "Tuy An", "Huyện", "Tuy An",
                    [
                        ["22156", "An Chấn", "Xã", "An Chan"],
                        ["22138", "An Cư", "Xã", "An Cu"],
                        ["22117", "An Dân", "Xã", "An Dan"],
                        ["22129", "An Định", "Xã", "An Dinh"],
                        ["22150", "An Hiệp", "Xã", "An Hiep"],
                        ["22147", "An Hòa Hải", "Xã", "An Hoa Hai"],
                        ["22144", "An Lĩnh", "Xã", "An Linh"],
                        ["22153", "An Mỹ", "Xã", "An My"],
                        ["22132", "An Nghiệp", "Xã", "An Nghiep"],
                        ["22123", "An Ninh Đông", "Xã", "An Ninh Dong"],
                        ["22120", "An Ninh Tây", "Xã", "An Ninh Tay"],
                        ["22126", "An Thạch", "Xã", "An Thach"],
                        ["22159", "An Thọ", "Xã", "An Tho"],
                        ["22141", "An Xuân", "Xã", "An Xuan"],
                        ["22114", "Chí Thạnh", "Thị trấn", "Chi Thanh"]
                    ]
                ],
                [
                    "555", "Tuy Hoà", "Thành phố", "Tuy Hoa",
                    [
                        ["22015", "1", "Phường", "1"],
                        ["22021", "2", "Phường", "2"],
                        ["22027", "3", "Phường", "3"],
                        ["22030", "4", "Phường", "4"],
                        ["22033", "5", "Phường", "5"],
                        ["22039", "6", "Phường", "6"],
                        ["22036", "7", "Phường", "7"],
                        ["22018", "8", "Phường", "8"],
                        ["22024", "9", "Phường", "9"],
                        ["22162", "An Phú", "Xã", "An Phu"],
                        ["22045", "Bình Kiến", "Xã", "Binh Kien"],
                        ["22048", "Bình Ngọc", "Xã", "Binh Ngoc"],
                        ["22042", "Hòa Kiến", "Xã", "Hoa Kien"],
                        ["22041", "Phú Đông", "Phường", "Phu Dong"],
                        ["22240", "Phú Lâm", "Phường", "Phu Lam"],
                        ["22040", "Phú Thạnh", "Phường", "Phu Thanh"]
                    ]
                ]
            ]
        ],
        [
            "44", "Quảng Bình", "Tỉnh", "Quang Binh",
            [
                [
                    "458", "Ba Đồn", "Thị xã", "Ba Don",
                    [
                        ["19009", "Ba Đồn", "Phường", "Ba Don"],
                        ["19087", "Quảng Hải", "Xã", "Quang Hai"],
                        ["19105", "Quảng Hòa", "Xã", "Quang Hoa"],
                        ["19093", "Quảng Lộc", "Xã", "Quang Loc"],
                        ["19060", "Quảng Long", "Phường", "Quang Long"],
                        ["19108", "Quảng Minh", "Xã", "Quang Minh"],
                        ["19078", "Quảng Phong", "Phường", "Quang Phong"],
                        ["19102", "Quảng Phúc", "Phường", "Quang Phuc"],
                        ["19090", "Quảng Sơn", "Xã", "Quang Son"],
                        ["19084", "Quảng Tân", "Xã", "Quang Tan"],
                        ["19066", "Quảng Thọ", "Phường", "Quang Tho"],
                        ["19081", "Quảng Thuận", "Phường", "Quang Thuan"],
                        ["19096", "Quảng Thủy", "Xã", "Quang Thuy"],
                        ["19069", "Quảng Tiên", "Xã", "Quang Tien"],
                        ["19075", "Quảng Trung", "Xã", "Quang Trung"],
                        ["19099", "Quảng Văn", "Xã", "Quang Van"]
                    ]
                ],
                [
                    "455", "Bố Trạch", "Huyện", "Bo Trach",
                    [
                        ["19126", "Bắc Trạch", "Xã", "Bac Trach"],
                        ["19141", "Cự Nẫm", "Xã", "Cu Nam"],
                        ["19186", "Đại Trạch", "Xã", "Dai Trach"],
                        ["19159", "Đồng Trạch", "Xã", "Dong Trach"],
                        ["19162", "Đức Trạch", "Xã", "Duc Trach"],
                        ["19123", "Hạ Trạch", "Xã", "Ha Trach"],
                        ["19144", "Hải Phú", "Xã", "Hai Phu"],
                        ["19183", "Hòa Trạch", "Xã", "Hoa Trach"],
                        ["19111", "Hoàn Lão", "Thị trấn", "Hoan Lao"],
                        ["19156", "Hưng Trạch", "Xã", "Hung Trach"],
                        ["19129", "Lâm Trạch", "Xã", "Lam Trach"],
                        ["19135", "Liên Trạch", "Xã", "Lien Trach"],
                        ["19198", "Lý Trạch", "Xã", "Ly Trach"],
                        ["19120", "Mỹ Trạch", "Xã", "My Trach"],
                        ["19114", "NT Việt Trung", "Thị trấn", "NT Viet Trung"],
                        ["19195", "Nam Trạch", "Xã", "Nam Trach"],
                        ["19189", "Nhân Trạch", "Xã", "Nhan Trach"],
                        ["19165", "Phong Nha", "Thị trấn", "Phong Nha"],
                        ["19174", "Phú Định", "Xã", "Phu Dinh"],
                        ["19138", "Phúc Trạch", "Xã", "Phuc Trach"],
                        ["19150", "Sơn Lộc", "Xã", "Son Loc"],
                        ["19192", "Tân Trạch", "Xã", "Tan Trach"],
                        ["19180", "Tây Trạch", "Xã", "Tay Trach"],
                        ["19132", "Thanh Trạch", "Xã", "Thanh Trach"],
                        ["19147", "Thượng Trạch", "Xã", "Thuong Trach"],
                        ["19177", "Trung Trạch", "Xã", "Trung Trach"],
                        ["19168", "Vạn Trạch", "Xã", "Van Trach"],
                        ["19117", "Xuân Trạch", "Xã", "Xuan Trach"]
                    ]
                ],
                [
                    "450", "Đồng Hới", "Thành Phố", "Dong Hoi",
                    [
                        ["18859", "Bắc Lý", "Phường", "Bac Ly"],
                        ["18877", "Bắc Nghĩa", "Phường", "Bac Nghia"],
                        ["18889", "Bảo Ninh", "Xã", "Bao Ninh"],
                        ["18868", "Đồng Hải", "Phường", "Dong Hai"],
                        ["18856", "Đồng Phú", "Phường", "Dong Phu"],
                        ["18871", "Đồng Sơn", "Phường", "Dong Son"],
                        ["18898", "Đức Ninh", "Xã", "Duc Ninh"],
                        ["18880", "Đức Ninh Đông", "Phường", "Duc Ninh Dong"],
                        ["18853", "Hải Thành", "Phường", "Hai Thanh"],
                        ["18886", "Lộc Ninh", "Xã", "Loc Ninh"],
                        ["18865", "Nam Lý", "Phường", "Nam Ly"],
                        ["18892", "Nghĩa Ninh", "Xã", "Nghia Ninh"],
                        ["18874", "Phú Hải", "Phường", "Phu Hai"],
                        ["18883", "Quang Phú", "Xã", "Quang Phu"],
                        ["18895", "Thuận Đức", "Xã", "Thuan Duc"]
                    ]
                ],
                [
                    "457", "Lệ Thủy", "Huyện", "Le Thuy",
                    [
                        ["19264", "An Thủy", "Xã", "An Thuy"],
                        ["19270", "Cam Thủy", "Xã", "Cam Thuy"],
                        ["19291", "Dương Thủy", "Xã", "Duong Thuy"],
                        ["19258", "Hoa Thủy", "Xã", "Hoa Thuy"],
                        ["19252", "Hồng Thủy", "Xã", "Hong Thuy"],
                        ["19288", "Hưng Thủy", "Xã", "Hung Thuy"],
                        ["19249", "Kiến Giang", "Thị trấn", "Kien Giang"],
                        ["19318", "Kim Thủy", "Xã", "Kim Thuy"],
                        ["19327", "Lâm Thủy", "Xã", "Lam Thuy"],
                        ["19285", "Liên Thủy", "Xã", "Lien Thuy"],
                        ["19279", "Lộc Thủy", "Xã", "Loc Thuy"],
                        ["19309", "Mai Thủy", "Xã", "Mai Thuy"],
                        ["19303", "Mỹ Thủy", "Xã", "My Thuy"],
                        ["19246", "NT Lệ Ninh", "Thị trấn", "NT Le Ninh"],
                        ["19273", "Ngân Thủy", "Xã", "Ngan Thuy"],
                        ["19306", "Ngư Thủy ", "Xã", "Ngu Thuy "],
                        ["19255", "Ngư Thủy Bắc", "Xã", "Ngu Thuy Bac"],
                        ["19267", "Phong Thủy", "Xã", "Phong Thuy"],
                        ["19297", "Phú Thủy", "Xã", "Phu Thuy"],
                        ["19312", "Sen Thủy", "Xã", "Sen Thuy"],
                        ["19276", "Sơn Thủy", "Xã", "Son Thuy"],
                        ["19294", "Tân Thủy", "Xã", "Tan Thuy"],
                        ["19315", "Thái Thủy", "Xã", "Thai Thuy"],
                        ["19261", "Thanh Thủy", "Xã", "Thanh Thuy"],
                        ["19321", "Trường Thủy", "Xã", "Truong Thuy"],
                        ["19300", "Xuân Thủy", "Xã", "Xuan Thuy"]
                    ]
                ],
                [
                    "452", "Minh Hóa", "Huyện", "Minh Hoa",
                    [
                        ["18904", "Dân Hóa", "Xã", "Dan Hoa"],
                        ["18922", "Hóa Hợp", "Xã", "Hoa Hop"],
                        ["18910", "Hóa Phúc", "Xã", "Hoa Phuc"],
                        ["18937", "Hóa Sơn", "Xã", "Hoa Son"],
                        ["18916", "Hóa Thanh", "Xã", "Hoa Thanh"],
                        ["18919", "Hóa Tiến", "Xã", "Hoa Tien"],
                        ["18913", "Hồng Hóa", "Xã", "Hong Hoa"],
                        ["18931", "Minh Hóa", "Xã", "Minh Hoa"],
                        ["18901", "Quy Đạt", "Thị trấn", "Quy Dat"],
                        ["18934", "Tân Hóa", "Xã", "Tan Hoa"],
                        ["18946", "Thượng Hóa", "Xã", "Thuong Hoa"],
                        ["18907", "Trọng Hóa", "Xã", "Trong Hoa"],
                        ["18943", "Trung Hóa", "Xã", "Trung Hoa"],
                        ["18925", "Xuân Hóa", "Xã", "Xuan Hoa"],
                        ["18928", "Yên Hóa", "Xã", "Yen Hoa"]
                    ]
                ],
                [
                    "456", "Quảng Ninh", "Huyện", "Quang Ninh",
                    [
                        ["19240", "An Ninh", "Xã", "An Ninh"],
                        ["19222", "Duy Ninh", "Xã", "Duy Ninh"],
                        ["19225", "Gia Ninh", "Xã", "Gia Ninh"],
                        ["19216", "Hải Ninh", "Xã", "Hai Ninh"],
                        ["19219", "Hàm Ninh", "Xã", "Ham Ninh"],
                        ["19231", "Hiền Ninh", "Xã", "Hien Ninh"],
                        ["19207", "Lương Ninh", "Xã", "Luong Ninh"],
                        ["19201", "Quán Hàu", "Thị trấn", "Quan Hau"],
                        ["19234", "Tân Ninh", "Xã", "Tan Ninh"],
                        ["19204", "Trường Sơn", "Xã", "Truong Son"],
                        ["19228", "Trường Xuân", "Xã", "Truong Xuan"],
                        ["19243", "Vạn Ninh", "Xã", "Van Ninh"],
                        ["19210", "Vĩnh Ninh", "Xã", "Vinh Ninh"],
                        ["19213", "Võ Ninh", "Xã", "Vo Ninh"],
                        ["19237", "Xuân Ninh", "Xã", "Xuan Ninh"]
                    ]
                ],
                [
                    "454", "Quảng Trạch", "Huyện", "Quang Trach",
                    [
                        ["19036", "Cảnh Dương", "Xã", "Canh Duong"],
                        ["19048", "Cảnh Hóa", "Xã", "Canh Hoa"],
                        ["19051", "Liên Trường", "Xã", "Lien Truong"],
                        ["19063", "Phù Hóa", "Xã", "Phu Hoa"],
                        ["19024", "Quảng Châu", "Xã", "Quang Chau"],
                        ["19018", "Quảng Đông", "Xã", "Quang Dong"],
                        ["19012", "Quảng Hợp", "Xã", "Quang Hop"],
                        ["19042", "Quảng Hưng", "Xã", "Quang Hung"],
                        ["19015", "Quảng Kim", "Xã", "Quang Kim"],
                        ["19030", "Quảng Lưu", "Xã", "Quang Luu"],
                        ["19021", "Quảng Phú", "Xã", "Quang Phu"],
                        ["19057", "Quảng Phương", "Xã", "Quang Phuong"],
                        ["19027", "Quảng Thạch", "Xã", "Quang Thach"],
                        ["19072", "Quảng Thanh", "Xã", "Quang Thanh"],
                        ["19039", "Quảng Tiến", "Xã", "Quang Tien"],
                        ["19033", "Quảng Tùng", "Xã", "Quang Tung"],
                        ["19045", "Quảng Xuân", "Xã", "Quang Xuan"]
                    ]
                ],
                [
                    "453", "Tuyên Hóa", "Huyện", "Tuyen Hoa",
                    [
                        ["19003", "Cao Quảng", "Xã", "Cao Quang"],
                        ["19000", "Châu Hóa", "Xã", "Chau Hoa"],
                        ["18976", "Đồng Hóa", "Xã", "Dong Hoa"],
                        ["18949", "Đồng Lê", "Thị trấn", "Dong Le"],
                        ["18988", "Đức Hóa", "Xã", "Duc Hoa"],
                        ["18952", "Hương Hóa", "Xã", "Huong Hoa"],
                        ["18955", "Kim Hóa", "Xã", "Kim Hoa"],
                        ["18967", "Lâm Hóa", "Xã", "Lam Hoa"],
                        ["18970", "Lê Hóa", "Xã", "Le Hoa"],
                        ["18994", "Mai Hóa", "Xã", "Mai Hoa"],
                        ["18979", "Ngư Hóa", "Xã", "Ngu Hoa"],
                        ["18991", "Phong Hóa", "Xã", "Phong Hoa"],
                        ["18973", "Sơn Hóa", "Xã", "Son Hoa"],
                        ["18985", "Thạch Hóa", "Xã", "Thach Hoa"],
                        ["18958", "Thanh Hóa", "Xã", "Thanh Hoa"],
                        ["18961", "Thanh Thạch", "Xã", "Thanh Thach"],
                        ["18964", "Thuận Hóa", "Xã", "Thuan Hoa"],
                        ["18997", "Tiến Hóa", "Xã", "Tien Hoa"],
                        ["19006", "Văn Hóa", "Xã", "Van Hoa"]
                    ]
                ]
            ]
        ],
        [
            "49", "Quảng Nam", "Tỉnh", "Quang Nam",
            [
                [
                    "515", "Bắc Trà My", "Huyện", "Bac Tra My",
                    [
                        ["20917", "Trà Bui", "Xã", "Tra Bui"],
                        ["20920", "Trà Đốc", "Xã", "Tra Doc"],
                        ["20908", "Trà Đông", "Xã", "Tra Dong"],
                        ["20911", "Trà Dương", "Xã", "Tra Duong"],
                        ["20926", "Trà Giác", "Xã", "Tra Giac"],
                        ["20914", "Trà Giang", "Xã", "Tra Giang"],
                        ["20929", "Trà Giáp", "Xã", "Tra Giap"],
                        ["20932", "Trà Ka", "Xã", "Tra Ka"],
                        ["20902", "Trà Kót", "Xã", "Tra Kot"],
                        ["20899", "Trà My", "Thị trấn", "Tra My"],
                        ["20905", "Trà Nú", "Xã", "Tra Nu"],
                        ["20900", "Trà Sơn", "Xã", "Tra Son"],
                        ["20923", "Trà Tân", "Xã", "Tra Tan"]
                    ]
                ],
                [
                    "506", "Đại Lộc", "Huyện", "Dai Loc",
                    [
                        ["20500", "Ái Nghĩa", "Thị Trấn", "Ai Nghia"],
                        ["20547", "Đại An", "Xã", "Dai An"],
                        ["20530", "Đại Chánh", "Xã", "Dai Chanh"],
                        ["20545", "Đại Cường", "Xã", "Dai Cuong"],
                        ["20515", "Đại Đồng", "Xã", "Dai Dong"],
                        ["20524", "Đại Hiệp", "Xã", "Dai Hiep"],
                        ["20548", "Đại Hòa", "Xã", "Dai Hoa"],
                        ["20512", "Đại Hồng", "Xã", "Dai Hong"],
                        ["20509", "Đại Hưng", "Xã", "Dai Hung"],
                        ["20506", "Đại Lãnh", "Xã", "Dai Lanh"],
                        ["20539", "Đại Minh", "Xã", "Dai Minh"],
                        ["20521", "Đại Nghĩa", "Xã", "Dai Nghia"],
                        ["20536", "Đại Phong", "Xã", "Dai Phong"],
                        ["20518", "Đại Quang", "Xã", "Dai Quang"],
                        ["20503", "Đại Sơn", "Xã", "Dai Son"],
                        ["20533", "Đại Tân", "Xã", "Dai Tan"],
                        ["20542", "Đại Thắng", "Xã", "Dai Thang"],
                        ["20527", "Đại Thạnh", "Xã", "Dai Thanh"]
                    ]
                ],
                [
                    "507", "Điện Bàn", "Thị xã", "Dien Ban",
                    [
                        ["20575", "Điện An", "Phường", "Dien An"],
                        ["20581", "Điện Dương", "Phường", "Dien Duong"],
                        ["20557", "Điện Hòa", "Xã", "Dien Hoa"],
                        ["20566", "Điện Hồng", "Xã", "Dien Hong"],
                        ["20593", "Điện Minh", "Xã", "Dien Minh"],
                        ["20578", "Điện Nam Bắc", "Phường", "Dien Nam Bac"],
                        ["20580", "Điện Nam Đông", "Phường", "Dien Nam Dong"],
                        ["20579", "Điện Nam Trung", "Phường", "Dien Nam Trung"],
                        ["20563", "Điện Ngọc", "Phường", "Dien Ngoc"],
                        ["20590", "Điện Phong", "Xã", "Dien Phong"],
                        ["20572", "Điện Phước", "Xã", "Dien Phuoc"],
                        ["20596", "Điện Phương", "Xã", "Dien Phuong"],
                        ["20584", "Điện Quang", "Xã", "Dien Quang"],
                        ["20560", "Điện Thắng Bắc", "Xã", "Dien Thang Bac"],
                        ["20562", "Điện Thắng Nam", "Xã", "Dien Thang Nam"],
                        ["20561", "Điện Thắng Trung", "Xã", "Dien Thang Trung"],
                        ["20569", "Điện Thọ", "Xã", "Dien Tho"],
                        ["20554", "Điện Tiến", "Xã", "Dien Tien"],
                        ["20587", "Điện Trung", "Xã", "Dien Trung"],
                        ["20551", "Vĩnh Điện", "Phường", "Vinh Dien"]
                    ]
                ],
                [
                    "505", "Đông Giang", "Huyện", "Dong Giang",
                    [
                        ["20482", " Tư", "Xã", " Tu"],
                        ["20488", "A Rooi", "Xã", "A Rooi"],
                        ["20479", "A Ting", "Xã", "A Ting"],
                        ["20485", "Ba", "Xã", "Ba"],
                        ["20476", "Jơ Ngây", "Xã", "Jo Ngay"],
                        ["20497", "Ka Dăng", "Xã", "Ka Dang"],
                        ["20494", "Mà Cooi", "Xã", "Ma Cooi"],
                        ["20467", "P Rao", "Thị trấn", "P Rao"],
                        ["20473", "Sông Kôn", "Xã", "Song Kon"],
                        ["20470", "Tà Lu", "Xã", "Ta Lu"],
                        ["20491", "Za Hung", "Xã", "Za Hung"]
                    ]
                ],
                [
                    "508", "Duy Xuyên", "Huyện", "Duy Xuyen",
                    [
                        ["20614", "Duy Châu", "Xã", "Duy Chau"],
                        ["20638", "Duy Hải", "Xã", "Duy Hai"],
                        ["20611", "Duy Hòa", "Xã", "Duy Hoa"],
                        ["20635", "Duy Nghĩa", "Xã", "Duy Nghia"],
                        ["20605", "Duy Phú", "Xã", "Duy Phu"],
                        ["20626", "Duy Phước", "Xã", "Duy Phuoc"],
                        ["20620", "Duy Sơn", "Xã", "Duy Son"],
                        ["20608", "Duy Tân", "Xã", "Duy Tan"],
                        ["20629", "Duy Thành", "Xã", "Duy Thanh"],
                        ["20602", "Duy Thu", "Xã", "Duy Thu"],
                        ["20617", "Duy Trinh", "Xã", "Duy Trinh"],
                        ["20623", "Duy Trung", "Xã", "Duy Trung"],
                        ["20632", "Duy Vinh", "Xã", "Duy Vinh"],
                        ["20599", "Nam Phước", "Thị trấn", "Nam Phuoc"]
                    ]
                ],
                [
                    "512", "Hiệp Đức", "Huyện", "Hiep Duc",
                    [
                        ["20767", "Bình Lâm", "Xã", "Binh Lam"],
                        ["20788", "Bình Sơn", "Xã", "Binh Son"],
                        ["20758", "Hiệp Hòa", "Xã", "Hiep Hoa"],
                        ["20761", "Hiệp Thuận", "Xã", "Hiep Thuan"],
                        ["20776", "Phước Gia", "Xã", "Phuoc Gia"],
                        ["20773", "Phước Trà", "Xã", "Phuoc Tra"],
                        ["20782", "Quế Lưu", "Xã", "Que Luu"],
                        ["20764", "Quế Thọ", "Xã", "Que Tho"],
                        ["20770", "Sông Trà", "Xã", "Song Tra"],
                        ["20779", "Tân Bình", "Thị trấn", "Tan Binh"],
                        ["20785", "Thăng Phước", "Xã", "Thang Phuoc"]
                    ]
                ],
                [
                    "503", "Hội An", "Thành phố", "Hoi An",
                    [
                        ["20419", "Cẩm An", "Phường", "Cam An"],
                        ["20413", "Cẩm Châu", "Phường", "Cam Chau"],
                        ["20422", "Cẩm Hà", "Xã", "Cam Ha"],
                        ["20425", "Cẩm Kim", "Xã", "Cam Kim"],
                        ["20428", "Cẩm Nam", "Phường", "Cam Nam"],
                        ["20404", "Cẩm Phô", "Phường", "Cam Pho"],
                        ["20431", "Cẩm Thanh", "Xã", "Cam Thanh"],
                        ["20416", "Cửa Đại", "Phường", "Cua Dai"],
                        ["20398", "Minh An", "Phường", "Minh An"],
                        ["20410", "Sơn Phong", "Phường", "Son Phong"],
                        ["20401", "Tân An", "Phường", "Tan An"],
                        ["20434", "Tân Hiệp", "Xã", "Tan Hiep"],
                        ["20407", "Thanh Hà", "Phường", "Thanh Ha"]
                    ]
                ],
                [
                    "510", "Nam Giang", "Huyện", "Nam Giang",
                    [
                        ["20713", "Cà Dy", "Xã", "Ca Dy"],
                        ["20707", "Chà Vàl", "Xã", "Cha Val"],
                        ["20699", "Chơ Chun", "Xã", "Cho Chun"],
                        ["20716", "Đắc Pre", "Xã", "Dac Pre"],
                        ["20719", "Đắc Pring", "Xã", "Dac Pring"],
                        ["20705", "Đắc Tôi", "Xã", "Dac Toi"],
                        ["20704", "La Dêê", "Xã", "La Dee"],
                        ["20698", "Laêê", "Xã", "Laee"],
                        ["20710", "Tà Bhinh", "Xã", "Ta Bhinh"],
                        ["20702", "Tà Pơơ", "Xã", "Ta Poo"],
                        ["20695", "Thạnh Mỹ", "Thị trấn", "Thanh My"],
                        ["20701", "Zuôich", "Xã", "Zuoich"]
                    ]
                ],
                [
                    "516", "Nam Trà My", "Huyện", "Nam Tra My",
                    [
                        ["20947", "Trà Cang", "Xã", "Tra Cang"],
                        ["20938", "Trà Dơn", "Xã", "Tra Don"],
                        ["20956", "Trà Don", "Xã", "Tra Don"],
                        ["20935", "Trà Leng", "Xã", "Tra Leng"],
                        ["20950", "Trà Linh", "Xã", "Tra Linh"],
                        ["20944", "Trà Mai", "Xã", "Tra Mai"],
                        ["20953", "Trà Nam", "Xã", "Tra Nam"],
                        ["20941", "Trà Tập", "Xã", "Tra Tap"],
                        ["20959", "Trà Vân", "Xã", "Tra Van"],
                        ["20962", "Trà Vinh", "Xã", "Tra Vinh"]
                    ]
                ],
                [
                    "519", "Nông Sơn", "Huyện", "Nong Son",
                    [
                        ["20668", "Ninh Phước", "Xã", "Ninh Phuoc"],
                        ["20669", "Phước Ninh", "Xã", "Phuoc Ninh"],
                        ["20692", "Quế Lâm", "Xã", "Que Lam"],
                        ["20671", "Quế Lộc", "Xã", "Que Loc"],
                        ["20656", "Quế Trung", "Xã", "Que Trung"],
                        ["20672", "Sơn Viên", "Xã", "Son Vien"]
                    ]
                ],
                [
                    "517", "Núi Thành", "Huyện", "Nui Thanh",
                    [
                        ["20965", "Núi Thành", "Thị trấn", "Nui Thanh"],
                        ["20983", "Tam Anh Bắc", "Xã", "Tam Anh Bac"],
                        ["20984", "Tam Anh Nam", "Xã", "Tam Anh Nam"],
                        ["20995", "Tam Giang", "Xã", "Tam Giang"],
                        ["20992", "Tam Hải", "Xã", "Tam Hai"],
                        ["20989", "Tam Hiệp", "Xã", "Tam Hiep"],
                        ["20986", "Tam Hòa", "Xã", "Tam Hoa"],
                        ["21005", "Tam Mỹ Đông", "Xã", "Tam My Dong"],
                        ["21004", "Tam Mỹ Tây", "Xã", "Tam My Tay"],
                        ["21001", "Tam Nghĩa", "Xã", "Tam Nghia"],
                        ["20998", "Tam Quang", "Xã", "Tam Quang"],
                        ["20977", "Tam Sơn", "Xã", "Tam Son"],
                        ["20980", "Tam Thạnh", "Xã", "Tam Thanh"],
                        ["20974", "Tam Tiến", "Xã", "Tam Tien"],
                        ["21007", "Tam Trà", "Xã", "Tam Tra"],
                        ["20968", "Tam Xuân I", "Xã", "Tam Xuan I"],
                        ["20971", "Tam Xuân II", "Xã", "Tam Xuan II"]
                    ]
                ],
                [
                    "518", "Phú Ninh", "Huyện", "Phu Ninh",
                    [
                        ["20364", "Phú Thịnh", "Thị trấn", "Phu Thinh"],
                        ["20368", "Tam An", "Xã", "Tam An"],
                        ["20387", "Tam Đại", "Xã", "Tam Dai"],
                        ["20374", "Tam Đàn", "Xã", "Tam Dan"],
                        ["20392", "Tam Dân", "Xã", "Tam Dan"],
                        ["20395", "Tam Lãnh", "Xã", "Tam Lanh"],
                        ["20377", "Tam Lộc", "Xã", "Tam Loc"],
                        ["20380", "Tam Phước", "Xã", "Tam Phuoc"],
                        ["20386", "Tam Thái", "Xã", "Tam Thai"],
                        ["20365", "Tam Thành", "Xã", "Tam Thanh"],
                        ["20383", "Tam Vinh", "Xã", "Tam Vinh"]
                    ]
                ],
                [
                    "511", "Phước Sơn", "Huyện", "Phuoc Son",
                    [
                        ["20722", "Khâm Đức", "Thị trấn", "Kham Duc"],
                        ["20740", "Phước Chánh", "Xã", "Phuoc Chanh"],
                        ["20743", "Phước Công", "Xã", "Phuoc Cong"],
                        ["20731", "Phước Đức", "Xã", "Phuoc Duc"],
                        ["20728", "Phước Hiệp", "Xã", "Phuoc Hiep"],
                        ["20729", "Phước Hoà", "Xã", "Phuoc Hoa"],
                        ["20746", "Phước Kim", "Xã", "Phuoc Kim"],
                        ["20749", "Phước Lộc", "Xã", "Phuoc Loc"],
                        ["20737", "Phước Mỹ", "Xã", "Phuoc My"],
                        ["20734", "Phước Năng", "Xã", "Phuoc Nang"],
                        ["20752", "Phước Thành", "Xã", "Phuoc Thanh"],
                        ["20725", "Phước Xuân", "Xã", "Phuoc Xuan"]
                    ]
                ],
                [
                    "509", "Quế Sơn", "Huyện", "Que Son",
                    [
                        ["20641", "Đông Phú", "Thị trấn", "Dong Phu"],
                        ["20651", "Hương An", "Thị trấn", "Huong An"],
                        ["20686", "Quế An", "Xã", "Que An"],
                        ["20680", "Quế Châu", "Xã", "Que Chau"],
                        ["20659", "Quế Hiệp", "Xã", "Que Hiep"],
                        ["20677", "Quế Long", "Xã", "Que Long"],
                        ["20689", "Quế Minh", "Xã", "Que Minh"],
                        ["20665", "Quế Mỹ", "Xã", "Que My"],
                        ["20683", "Quế Phong", "Xã", "Que Phong"],
                        ["20650", "Quế Phú", "Xã", "Que Phu"],
                        ["20662", "Quế Thuận", "Xã", "Que Thuan"],
                        ["20644", "Quế Xuân 1", "Xã", "Que Xuan 1"],
                        ["20647", "Quế Xuân 2", "Xã", "Que Xuan 2"]
                    ]
                ],
                [
                    "502", "Tam Kỳ", "Thành phố", "Tam Ky",
                    [
                        ["20341", "An Mỹ", "Phường", "An My"],
                        ["20356", "An Phú", "Phường", "An Phu"],
                        ["20350", "An Sơn", "Phường", "An Son"],
                        ["20347", "An Xuân", "Phường", "An Xuan"],
                        ["20344", "Hòa Hương", "Phường", "Hoa Huong"],
                        ["20375", "Hoà Thuận", "Phường", "Hoa Thuan"],
                        ["20338", "Phước Hòa", "Phường", "Phuoc Hoa"],
                        ["20389", "Tam Ngọc", "Xã", "Tam Ngoc"],
                        ["20371", "Tam Phú", "Xã", "Tam Phu"],
                        ["20362", "Tam Thăng", "Xã", "Tam Thang"],
                        ["20359", "Tam Thanh", "Xã", "Tam Thanh"],
                        ["20335", "Tân Thạnh", "Phường", "Tan Thanh"],
                        ["20353", "Trường Xuân", "Phường", "Truong Xuan"]
                    ]
                ],
                [
                    "504", "Tây Giang", "Huyện", "Tay Giang",
                    [
                        ["20452", "A Nông", "Xã", "A Nong"],
                        ["20455", "A Tiêng", "Xã", "A Tieng"],
                        ["20461", "A Vương", "Xã", "A Vuong"],
                        ["20443", "A Xan", "Xã", "A Xan"],
                        ["20458", "Bha Lê", "Xã", "Bha Le"],
                        ["20437", "Ch'ơm", "Xã", "Ch'om"],
                        ["20464", "Dang", "Xã", "Dang"],
                        ["20440", "Ga Ri", "Xã", "Ga Ri"],
                        ["20449", "Lăng", "Xã", "Lang"],
                        ["20446", "Tr'Hy", "Xã", "Tr'Hy"]
                    ]
                ],
                [
                    "513", "Thăng Bình", "Huyện", "Thang Binh",
                    [
                        ["20845", "Bình An", "Xã", "Binh An"],
                        ["20830", "Bình Chánh", "Xã", "Binh Chanh"],
                        ["20809", "Bình Đào", "Xã", "Binh Dao"],
                        ["20821", "Bình Định Bắc", "Xã", "Binh Dinh Bac"],
                        ["20822", "Bình Định Nam", "Xã", "Binh Dinh Nam"],
                        ["20794", "Bình Dương", "Xã", "Binh Duong"],
                        ["20797", "Bình Giang", "Xã", "Binh Giang"],
                        ["20839", "Bình Hải", "Xã", "Binh Hai"],
                        ["20815", "Bình Lãnh", "Xã", "Binh Lanh"],
                        ["20812", "Bình Minh", "Xã", "Binh Minh"],
                        ["20851", "Bình Nam", "Xã", "Binh Nam"],
                        ["20800", "Bình Nguyên", "Xã", "Binh Nguyen"],
                        ["20827", "Bình Phú", "Xã", "Binh Phu"],
                        ["20803", "Bình Phục", "Xã", "Binh Phuc"],
                        ["20842", "Bình Quế", "Xã", "Binh Que"],
                        ["20824", "Bình Quý", "Xã", "Binh Quy"],
                        ["20836", "Bình Sa", "Xã", "Binh Sa"],
                        ["20818", "Bình Trị", "Xã", "Binh Tri"],
                        ["20806", "Bình Triều", "Xã", "Binh Trieu"],
                        ["20848", "Bình Trung", "Xã", "Binh Trung"],
                        ["20833", "Bình Tú", "Xã", "Binh Tu"],
                        ["20791", "Hà Lam", "Thị trấn", "Ha Lam"]
                    ]
                ],
                [
                    "514", "Tiên Phước", "Huyện", "Tien Phuoc",
                    [
                        ["20890", "Tiên An", "Xã", "Tien An"],
                        ["20863", "Tiên Cẩm", "Xã", "Tien Cam"],
                        ["20878", "Tiên Cảnh", "Xã", "Tien Canh"],
                        ["20866", "Tiên Châu", "Xã", "Tien Chau"],
                        ["20860", "Tiên Hà", "Xã", "Tien Ha"],
                        ["20875", "Tiên Hiệp", "Xã", "Tien Hiep"],
                        ["20854", "Tiên Kỳ", "Thị trấn", "Tien Ky"],
                        ["20869", "Tiên Lãnh", "Xã", "Tien Lanh"],
                        ["20896", "Tiên Lập", "Xã", "Tien Lap"],
                        ["20893", "Tiên Lộc", "Xã", "Tien Loc"],
                        ["20881", "Tiên Mỹ", "Xã", "Tien My"],
                        ["20872", "Tiên Ngọc", "Xã", "Tien Ngoc"],
                        ["20884", "Tiên Phong", "Xã", "Tien Phong"],
                        ["20857", "Tiên Sơn", "Xã", "Tien Son"],
                        ["20887", "Tiên Thọ", "Xã", "Tien Tho"]
                    ]
                ]
            ]
        ],
        [
            "51", "Quảng Ngãi", "Tỉnh", "Quang Ngai",
            [
                [
                    "535", "Ba Tơ", "Huyện", "Ba To",
                    [
                        ["21526", "Ba Bích", "Xã", "Ba Bich"],
                        ["21511", "Ba Cung", "Xã", "Ba Cung"],
                        ["21487", "Ba Điền", "Xã", "Ba Dien"],
                        ["21499", "Ba Dinh", "Xã", "Ba Dinh"],
                        ["21496", "Ba Động", "Xã", "Ba Dong"],
                        ["21500", "Ba Giang", "Xã", "Ba Giang"],
                        ["21508", "Ba Khâm", "Xã", "Ba Kham"],
                        ["21532", "Ba Lế", "Xã", "Ba Le"],
                        ["21502", "Ba Liên", "Xã", "Ba Lien"],
                        ["21535", "Ba Nam", "Xã", "Ba Nam"],
                        ["21505", "Ba Ngạc", "Xã", "Ba Ngac"],
                        ["21493", "Ba Thành", "Xã", "Ba Thanh"],
                        ["21517", "Ba Tiêu", "Xã", "Ba Tieu"],
                        ["21484", "Ba Tơ", "Thị trấn", "Ba To"],
                        ["21523", "Ba Tô", "Xã", "Ba To"],
                        ["21520", "Ba Trang", "Xã", "Ba Trang"],
                        ["21529", "Ba Vì", "Xã", "Ba Vi"],
                        ["21490", "Ba Vinh", "Xã", "Ba Vinh"],
                        ["21538", "Ba Xa", "Xã", "Ba Xa"]
                    ]
                ],
                [
                    "524", "Bình Sơn", "Huyện", "Binh Son",
                    [
                        ["21064", "Bình An", "Xã", "Binh An"],
                        ["21052", "Bình Chánh", "Xã", "Binh Chanh"],
                        ["21112", "Bình Châu", "Xã", "Binh Chau"],
                        ["21100", "Bình Chương", "Xã", "Binh Chuong"],
                        ["21049", "Bình Đông", "Xã", "Binh Dong"],
                        ["21070", "Bình Dương", "Xã", "Binh Duong"],
                        ["21067", "Bình Hải", "Xã", "Binh Hai"],
                        ["21103", "Bình Hiệp", "Xã", "Binh Hiep"],
                        ["21079", "Bình Hòa", "Xã", "Binh Hoa"],
                        ["21058", "Bình Khương", "Xã", "Binh Khuong"],
                        ["21088", "Bình Long", "Xã", "Binh Long"],
                        ["21085", "Bình Minh", "Xã", "Binh Minh"],
                        ["21106", "Bình Mỹ", "Xã", "Binh My"],
                        ["21055", "Bình Nguyên", "Xã", "Binh Nguyen"],
                        ["21073", "Bình Phước", "Xã", "Binh Phuoc"],
                        ["21109", "Bình Tân Phú", "Xã", "Binh Tan Phu"],
                        ["21046", "Bình Thạnh", "Xã", "Binh Thanh"],
                        ["21091", "Bình Thanh ", "Xã", "Binh Thanh "],
                        ["21043", "Bình Thuận", "Xã", "Binh Thuan"],
                        ["21061", "Bình Trị", "Xã", "Binh Tri"],
                        ["21082", "Bình Trung", "Xã", "Binh Trung"],
                        ["21040", "Châu Ổ", "Thị Trấn", "Chau O"]
                    ]
                ],
                [
                    "534", "Đức Phổ", "Thị xã", "Duc Pho",
                    [
                        ["21439", "Nguyễn Nghiêm", "Phường", "Nguyen Nghiem"],
                        ["21442", "Phổ An", "Xã", "Pho An"],
                        ["21481", "Phổ Châu", "Xã", "Pho Chau"],
                        ["21472", "Phổ Cường", "Xã", "Pho Cuong"],
                        ["21469", "Phổ Hòa", "Phường", "Pho Hoa"],
                        ["21475", "Phổ Khánh", "Xã", "Pho Khanh"],
                        ["21463", "Phổ Minh", "Phường", "Pho Minh"],
                        ["21457", "Phổ Nhơn", "Xã", "Pho Nhon"],
                        ["21460", "Phổ Ninh", "Phường", "Pho Ninh"],
                        ["21445", "Phổ Phong", "Xã", "Pho Phong"],
                        ["21454", "Phổ Quang", "Phường", "Pho Quang"],
                        ["21478", "Phổ Thạnh", "Phường", "Pho Thanh"],
                        ["21448", "Phổ Thuận", "Xã", "Pho Thuan"],
                        ["21451", "Phổ Văn", "Phường", "Pho Van"],
                        ["21466", "Phổ Vinh", "Phường", "Pho Vinh"]
                    ]
                ],
                [
                    "536", "Lý Sơn", "Huyện", "Ly Son",
                    []
                ],
                [
                    "531", "Minh Long", "Huyện", "Minh Long",
                    [
                        ["21361", "Long Hiệp", "Xã", "Long Hiep"],
                        ["21352", "Long Mai", "Xã", "Long Mai"],
                        ["21358", "Long Môn", "Xã", "Long Mon"],
                        ["21349", "Long Sơn", "Xã", "Long Son"],
                        ["21355", "Thanh An", "Xã", "Thanh An"]
                    ]
                ],
                [
                    "533", "Mộ Đức", "Huyện", "Mo Duc",
                    [
                        ["21412", "Đức Chánh", "Xã", "Duc Chanh"],
                        ["21415", "Đức Hiệp", "Xã", "Duc Hiep"],
                        ["21424", "Đức Hòa", "Xã", "Duc Hoa"],
                        ["21436", "Đức Lân", "Xã", "Duc Lan"],
                        ["21403", "Đức Lợi", "Xã", "Duc Loi"],
                        ["21418", "Đức Minh", "Xã", "Duc Minh"],
                        ["21409", "Đức Nhuận", "Xã", "Duc Nhuan"],
                        ["21433", "Đức Phong", "Xã", "Duc Phong"],
                        ["21430", "Đức Phú", "Xã", "Duc Phu"],
                        ["21427", "Đức Tân", "Xã", "Duc Tan"],
                        ["21406", "Đức Thắng", "Xã", "Duc Thang"],
                        ["21421", "Đức Thạnh", "Xã", "Duc Thanh"],
                        ["21400", "Mộ Đức", "Thị trấn", "Mo Duc"]
                    ]
                ],
                [
                    "532", "Nghĩa Hành", "Huyện", "Nghia Hanh",
                    [
                        ["21364", "Chợ Chùa", "Thị trấn", "Cho Chua"],
                        ["21379", "Hành Đức", "Xã", "Hanh Duc"],
                        ["21370", "Hành Dũng", "Xã", "Hanh Dung"],
                        ["21382", "Hành Minh", "Xã", "Hanh Minh"],
                        ["21376", "Hành Nhân", "Xã", "Hanh Nhan"],
                        ["21385", "Hành Phước", "Xã", "Hanh Phuoc"],
                        ["21388", "Hành Thiện", "Xã", "Hanh Thien"],
                        ["21391", "Hành Thịnh", "Xã", "Hanh Thinh"],
                        ["21367", "Hành Thuận", "Xã", "Hanh Thuan"],
                        ["21397", "Hành Tín  Đông", "Xã", "Hanh Tin  Dong"],
                        ["21394", "Hành Tín Tây", "Xã", "Hanh Tin Tay"],
                        ["21373", "Hành Trung", "Xã", "Hanh Trung"]
                    ]
                ],
                [
                    "522", "Quảng Ngãi", "Thành phố", "Quang Ngai",
                    [
                        ["21031", "Chánh Lộ", "Phường", "Chanh Lo"],
                        ["21010", "Lê Hồng Phong", "Phường", "Le Hong Phong"],
                        ["21262", "Nghĩa An", "Xã", "Nghia An"],
                        ["21019", "Nghĩa Chánh", "Phường", "Nghia Chanh"],
                        ["21037", "Nghĩa Dõng", "Xã", "Nghia Dong"],
                        ["21034", "Nghĩa Dũng", "Xã", "Nghia Dung"],
                        ["21256", "Nghĩa Hà", "Xã", "Nghia Ha"],
                        ["21028", "Nghĩa Lộ", "Phường", "Nghia Lo"],
                        ["21253", "Nghĩa Phú", "Xã", "Nghia Phu"],
                        ["21025", "Nguyễn Nghiêm", "Phường", "Nguyen Nghiem"],
                        ["21016", "Quảng Phú", "Phường", "Quang Phu"],
                        ["21232", "Tịnh An", "Xã", "Tinh An"],
                        ["21202", "Tịnh Ấn Đông", "Xã", "Tinh An Dong"],
                        ["21223", "Tịnh Ấn Tây", "Xã", "Tinh An Tay"],
                        ["21208", "Tịnh Châu", "Xã", "Tinh Chau"],
                        ["21187", "Tịnh Hòa", "Xã", "Tinh Hoa"],
                        ["21211", "Tịnh Khê", "Xã", "Tinh Khe"],
                        ["21190", "Tịnh Kỳ", "Xã", "Tinh Ky"],
                        ["21214", "Tịnh Long", "Xã", "Tinh Long"],
                        ["21199", "Tịnh Thiện", "Xã", "Tinh Thien"],
                        ["21022", "Trần Hưng Đạo", "Phường", "Tran Hung Dao"],
                        ["21013", "Trần Phú", "Phường", "Tran Phu"],
                        ["21172", "Trương Quang Trọng", "Phường", "Truong Quang Trong"]
                    ]
                ],
                [
                    "529", "Sơn Hà", "Huyện", "Son Ha",
                    [
                        ["21289", "Di Lăng", "Thị trấn", "Di Lang"],
                        ["21328", "Sơn Ba", "Xã", "Son Ba"],
                        ["21301", "Sơn Bao", "Xã", "Son Bao"],
                        ["21316", "Sơn Cao", "Xã", "Son Cao"],
                        ["21307", "Sơn Giang", "Xã", "Son Giang"],
                        ["21292", "Sơn Hạ", "Xã", "Son Ha"],
                        ["21319", "Sơn Hải", "Xã", "Son Hai"],
                        ["21325", "Sơn Kỳ", "Xã", "Son Ky"],
                        ["21304", "Sơn Linh", "Xã", "Son Linh"],
                        ["21298", "Sơn Nham", "Xã", "Son Nham"],
                        ["21295", "Sơn Thành", "Xã", "Son Thanh"],
                        ["21313", "Sơn Thượng", "Xã", "Son Thuong"],
                        ["21322", "Sơn Thủy", "Xã", "Son Thuy"],
                        ["21310", "Sơn Trung", "Xã", "Son Trung"]
                    ]
                ],
                [
                    "530", "Sơn Tây", "Huyện", "Son Tay",
                    [
                        ["21331", "Sơn Bua", "Xã", "Son Bua"],
                        ["21340", "Sơn Dung", "Xã", "Son Dung"],
                        ["21346", "Sơn Lập", "Xã", "Son Lap"],
                        ["21335", "Sơn Liên", "Xã", "Son Lien"],
                        ["21341", "Sơn Long", "Xã", "Son Long"],
                        ["21338", "Sơn Màu", "Xã", "Son Mau"],
                        ["21334", "Sơn Mùa", "Xã", "Son Mua"],
                        ["21337", "Sơn Tân", "Xã", "Son Tan"],
                        ["21343", "Sơn Tinh", "Xã", "Son Tinh"]
                    ]
                ],
                [
                    "527", "Sơn Tịnh", "Huyện", "Son Tinh",
                    [
                        ["21205", "Tịnh Bắc", "Xã", "Tinh Bac"],
                        ["21193", "Tịnh Bình", "Xã", "Tinh Binh"],
                        ["21196", "Tịnh Đông", "Xã", "Tinh Dong"],
                        ["21226", "Tịnh Giang", "Xã", "Tinh Giang"],
                        ["21220", "Tịnh Hà", "Xã", "Tinh Ha"],
                        ["21184", "Tịnh Hiệp", "Xã", "Tinh Hiep"],
                        ["21229", "Tịnh Minh", "Xã", "Tinh Minh"],
                        ["21181", "Tịnh Phong", "Xã", "Tinh Phong"],
                        ["21217", "Tịnh Sơn", "Xã", "Tinh Son"],
                        ["21175", "Tịnh Thọ", "Xã", "Tinh Tho"],
                        ["21178", "Tịnh Trà", "Xã", "Tinh Tra"]
                    ]
                ],
                [
                    "525", "Trà Bồng", "Huyện", "Tra Bong",
                    [
                        ["21157", "Hương Trà", "Xã", "Huong Tra"],
                        ["21148", "Sơn Trà", "Xã", "Son Tra"],
                        ["21127", "Trà Bình", "Xã", "Tra Binh"],
                        ["21142", "Trà Bùi", "Xã", "Tra Bui"],
                        ["21118", "Trà Giang", "Xã", "Tra Giang"],
                        ["21124", "Trà Hiệp", "Xã", "Tra Hiep"],
                        ["21133", "Trà Lâm", "Xã", "Tra Lam"],
                        ["21154", "Trà Phong", "Xã", "Tra Phong"],
                        ["21130", "Trà Phú", "Xã", "Tra Phu"],
                        ["21139", "Trà Sơn", "Xã", "Tra Son"],
                        ["21136", "Trà Tân", "Xã", "Tra Tan"],
                        ["21166", "Trà Tây", "Xã", "Tra Tay"],
                        ["21145", "Trà Thanh", "Xã", "Tra Thanh"],
                        ["21121", "Trà Thủy", "Xã", "Tra Thuy"],
                        ["21163", "Trà Xinh", "Xã", "Tra Xinh"],
                        ["21115", "Trà Xuân", "Thị trấn", "Tra Xuan"]
                    ]
                ],
                [
                    "528", "Tư Nghĩa", "Huyện", "Tu Nghia",
                    [
                        ["21235", "La Hà", "Thị trấn", "La Ha"],
                        ["21271", "Nghĩa Điền", "Xã", "Nghia Dien"],
                        ["21280", "Nghĩa Hiệp", "Xã", "Nghia Hiep"],
                        ["21268", "Nghĩa Hòa", "Xã", "Nghia Hoa"],
                        ["21250", "Nghĩa Kỳ", "Xã", "Nghia Ky"],
                        ["21241", "Nghĩa Lâm", "Xã", "Nghia Lam"],
                        ["21286", "Nghĩa Mỹ", "Xã", "Nghia My"],
                        ["21283", "Nghĩa Phương", "Xã", "Nghia Phuong"],
                        ["21259", "Nghĩa Sơn", "Xã", "Nghia Son"],
                        ["21244", "Nghĩa Thắng", "Xã", "Nghia Thang"],
                        ["21247", "Nghĩa Thuận", "Xã", "Nghia Thuan"],
                        ["21274", "Nghĩa Thương", "Xã", "Nghia Thuong"],
                        ["21277", "Nghĩa Trung", "Xã", "Nghia Trung"],
                        ["21238", "Sông Vệ", "Thị trấn", "Song Ve"]
                    ]
                ]
            ]
        ],
        [
            "22", "Quảng Ninh", "Tỉnh", "Quang Ninh",
            [
                [
                    "202", "Ba Chẽ", "Huyện", "Ba Che",
                    [
                        ["06970", "Ba Chẽ", "Thị trấn", "Ba Che"],
                        ["06979", "Đạp Thanh", "Xã", "Dap Thanh"],
                        ["06988", "Đồn Đạc", "Xã", "Don Dac"],
                        ["06985", "Lương Mông", "Xã", "Luong Mong"],
                        ["06991", "Minh Cầm", "Xã", "Minh Cam"],
                        ["06982", "Nam Sơn", "Xã", "Nam Son"],
                        ["06976", "Thanh Lâm", "Xã", "Thanh Lam"],
                        ["06973", "Thanh Sơn", "Xã", "Thanh Son"]
                    ]
                ],
                [
                    "198", "Bình Liêu", "Huyện", "Binh Lieu",
                    [
                        ["06838", "Bình Liêu", "Thị trấn", "Binh Lieu"],
                        ["06844", "Đồng Tâm", "Xã", "Dong Tam"],
                        ["06847", "Đồng Văn", "Xã", "Dong Van"],
                        ["06841", "Hoành Mô", "Xã", "Hoanh Mo"],
                        ["06859", "Húc Động", "Xã", "Huc Dong"],
                        ["06856", "Lục Hồn", "Xã", "Luc Hon"],
                        ["06853", "Vô Ngại", "Xã", "Vo Ngai"]
                    ]
                ],
                [
                    "195", "Cẩm Phả", "Thành phố", "Cam Pha",
                    [
                        ["06796", "Cẩm Bình", "Phường", "Cam Binh"],
                        ["06769", "Cẩm Đông", "Phường", "Cam Dong"],
                        ["06802", "Cẩm Hải", "Xã", "Cam Hai"],
                        ["06772", "Cẩm Phú", "Phường", "Cam Phu"],
                        ["06766", "Cẩm Sơn", "Phường", "Cam Son"],
                        ["06775", "Cẩm Tây", "Phường", "Cam Tay"],
                        ["06787", "Cẩm Thạch", "Phường", "Cam Thach"],
                        ["06790", "Cẩm Thành", "Phường", "Cam Thanh"],
                        ["06781", "Cẩm Thịnh", "Phường", "Cam Thinh"],
                        ["06784", "Cẩm Thủy", "Phường", "Cam Thuy"],
                        ["06793", "Cẩm Trung", "Phường", "Cam Trung"],
                        ["06799", "Cộng Hòa", "Xã", "Cong Hoa"],
                        ["06763", "Cửa Ông", "Phường", "Cua Ong"],
                        ["06805", "Dương Huy", "Xã", "Duong Huy"],
                        ["06760", "Mông Dương", "Phường", "Mong Duong"],
                        ["06778", "Quang Hanh", "Phường", "Quang Hanh"]
                    ]
                ],
                [
                    "207", "Cô Tô", "Huyện", "Co To",
                    [
                        ["07192", "Cô Tô", "Thị trấn", "Co To"],
                        ["07195", "Đồng Tiến", "Xã", "Dong Tien"],
                        ["07198", "Thanh Lân", "Xã", "Thanh Lan"]
                    ]
                ],
                [
                    "200", "Đầm Hà", "Huyện", "Dam Ha",
                    [
                        ["06919", "Đại Bình", "Xã", "Dai Binh"],
                        ["06895", "Đầm Hà", "Thị trấn", "Dam Ha"],
                        ["06916", "Đầm Hà", "Xã", "Dam Ha"],
                        ["06910", "Dực Yên", "Xã", "Duc Yen"],
                        ["06901", "Quảng An", "Xã", "Quang An"],
                        ["06898", "Quảng Lâm", "Xã", "Quang Lam"],
                        ["06913", "Quảng Tân", "Xã", "Quang Tan"],
                        ["06904", "Tân Bình", "Xã", "Tan Binh"],
                        ["06917", "Tân Lập", "Xã", "Tan Lap"]
                    ]
                ],
                [
                    "205", "Đông Triều", "Thị xã", "Dong Trieu",
                    [
                        ["07075", "An Sinh", "Xã", "An Sinh"],
                        ["07090", "Bình Dương", "Xã", "Binh Duong"],
                        ["07081", "Bình Khê", "Xã", "Binh Khe"],
                        ["07072", "Đông Triều", "Phường", "Dong Trieu"],
                        ["07093", "Đức Chính", "Phường", "Duc Chinh"],
                        ["07114", "Hoàng Quế", "Phường", "Hoang Que"],
                        ["07120", "Hồng Phong", "Phường", "Hong Phong"],
                        ["07111", "Hồng Thái Đông", "Xã", "Hong Thai Dong"],
                        ["07108", "Hồng Thái Tây", "Xã", "Hong Thai Tay"],
                        ["07126", "Hưng Đạo", "Phường", "Hung Dao"],
                        ["07123", "Kim Sơn", "Phường", "Kim Son"],
                        ["07069", "Mạo Khê", "Phường", "Mao Khe"],
                        ["07099", "Nguyễn Huệ", "Xã", "Nguyen Hue"],
                        ["07087", "Tân Việt", "Xã", "Tan Viet"],
                        ["07102", "Thủy An", "Xã", "Thuy An"],
                        ["07096", "Tràng An", "Phường", "Trang An"],
                        ["07078", "Tràng Lương", "Xã", "Trang Luong"],
                        ["07084", "Việt Dân", "Xã", "Viet Dan"],
                        ["07105", "Xuân Sơn", "Phường", "Xuan Son"],
                        ["07129", "Yên Đức", "Xã", "Yen Duc"],
                        ["07117", "Yên Thọ", "Phường", "Yen Tho"]
                    ]
                ],
                [
                    "193", "Hạ Long", "Thành phố", "Ha Long",
                    [
                        ["06694", "Bạch Đằng", "Phường", "Bach Dang"],
                        ["06673", "Bãi Cháy", "Phường", "Bai Chay"],
                        ["07057", "Bằng Cả", "Xã", "Bang Ca"],
                        ["06676", "Cao Thắng", "Phường", "Cao Thang"],
                        ["06658", "Cao Xanh", "Phường", "Cao Xanh"],
                        ["06706", "Đại Yên", "Phường", "Dai Yen"],
                        ["07051", "Dân Chủ", "Xã", "Dan Chu"],
                        ["07042", "Đồng Lâm", "Xã", "Dong Lam"],
                        ["07036", "Đồng Sơn", "Xã", "Dong Son"],
                        ["06661", "Giếng Đáy", "Phường", "Gieng Day"],
                        ["06649", "Hà Khánh", "Phường", "Ha Khanh"],
                        ["06655", "Hà Khẩu", "Phường", "Ha Khau"],
                        ["06670", "Hà Lầm", "Phường", "Ha Lam"],
                        ["06652", "Hà Phong", "Phường", "Ha Phong"],
                        ["06667", "Hà Trung", "Phường", "Ha Trung"],
                        ["06664", "Hà Tu", "Phường", "Ha Tu"],
                        ["07045", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["07030", "Hoành Bồ", "Phường", "Hoanh Bo"],
                        ["06691", "Hồng Gai", "Phường", "Hong Gai"],
                        ["06697", "Hồng Hà", "Phường", "Hong Ha"],
                        ["06688", "Hồng Hải", "Phường", "Hong Hai"],
                        ["06679", "Hùng Thắng", "Phường", "Hung Thang"],
                        ["07033", "Kỳ Thượng", "Xã", "Ky Thuong"],
                        ["07066", "Lê Lợi", "Xã", "Le Loi"],
                        ["07054", "Quảng La", "Xã", "Quang La"],
                        ["07063", "Sơn Dương", "Xã", "Son Duong"],
                        ["07039", "Tân Dân", "Xã", "Tan Dan"],
                        ["07060", "Thống Nhất", "Xã", "Thong Nhat"],
                        ["06685", "Trần Hưng Đạo", "Phường", "Tran Hung Dao"],
                        ["06700", "Tuần Châu", "Phường", "Tuan Chau"],
                        ["06703", "Việt Hưng", "Phường", "Viet Hung"],
                        ["07048", "Vũ Oai", "Xã", "Vu Oai"],
                        ["06682", "Yết Kiêu", "Phường", "Yet Kieu"]
                    ]
                ],
                [
                    "201", "Hải Hà", "Huyện", "Hai Ha",
                    [
                        ["06967", "Cái Chiên", "Xã", "Cai Chien"],
                        ["06949", "Đường Hoa", "Xã", "Duong Hoa"],
                        ["06943", "Quảng Chính", "Xã", "Quang Chinh"],
                        ["06925", "Quảng Đức", "Xã", "Quang Duc"],
                        ["06922", "Quảng Hà", "Thị trấn", "Quang Ha"],
                        ["06946", "Quảng Long", "Xã", "Quang Long"],
                        ["06940", "Quảng Minh", "Xã", "Quang Minh"],
                        ["06952", "Quảng Phong", "Xã", "Quang Phong"],
                        ["06928", "Quảng Sơn", "Xã", "Quang Son"],
                        ["06931", "Quảng Thành", "Xã", "Quang Thanh"],
                        ["06937", "Quảng Thịnh", "Xã", "Quang Thinh"]
                    ]
                ],
                [
                    "194", "Móng Cái", "Thành phố", "Mong Cai",
                    [
                        ["06727", "Bắc Sơn", "Xã", "Bac Son"],
                        ["06751", "Bình Ngọc", "Phường", "Binh Ngoc"],
                        ["06730", "Hải Đông", "Xã", "Hai Dong"],
                        ["06742", "Hải Hoà", "Phường", "Hai Hoa"],
                        ["06724", "Hải Sơn", "Xã", "Hai Son"],
                        ["06733", "Hải Tiến", "Xã", "Hai Tien"],
                        ["06745", "Hải Xuân", "Xã", "Hai Xuan"],
                        ["06736", "Hải Yên", "Phường", "Hai Yen"],
                        ["06718", "Hoà Lạc", "Phường", "Hoa Lac"],
                        ["06709", "Ka Long", "Phường", "Ka Long"],
                        ["06715", "Ninh Dương", "Phường", "Ninh Duong"],
                        ["06739", "Quảng Nghĩa", "Xã", "Quang Nghia"],
                        ["06721", "Trà Cổ", "Phường", "Tra Co"],
                        ["06712", "Trần Phú", "Phường", "Tran Phu"],
                        ["06748", "Vạn Ninh", "Xã", "Van Ninh"],
                        ["06757", "Vĩnh Thực", "Xã", "Vinh Thuc"],
                        ["06754", "Vĩnh Trung", "Xã", "Vinh Trung"]
                    ]
                ],
                [
                    "206", "Quảng Yên", "Thị xã", "Quang Yen",
                    [
                        ["07171", "Cẩm La", "Xã", "Cam La"],
                        ["07150", "Cộng Hòa", "Phường", "Cong Hoa"],
                        ["07135", "Đông Mai", "Phường", "Dong Mai"],
                        ["07168", "Hà An", "Phường", "Ha An"],
                        ["07147", "Hiệp Hòa", "Xã", "Hiep Hoa"],
                        ["07156", "Hoàng Tân", "Xã", "Hoang Tan"],
                        ["07180", "Liên Hòa", "Xã", "Lien Hoa"],
                        ["07186", "Liên Vị", "Xã", "Lien Vi"],
                        ["07138", "Minh Thành", "Phường", "Minh Thanh"],
                        ["07165", "Nam Hoà", "Phường", "Nam Hoa"],
                        ["07183", "Phong Cốc", "Phường", "Phong Coc"],
                        ["07174", "Phong Hải", "Phường", "Phong Hai"],
                        ["07132", "Quảng Yên", "Phường", "Quang Yen"],
                        ["07144", "Sông Khoai", "Xã", "Song Khoai"],
                        ["07159", "Tân An", "Phường", "Tan An"],
                        ["07153", "Tiền An", "Xã", "Tien An"],
                        ["07189", "Tiền Phong", "Xã", "Tien Phong"],
                        ["07162", "Yên Giang", "Phường", "Yen Giang"],
                        ["07177", "Yên Hải", "Phường", "Yen Hai"]
                    ]
                ],
                [
                    "199", "Tiên Yên", "Huyện", "Tien Yen",
                    [
                        ["06868", "Đại Dực", "Xã", "Dai Duc"],
                        ["06874", "Điền Xá", "Xã", "Dien Xa"],
                        ["06883", "Đông Hải", "Xã", "Dong Hai"],
                        ["06877", "Đông Ngũ", "Xã", "Dong Ngu"],
                        ["06892", "Đồng Rui", "Xã", "Dong Rui"],
                        ["06865", "Hà Lâu", "Xã", "Ha Lau"],
                        ["06886", "Hải Lạng", "Xã", "Hai Lang"],
                        ["06871", "Phong Dụ", "Xã", "Phong Du"],
                        ["06889", "Tiên Lãng", "Xã", "Tien Lang"],
                        ["06862", "Tiên Yên", "Thị trấn", "Tien Yen"],
                        ["06880", "Yên Than", "Xã", "Yen Than"]
                    ]
                ],
                [
                    "196", "Uông Bí", "Thành phố", "Uong Bi",
                    [
                        ["06814", "Bắc Sơn", "Phường", "Bac Son"],
                        ["06823", "Nam Khê", "Phường", "Nam Khe"],
                        ["06832", "Phương Đông", "Phường", "Phuong Dong"],
                        ["06835", "Phương Nam", "Phường", "Phuong Nam"],
                        ["06817", "Quang Trung", "Phường", "Quang Trung"],
                        ["06811", "Thanh Sơn", "Phường", "Thanh Son"],
                        ["06829", "Thượng Yên Công", "Xã", "Thuong Yen Cong"],
                        ["06820", "Trưng Vương", "Phường", "Trung Vuong"],
                        ["06808", "Vàng Danh", "Phường", "Vang Danh"],
                        ["06826", "Yên Thanh", "Phường", "Yen Thanh"]
                    ]
                ],
                [
                    "203", "Vân Đồn", "Huyện", "Van Don",
                    [
                        ["07018", "Bản Sen", "Xã", "Ban Sen"],
                        ["07000", "Bình Dân", "Xã", "Binh Dan"],
                        ["06994", "Cái Rồng", "Thị trấn", "Cai Rong"],
                        ["06997", "Đài Xuyên", "Xã", "Dai Xuyen"],
                        ["07009", "Đoàn Kết", "Xã", "Doan Ket"],
                        ["07015", "Đông Xá", "Xã", "Dong Xa"],
                        ["07012", "Hạ Long", "Xã", "Ha Long"],
                        ["07006", "Minh Châu", "Xã", "Minh Chau"],
                        ["07027", "Ngọc Vừng", "Xã", "Ngoc Vung"],
                        ["07024", "Quan Lạn", "Xã", "Quan Lan"],
                        ["07021", "Thắng Lợi", "Xã", "Thang Loi"],
                        ["07003", "Vạn Yên", "Xã", "Van Yen"]
                    ]
                ]
            ]
        ],
        [
            "45", "Quảng Trị", "Tỉnh", "Quang Tri",
            [
                [
                    "468", "Cam Lộ", "Huyện", "Cam Lo",
                    [
                        ["19618", "Cam Chính", "Xã", "Cam Chinh"],
                        ["19615", "Cam Hiếu", "Xã", "Cam Hieu"],
                        ["19597", "Cam Lộ", "Thị trấn", "Cam Lo"],
                        ["19621", "Cam Nghĩa", "Xã", "Cam Nghia"],
                        ["19612", "Cam Thành", "Xã", "Cam Thanh"],
                        ["19606", "Cam Thủy", "Xã", "Cam Thuy"],
                        ["19600", "Cam Tuyền", "Xã", "Cam Tuyen"],
                        ["19603", "Thanh An", "Xã", "Thanh An"]
                    ]
                ],
                [
                    "471", "Cồn Cỏ", "Huyện", "Con Co",
                    []
                ],
                [
                    "467", "Đa Krông", "Huyện", "Da Krong",
                    [
                        ["19591", "A Bung", "Xã", "A Bung"],
                        ["19594", "A Ngo", "Xã", "A Ngo"],
                        ["19585", "A Vao", "Xã", "A Vao"],
                        ["19570", "Ba Lòng", "Xã", "Ba Long"],
                        ["19576", "Ba Nang", "Xã", "Ba Nang"],
                        ["19564", "Đa Krông", "Xã", "Da Krong"],
                        ["19582", "Húc Nghì", "Xã", "Huc Nghi"],
                        ["19561", "Hướng Hiệp", "Xã", "Huong Hiep"],
                        ["19555", "Krông Klang", "Thị trấn", "Krong Klang"],
                        ["19558", "Mò Ó", "Xã", "Mo O"],
                        ["19579", "Tà Long", "Xã", "Ta Long"],
                        ["19588", "Tà Rụt", "Xã", "Ta Rut"],
                        ["19567", "Triệu Nguyên", "Xã", "Trieu Nguyen"]
                    ]
                ],
                [
                    "461", "Đông Hà", "Thành phố", "Dong Ha",
                    [
                        ["19333", "1", "Phường", "1"],
                        ["19342", "2", "Phường", "2"],
                        ["19354", "3", "Phường", "3"],
                        ["19345", "4", "Phường", "4"],
                        ["19348", "5", "Phường", "5"],
                        ["19330", "Đông Giang", "Phường", "Dong Giang"],
                        ["19336", "Đông Lễ", "Phường", "Dong Le"],
                        ["19351", "Đông Lương", "Phường", "Dong Luong"],
                        ["19339", "Đông Thanh", "Phường", "Dong Thanh"]
                    ]
                ],
                [
                    "466", "Gio Linh", "Huyện", "Gio Linh",
                    [
                        ["19496", "Cửa Việt", "Thị trấn", "Cua Viet"],
                        ["19522", "Gio An", "Xã", "Gio An"],
                        ["19525", "Gio Châu", "Xã", "Gio Chau"],
                        ["19519", "Gio Hải", "Xã", "Gio Hai"],
                        ["19495", "Gio Linh", "Thị trấn", "Gio Linh"],
                        ["19543", "Gio Mai", "Xã", "Gio Mai"],
                        ["19510", "Gio Mỹ", "Xã", "Gio My"],
                        ["19552", "Gio Quang", "Xã", "Gio Quang"],
                        ["19537", "Gio Sơn", "Xã", "Gio Son"],
                        ["19531", "Gio Việt", "Xã", "Gio Viet"],
                        ["19546", "Hải Thái", "Xã", "Hai Thai"],
                        ["19549", "Linh Hải", "Xã", "Linh Hai"],
                        ["19534", "Linh Trường", "Xã", "Linh Truong"],
                        ["19507", "Phong Bình", "Xã", "Phong Binh"],
                        ["19498", "Trung Giang", "Xã", "Trung Giang"],
                        ["19501", "Trung Hải", "Xã", "Trung Hai"],
                        ["19504", "Trung Sơn", "Xã", "Trung Son"]
                    ]
                ],
                [
                    "470", "Hải Lăng", "Huyện", "Hai Lang",
                    [
                        ["19681", "Diên Sanh", "Thị trấn", "Dien Sanh"],
                        ["19684", "Hải An", "Xã", "Hai An"],
                        ["19687", "Hải Ba", "Xã", "Hai Ba"],
                        ["19738", "Hải Chánh", "Xã", "Hai Chanh"],
                        ["19714", "Hải Định", "Xã", "Hai Dinh"],
                        ["19711", "Hải Dương", "Xã", "Hai Duong"],
                        ["19699", "Hải Hưng", "Xã", "Hai Hung"],
                        ["19741", "Hải Khê", "Xã", "Hai Khe"],
                        ["19717", "Hải Lâm", "Xã", "Hai Lam"],
                        ["19726", "Hải Phong", "Xã", "Hai Phong"],
                        ["19702", "Hải Phú", "Xã", "Hai Phu"],
                        ["19696", "Hải Quế", "Xã", "Hai Que"],
                        ["19693", "Hải Quy", "Xã", "Hai Quy"],
                        ["19735", "Hải Sơn", "Xã", "Hai Son"],
                        ["19708", "Hải Thượng", "Xã", "Hai Thuong"],
                        ["19729", "Hải Trường", "Xã", "Hai Truong"]
                    ]
                ],
                [
                    "465", "Hướng Hóa", "Huyện", "Huong Hoa",
                    [
                        ["19483", " A Dơi", "Xã", " A Doi"],
                        ["19477", "Ba Tầng", "Xã", "Ba Tang"],
                        ["19468", "Húc", "Xã", "Huc"],
                        ["19435", "Hướng Lập", "Xã", "Huong Lap"],
                        ["19447", "Hướng Linh", "Xã", "Huong Linh"],
                        ["19474", "Hướng Lộc", "Xã", "Huong Loc"],
                        ["19441", "Hướng Phùng", "Xã", "Huong Phung"],
                        ["19444", "Hướng Sơn", "Xã", "Huong Son"],
                        ["19453", "Hướng Tân", "Xã", "Huong Tan"],
                        ["19438", "Hướng Việt", "Xã", "Huong Viet"],
                        ["19429", "Khe Sanh", "Thị trấn", "Khe Sanh"],
                        ["19432", "Lao Bảo", "Thị trấn", "Lao Bao"],
                        ["19489", "Lìa", "Xã", "Lia"],
                        ["19450", "Tân Hợp", "Xã", "Tan Hop"],
                        ["19462", "Tân Lập", "Xã", "Tan Lap"],
                        ["19465", "Tân Liên", "Xã", "Tan Lien"],
                        ["19459", "Tân Long", "Xã", "Tan Long"],
                        ["19456", "Tân Thành", "Xã", "Tan Thanh"],
                        ["19480", "Thanh", "Xã", "Thanh"],
                        ["19471", "Thuận", "Xã", "Thuan"],
                        ["19492", "Xy", "Xã", "Xy"]
                    ]
                ],
                [
                    "462", "Quảng Trị", "Thị xã", "Quang Tri",
                    [
                        ["19357", "1", "Phường", "1"],
                        ["19360", "2", "Phường", "2"],
                        ["19361", "3", "Phường", "3"],
                        ["19358", "An Đôn", "Phường", "An Don"],
                        ["19705", "Hải Lệ", "Xã", "Hai Le"]
                    ]
                ],
                [
                    "469", "Triệu Phong", "Huyện", "Trieu Phong",
                    [
                        ["19624", "Ái Tử", "Thị Trấn", "Ai Tu"],
                        ["19669", "Triệu Ái", "Xã", "Trieu Ai"],
                        ["19627", "Triệu An", "Xã", "Trieu An"],
                        ["19645", "Triệu Đại", "Xã", "Trieu Dai"],
                        ["19636", "Triệu Độ", "Xã", "Trieu Do"],
                        ["19675", "Triệu Giang", "Xã", "Trieu Giang"],
                        ["19648", "Triệu Hòa", "Xã", "Trieu Hoa"],
                        ["19651", "Triệu Lăng", "Xã", "Trieu Lang"],
                        ["19657", "Triệu Long", "Xã", "Trieu Long"],
                        ["19633", "Triệu Phước", "Xã", "Trieu Phuoc"],
                        ["19654", "Triệu Sơn", "Xã", "Trieu Son"],
                        ["19660", "Triệu Tài", "Xã", "Trieu Tai"],
                        ["19678", "Triệu Thành", "Xã", "Trieu Thanh"],
                        ["19642", "Triệu Thuận", "Xã", "Trieu Thuan"],
                        ["19672", "Triệu Thượng", "Xã", "Trieu Thuong"],
                        ["19639", "Triệu Trạch", "Xã", "Trieu Trach"],
                        ["19666", "Triệu Trung", "Xã", "Trieu Trung"],
                        ["19630", "Triệu Vân", "Xã", "Trieu Van"]
                    ]
                ],
                [
                    "464", "Vĩnh Linh", "Huyện", "Vinh Linh",
                    [
                        ["19366", "Bến Quan", "Thị trấn", "Ben Quan"],
                        ["19414", "Cửa Tùng", "Thị trấn", "Cua Tung"],
                        ["19408", "Hiền Thành", "Xã", "Hien Thanh"],
                        ["19363", "Hồ Xá", "Thị trấn", "Ho Xa"],
                        ["19384", "Kim Thạch", "Xã", "Kim Thach"],
                        ["19378", "Trung Nam", "Xã", "Trung Nam"],
                        ["19375", "Vĩnh Chấp", "Xã", "Vinh Chap"],
                        ["19423", "Vĩnh Giang", "Xã", "Vinh Giang"],
                        ["19417", "Vĩnh Hà", "Xã", "Vinh Ha"],
                        ["19396", "Vĩnh Hòa", "Xã", "Vinh Hoa"],
                        ["19393", "Vĩnh Khê", "Xã", "Vinh Khe"],
                        ["19405", "Vĩnh Lâm", "Xã", "Vinh Lam"],
                        ["19387", "Vĩnh Long", "Xã", "Vinh Long"],
                        ["19426", "Vĩnh Ô", "Xã", "Vinh O"],
                        ["19420", "Vĩnh Sơn", "Xã", "Vinh Son"],
                        ["19369", "Vĩnh Thái", "Xã", "Vinh Thai"],
                        ["19402", "Vĩnh Thủy", "Xã", "Vinh Thuy"],
                        ["19372", "Vĩnh Tú", "Xã", "Vinh Tu"]
                    ]
                ]
            ]
        ],
        [
            "94", "Sóc Trăng", "Tỉnh", "Soc Trang",
            [
                [
                    "942", "Châu Thành", "Huyện", "Chau Thanh",
                    [
                        ["31594", "An Hiệp", "Xã", "An Hiep"],
                        ["31600", "An Ninh", "Xã", "An Ninh"],
                        ["31569", "Châu Thành", "Thị trấn", "Chau Thanh"],
                        ["31570", "Hồ Đắc Kiện", "Xã", "Ho Dac Kien"],
                        ["31573", "Phú Tâm", "Xã", "Phu Tam"],
                        ["31582", "Phú Tân", "Xã", "Phu Tan"],
                        ["31585", "Thiện Mỹ", "Xã", "Thien My"],
                        ["31576", "Thuận Hòa", "Xã", "Thuan Hoa"]
                    ]
                ],
                [
                    "945", "Cù Lao Dung", "Huyện", "Cu Lao Dung",
                    [
                        ["31618", "An Thạnh 1", "Xã", "An Thanh 1"],
                        ["31630", "An Thạnh 2", "Xã", "An Thanh 2"],
                        ["31633", "An Thạnh 3", "Xã", "An Thanh 3"],
                        ["31624", "An Thạnh Đông", "Xã", "An Thanh Dong"],
                        ["31636", "An Thạnh Nam", "Xã", "An Thanh Nam"],
                        ["31621", "An Thạnh Tây", "Xã", "An Thanh Tay"],
                        ["31615", "Cù Lao Dung", "Thị trấn", "Cu Lao Dung"],
                        ["31627", "Đại Ân 1", "Xã", "Dai An 1"]
                    ]
                ],
                [
                    "943", "Kế Sách", "Huyện", "Ke Sach",
                    [
                        ["31540", "An Lạc Tây", "Xã", "An Lac Tay"],
                        ["31531", "An Lạc Thôn", "Thị trấn", "An Lac Thon"],
                        ["31564", "An Mỹ", "Xã", "An My"],
                        ["31546", "Ba Trinh", "Xã", "Ba Trinh"],
                        ["31561", "Đại Hải", "Xã", "Dai Hai"],
                        ["31558", "Kế An", "Xã", "Ke An"],
                        ["31528", "Kế Sách", "Thị trấn", "Ke Sach"],
                        ["31555", "Kế Thành", "Xã", "Ke Thanh"],
                        ["31552", "Nhơn Mỹ", "Xã", "Nhon My"],
                        ["31537", "Phong Nẫm", "Xã", "Phong Nam"],
                        ["31549", "Thới An Hội", "Xã", "Thoi An Hoi"],
                        ["31543", "Trinh Phú", "Xã", "Trinh Phu"],
                        ["31534", "Xuân Hòa", "Xã", "Xuan Hoa"]
                    ]
                ],
                [
                    "946", "Long Phú", "Huyện", "Long Phu",
                    [
                        ["31663", "Châu Khánh", "Xã", "Chau Khanh"],
                        ["31645", "Đại Ngãi", "Thị trấn", "Dai Ngai"],
                        ["31648", "Hậu Thạnh", "Xã", "Hau Thanh"],
                        ["31651", "Long Đức", "Xã", "Long Duc"],
                        ["31639", "Long Phú", "Thị trấn", "Long Phu"],
                        ["31669", "Long Phú", "Xã", "Long Phu"],
                        ["31657", "Phú Hữu", "Xã", "Phu Huu"],
                        ["31642", "Song Phụng", "Xã", "Song Phung"],
                        ["31660", "Tân Hưng", "Xã", "Tan Hung"],
                        ["31666", "Tân Thạnh", "Xã", "Tan Thanh"],
                        ["31654", "Trường Khánh", "Xã", "Truong Khanh"]
                    ]
                ],
                [
                    "944", "Mỹ Tú", "Huyện", "My Tu",
                    [
                        ["31588", "Hưng Phú", "Xã", "Hung Phu"],
                        ["31567", "Huỳnh Hữu Nghĩa", "Thị trấn", "Huynh Huu Nghia"],
                        ["31579", "Long Hưng", "Xã", "Long Hung"],
                        ["31591", "Mỹ Hương", "Xã", "My Huong"],
                        ["31603", "Mỹ Phước", "Xã", "My Phuoc"],
                        ["31609", "Mỹ Thuận", "Xã", "My Thuan"],
                        ["31597", "Mỹ Tú", "Xã", "My Tu"],
                        ["31612", "Phú Mỹ", "Xã", "Phu My"],
                        ["31606", "Thuận Hưng", "Xã", "Thuan Hung"]
                    ]
                ],
                [
                    "947", "Mỹ Xuyên", "Huyện", "My Xuyen",
                    [
                        ["31690", "Đại Tâm", "Xã", "Dai Tam"],
                        ["31720", "Gia Hòa 1", "Xã", "Gia Hoa 1"],
                        ["31726", "Gia Hòa 2", "Xã", "Gia Hoa 2"],
                        ["31717", "Hòa Tú 1", "Xã", "Hoa Tu 1"],
                        ["31729", "Hòa Tú II", "Xã", "Hoa Tu II"],
                        ["31684", "Mỹ Xuyên", "Thị trấn", "My Xuyen"],
                        ["31711", "Ngọc Đông", "Xã", "Ngoc Dong"],
                        ["31723", "Ngọc Tố", "Xã", "Ngoc To"],
                        ["31693", "Tham Đôn", "Xã", "Tham Don"],
                        ["31708", "Thạnh Phú", "Xã", "Thanh Phu"],
                        ["31714", "Thạnh Quới", "Xã", "Thanh Quoi"]
                    ]
                ],
                [
                    "948", "Ngã Năm", "Thị xã", "Nga Nam",
                    [
                        ["31732", "1", "Phường", "1"],
                        ["31735", "2", "Phường", "2"],
                        ["31747", "3", "Phường", "3"],
                        ["31744", "Long Bình", "Xã", "Long Binh"],
                        ["31750", "Mỹ Bình", "Xã", "My Binh"],
                        ["31753", "Mỹ Quới", "Xã", "My Quoi"],
                        ["31741", "Tân Long", "Xã", "Tan Long"],
                        ["31738", "Vĩnh Quới", "Xã", "Vinh Quoi"]
                    ]
                ],
                [
                    "941", "Sóc Trăng", "Thành phố", "Soc Trang",
                    [
                        ["31513", "1", "Phường", "1"],
                        ["31510", "2", "Phường", "2"],
                        ["31519", "3", "Phường", "3"],
                        ["31516", "4", "Phường", "4"],
                        ["31498", "5", "Phường", "5"],
                        ["31507", "6", "Phường", "6"],
                        ["31501", "7", "Phường", "7"],
                        ["31504", "8", "Phường", "8"],
                        ["31522", "9", "Phường", "9"],
                        ["31525", "10", "Phường", "10"]
                    ]
                ],
                [
                    "949", "Thạnh Trị", "Huyện", "Thanh Tri",
                    [
                        ["31780", "Châu Hưng", "Xã", "Chau Hung"],
                        ["31757", "Hưng Lợi", "Thị trấn", "Hung Loi"],
                        ["31765", "Lâm Kiết", "Xã", "Lam Kiet"],
                        ["31759", "Lâm Tân", "Xã", "Lam Tan"],
                        ["31756", "Phú Lộc", "Thị trấn", "Phu Loc"],
                        ["31762", "Thạnh Tân", "Xã", "Thanh Tan"],
                        ["31774", "Thạnh Trị", "Xã", "Thanh Tri"],
                        ["31768", "Tuân Tức", "Xã", "Tuan Tuc"],
                        ["31777", "Vĩnh Lợi", "Xã", "Vinh Loi"],
                        ["31771", "Vĩnh Thành", "Xã", "Vinh Thanh"]
                    ]
                ],
                [
                    "951", "Trần Đề", "Huyện", "Tran De",
                    [
                        ["31672", "Đại Ân  2", "Xã", "Dai An  2"],
                        ["31678", "Lịch Hội Thượng", "Xã", "Lich Hoi Thuong"],
                        ["31679", "Lịch Hội Thượng", "Thị trấn", "Lich Hoi Thuong"],
                        ["31675", "Liêu Tú", "Xã", "Lieu Tu"],
                        ["31687", "Tài Văn", "Xã", "Tai Van"],
                        ["31699", "Thạnh Thới An", "Xã", "Thanh Thoi An"],
                        ["31702", "Thạnh Thới Thuận", "Xã", "Thanh Thoi Thuan"],
                        ["31673", "Trần Đề", "Thị trấn", "Tran De"],
                        ["31681", "Trung Bình", "Xã", "Trung Binh"],
                        ["31696", "Viên An", "Xã", "Vien An"],
                        ["31705", "Viên Bình", "Xã", "Vien Binh"]
                    ]
                ],
                [
                    "950", "Vĩnh Châu", "Thị xã", "Vinh Chau",
                    [
                        ["31783", "1", "Phường", "1"],
                        ["31801", "2", "Phường", "2"],
                        ["31786", "Hòa Đông", "Xã", "Hoa Dong"],
                        ["31789", "Khánh Hòa", "Phường", "Khanh Hoa"],
                        ["31798", "Lạc Hòa", "Xã", "Lac Hoa"],
                        ["31810", "Lai Hòa", "Xã", "Lai Hoa"],
                        ["31795", "Vĩnh Hải", "Xã", "Vinh Hai"],
                        ["31792", "Vĩnh Hiệp", "Xã", "Vinh Hiep"],
                        ["31804", "Vĩnh Phước", "Phường", "Vinh Phuoc"],
                        ["31807", "Vĩnh Tân", "Xã", "Vinh Tan"]
                    ]
                ]
            ]
        ],
        [
            "14", "Sơn La", "Tỉnh", "Son La",
            [
                [
                    "121", "Bắc Yên", "Huyện", "Bac Yen",
                    [
                        ["03856", "Bắc Yên", "Thị trấn", "Bac Yen"],
                        ["03895", "Chiềng Sại", "Xã", "Chieng Sai"],
                        ["03877", "Chim Vàn", "Xã", "Chim Van"],
                        ["03862", "Hang Chú", "Xã", "Hang Chu"],
                        ["03869", "Háng Đồng", "Xã", "Hang Dong"],
                        ["03886", "Hồng Ngài", "Xã", "Hong Ngai"],
                        ["03890", "Hua Nhàn", "Xã", "Hua Nhan"],
                        ["03874", "Làng Chếu", "Xã", "Lang Cheu"],
                        ["03880", "Mường Khoa", "Xã", "Muong Khoa"],
                        ["03871", "Pắc Ngà", "Xã", "Pac Nga"],
                        ["03859", "Phiêng Ban", "Xã", "Phieng Ban"],
                        ["03892", "Phiêng Côn", "Xã", "Phieng Con"],
                        ["03883", "Song Pe", "Xã", "Song Pe"],
                        ["03889", "Tạ Khoa", "Xã", "Ta Khoa"],
                        ["03868", "Tà Xùa", "Xã", "Ta Xua"],
                        ["03865", "Xím Vàng", "Xã", "Xim Vang"]
                    ]
                ],
                [
                    "125", "Mai Sơn", "Huyện", "Mai Son",
                    [
                        ["04120", "Chiềng Ban", "Xã", "Chieng Ban"],
                        ["04114", "Chiềng Chăn", "Xã", "Chieng Chan"],
                        ["04129", "Chiềng Chung", "Xã", "Chieng Chung"],
                        ["04147", "Chiềng Dong", "Xã", "Chieng Dong"],
                        ["04150", "Chiềng Kheo", "Xã", "Chieng Kheo"],
                        ["04156", "Chiềng Lương", "Xã", "Chieng Luong"],
                        ["04132", "Chiềng Mai", "Xã", "Chieng Mai"],
                        ["04123", "Chiềng Mung", "Xã", "Chieng Mung"],
                        ["04141", "Chiềng Nơi", "Xã", "Chieng Noi"],
                        ["04108", "Chiềng Sung", "Xã", "Chieng Sung"],
                        ["04153", "Chiềng Ve", "Xã", "Chieng Ve"],
                        ["04138", "Cò  Nòi", "Xã", "Co  Noi"],
                        ["04105", "Hát Lót", "Thị trấn", "Hat Lot"],
                        ["04135", "Hát Lót", "Xã", "Hat Lot"],
                        ["04111", "Mường Bằng", "Xã", "Muong Bang"],
                        ["04126", "Mường Bon", "Xã", "Muong Bon"],
                        ["04117", "Mương Chanh", "Xã", "Muong Chanh"],
                        ["04162", "Nà Ơt", "Xã", "Na Ot"],
                        ["04136", "Nà Pó", "Xã", "Na Po"],
                        ["04144", "Phiêng Cằm", "Xã", "Phieng Cam"],
                        ["04159", "Phiêng Pằn", "Xã", "Phieng Pan"],
                        ["04165", "Tà Hộc", "Xã", "Ta Hoc"]
                    ]
                ],
                [
                    "123", "Mộc Châu", "Huyện", "Moc Chau",
                    [
                        ["04012", "Chiềng Hắc", "Xã", "Chieng Hac"],
                        ["04024", "Chiềng Khừa", "Xã", "Chieng Khua"],
                        ["03985", "Chiềng Sơn", "Xã", "Chieng Son"],
                        ["04030", "Đông Sang", "Xã", "Dong Sang"],
                        ["04015", "Hua Păng", "Xã", "Hua Pang"],
                        ["04045", "Lóng Sập", "Xã", "Long Sap"],
                        ["03979", "Mộc Châu", "Thị trấn", "Moc Chau"],
                        ["04027", "Mường Sang", "Xã", "Muong Sang"],
                        ["03982", "NT Mộc Châu", "Thị trấn", "NT Moc Chau"],
                        ["04000", "Nà Mường", "Xã", "Na Muong"],
                        ["04033", "Phiêng Luông", "Xã", "Phieng Luong"],
                        ["03991", "Qui Hướng", "Xã", "Qui Huong"],
                        ["04003", "Tà Lai", "Xã", "Ta Lai"],
                        ["03988", "Tân Hợp", "Xã", "Tan Hop"],
                        ["03997", "Tân Lập", "Xã", "Tan Lap"]
                    ]
                ],
                [
                    "120", "Mường La", "Huyện", "Muong La",
                    [
                        ["03832", "Chiềng Ân", "Xã", "Chieng An"],
                        ["03838", "Chiềng Công", "Xã", "Chieng Cong"],
                        ["03850", "Chiềng Hoa", "Xã", "Chieng Hoa"],
                        ["03814", "Chiềng Lao", "Xã", "Chieng Lao"],
                        ["03829", "Chiềng Muôn", "Xã", "Chieng Muon"],
                        ["03844", "Chiềng San", "Xã", "Chieng San"],
                        ["03817", "Hua Trai", "Xã", "Hua Trai"],
                        ["03808", "Ít Ong", "Thị trấn", "It Ong"],
                        ["03847", "Mường Bú", "Xã", "Muong Bu"],
                        ["03853", "Mường Chùm", "Xã", "Muong Chum"],
                        ["03823", "Mường Trai", "Xã", "Muong Trai"],
                        ["03811", "Nậm Giôn", "Xã", "Nam Gion"],
                        ["03826", "Nậm Păm", "Xã", "Nam Pam"],
                        ["03820", "Ngọc Chiến", "Xã", "Ngoc Chien"],
                        ["03835", "Pi Toong", "Xã", "Pi Toong"],
                        ["03841", "Tạ Bú", "Xã", "Ta Bu"]
                    ]
                ],
                [
                    "122", "Phù Yên", "Huyện", "Phu Yen",
                    [
                        ["03976", "Bắc Phong", "Xã", "Bac Phong"],
                        ["03967", "Đá Đỏ", "Xã", "Da Do"],
                        ["03922", "Gia Phù", "Xã", "Gia Phu"],
                        ["03913", "Huy Bắc", "Xã", "Huy Bac"],
                        ["03928", "Huy Hạ", "Xã", "Huy Ha"],
                        ["03931", "Huy Tân", "Xã", "Huy Tan"],
                        ["03916", "Huy Thượng", "Xã", "Huy Thuong"],
                        ["03940", "Huy Tường", "Xã", "Huy Tuong"],
                        ["03961", "Kim Bon", "Xã", "Kim Bon"],
                        ["03964", "Mường Bang", "Xã", "Muong Bang"],
                        ["03907", "Mường Cơi", "Xã", "Muong Coi"],
                        ["03943", "Mường Do", "Xã", "Muong Do"],
                        ["03934", "Mường Lang", "Xã", "Muong Lang"],
                        ["03904", "Mường Thải", "Xã", "Muong Thai"],
                        ["03973", "Nam Phong", "Xã", "Nam Phong"],
                        ["03898", "Phù Yên", "Thị trấn", "Phu Yen"],
                        ["03910", "Quang Huy", "Xã", "Quang Huy"],
                        ["03946", "Sập Xa", "Xã", "Sap Xa"],
                        ["03937", "Suối Bau", "Xã", "Suoi Bau"],
                        ["03901", "Suối Tọ", "Xã", "Suoi To"],
                        ["03919", "Tân Lang", "Xã", "Tan Lang"],
                        ["03970", "Tân Phong", "Xã", "Tan Phong"],
                        ["03958", "Tường Hạ", "Xã", "Tuong Ha"],
                        ["03955", "Tường Phong", "Xã", "Tuong Phong"],
                        ["03925", "Tường Phù", "Xã", "Tuong Phu"],
                        ["03949", "Tường Thượng", "Xã", "Tuong Thuong"],
                        ["03952", "Tường Tiến", "Xã", "Tuong Tien"]
                    ]
                ],
                [
                    "118", "Quỳnh Nhai", "Huyện", "Quynh Nhai",
                    [
                        ["03685", "Cà Nàng", "Xã", "Ca Nang"],
                        ["03706", "Chiềng Bằng", "Xã", "Chieng Bang"],
                        ["03688", "Chiềng Khay", "Xã", "Chieng Khay"],
                        ["03718", "Chiềng Khoang", "Xã", "Chieng Khoang"],
                        ["03700", "Chiềng Ơn", "Xã", "Chieng On"],
                        ["03682", "Mường Chiên", "Xã", "Muong Chien"],
                        ["03703", "Mường Giàng", "Xã", "Muong Giang"],
                        ["03694", "Mường Giôn", "Xã", "Muong Gion"],
                        ["03709", "Mường Sại", "Xã", "Muong Sai"],
                        ["03712", "Nậm ét", "Xã", "Nam et"],
                        ["03697", "Pá Ma Pha Khinh", "Xã", "Pa Ma Pha Khinh"]
                    ]
                ],
                [
                    "116", "Sơn La", "Thành phố", "Son La",
                    [
                        ["03667", "Chiềng An", "Phường", "Chieng An"],
                        ["03658", "Chiềng Cọ", "Xã", "Chieng Co"],
                        ["03670", "Chiềng Cơi", "Phường", "Chieng Coi"],
                        ["03661", "Chiềng Đen", "Xã", "Chieng Den"],
                        ["03646", "Chiềng Lề", "Phường", "Chieng Le"],
                        ["03673", "Chiềng Ngần", "Xã", "Chieng Ngan"],
                        ["03679", "Chiềng Sinh", "Phường", "Chieng Sinh"],
                        ["03664", "Chiềng Xôm", "Xã", "Chieng Xom"],
                        ["03676", "Hua La", "Xã", "Hua La"],
                        ["03655", "Quyết Tâm", "Phường", "Quyet Tam"],
                        ["03652", "Quyết Thắng", "Phường", "Quyet Thang"],
                        ["03649", "Tô Hiệu", "Phường", "To Hieu"]
                    ]
                ],
                [
                    "126", "Sông Mã", "Huyện", "Song Ma",
                    [
                        ["04171", "Bó Sinh", "Xã", "Bo Sinh"],
                        ["04207", "Chiềng Cang", "Xã", "Chieng Cang"],
                        ["04180", "Chiềng En", "Xã", "Chieng En"],
                        ["04204", "Chiềng Khoong", "Xã", "Chieng Khoong"],
                        ["04222", "Chiềng Khương", "Xã", "Chieng Khuong"],
                        ["04177", "Chiềng Phung", "Xã", "Chieng Phung"],
                        ["04195", "Chiềng Sơ", "Xã", "Chieng So"],
                        ["04189", "Đứa Mòn", "Xã", "Dua Mon"],
                        ["04210", "Huổi Một", "Xã", "Huoi Mot"],
                        ["04216", "Mường Cai", "Xã", "Muong Cai"],
                        ["04219", "Mường Hung", "Xã", "Muong Hung"],
                        ["04183", "Mường Lầm", "Xã", "Muong Lam"],
                        ["04213", "Mường Sai", "Xã", "Muong Sai"],
                        ["04198", "Nà Nghịu", "Xã", "Na Nghiu"],
                        ["04201", "Nậm Mằn", "Xã", "Nam Man"],
                        ["04186", "Nậm Ty", "Xã", "Nam Ty"],
                        ["04174", "Pú Pẩu", "Xã", "Pu Pau"],
                        ["04168", "Sông Mã", "Thị trấn", "Song Ma"],
                        ["04192", "Yên Hưng", "Xã", "Yen Hung"]
                    ]
                ],
                [
                    "127", "Sốp Cộp", "Huyện", "Sop Cop",
                    [
                        ["04234", "Dồm Cang", "Xã", "Dom Cang"],
                        ["04246", "Mường Lạn", "Xã", "Muong Lan"],
                        ["04240", "Mường Lèo", "Xã", "Muong Leo"],
                        ["04243", "Mường Và", "Xã", "Muong Va"],
                        ["04237", "Nậm Lạnh", "Xã", "Nam Lanh"],
                        ["04228", "Púng Bánh", "Xã", "Pung Banh"],
                        ["04225", "Sam Kha", "Xã", "Sam Kha"],
                        ["04231", "Sốp Cộp", "Xã", "Sop Cop"]
                    ]
                ],
                [
                    "119", "Thuận Châu", "Huyện", "Thuan Chau",
                    [
                        ["03805", "Bản Lầm", "Xã", "Ban Lam"],
                        ["03778", "Bó Mười", "Xã", "Bo Muoi"],
                        ["03793", "Bon Phặng", "Xã", "Bon Phang"],
                        ["03766", "Chiềng Bôm", "Xã", "Chieng Bom"],
                        ["03733", "Chiềng La", "Xã", "Chieng La"],
                        ["03751", "Chiềng Ly", "Xã", "Chieng Ly"],
                        ["03736", "Chiềng Ngàm", "Xã", "Chieng Ngam"],
                        ["03787", "Chiềng Pấc", "Xã", "Chieng Pac"],
                        ["03730", "Chiềng Pha", "Xã", "Chieng Pha"],
                        ["03781", "Co Mạ", "Xã", "Co Ma"],
                        ["03796", "Co Tòng", "Xã", "Co Tong"],
                        ["03739", "Liệp Tè", "Xã", "Liep Te"],
                        ["03763", "Long Hẹ", "Xã", "Long He"],
                        ["03799", "Muổi Nọi", "Xã", "Muoi Noi"],
                        ["03760", "Mường Bám", "Xã", "Muong Bam"],
                        ["03757", "Mường Khiêng", "Xã", "Muong Khieng"],
                        ["03727", "Mường é", "Xã", "Muong e"],
                        ["03790", "Nậm Lầu", "Xã", "Nam Lau"],
                        ["03754", "Noong Lay", "Xã", "Noong Lay"],
                        ["03802", "Pá Lông", "Xã", "Pa Long"],
                        ["03724", "Phổng Lái", "Xã", "Phong Lai"],
                        ["03748", "Phổng Lăng", "Xã", "Phong Lang"],
                        ["03745", "Phổng Lập", "Xã", "Phong Lap"],
                        ["03784", "Púng Tra", "Xã", "Pung Tra"],
                        ["03769", "Thôm Mòn", "Xã", "Thom Mon"],
                        ["03721", "Thuận Châu", "Thị trấn", "Thuan Chau"],
                        ["03775", "Tông Cọ", "Xã", "Tong Co"],
                        ["03772", "Tông Lạnh", "Xã", "Tong Lanh"],
                        ["03742", "é Tòng", "Xã", "e Tong"]
                    ]
                ],
                [
                    "128", "Vân Hồ", "Huyện", "Van Ho",
                    [
                        ["04036", "Chiềng Khoa", "Xã", "Chieng Khoa"],
                        ["04056", "Chiềng Xuân", "Xã", "Chieng Xuan"],
                        ["04054", "Chiềng Yên", "Xã", "Chieng Yen"],
                        ["04009", "Liên Hoà", "Xã", "Lien Hoa"],
                        ["04051", "Lóng Luông", "Xã", "Long Luong"],
                        ["04039", "Mường Men", "Xã", "Muong Men"],
                        ["04021", "Mường Tè", "Xã", "Muong Te"],
                        ["04042", "Quang Minh", "Xã", "Quang Minh"],
                        ["04006", "Song Khủa", "Xã", "Song Khua"],
                        ["03994", "Suối Bàng", "Xã", "Suoi Bang"],
                        ["04058", "Tân Xuân", "Xã", "Tan Xuan"],
                        ["04018", "Tô Múa", "Xã", "To Mua"],
                        ["04048", "Vân Hồ", "Xã", "Van Ho"],
                        ["04057", "Xuân Nha", "Xã", "Xuan Nha"]
                    ]
                ],
                [
                    "124", "Yên Châu", "Huyện", "Yen Chau",
                    [
                        ["04063", "Chiềng Đông", "Xã", "Chieng Dong"],
                        ["04078", "Chiềng Hặc", "Xã", "Chieng Hac"],
                        ["04090", "Chiềng Khoi", "Xã", "Chieng Khoi"],
                        ["04084", "Chiềng On", "Xã", "Chieng On"],
                        ["04072", "Chiềng Pằn", "Xã", "Chieng Pan"],
                        ["04069", "Chiềng Sàng", "Xã", "Chieng Sang"],
                        ["04102", "Chiềng Tương", "Xã", "Chieng Tuong"],
                        ["04096", "Lóng Phiêng", "Xã", "Long Phieng"],
                        ["04081", "Mường Lựm", "Xã", "Muong Lum"],
                        ["04099", "Phiêng Khoài", "Xã", "Phieng Khoai"],
                        ["04066", "Sập Vạt", "Xã", "Sap Vat"],
                        ["04093", "Tú Nang", "Xã", "Tu Nang"],
                        ["04075", "Viêng Lán", "Xã", "Vieng Lan"],
                        ["04060", "Yên Châu", "Thị trấn", "Yen Chau"],
                        ["04087", "Yên Sơn", "Xã", "Yen Son"]
                    ]
                ]
            ]
        ],
        [
            "72", "Tây Ninh", "Tỉnh", "Tay Ninh",
            [
                [
                    "711", "Bến Cầu", "Huyện", "Ben Cau",
                    [
                        ["25705", "An Thạnh", "Xã", "An Thanh"],
                        ["25681", "Bến Cầu", "Thị trấn", "Ben Cau"],
                        ["25699", "Lợi Thuận", "Xã", "Loi Thuan"],
                        ["25684", "Long Chữ", "Xã", "Long Chu"],
                        ["25690", "Long Giang", "Xã", "Long Giang"],
                        ["25696", "Long Khánh", "Xã", "Long Khanh"],
                        ["25687", "Long Phước", "Xã", "Long Phuoc"],
                        ["25702", "Long Thuận", "Xã", "Long Thuan"],
                        ["25693", "Tiên Thuận", "Xã", "Tien Thuan"]
                    ]
                ],
                [
                    "708", "Châu Thành", "Huyện", "Chau Thanh",
                    [
                        ["25615", "An Bình", "Xã", "An Binh"],
                        ["25600", "An Cơ", "Xã", "An Co"],
                        ["25603", "Biên Giới", "Xã", "Bien Gioi"],
                        ["25585", "Châu Thành", "Thị trấn", "Chau Thanh"],
                        ["25594", "Đồng Khởi", "Xã", "Dong Khoi"],
                        ["25588", "Hảo Đước", "Xã", "Hao Duoc"],
                        ["25612", "Hòa Hội", "Xã", "Hoa Hoi"],
                        ["25606", "Hòa Thạnh", "Xã", "Hoa Thanh"],
                        ["25627", "Long Vĩnh", "Xã", "Long Vinh"],
                        ["25624", "Ninh Điền", "Xã", "Ninh Dien"],
                        ["25591", "Phước Vinh", "Xã", "Phuoc Vinh"],
                        ["25597", "Thái Bình", "Xã", "Thai Binh"],
                        ["25618", "Thanh Điền", "Xã", "Thanh Dien"],
                        ["25621", "Thành Long", "Xã", "Thanh Long"],
                        ["25609", "Trí Bình", "Xã", "Tri Binh"]
                    ]
                ],
                [
                    "707", "Dương Minh Châu", "Huyện", "Duong Minh Chau",
                    [
                        ["25567", "Bàu Năng", "Xã", "Bau Nang"],
                        ["25576", "Bến Củi", "Xã", "Ben Cui"],
                        ["25573", "Cầu Khởi", "Xã", "Cau Khoi"],
                        ["25570", "Chà Là", "Xã", "Cha La"],
                        ["25552", "Dương Minh Châu", "Thị trấn", "Duong Minh Chau"],
                        ["25579", "Lộc Ninh", "Xã", "Loc Ninh"],
                        ["25558", "Phan", "Xã", "Phan"],
                        ["25564", "Phước Minh", "Xã", "Phuoc Minh"],
                        ["25561", "Phước Ninh", "Xã", "Phuoc Ninh"],
                        ["25555", "Suối Đá", "Xã", "Suoi Da"],
                        ["25582", "Truông Mít", "Xã", "Truong Mit"]
                    ]
                ],
                [
                    "710", "Gò Dầu", "Huyện", "Go Dau",
                    [
                        ["25666", "Bàu Đồn", "Xã", "Bau Don"],
                        ["25660", "Cẩm Giang", "Xã", "Cam Giang"],
                        ["25654", "Gò Dầu", "Thị trấn", "Go Dau"],
                        ["25663", "Hiệp Thạnh", "Xã", "Hiep Thanh"],
                        ["25672", "Phước Đông", "Xã", "Phuoc Dong"],
                        ["25669", "Phước Thạnh", "Xã", "Phuoc Thanh"],
                        ["25675", "Phước Trạch", "Xã", "Phuoc Trach"],
                        ["25657", "Thạnh Đức", "Xã", "Thanh Duc"],
                        ["25678", "Thanh Phước", "Xã", "Thanh Phuoc"]
                    ]
                ],
                [
                    "709", "Hòa Thành", "Thị xã", "Hoa Thanh",
                    [
                        ["25633", "Hiệp Tân", "Phường", "Hiep Tan"],
                        ["25630", "Long Hoa", "Phường", "Long Hoa"],
                        ["25636", "Long Thành Bắc", "Phường", "Long Thanh Bac"],
                        ["25651", "Long Thành Nam", "Xã", "Long Thanh Nam"],
                        ["25645", "Long Thành Trung", "Phường", "Long Thanh Trung"],
                        ["25642", "Trường Đông", "Xã", "Truong Dong"],
                        ["25639", "Trường Hòa", "Xã", "Truong Hoa"],
                        ["25648", "Trường Tây", "Xã", "Truong Tay"]
                    ]
                ],
                [
                    "705", "Tân Biên", "Huyện", "Tan Bien",
                    [
                        ["25504", "Hòa Hiệp", "Xã", "Hoa Hiep"],
                        ["25510", "Mỏ Công", "Xã", "Mo Cong"],
                        ["25486", "Tân Biên", "Thị trấn", "Tan Bien"],
                        ["25495", "Tân Bình", "Xã", "Tan Binh"],
                        ["25489", "Tân Lập", "Xã", "Tan Lap"],
                        ["25507", "Tân Phong", "Xã", "Tan Phong"],
                        ["25492", "Thạnh Bắc", "Xã", "Thanh Bac"],
                        ["25498", "Thạnh Bình", "Xã", "Thanh Binh"],
                        ["25501", "Thạnh Tây", "Xã", "Thanh Tay"],
                        ["25513", "Trà Vong", "Xã", "Tra Vong"]
                    ]
                ],
                [
                    "706", "Tân Châu", "Huyện", "Tan Chau",
                    [
                        ["25534", "Suối Dây", "Xã", "Suoi Day"],
                        ["25531", "Suối Ngô", "Xã", "Suoi Ngo"],
                        ["25516", "Tân Châu", "Thị trấn", "Tan Chau"],
                        ["25522", "Tân Đông", "Xã", "Tan Dong"],
                        ["25519", "Tân Hà", "Xã", "Tan Ha"],
                        ["25537", "Tân Hiệp", "Xã", "Tan Hiep"],
                        ["25528", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["25525", "Tân Hội", "Xã", "Tan Hoi"],
                        ["25549", "Tân Hưng", "Xã", "Tan Hung"],
                        ["25546", "Tân Phú", "Xã", "Tan Phu"],
                        ["25543", "Tân Thành", "Xã", "Tan Thanh"],
                        ["25540", "Thạnh Đông", "Xã", "Thanh Dong"]
                    ]
                ],
                [
                    "703", "Tây Ninh", "Thành phố", "Tay Ninh",
                    [
                        ["25456", "1", "Phường", "1"],
                        ["25468", "2", "Phường", "2"],
                        ["25459", "3", "Phường", "3"],
                        ["25462", "4", "Phường", "4"],
                        ["25477", "Bình Minh", "Xã", "Binh Minh"],
                        ["25465", "Hiệp Ninh", "Phường", "Hiep Ninh"],
                        ["25480", "Ninh Sơn", "Phường", "Ninh Son"],
                        ["25483", "Ninh Thạnh", "Phường", "Ninh Thanh"],
                        ["25474", "Tân Bình", "Xã", "Tan Binh"],
                        ["25471", "Thạnh Tân", "Xã", "Thanh Tan"]
                    ]
                ],
                [
                    "712", "Trảng Bàng", "Thị xã", "Trang Bang",
                    [
                        ["25735", "An Hòa", "Phường", "An Hoa"],
                        ["25732", "An Tịnh", "Phường", "An Tinh"],
                        ["25711", "Đôn Thuận", "Xã", "Don Thuan"],
                        ["25723", "Gia Bình", "Phường", "Gia Binh"],
                        ["25720", "Gia Lộc", "Phường", "Gia Loc"],
                        ["25714", "Hưng Thuận", "Xã", "Hung Thuan"],
                        ["25717", "Lộc Hưng", "Phường", "Loc Hung"],
                        ["25729", "Phước Bình", "Xã", "Phuoc Binh"],
                        ["25738", "Phước Chỉ", "Xã", "Phuoc Chi"],
                        ["25708", "Trảng Bàng", "Phường", "Trang Bang"]
                    ]
                ]
            ]
        ],
        [
            "34", "Thái Bình", "Tỉnh", "Thai Binh",
            [
                [
                    "340", "Đông Hưng", "Huyện", "Dong Hung",
                    [
                        ["12700", "An Châu", "Xã", "An Chau"],
                        ["12727", "Chương Dương", "Xã", "Chuong Duong"],
                        ["12691", "Đô Lương", "Xã", "Do Luong"],
                        ["12802", "Đông Á", "Xã", "Dong A"],
                        ["12757", "Đông Các", "Xã", "Dong Cac"],
                        ["12706", "Đông Cường", "Xã", "Dong Cuong"],
                        ["12775", "Đông Động", "Xã", "Dong Dong"],
                        ["12811", "Đông Dương", "Xã", "Dong Duong"],
                        ["12808", "Đông Hoàng", "Xã", "Dong Hoang"],
                        ["12751", "Đông Hợp", "Xã", "Dong Hop"],
                        ["12688", "Đông Hưng", "Thị trấn", "Dong Hung"],
                        ["12748", "Đông Kinh", "Xã", "Dong Kinh"],
                        ["12718", "Đông La", "Xã", "Dong La"],
                        ["12694", "Đông Phương", "Xã", "Dong Phuong"],
                        ["12793", "Đông Quan", "Xã", "Dong Quan"],
                        ["12796", "Đông Quang", "Xã", "Dong Quang"],
                        ["12703", "Đông Sơn", "Xã", "Dong Son"],
                        ["12769", "Đông Tân", "Xã", "Dong Tan"],
                        ["12772", "Đông Vinh", "Xã", "Dong Vinh"],
                        ["12724", "Đông Xá", "Xã", "Dong Xa"],
                        ["12799", "Đông Xuân", "Xã", "Dong Xuan"],
                        ["12745", "Hà Giang", "Xã", "Ha Giang"],
                        ["12778", "Hồng Bạch", "Xã", "Hong Bach"],
                        ["12790", "Hồng Giang", "Xã", "Hong Giang"],
                        ["12739", "Hồng Việt", "Xã", "Hong Viet"],
                        ["12736", "Hợp Tiến", "Xã", "Hop Tien"],
                        ["12697", "Liên Giang", "Xã", "Lien Giang"],
                        ["12763", "Liên Hoa", "Xã", "Lien Hoa"],
                        ["12715", "Lô Giang", "Xã", "Lo Giang"],
                        ["12712", "Mê Linh", "Xã", "Me Linh"],
                        ["12823", "Minh Phú", "Xã", "Minh Phu"],
                        ["12721", "Minh Tân", "Xã", "Minh Tan"],
                        ["12730", "Nguyên Xá", "Xã", "Nguyen Xa"],
                        ["12733", "Phong Châu", "Xã", "Phong Chau"],
                        ["12760", "Phú Châu", "Xã", "Phu Chau"],
                        ["12709", "Phú Lương", "Xã", "Phu Luong"],
                        ["12754", "Thăng Long", "Xã", "Thang Long"],
                        ["12784", "Trọng Quan", "Xã", "Trong Quan"]
                    ]
                ],
                [
                    "339", "Hưng Hà", "Huyện", "Hung Ha",
                    [
                        ["12628", "Bắc Sơn", "Xã", "Bac Son"],
                        ["12601", "Canh Tân", "Xã", "Canh Tan"],
                        ["12679", "Chí Hòa", "Xã", "Chi Hoa"],
                        ["12656", "Chi Lăng", "Xã", "Chi Lang"],
                        ["12595", "Cộng Hòa", "Xã", "Cong Hoa"],
                        ["12598", "Dân Chủ", "Xã", "Dan Chu"],
                        ["12589", "Điệp Nông", "Xã", "Diep Nong"],
                        ["12616", "Đoan Hùng", "Xã", "Doan Hung"],
                        ["12676", "Độc Lập", "Xã", "Doc Lap"],
                        ["12631", "Đông Đô", "Xã", "Dong Do"],
                        ["12619", "Duyên Hải", "Xã", "Duyen Hai"],
                        ["12655", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["12604", "Hòa Tiến", "Xã", "Hoa Tien"],
                        ["12661", "Hồng An", "Xã", "Hong An"],
                        ["12667", "Hồng Lĩnh", "Xã", "Hong Linh"],
                        ["12685", "Hồng Minh", "Xã", "Hong Minh"],
                        ["12607", "Hùng Dũng", "Xã", "Hung Dung"],
                        ["12586", "Hưng Hà", "Thị trấn", "Hung Ha"],
                        ["12613", "Hưng Nhân", "Thị trấn", "Hung Nhan"],
                        ["12664", "Kim Chung", "Xã", "Kim Chung"],
                        ["12637", "Liên Hiệp", "Xã", "Lien Hiep"],
                        ["12682", "Minh Hòa", "Xã", "Minh Hoa"],
                        ["12658", "Minh Khai", "Xã", "Minh Khai"],
                        ["12670", "Minh Tân", "Xã", "Minh Tan"],
                        ["12634", "Phúc Khánh", "Xã", "Phuc Khanh"],
                        ["12622", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["12592", "Tân Lễ", "Xã", "Tan Le"],
                        ["12610", "Tân Tiến", "Xã", "Tan Tien"],
                        ["12640", "Tây Đô", "Xã", "Tay Do"],
                        ["12649", "Thái Hưng", "Xã", "Thai Hung"],
                        ["12652", "Thái Phương", "Xã", "Thai Phuong"],
                        ["12643", "Thống Nhất", "Xã", "Thong Nhat"],
                        ["12646", "Tiến Đức", "Xã", "Tien Duc"],
                        ["12625", "Văn Cẩm", "Xã", "Van Cam"],
                        ["12673", "Văn Lang", "Xã", "Van Lang"]
                    ]
                ],
                [
                    "343", "Kiến Xương", "Huyện", "Kien Xuong",
                    [
                        ["13087", "An Bình", "Xã", "An Binh"],
                        ["13186", "Bình Định", "Xã", "Binh Dinh"],
                        ["13138", "Bình Minh", "Xã", "Binh Minh"],
                        ["13096", "Bình Nguyên", "Xã", "Binh Nguyen"],
                        ["13183", "Bình Thanh", "Xã", "Binh Thanh"],
                        ["13123", "Đình Phùng", "Xã", "Dinh Phung"],
                        ["13135", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["13093", "Hồng Thái", "Xã", "Hong Thai"],
                        ["13189", "Hồng Tiến", "Xã", "Hong Tien"],
                        ["13075", "Kiến Xương", "Thị trấn", "Kien Xuong"],
                        ["13102", "Lê Lợi", "Xã", "Le Loi"],
                        ["13171", "Minh Quang", "Xã", "Minh Quang"],
                        ["13177", "Minh Tân", "Xã", "Minh Tan"],
                        ["13180", "Nam Bình", "Xã", "Nam Binh"],
                        ["13120", "Nam Cao", "Xã", "Nam Cao"],
                        ["13144", "Quang Bình", "Xã", "Quang Binh"],
                        ["13132", "Quang Lịch", "Xã", "Quang Lich"],
                        ["13162", "Quang Minh", "Xã", "Quang Minh"],
                        ["13165", "Quang Trung", "Xã", "Quang Trung"],
                        ["13081", "Quốc Tuấn", "Xã", "Quoc Tuan"],
                        ["13090", "Tây Sơn", "Xã", "Tay Son"],
                        ["13114", "Thanh Tân", "Xã", "Thanh Tan"],
                        ["13117", "Thượng Hiền", "Xã", "Thuong Hien"],
                        ["13078", "Trà Giang", "Xã", "Tra Giang"],
                        ["13129", "Vũ An", "Xã", "Vu An"],
                        ["13174", "Vũ Bình", "Xã", "Vu Binh"],
                        ["13156", "Vũ Công", "Xã", "Vu Cong"],
                        ["13159", "Vũ Hòa", "Xã", "Vu Hoa"],
                        ["13111", "Vũ Lễ", "Xã", "Vu Le"],
                        ["13126", "Vũ Ninh", "Xã", "Vu Ninh"],
                        ["13141", "Vũ Quí", "Xã", "Vu Qui"],
                        ["13153", "Vũ Thắng", "Xã", "Vu Thang"],
                        ["13150", "Vũ Trung", "Xã", "Vu Trung"]
                    ]
                ],
                [
                    "338", "Quỳnh Phụ", "Huyện", "Quynh Phu",
                    [
                        ["12526", "An Ấp", "Xã", "An Ap"],
                        ["12523", "An Bài", "Thị trấn", "An Bai"],
                        ["12502", "An Cầu", "Xã", "An Cau"],
                        ["12478", "An Đồng", "Xã", "An Dong"],
                        ["12571", "An Dục", "Xã", "An Duc"],
                        ["12490", "An Hiệp", "Xã", "An Hiep"],
                        ["12475", "An Khê", "Xã", "An Khe"],
                        ["12550", "An Lễ", "Xã", "An Le"],
                        ["12559", "An Mỹ", "Xã", "An My"],
                        ["12514", "An Ninh", "Xã", "An Ninh"],
                        ["12538", "An Quí", "Xã", "An Qui"],
                        ["12499", "An Thái", "Xã", "An Thai"],
                        ["12541", "An Thanh", "Xã", "An Thanh"],
                        ["12580", "An Tràng", "Xã", "An Trang"],
                        ["12565", "An Vinh", "Xã", "An Vinh"],
                        ["12547", "An Vũ", "Xã", "An Vu"],
                        ["12532", "Châu Sơn", "Xã", "Chau Son"],
                        ["12574", "Đông Hải", "Xã", "Dong Hai"],
                        ["12583", "Đồng Tiến", "Xã", "Dong Tien"],
                        ["12556", "Quỳnh Bảo", "Xã", "Quynh Bao"],
                        ["12472", "Quỳnh Côi", "Thị trấn", "Quynh Coi"],
                        ["12496", "Quỳnh Giao", "Xã", "Quynh Giao"],
                        ["12520", "Quỳnh Hải", "Xã", "Quynh Hai"],
                        ["12481", "Quỳnh Hoa", "Xã", "Quynh Hoa"],
                        ["12493", "Quỳnh Hoàng", "Xã", "Quynh Hoang"],
                        ["12529", "Quỳnh Hội", "Xã", "Quynh Hoi"],
                        ["12505", "Quỳnh Hồng", "Xã", "Quynh Hong"],
                        ["12553", "Quỳnh Hưng", "Xã", "Quynh Hung"],
                        ["12508", "Quỳnh Khê", "Xã", "Quynh Khe"],
                        ["12484", "Quỳnh Lâm", "Xã", "Quynh Lam"],
                        ["12511", "Quỳnh Minh", "Xã", "Quynh Minh"],
                        ["12535", "Quỳnh Mỹ", "Xã", "Quynh My"],
                        ["12517", "Quỳnh Ngọc", "Xã", "Quynh Ngoc"],
                        ["12562", "Quỳnh Nguyên", "Xã", "Quynh Nguyen"],
                        ["12487", "Quỳnh Thọ", "Xã", "Quynh Tho"],
                        ["12577", "Quỳnh Trang", "Xã", "Quynh Trang"],
                        ["12568", "Quỳnh Xá", "Xã", "Quynh Xa"]
                    ]
                ],
                [
                    "336", "Thái Bình", "Thành phố", "Thai Binh",
                    [
                        ["12436", "Bồ Xuyên", "Phường", "Bo Xuyen"],
                        ["12439", "Đề Thám", "Phường", "De Tham"],
                        ["12457", "Đông Hòa", "Xã", "Dong Hoa"],
                        ["12817", "Đông Mỹ", "Xã", "Dong My"],
                        ["12820", "Đông Thọ", "Xã", "Dong Tho"],
                        ["12460", "Hoàng Diệu", "Phường", "Hoang Dieu"],
                        ["12442", "Kỳ Bá", "Phường", "Ky Ba"],
                        ["12433", "Lê Hồng Phong", "Phường", "Le Hong Phong"],
                        ["12448", "Phú Khánh", "Phường", "Phu Khanh"],
                        ["12463", "Phú Xuân", "Xã", "Phu Xuan"],
                        ["12445", "Quang Trung", "Phường", "Quang Trung"],
                        ["13225", "Tân Bình", "Xã", "Tan Binh"],
                        ["12451", "Tiền Phong", "Phường", "Tien Phong"],
                        ["12452", "Trần Hưng Đạo", "Phường", "Tran Hung Dao"],
                        ["12454", "Trần Lãm", "Phường", "Tran Lam"],
                        ["12469", "Vũ Chính", "Xã", "Vu Chinh"],
                        ["13084", "Vũ Đông", "Xã", "Vu Dong"],
                        ["13108", "Vũ Lạc", "Xã", "Vu Lac"],
                        ["12466", "Vũ Phúc", "Xã", "Vu Phuc"]
                    ]
                ],
                [
                    "341", "Thái Thụy", "Huyện", "Thai Thuy",
                    [
                        ["12949", " Mỹ Lộc", "Xã", " My Loc"],
                        ["12847", "An Tân", "Xã", "An Tan"],
                        ["12826", "Diêm Điền", "Thị trấn", "Diem Dien"],
                        ["12916", "Dương Hồng  Thủy", "Xã", "Duong Hong  Thuy"],
                        ["12865", "Dương Phúc", "Xã", "Duong Phuc"],
                        ["12922", "Hòa An", "Xã", "Hoa An"],
                        ["12841", "Hồng Dũng", "Xã", "Hong Dung"],
                        ["12925", "Sơn Hà", "Xã", "Son Ha"],
                        ["12958", "Tân Học", "Xã", "Tan Hoc"],
                        ["12940", "Thái Đô", "Xã", "Thai Do"],
                        ["12919", "Thái Giang", "Xã", "Thai Giang"],
                        ["12937", "Thái Hưng", "Xã", "Thai Hung"],
                        ["12910", "Thái Nguyên", "Xã", "Thai Nguyen"],
                        ["12934", "Thái Phúc", "Xã", "Thai Phuc"],
                        ["12961", "Thái Thịnh", "Xã", "Thai Thinh"],
                        ["12967", "Thái Thọ", "Xã", "Thai Tho"],
                        ["12907", "Thái Thượng", "Xã", "Thai Thuong"],
                        ["12943", "Thái Xuyên", "Xã", "Thai Xuyen"],
                        ["12964", "Thuần Thành", "Xã", "Thuan Thanh"],
                        ["12871", "Thụy Bình", "Xã", "Thuy Binh"],
                        ["12874", "Thụy Chính", "Xã", "Thuy Chinh"],
                        ["12877", "Thụy Dân", "Xã", "Thuy Dan"],
                        ["12892", "Thụy Duyên", "Xã", "Thuy Duyen"],
                        ["12880", "Thụy Hải", "Xã", "Thuy Hai"],
                        ["12853", "Thụy Hưng", "Xã", "Thuy Hung"],
                        ["12889", "Thụy Liên", "Xã", "Thuy Lien"],
                        ["12850", "Thụy Ninh", "Xã", "Thuy Ninh"],
                        ["12904", "Thụy Phong", "Xã", "Thuy Phong"],
                        ["12844", "Thụy Quỳnh", "Xã", "Thuy Quynh"],
                        ["12901", "Thụy Sơn", "Xã", "Thuy Son"],
                        ["12898", "Thụy Thanh", "Xã", "Thuy Thanh"],
                        ["12868", "Thụy Trình", "Xã", "Thuy Trinh"],
                        ["12832", "Thụy Trường", "Xã", "Thuy Truong"],
                        ["12859", "Thụy Văn", "Xã", "Thuy Van"],
                        ["12856", "Thụy Việt", "Xã", "Thuy Viet"],
                        ["12862", "Thụy Xuân", "Xã", "Thuy Xuan"]
                    ]
                ],
                [
                    "342", "Tiền Hải", "Huyện", "Tien Hai",
                    [
                        ["13012", "An Ninh", "Xã", "An Ninh"],
                        ["13048", "Bắc Hải", "Xã", "Bac Hai"],
                        ["13018", "Đông Cơ", "Xã", "Dong Co"],
                        ["13000", "Đông Hoàng", "Xã", "Dong Hoang"],
                        ["13024", "Đông Lâm", "Xã", "Dong Lam"],
                        ["12979", "Đông Long", "Xã", "Dong Long"],
                        ["13003", "Đông Minh", "Xã", "Dong Minh"],
                        ["13009", "Đông Phong", "Xã", "Dong Phong"],
                        ["12982", "Đông Quí", "Xã", "Dong Qui"],
                        ["12976", "Đông Trà", "Xã", "Dong Tra"],
                        ["12997", "Đông Trung", "Xã", "Dong Trung"],
                        ["12988", "Đông Xuyên", "Xã", "Dong Xuyen"],
                        ["13045", "Nam Chính", "Xã", "Nam Chinh"],
                        ["13036", "Nam Cường", "Xã", "Nam Cuong"],
                        ["13054", "Nam Hà", "Xã", "Nam Ha"],
                        ["13069", "Nam Hải", "Xã", "Nam Hai"],
                        ["13063", "Nam Hồng", "Xã", "Nam Hong"],
                        ["13066", "Nam Hưng", "Xã", "Nam Hung"],
                        ["13072", "Nam Phú", "Xã", "Nam Phu"],
                        ["13042", "Nam Thắng", "Xã", "Nam Thang"],
                        ["13057", "Nam Thanh", "Xã", "Nam Thanh"],
                        ["13051", "Nam Thịnh", "Xã", "Nam Thinh"],
                        ["13060", "Nam Trung", "Xã", "Nam Trung"],
                        ["13027", "Phương Công", "Xã", "Phuong Cong"],
                        ["13021", "Tây Giang", "Xã", "Tay Giang"],
                        ["12991", "Tây Lương", "Xã", "Tay Luong"],
                        ["12994", "Tây Ninh", "Xã", "Tay Ninh"],
                        ["13030", "Tây Phong", "Xã", "Tay Phong"],
                        ["13033", "Tây Tiến", "Xã", "Tay Tien"],
                        ["12970", "Tiền Hải", "Thị trấn", "Tien Hai"],
                        ["13039", "Vân Trường", "Xã", "Van Truong"],
                        ["12985", "Vũ Lăng", "Xã", "Vu Lang"]
                    ]
                ],
                [
                    "344", "Vũ Thư", "Huyện", "Vu Thu",
                    [
                        ["13243", "Bách Thuận", "Xã", "Bach Thuan"],
                        ["13198", "Đồng Thanh", "Xã", "Dong Thanh"],
                        ["13231", "Dũng Nghĩa", "Xã", "Dung Nghia"],
                        ["13279", "Duy Nhất", "Xã", "Duy Nhat"],
                        ["13204", "Hiệp Hòa", "Xã", "Hiep Hoa"],
                        ["13258", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["13195", "Hồng Lý", "Xã", "Hong Ly"],
                        ["13282", "Hồng Phong", "Xã", "Hong Phong"],
                        ["13228", "Minh Khai", "Xã", "Minh Khai"],
                        ["13222", "Minh Lãng", "Xã", "Minh Lang"],
                        ["13234", "Minh Quang", "Xã", "Minh Quang"],
                        ["13261", "Nguyên Xá", "Xã", "Nguyen Xa"],
                        ["13207", "Phúc Thành", "Xã", "Phuc Thanh"],
                        ["13249", "Song An", "Xã", "Song An"],
                        ["13213", "Song Lãng", "Xã", "Song Lang"],
                        ["13237", "Tam Quang", "Xã", "Tam Quang"],
                        ["13216", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["13240", "Tân Lập", "Xã", "Tan Lap"],
                        ["13210", "Tân Phong", "Xã", "Tan Phong"],
                        ["13252", "Trung An", "Xã", "Trung An"],
                        ["13246", "Tự Tân", "Xã", "Tu Tan"],
                        ["13219", "Việt Hùng", "Xã", "Viet Hung"],
                        ["13264", "Việt Thuận", "Xã", "Viet Thuan"],
                        ["13270", "Vũ Đoài", "Xã", "Vu Doai"],
                        ["13255", "Vũ Hội", "Xã", "Vu Hoi"],
                        ["13192", "Vũ Thư", "Thị trấn", "Vu Thu"],
                        ["13273", "Vũ Tiến", "Xã", "Vu Tien"],
                        ["13276", "Vũ Vân", "Xã", "Vu Van"],
                        ["13267", "Vũ Vinh", "Xã", "Vu Vinh"],
                        ["13201", "Xuân Hòa", "Xã", "Xuan Hoa"]
                    ]
                ]
            ]
        ],
        [
            "19", "Thái Nguyên", "Tỉnh", "Thai Nguyen",
            [
                [
                    "171", "Đại Từ", "Huyện", "Dai Tu",
                    [
                        ["05824", "An Khánh", "Xã", "An Khanh"],
                        ["05800", "Bản Ngoại", "Xã", "Ban Ngoai"],
                        ["05830", "Bình Thuận", "Xã", "Binh Thuan"],
                        ["05848", "Cát Nê", "Xã", "Cat Ne"],
                        ["05809", "Cù Vân", "Xã", "Cu Van"],
                        ["05776", "Đức Lương", "Xã", "Duc Luong"],
                        ["05812", "Hà Thượng", "Xã", "Ha Thuong"],
                        ["05818", "Hoàng Nông", "Xã", "Hoang Nong"],
                        ["05761", "Hùng Sơn", "Thị trấn", "Hung Son"],
                        ["05821", "Khôi Kỳ", "Xã", "Khoi Ky"],
                        ["05845", "Ký Phú", "Xã", "Ky Phu"],
                        ["05815", "La Bằng", "Xã", "La Bang"],
                        ["05833", "Lục Ba", "Xã", "Luc Ba"],
                        ["05770", "Minh Tiến", "Xã", "Minh Tien"],
                        ["05836", "Mỹ Yên", "Xã", "My Yen"],
                        ["05782", "Na Mao", "Xã", "Na Mao"],
                        ["05779", "Phú Cường", "Xã", "Phu Cuong"],
                        ["05785", "Phú Lạc", "Xã", "Phu Lac"],
                        ["05791", "Phú Thịnh", "Xã", "Phu Thinh"],
                        ["05797", "Phú Xuyên", "Xã", "Phu Xuyen"],
                        ["05794", "Phục Linh", "Xã", "Phuc Linh"],
                        ["05767", "Phúc Lương", "Xã", "Phuc Luong"],
                        ["05764", "Quân Chu", "Thị trấn", "Quan Chu"],
                        ["05851", "Quân Chu", "Xã", "Quan Chu"],
                        ["05788", "Tân Linh", "Xã", "Tan Linh"],
                        ["05827", "Tân Thái", "Xã", "Tan Thai"],
                        ["05803", "Tiên Hội", "Xã", "Tien Hoi"],
                        ["05839", "Vạn Thọ", "Xã", "Van Tho"],
                        ["05842", "Văn Yên", "Xã", "Van Yen"],
                        ["05773", "Yên Lãng", "Xã", "Yen Lang"]
                    ]
                ],
                [
                    "167", "Định Hóa", "Huyện", "Dinh Hoa",
                    [
                        ["05569", "Bảo Cường", "Xã", "Bao Cuong"],
                        ["05554", "Bảo Linh", "Xã", "Bao Linh"],
                        ["05605", "Bình Thành", "Xã", "Binh Thanh"],
                        ["05587", "Bình Yên", "Xã", "Binh Yen"],
                        ["05596", "Bộc Nhiêu", "Xã", "Boc Nhieu"],
                        ["05536", "Chợ Chu", "Thị trấn", "Cho Chu"],
                        ["05590", "Điềm Mặc", "Xã", "Diem Mac"],
                        ["05575", "Định Biên", "Xã", "Dinh Bien"],
                        ["05572", "Đồng Thịnh", "Xã", "Dong Thinh"],
                        ["05551", "Kim Phượng", "Xã", "Kim Phuong"],
                        ["05542", "Lam Vỹ", "Xã", "Lam Vy"],
                        ["05539", "Linh Thông", "Xã", "Linh Thong"],
                        ["05602", "Phú Đình", "Xã", "Phu Dinh"],
                        ["05593", "Phú Tiến", "Xã", "Phu Tien"],
                        ["05560", "Phúc Chu", "Xã", "Phuc Chu"],
                        ["05566", "Phượng Tiến", "Xã", "Phuong Tien"],
                        ["05545", "Quy Kỳ", "Xã", "Quy Ky"],
                        ["05599", "Sơn Phú", "Xã", "Son Phu"],
                        ["05563", "Tân Dương", "Xã", "Tan Duong"],
                        ["05548", "Tân Thịnh", "Xã", "Tan Thinh"],
                        ["05578", "Thanh Định", "Xã", "Thanh Dinh"],
                        ["05581", "Trung Hội", "Xã", "Trung Hoi"],
                        ["05584", "Trung Lương", "Xã", "Trung Luong"]
                    ]
                ],
                [
                    "169", "Đồng Hỷ", "Huyện", "Dong Hy",
                    [
                        ["05689", "Cây Thị", "Xã", "Cay Thi"],
                        ["05671", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["05692", "Hóa Thượng", "Xã", "Hoa Thuong"],
                        ["05683", "Hóa Trung", "Xã", "Hoa Trung"],
                        ["05698", "Hợp Tiến", "Xã", "Hop Tien"],
                        ["05686", "Khe Mo", "Xã", "Khe Mo"],
                        ["05677", "Minh Lập", "Xã", "Minh Lap"],
                        ["05707", "Nam Hòa", "Xã", "Nam Hoa"],
                        ["05674", "Quang Sơn", "Xã", "Quang Son"],
                        ["05656", "Sông Cầu", "Thị trấn", "Song Cau"],
                        ["05704", "Tân Lợi", "Xã", "Tan Loi"],
                        ["05668", "Tân Long", "Xã", "Tan Long"],
                        ["05662", "Trại Cau", "Thị trấn", "Trai Cau"],
                        ["05680", "Văn Hán", "Xã", "Van Han"],
                        ["05665", "Văn Lăng", "Xã", "Van Lang"]
                    ]
                ],
                [
                    "172", "Phổ Yên", "Thành phố", "Pho Yen",
                    [
                        ["05860", "Ba Hàng", "Phường", "Ba Hang"],
                        ["05857", "Bắc Sơn", "Phường", "Bac Son"],
                        ["05854", "Bãi Bông", "Phường", "Bai Bong"],
                        ["05875", "Đắc Sơn", "Phường", "Dac Son"],
                        ["05896", "Đông Cao", "Phường", "Dong Cao"],
                        ["05878", "Đồng Tiến", "Phường", "Dong Tien"],
                        ["05869", "Hồng Tiến", "Phường", "Hong Tien"],
                        ["05872", "Minh Đức", "Xã", "Minh Duc"],
                        ["05890", "Nam Tiến", "Phường", "Nam Tien"],
                        ["05863", "Phúc Tân", "Xã", "Phuc Tan"],
                        ["05866", "Phúc Thuận", "Xã", "Phuc Thuan"],
                        ["05893", "Tân Hương", "Phường", "Tan Huong"],
                        ["05902", "Tân Phú", "Phường", "Tan Phu"],
                        ["05881", "Thành Công", "Xã", "Thanh Cong"],
                        ["05905", "Thuận Thành", "Phường", "Thuan Thanh"],
                        ["05884", "Tiên Phong", "Phường", "Tien Phong"],
                        ["05899", "Trung Thành", "Phường", "Trung Thanh"],
                        ["05887", "Vạn Phái", "Xã", "Van Phai"]
                    ]
                ],
                [
                    "173", "Phú Bình", "Huyện", "Phu Binh",
                    [
                        ["05911", "Bàn Đạt", "Xã", "Ban Dat"],
                        ["05929", "Bảo Lý", "Xã", "Bao Ly"],
                        ["05926", "Đào Xá", "Xã", "Dao Xa"],
                        ["05941", "Điềm Thụy", "Xã", "Diem Thuy"],
                        ["05965", "Dương Thành", "Xã", "Duong Thanh"],
                        ["05968", "Hà Châu", "Xã", "Ha Chau"],
                        ["05908", "Hương Sơn", "Thị trấn", "Huong Son"],
                        ["05959", "Kha Sơn", "Xã", "Kha Son"],
                        ["05953", "Lương Phú", "Xã", "Luong Phu"],
                        ["05956", "Nga My", "Xã", "Nga My"],
                        ["05938", "Nhã Lộng", "Xã", "Nha Long"],
                        ["05947", "Tân Đức", "Xã", "Tan Duc"],
                        ["05935", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["05917", "Tân Khánh", "Xã", "Tan Khanh"],
                        ["05920", "Tân Kim", "Xã", "Tan Kim"],
                        ["05923", "Tân Thành", "Xã", "Tan Thanh"],
                        ["05962", "Thanh Ninh", "Xã", "Thanh Ninh"],
                        ["05932", "Thượng Đình", "Xã", "Thuong Dinh"],
                        ["05950", "Úc Kỳ", "Xã", "Uc Ky"],
                        ["05944", "Xuân Phương", "Xã", "Xuan Phuong"]
                    ]
                ],
                [
                    "168", "Phú Lương", "Huyện", "Phu Luong",
                    [
                        ["05650", "Cổ Lũng", "Xã", "Co Lung"],
                        ["05629", "Động Đạt", "Xã", "Dong Dat"],
                        ["05611", "Đu", "Thị trấn", "Du"],
                        ["05608", "Giang Tiên", "Thị trấn", "Giang Tien"],
                        ["05638", "Hợp Thành", "Xã", "Hop Thanh"],
                        ["05626", "Ôn Lương", "Xã", "On Luong"],
                        ["05644", "Phấn Mễ", "Xã", "Phan Me"],
                        ["05635", "Phú Đô", "Xã", "Phu Do"],
                        ["05632", "Phủ Lý", "Xã", "Phu Ly"],
                        ["05641", "Tức Tranh", "Xã", "Tuc Tranh"],
                        ["05647", "Vô Tranh", "Xã", "Vo Tranh"],
                        ["05620", "Yên Đổ", "Xã", "Yen Do"],
                        ["05623", "Yên Lạc", "Xã", "Yen Lac"],
                        ["05614", "Yên Ninh", "Xã", "Yen Ninh"],
                        ["05617", "Yên Trạch", "Xã", "Yen Trach"]
                    ]
                ],
                [
                    "165", "Sông Công", "Thành phố", "Song Cong",
                    [
                        ["05533", "Bá Xuyên", "Xã", "Ba Xuyen"],
                        ["05528", "Bách Quang", "Phường", "Bach Quang"],
                        ["05530", "Bình Sơn", "Xã", "Binh Son"],
                        ["05515", "Cải Đan", "Phường", "Cai Dan"],
                        ["05509", "Châu Sơn", "Phường", "Chau Son"],
                        ["05506", "Lương Sơn", "Phường", "Luong Son"],
                        ["05512", "Mỏ Chè", "Phường", "Mo Che"],
                        ["05521", "Phố Cò", "Phường", "Pho Co"],
                        ["05527", "Tân Quang", "Xã", "Tan Quang"],
                        ["05518", "Thắng Lợi", "Phường", "Thang Loi"]
                    ]
                ],
                [
                    "164", "Thái Nguyên", "Thành phố", "Thai Nguyen",
                    [
                        ["05467", "Cam Giá", "Phường", "Cam Gia"],
                        ["05695", "Cao Ngạn", "Xã", "Cao Ngan"],
                        ["05659", "Chùa Hang", "Phường", "Chua Hang"],
                        ["05710", "Đồng Bẩm", "Phường", "Dong Bam"],
                        ["05914", "Đồng Liên", "Xã", "Dong Lien"],
                        ["05458", "Đồng Quang", "Phường", "Dong Quang"],
                        ["05461", "Gia Sàng", "Phường", "Gia Sang"],
                        ["05440", "Hoàng Văn Thụ", "Phường", "Hoang Van Thu"],
                        ["05473", "Hương Sơn", "Phường", "Huong Son"],
                        ["05713", "Huống Thượng", "Xã", "Huong Thuong"],
                        ["05701", "Linh Sơn", "Xã", "Linh Son"],
                        ["05449", "Phan Đình Phùng", "Phường", "Phan Dinh Phung"],
                        ["05470", "Phú Xá", "Phường", "Phu Xa"],
                        ["05485", "Phúc Hà", "Xã", "Phuc Ha"],
                        ["05494", "Phúc Trìu", "Xã", "Phuc Triu"],
                        ["05488", "Phúc Xuân", "Xã", "Phuc Xuan"],
                        ["05431", "Quán Triều", "Phường", "Quan Trieu"],
                        ["05446", "Quang Trung", "Phường", "Quang Trung"],
                        ["05434", "Quang Vinh", "Phường", "Quang Vinh"],
                        ["05491", "Quyết Thắng", "Xã", "Quyet Thang"],
                        ["05653", "Sơn Cẩm", "Xã", "Son Cam"],
                        ["05503", "Tân Cương", "Xã", "Tan Cuong"],
                        ["05464", "Tân Lập", "Phường", "Tan Lap"],
                        ["05482", "Tân Long", "Phường", "Tan Long"],
                        ["05479", "Tân Thành", "Phường", "Tan Thanh"],
                        ["05452", "Tân Thịnh", "Phường", "Tan Thinh"],
                        ["05455", "Thịnh Đán", "Phường", "Thinh Dan"],
                        ["05497", "Thịnh Đức", "Xã", "Thinh Duc"],
                        ["05500", "Tích Lương", "Phường", "Tich Luong"],
                        ["05476", "Trung Thành", "Phường", "Trung Thanh"],
                        ["05443", "Trưng Vương", "Phường", "Trung Vuong"],
                        ["05437", "Túc Duyên", "Phường", "Tuc Duyen"]
                    ]
                ],
                [
                    "170", "Võ Nhai", "Huyện", "Vo Nhai",
                    [
                        ["05758", "Bình Long", "Xã", "Binh Long"],
                        ["05737", "Cúc Đường", "Xã", "Cuc Duong"],
                        ["05755", "Dân Tiến", "Xã", "Dan Tien"],
                        ["05716", "Đình Cả", "Thị trấn", "Dinh Ca"],
                        ["05740", "La Hiên", "Xã", "La Hien"],
                        ["05743", "Lâu Thượng", "Xã", "Lau Thuong"],
                        ["05752", "Liên Minh", "Xã", "Lien Minh"],
                        ["05722", "Nghinh Tường", "Xã", "Nghinh Tuong"],
                        ["05734", "Phú Thượng", "Xã", "Phu Thuong"],
                        ["05749", "Phương Giao", "Xã", "Phuong Giao"],
                        ["05719", "Sảng Mộc", "Xã", "Sang Moc"],
                        ["05725", "Thần Xa", "Xã", "Than Xa"],
                        ["05731", "Thượng Nung", "Xã", "Thuong Nung"],
                        ["05746", "Tràng Xá", "Xã", "Trang Xa"],
                        ["05728", "Vũ Chấn", "Xã", "Vu Chan"]
                    ]
                ]
            ]
        ],
        [
            "38", "Thanh Hóa", "Tỉnh", "Thanh Hoa",
            [
                [
                    "386", "Bá Thước", "Huyện", "Ba Thuoc",
                    [
                        ["14944", "Ái Thượng", "Xã", "Ai Thuong"],
                        ["14971", "Ban Công", "Xã", "Ban Cong"],
                        ["14923", "Cành Nàng", "Thị trấn", "Canh Nang"],
                        ["14965", "Cổ Lũng", "Xã", "Co Lung"],
                        ["14929", "Điền Hạ", "Xã", "Dien Ha"],
                        ["14950", "Điền Lư", "Xã", "Dien Lu"],
                        ["14932", "Điền Quang", "Xã", "Dien Quang"],
                        ["14926", "Điền Thượng", "Xã", "Dien Thuong"],
                        ["14935", "Điền Trung", "Xã", "Dien Trung"],
                        ["14962", "Hạ Trung", "Xã", "Ha Trung"],
                        ["14974", "Kỳ Tân", "Xã", "Ky Tan"],
                        ["14959", "Lũng Cao", "Xã", "Lung Cao"],
                        ["14956", "Lũng Niêm", "Xã", "Lung Niem"],
                        ["14941", "Lương Ngoại", "Xã", "Luong Ngoai"],
                        ["14947", "Lương Nội", "Xã", "Luong Noi"],
                        ["14953", "Lương Trung", "Xã", "Luong Trung"],
                        ["14968", "Thành Lâm", "Xã", "Thanh Lam"],
                        ["14938", "Thành Sơn", "Xã", "Thanh Son"],
                        ["14986", "Thiết Kế", "Xã", "Thiet Ke"],
                        ["14980", "Thiết Ống", "Xã", "Thiet Ong"],
                        ["14977", "Văn Nho", "Xã", "Van Nho"]
                    ]
                ],
                [
                    "381", "Bỉm Sơn", "Thị xã", "Bim Son",
                    [
                        ["14812", "Ba Đình", "Phường", "Ba Dinh"],
                        ["14809", "Bắc Sơn", "Phường", "Bac Son"],
                        ["14821", "Đông Sơn", "Phường", "Dong Son"],
                        ["14815", "Lam Sơn", "Phường", "Lam Son"],
                        ["14818", "Ngọc Trạo", "Phường", "Ngoc Trao"],
                        ["14823", "Phú Sơn", "Phường", "Phu Son"],
                        ["14824", "Quang Trung", "Xã", "Quang Trung"]
                    ]
                ],
                [
                    "390", "Cẩm Thủy", "Huyện", "Cam Thuy",
                    [
                        ["15151", "Cẩm Bình", "Xã", "Cam Binh"],
                        ["15160", "Cẩm Châu", "Xã", "Cam Chau"],
                        ["15148", "Cẩm Giang", "Xã", "Cam Giang"],
                        ["15145", "Cẩm Liên", "Xã", "Cam Lien"],
                        ["15172", "Cẩm Long", "Xã", "Cam Long"],
                        ["15139", "Cẩm Lương", "Xã", "Cam Luong"],
                        ["15169", "Cẩm Ngọc", "Xã", "Cam Ngoc"],
                        ["15181", "Cẩm Phú", "Xã", "Cam Phu"],
                        ["15136", "Cẩm Quý", "Xã", "Cam Quy"],
                        ["15163", "Cẩm Tâm", "Xã", "Cam Tam"],
                        ["15178", "Cẩm Tân", "Xã", "Cam Tan"],
                        ["15142", "Cẩm Thạch", "Xã", "Cam Thach"],
                        ["15133", "Cẩm Thành", "Xã", "Cam Thanh"],
                        ["15154", "Cẩm Tú", "Xã", "Cam Tu"],
                        ["15184", "Cẩm Vân", "Xã", "Cam Van"],
                        ["15175", "Cẩm Yên", "Xã", "Cam Yen"],
                        ["15127", "Phong Sơn", "Thị trấn", "Phong Son"]
                    ]
                ],
                [
                    "405", "Đông Sơn", "Huyện", "Dong Son",
                    [
                        ["16390", "Đông Hòa", "Xã", "Dong Hoa"],
                        ["16381", "Đông Hoàng", "Xã", "Dong Hoang"],
                        ["16408", "Đông Khê", "Xã", "Dong Khe"],
                        ["16399", "Đông Minh", "Xã", "Dong Minh"],
                        ["16423", "Đông Nam", "Xã", "Dong Nam"],
                        ["16384", "Đông Ninh", "Xã", "Dong Ninh"],
                        ["16420", "Đông Phú", "Xã", "Dong Phu"],
                        ["16426", "Đông Quang", "Xã", "Dong Quang"],
                        ["16402", "Đông Thanh", "Xã", "Dong Thanh"],
                        ["16414", "Đông Thịnh", "Xã", "Dong Thinh"],
                        ["16405", "Đông Tiến", "Xã", "Dong Tien"],
                        ["16417", "Đông Văn", "Xã", "Dong Van"],
                        ["16393", "Đông Yên", "Xã", "Dong Yen"],
                        ["16378", "Rừng Thông", "Thị trấn", "Rung Thong"]
                    ]
                ],
                [
                    "392", "Hà Trung", "Huyện", "Ha Trung",
                    [
                        ["15280", "Hà Bắc", "Xã", "Ha Bac"],
                        ["15328", "Hà Bình", "Xã", "Ha Binh"],
                        ["15334", "Hà Châu", "Xã", "Ha Chau"],
                        ["15319", "Hà Đông", "Xã", "Ha Dong"],
                        ["15292", "Hà Giang", "Xã", "Ha Giang"],
                        ["15343", "Hà Hải", "Xã", "Ha Hai"],
                        ["15331", "Hà Lai", "Xã", "Ha Lai"],
                        ["15316", "Hà Lĩnh", "Xã", "Ha Linh"],
                        ["15274", "Hà Long", "Xã", "Ha Long"],
                        ["15304", "Hà Ngọc", "Xã", "Ha Ngoc"],
                        ["15313", "Hà Sơn", "Xã", "Ha Son"],
                        ["15322", "Hà Tân", "Xã", "Ha Tan"],
                        ["15340", "Hà Thái", "Xã", "Ha Thai"],
                        ["15325", "Hà Tiến", "Xã", "Ha Tien"],
                        ["15271", "Hà Trung", "Thị trấn", "Ha Trung"],
                        ["15277", "Hà Vinh", "Xã", "Ha Vinh"],
                        ["15283", "Hoạt Giang", "Xã", "Hoat Giang"],
                        ["15298", "Lĩnh Toại", "Xã", "Linh Toai"],
                        ["15286", "Yên Dương", "Xã", "Yen Duong"],
                        ["15307", "Yến Sơn", "Xã", "Yen Son"]
                    ]
                ],
                [
                    "400", "Hậu Lộc", "Huyện", "Hau Loc",
                    [
                        ["16033", "Cầu Lộc", "Xã", "Cau Loc"],
                        ["16087", "Đa Lộc", "Xã", "Da Loc"],
                        ["16018", "Đại Lộc", "Xã", "Dai Loc"],
                        ["16015", "Đồng Lộc", "Xã", "Dong Loc"],
                        ["16084", "Hải Lộc", "Xã", "Hai Loc"],
                        ["16012", "Hậu Lộc", "Thị trấn", "Hau Loc"],
                        ["16063", "Hoa Lộc", "Xã", "Hoa Loc"],
                        ["16075", "Hòa Lộc", "Xã", "Hoa Loc"],
                        ["16081", "Hưng Lộc", "Xã", "Hung Loc"],
                        ["16066", "Liên Lộc", "Xã", "Lien Loc"],
                        ["16030", "Lộc Sơn", "Xã", "Loc Son"],
                        ["16078", "Minh Lộc", "Xã", "Minh Loc"],
                        ["16045", "Mỹ Lộc", "Xã", "My Loc"],
                        ["16090", "Ngư Lộc", "Xã", "Ngu Loc"],
                        ["16042", "Phong Lộc", "Xã", "Phong Loc"],
                        ["16072", "Phú Lộc", "Xã", "Phu Loc"],
                        ["16069", "Quang Lộc", "Xã", "Quang Loc"],
                        ["16036", "Thành Lộc", "Xã", "Thanh Loc"],
                        ["16048", "Thuần Lộc", "Xã", "Thuan Loc"],
                        ["16027", "Tiến Lộc", "Xã", "Tien Loc"],
                        ["16021", "Triệu Lộc", "Xã", "Trieu Loc"],
                        ["16039", "Tuy Lộc", "Xã", "Tuy Loc"],
                        ["16057", "Xuân Lộc", "Xã", "Xuan Loc"]
                    ]
                ],
                [
                    "399", "Hoằng Hóa", "Huyện", "Hoang Hoa",
                    [
                        ["15865", "Bút Sơn", "Thị trấn", "But Son"],
                        ["15907", "Hoằng Cát", "Xã", "Hoang Cat"],
                        ["15979", "Hoằng Châu", "Xã", "Hoang Chau"],
                        ["15946", "Hoằng Đạo", "Xã", "Hoang Dao"],
                        ["15940", "Hoằng Đạt", "Xã", "Hoang Dat"],
                        ["15952", "Hoằng Đồng", "Xã", "Hoang Dong"],
                        ["15997", "Hoằng Đông", "Xã", "Hoang Dong"],
                        ["15928", "Hoằng Đức", "Xã", "Hoang Duc"],
                        ["15871", "Hoằng Giang", "Xã", "Hoang Giang"],
                        ["15937", "Hoằng Hà", "Xã", "Hoang Ha"],
                        ["15991", "Hoằng Hải", "Xã", "Hoang Hai"],
                        ["15919", "Hoằng Hợp", "Xã", "Hoang Hop"],
                        ["15889", "Hoằng Kim", "Xã", "Hoang Kim"],
                        ["15964", "Hoằng Lộc", "Xã", "Hoang Loc"],
                        ["15976", "Hoằng Lưu", "Xã", "Hoang Luu"],
                        ["15994", "Hoằng Ngọc", "Xã", "Hoang Ngoc"],
                        ["15973", "Hoằng Phong", "Xã", "Hoang Phong"],
                        ["15883", "Hoằng Phú", "Xã", "Hoang Phu"],
                        ["16003", "Hoằng Phụ", "Xã", "Hoang Phu"],
                        ["15880", "Hoằng Phượng", "Xã", "Hoang Phuong"],
                        ["15886", "Hoằng Quỳ", "Xã", "Hoang Quy"],
                        ["15916", "Hoằng Quý", "Xã", "Hoang Quy"],
                        ["15901", "Hoằng Sơn", "Xã", "Hoang Son"],
                        ["15982", "Hoằng Tân", "Xã", "Hoang Tan"],
                        ["15955", "Hoằng Thái", "Xã", "Hoang Thai"],
                        ["15949", "Hoằng Thắng", "Xã", "Hoang Thang"],
                        ["15961", "Hoằng Thành", "Xã", "Hoang Thanh"],
                        ["16000", "Hoằng Thanh", "Xã", "Hoang Thanh"],
                        ["15958", "Hoằng Thịnh", "Xã", "Hoang Thinh"],
                        ["15988", "Hoằng Tiến", "Xã", "Hoang Tien"],
                        ["15967", "Hoằng Trạch", "Xã", "Hoang Trach"],
                        ["15895", "Hoằng Trinh", "Xã", "Hoang Trinh"],
                        ["15892", "Hoằng Trung", "Xã", "Hoang Trung"],
                        ["16006", "Hoằng Trường", "Xã", "Hoang Truong"],
                        ["15877", "Hoằng Xuân", "Xã", "Hoang Xuan"],
                        ["15910", "Hoằng Xuyên", "Xã", "Hoang Xuyen"],
                        ["15985", "Hoằng Yến", "Xã", "Hoang Yen"]
                    ]
                ],
                [
                    "388", "Lang Chánh", "Huyện", "Lang Chanh",
                    [
                        ["15058", "Đồng Lương", "Xã", "Dong Luong"],
                        ["15040", "Giao An", "Xã", "Giao An"],
                        ["15043", "Giao Thiện", "Xã", "Giao Thien"],
                        ["15052", "Lâm Phú", "Xã", "Lam Phu"],
                        ["15055", "Lang Chánh", "Thị trấn", "Lang Chanh"],
                        ["15049", "Tam Văn", "Xã", "Tam Van"],
                        ["15046", "Tân Phúc", "Xã", "Tan Phuc"],
                        ["15037", "Trí Nang", "Xã", "Tri Nang"],
                        ["15031", "Yên Khương", "Xã", "Yen Khuong"],
                        ["15034", "Yên Thắng", "Xã", "Yen Thang"]
                    ]
                ],
                [
                    "384", "Mường Lát", "Huyện", "Muong Lat",
                    [
                        ["14866", "Mường Chanh", "Xã", "Muong Chanh"],
                        ["14845", "Mường Lát", "Thị trấn", "Muong Lat"],
                        ["14854", "Mường Lý", "Xã", "Muong Ly"],
                        ["14864", "Nhi Sơn", "Xã", "Nhi Son"],
                        ["14863", "Pù Nhi", "Xã", "Pu Nhi"],
                        ["14860", "Quang Chiểu", "Xã", "Quang Chieu"],
                        ["14848", "Tam Chung", "Xã", "Tam Chung"],
                        ["14857", "Trung Lý", "Xã", "Trung Ly"]
                    ]
                ],
                [
                    "401", "Nga Sơn", "Huyện", "Nga Son",
                    [
                        ["16096", "Ba Đình", "Xã", "Ba Dinh"],
                        ["16144", "Nga An", "Xã", "Nga An"],
                        ["16120", "Nga Bạch", "Xã", "Nga Bach"],
                        ["16150", "Nga Điền", "Xã", "Nga Dien"],
                        ["16135", "Nga Giáp", "Xã", "Nga Giap"],
                        ["16138", "Nga Hải", "Xã", "Nga Hai"],
                        ["16159", "Nga Liên", "Xã", "Nga Lien"],
                        ["16147", "Nga Phú", "Xã", "Nga Phu"],
                        ["16114", "Nga Phượng", "Xã", "Nga Phuong"],
                        ["16093", "Nga Sơn", "Thị trấn", "Nga Son"],
                        ["16153", "Nga Tân", "Xã", "Nga Tan"],
                        ["16165", "Nga Thạch", "Xã", "Nga Thach"],
                        ["16162", "Nga Thái", "Xã", "Nga Thai"],
                        ["16168", "Nga Thắng", "Xã", "Nga Thang"],
                        ["16123", "Nga Thanh", "Xã", "Nga Thanh"],
                        ["16141", "Nga Thành", "Xã", "Nga Thanh"],
                        ["16105", "Nga Thiện", "Xã", "Nga Thien"],
                        ["16156", "Nga Thủy", "Xã", "Nga Thuy"],
                        ["16108", "Nga Tiến", "Xã", "Nga Tien"],
                        ["16117", "Nga Trung", "Xã", "Nga Trung"],
                        ["16171", "Nga Trường", "Xã", "Nga Truong"],
                        ["16102", "Nga Văn", "Xã", "Nga Van"],
                        ["16099", "Nga Vịnh", "Xã", "Nga Vinh"],
                        ["16132", "Nga Yên", "Xã", "Nga Yen"]
                    ]
                ],
                [
                    "407", "Nghi Sơn", "Thị xã", "Nghi Son",
                    [
                        ["16579", "Anh Sơn", "Xã", "Anh Son"],
                        ["16618", "Bình Minh", "Phường", "Binh Minh"],
                        ["16591", "Các Sơn", "Xã", "Cac Son"],
                        ["16600", "Định Hải", "Xã", "Dinh Hai"],
                        ["16585", "Hải An", "Phường", "Hai An"],
                        ["16633", "Hải Bình", "Phường", "Hai Binh"],
                        ["16564", "Hải Châu", "Phường", "Hai Chau"],
                        ["16660", "Hải Hà", "Xã", "Hai Ha"],
                        ["16561", "Hải Hòa", "Phường", "Hai Hoa"],
                        ["16597", "Hải Lĩnh", "Phường", "Hai Linh"],
                        ["16612", "Hải Nhân", "Xã", "Hai Nhan"],
                        ["16576", "Hải Ninh", "Phường", "Hai Ninh"],
                        ["16621", "Hải Thanh", "Phường", "Hai Thanh"],
                        ["16654", "Hải Thượng", "Phường", "Hai Thuong"],
                        ["16651", "Hải Yến", "Xã", "Hai Yen"],
                        ["16645", "Mai Lâm", "Phường", "Mai Lam"],
                        ["16657", "Nghi Sơn", "Xã", "Nghi Son"],
                        ["16582", "Ngọc Lĩnh", "Xã", "Ngoc Linh"],
                        ["16609", "Nguyên Bình", "Phường", "Nguyen Binh"],
                        ["16606", "Ninh Hải", "Phường", "Ninh Hai"],
                        ["16624", "Phú Lâm", "Xã", "Phu Lam"],
                        ["16603", "Phú Sơn", "Xã", "Phu Son"],
                        ["16594", "Tân Dân", "Phường", "Tan Dan"],
                        ["16636", "Tân Trường", "Xã", "Tan Truong"],
                        ["16570", "Thanh Sơn", "Xã", "Thanh Son"],
                        ["16567", "Thanh Thủy", "Xã", "Thanh Thuy"],
                        ["16642", "Tĩnh Hải", "Phường", "Tinh Hai"],
                        ["16630", "Trúc Lâm", "Phường", "Truc Lam"],
                        ["16648", "Trường Lâm", "Xã", "Truong Lam"],
                        ["16639", "Tùng Lâm", "Xã", "Tung Lam"],
                        ["16627", "Xuân Lâm", "Phường", "Xuan Lam"]
                    ]
                ],
                [
                    "389", "Ngọc Lặc", "Huyện", "Ngoc Lac",
                    [
                        ["15079", "Cao Ngọc", "Xã", "Cao Ngoc"],
                        ["15100", "Cao Thịnh", "Xã", "Cao Thinh"],
                        ["15088", "Đồng Thịnh", "Xã", "Dong Thinh"],
                        ["15118", "Kiên Thọ", "Xã", "Kien Tho"],
                        ["15064", "Lam Sơn", "Xã", "Lam Son"],
                        ["15097", "Lộc Thịnh", "Xã", "Loc Thinh"],
                        ["15124", "Minh Sơn", "Xã", "Minh Son"],
                        ["15121", "Minh Tiến", "Xã", "Minh Tien"],
                        ["15067", "Mỹ Tân", "Xã", "My Tan"],
                        ["15061", "Ngọc Lặc", "Thị Trấn", "Ngoc Lac"],
                        ["15091", "Ngọc Liên", "Xã", "Ngoc Lien"],
                        ["15094", "Ngọc Sơn", "Xã", "Ngoc Son"],
                        ["15103", "Ngọc Trung", "Xã", "Ngoc Trung"],
                        ["15115", "Nguyệt Ấn", "Xã", "Nguyet An"],
                        ["15112", "Phúc Thịnh", "Xã", "Phuc Thinh"],
                        ["15106", "Phùng Giáo", "Xã", "Phung Giao"],
                        ["15109", "Phùng Minh", "Xã", "Phung Minh"],
                        ["15085", "Quang Trung", "Xã", "Quang Trung"],
                        ["15073", "Thạch Lập", "Xã", "Thach Lap"],
                        ["15070", "Thúy Sơn", "Xã", "Thuy Son"],
                        ["15076", "Vân Âm", "Xã", "Van Am"]
                    ]
                ],
                [
                    "403", "Như Thanh", "Huyện", "Nhu Thanh",
                    [
                        ["16228", "Bến Sung", "Thị trấn", "Ben Sung"],
                        ["16231", "Cán Khê", "Xã", "Can Khe"],
                        ["16252", "Hải Long", "Xã", "Hai Long"],
                        ["16243", "Mậu Lâm", "Xã", "Mau Lam"],
                        ["16249", "Phú Nhuận", "Xã", "Phu Nhuan"],
                        ["16240", "Phượng Nghi", "Xã", "Phuong Nghi"],
                        ["16276", "Thanh Kỳ", "Xã", "Thanh Ky"],
                        ["16273", "Thanh Tân", "Xã", "Thanh Tan"],
                        ["16234", "Xuân Du", "Xã", "Xuan Du"],
                        ["16246", "Xuân Khang", "Xã", "Xuan Khang"],
                        ["16261", "Xuân Phúc", "Xã", "Xuan Phuc"],
                        ["16258", "Xuân Thái", "Xã", "Xuan Thai"],
                        ["16267", "Yên Lạc", "Xã", "Yen Lac"],
                        ["16264", "Yên Thọ", "Xã", "Yen Tho"]
                    ]
                ],
                [
                    "402", "Như Xuân", "Huyện", "Nhu Xuan",
                    [
                        ["16177", "Bãi Trành", "Xã", "Bai Tranh"],
                        ["16204", "Bình Lương", "Xã", "Binh Luong"],
                        ["16198", "Cát Tân", "Xã", "Cat Tan"],
                        ["16195", "Cát Vân", "Xã", "Cat Van"],
                        ["16186", "Hóa Quỳ", "Xã", "Hoa Quy"],
                        ["16201", "Tân Bình", "Xã", "Tan Binh"],
                        ["16213", "Thanh Hòa", "Xã", "Thanh Hoa"],
                        ["16219", "Thanh Lâm", "Xã", "Thanh Lam"],
                        ["16216", "Thanh Phong", "Xã", "Thanh Phong"],
                        ["16207", "Thanh Quân", "Xã", "Thanh Quan"],
                        ["16222", "Thanh Sơn", "Xã", "Thanh Son"],
                        ["16210", "Thanh Xuân", "Xã", "Thanh Xuan"],
                        ["16225", "Thượng Ninh", "Xã", "Thuong Ninh"],
                        ["16183", "Xuân Bình", "Xã", "Xuan Binh"],
                        ["16180", "Xuân Hòa", "Xã", "Xuan Hoa"],
                        ["16174", "Yên Cát", "Thị trấn", "Yen Cat"]
                    ]
                ],
                [
                    "404", "Nông Cống", "Huyện", "Nong Cong",
                    [
                        ["16369", "Công Chính", "Xã", "Cong Chinh"],
                        ["16354", "Công Liêm", "Xã", "Cong Liem"],
                        ["16294", "Hoàng Giang", "Xã", "Hoang Giang"],
                        ["16288", "Hoàng Sơn", "Xã", "Hoang Son"],
                        ["16324", "Minh Khôi", "Xã", "Minh Khoi"],
                        ["16321", "Minh Nghĩa", "Xã", "Minh Nghia"],
                        ["16279", "Nông Cống", "Thị trấn", "Nong Cong"],
                        ["16291", "Tân Khang", "Xã", "Tan Khang"],
                        ["16282", "Tân Phúc", "Xã", "Tan Phuc"],
                        ["16285", "Tân Thọ", "Xã", "Tan Tho"],
                        ["16315", "Tế Lợi", "Xã", "Te Loi"],
                        ["16318", "Tế Nông", "Xã", "Te Nong"],
                        ["16309", "Tế Thắng", "Xã", "Te Thang"],
                        ["16351", "Thăng Bình", "Xã", "Thang Binh"],
                        ["16342", "Thăng Long", "Xã", "Thang Long"],
                        ["16360", "Thăng Thọ", "Xã", "Thang Tho"],
                        ["16297", "Trung Chính", "Xã", "Trung Chinh"],
                        ["16303", "Trung Thành", "Xã", "Trung Thanh"],
                        ["16336", "Trường Giang", "Xã", "Truong Giang"],
                        ["16345", "Trường Minh", "Xã", "Truong Minh"],
                        ["16348", "Trường Sơn", "Xã", "Truong Son"],
                        ["16330", "Trường Trung", "Xã", "Truong Trung"],
                        ["16363", "Tượng Lĩnh", "Xã", "Tuong Linh"],
                        ["16366", "Tượng Sơn", "Xã", "Tuong Son"],
                        ["16357", "Tượng Văn", "Xã", "Tuong Van"],
                        ["16327", "Vạn Hòa", "Xã", "Van Hoa"],
                        ["16333", "Vạn Thắng", "Xã", "Van Thang"],
                        ["16339", "Vạn Thiện", "Xã", "Van Thien"],
                        ["16375", "Yên Mỹ", "Xã", "Yen My"]
                    ]
                ],
                [
                    "385", "Quan Hóa", "Huyện", "Quan Hoa",
                    [
                        ["14896", "Hiền Chung", "Xã", "Hien Chung"],
                        ["14899", "Hiền Kiệt", "Xã", "Hien Kiet"],
                        ["14869", "Hồi Xuân", "Thị trấn", "Hoi Xuan"],
                        ["14917", "Nam Động", "Xã", "Nam Dong"],
                        ["14902", "Nam Tiến", "Xã", "Nam Tien"],
                        ["14914", "Nam Xuân", "Xã", "Nam Xuan"],
                        ["14884", "Phú Lệ", "Xã", "Phu Le"],
                        ["14911", "Phú Nghiêm", "Xã", "Phu Nghiem"],
                        ["14887", "Phú Sơn", "Xã", "Phu Son"],
                        ["14878", "Phú Thanh", "Xã", "Phu Thanh"],
                        ["14890", "Phú Xuân", "Xã", "Phu Xuan"],
                        ["14872", "Thành Sơn", "Xã", "Thanh Son"],
                        ["14908", "Thiên Phủ", "Xã", "Thien Phu"],
                        ["14875", "Trung Sơn", "Xã", "Trung Son"],
                        ["14881", "Trung Thành", "Xã", "Trung Thanh"]
                    ]
                ],
                [
                    "387", "Quan Sơn", "Huyện", "Quan Son",
                    [
                        ["15025", "Mường Mìn", "Xã", "Muong Min"],
                        ["15013", "Na Mèo", "Xã", "Na Meo"],
                        ["15022", "Sơn Điện", "Xã", "Son Dien"],
                        ["15004", "Sơn Hà", "Xã", "Son Ha"],
                        ["15016", "Sơn Lư", "Thị trấn", "Son Lu"],
                        ["15010", "Sơn Thủy", "Xã", "Son Thuy"],
                        ["15019", "Tam Lư", "Xã", "Tam Lu"],
                        ["15007", "Tam Thanh", "Xã", "Tam Thanh"],
                        ["15001", "Trung Hạ", "Xã", "Trung Ha"],
                        ["14998", "Trung Thượng", "Xã", "Trung Thuong"],
                        ["14999", "Trung Tiến", "Xã", "Trung Tien"],
                        ["14995", "Trung Xuân", "Xã", "Trung Xuan"]
                    ]
                ],
                [
                    "406", "Quảng Xương", "Huyện", "Quang Xuong",
                    [
                        ["16468", "Quảng Bình", "Xã", "Quang Binh"],
                        ["16495", "Quảng Chính", "Xã", "Quang Chinh"],
                        ["16456", "Quảng Định", "Xã", "Quang Dinh"],
                        ["16453", "Quảng Đức", "Xã", "Quang Duc"],
                        ["16519", "Quảng Giao", "Xã", "Quang Giao"],
                        ["16540", "Quảng Hải", "Xã", "Quang Hai"],
                        ["16483", "Quảng Hòa", "Xã", "Quang Hoa"],
                        ["16471", "Quảng Hợp", "Xã", "Quang Hop"],
                        ["16489", "Quảng Khê", "Xã", "Quang Khe"],
                        ["16546", "Quảng Lộc", "Xã", "Quang Loc"],
                        ["16477", "Quảng Long", "Xã", "Quang Long"],
                        ["16543", "Quảng Lưu", "Xã", "Quang Luu"],
                        ["16498", "Quảng Ngọc", "Xã", "Quang Ngoc"],
                        ["16552", "Quảng Nham", "Xã", "Quang Nham"],
                        ["16462", "Quảng Nhân", "Xã", "Quang Nhan"],
                        ["16465", "Quảng Ninh", "Xã", "Quang Ninh"],
                        ["16510", "Quảng Phúc", "Xã", "Quang Phuc"],
                        ["16555", "Quảng Thạch", "Xã", "Quang Thach"],
                        ["16558", "Quảng Thái", "Xã", "Quang Thai"],
                        ["16447", "Quảng Trạch", "Xã", "Quang Trach"],
                        ["16492", "Quảng Trung", "Xã", "Quang Trung"],
                        ["16501", "Quảng Trường", "Xã", "Quang Truong"],
                        ["16474", "Quảng Văn", "Xã", "Quang Van"],
                        ["16480", "Quảng Yên", "Xã", "Quang Yen"],
                        ["16438", "Tân Phong", "Thị trấn", "Tan Phong"],
                        ["16549", "Tiên Trang", "Xã", "Tien Trang"]
                    ]
                ],
                [
                    "382", "Sầm Sơn", "Thành phố", "Sam Son",
                    [
                        ["14833", "Bắc Sơn", "Phường", "Bac Son"],
                        ["16531", "Quảng Châu", "Phường", "Quang Chau"],
                        ["14839", "Quảng Cư", "Phường", "Quang Cu"],
                        ["16537", "Quảng Đại", "Xã", "Quang Dai"],
                        ["16516", "Quảng Hùng", "Xã", "Quang Hung"],
                        ["16513", "Quảng Minh", "Xã", "Quang Minh"],
                        ["16528", "Quảng Thọ", "Phường", "Quang Tho"],
                        ["14842", "Quảng Tiến", "Phường", "Quang Tien"],
                        ["16534", "Quảng Vinh", "Phường", "Quang Vinh"],
                        ["14830", "Trung Sơn", "Phường", "Trung Son"],
                        ["14836", "Trường Sơn", "Phường", "Truong Son"]
                    ]
                ],
                [
                    "391", "Thạch Thành", "Huyện", "Thach Thanh",
                    [
                        ["15187", "Kim Tân", "Thị trấn", "Kim Tan"],
                        ["15268", "Ngọc Trạo", "Xã", "Ngoc Trao"],
                        ["15211", "Thạch Bình", "Xã", "Thach Binh"],
                        ["15205", "Thạch Cẩm", "Xã", "Thach Cam"],
                        ["15214", "Thạch Định", "Xã", "Thach Dinh"],
                        ["15217", "Thạch Đồng", "Xã", "Thach Dong"],
                        ["15196", "Thạch Lâm", "Xã", "Thach Lam"],
                        ["15220", "Thạch Long", "Xã", "Thach Long"],
                        ["15199", "Thạch Quảng", "Xã", "Thach Quang"],
                        ["15208", "Thạch Sơn", "Xã", "Thach Son"],
                        ["15202", "Thạch Tượng", "Xã", "Thach Tuong"],
                        ["15250", "Thành An", "Xã", "Thanh An"],
                        ["15235", "Thành Công", "Xã", "Thanh Cong"],
                        ["15265", "Thành Hưng", "Xã", "Thanh Hung"],
                        ["15259", "Thành Long", "Xã", "Thanh Long"],
                        ["15232", "Thành Minh", "Xã", "Thanh Minh"],
                        ["15223", "Thành Mỹ", "Xã", "Thanh My"],
                        ["15247", "Thành Tâm", "Xã", "Thanh Tam"],
                        ["15238", "Thành Tân", "Xã", "Thanh Tan"],
                        ["15253", "Thành Thọ", "Xã", "Thanh Tho"],
                        ["15256", "Thành Tiến", "Xã", "Thanh Tien"],
                        ["15241", "Thành Trực", "Xã", "Thanh Truc"],
                        ["15229", "Thành Vinh", "Xã", "Thanh Vinh"],
                        ["15226", "Thành Yên", "Xã", "Thanh Yen"],
                        ["15190", "Vân Du", "Thị trấn", "Van Du"]
                    ]
                ],
                [
                    "380", "Thanh Hóa", "Thành phố", "Thanh Hoa",
                    [
                        ["16435", "An Hưng", "Phường", "An Hung"],
                        ["14776", "Ba Đình", "Phường", "Ba Dinh"],
                        ["14767", "Điện Biên", "Phường", "Dien Bien"],
                        ["14791", "Đông Cương", "Phường", "Dong Cuong"],
                        ["14797", "Đông Hải", "Phường", "Dong Hai"],
                        ["14794", "Đông Hương", "Phường", "Dong Huong"],
                        ["16396", "Đông Lĩnh", "Phường", "Dong Linh"],
                        ["14785", "Đông Sơn", "Phường", "Dong Son"],
                        ["16432", "Đông Tân", "Phường", "Dong Tan"],
                        ["14758", "Đông Thọ", "Phường", "Dong Tho"],
                        ["14782", "Đông Vệ", "Phường", "Dong Ve"],
                        ["16429", "Đông Vinh", "Xã", "Dong Vinh"],
                        ["14755", "Hàm Rồng", "Phường", "Ham Rong"],
                        ["15970", "Hoằng Đại", "Xã", "Hoang Dai"],
                        ["15925", "Hoằng Quang", "Xã", "Hoang Quang"],
                        ["14773", "Lam Sơn", "Phường", "Lam Son"],
                        ["15922", "Long Anh", "Phường", "Long Anh"],
                        ["14761", "Nam Ngạn", "Phường", "Nam Ngan"],
                        ["14779", "Ngọc Trạo", "Phường", "Ngoc Trao"],
                        ["14770", "Phú Sơn", "Phường", "Phu Son"],
                        ["16507", "Quảng Cát", "Phường", "Quang Cat"],
                        ["16459", "Quảng Đông", "Phường", "Quang Dong"],
                        ["14800", "Quảng Hưng", "Phường", "Quang Hung"],
                        ["16522", "Quảng Phú", "Phường", "Quang Phu"],
                        ["16525", "Quảng Tâm", "Phường", "Quang Tam"],
                        ["14803", "Quảng Thắng", "Phường", "Quang Thang"],
                        ["14806", "Quảng Thành", "Phường", "Quang Thanh"],
                        ["16441", "Quảng Thịnh", "Phường", "Quang Thinh"],
                        ["14788", "Tân Sơn", "Phường", "Tan Son"],
                        ["15913", "Tào Xuyên", "Phường", "Tao Xuyen"],
                        ["15859", "Thiệu Dương", "Phường", "Thieu Duong"],
                        ["15856", "Thiệu Khánh", "Phường", "Thieu Khanh"],
                        ["15850", "Thiệu Vân", "Xã", "Thieu Van"],
                        ["14764", "Trường Thi", "Phường", "Truong Thi"]
                    ]
                ],
                [
                    "398", "Thiệu Hóa", "Huyện", "Thieu Hoa",
                    [
                        ["15829", "Minh Tâm", "Xã", "Minh Tam"],
                        ["15847", "Tân Châu", "Xã", "Tan Chau"],
                        ["15820", "Thiệu Chính", "Xã", "Thieu Chinh"],
                        ["15787", "Thiệu Công", "Xã", "Thieu Cong"],
                        ["15799", "Thiệu Duy", "Xã", "Thieu Duy"],
                        ["15796", "Thiệu Giang", "Xã", "Thieu Giang"],
                        ["15853", "Thiệu Giao", "Xã", "Thieu Giao"],
                        ["15772", "Thiệu Hóa", "Thị trấn", "Thieu Hoa"],
                        ["15823", "Thiệu Hòa", "Xã", "Thieu Hoa"],
                        ["15805", "Thiệu Hợp", "Xã", "Thieu Hop"],
                        ["15793", "Thiệu Long", "Xã", "Thieu Long"],
                        ["15835", "Thiệu Lý", "Xã", "Thieu Ly"],
                        ["15775", "Thiệu Ngọc", "Xã", "Thieu Ngoc"],
                        ["15802", "Thiệu Nguyên", "Xã", "Thieu Nguyen"],
                        ["15790", "Thiệu Phú", "Xã", "Thieu Phu"],
                        ["15781", "Thiệu Phúc", "Xã", "Thieu Phuc"],
                        ["15811", "Thiệu Quang", "Xã", "Thieu Quang"],
                        ["15814", "Thiệu Thành", "Xã", "Thieu Thanh"],
                        ["15808", "Thiệu Thịnh", "Xã", "Thieu Thinh"],
                        ["15784", "Thiệu Tiến", "Xã", "Thieu Tien"],
                        ["15817", "Thiệu Toán", "Xã", "Thieu Toan"],
                        ["15841", "Thiệu Trung", "Xã", "Thieu Trung"],
                        ["15838", "Thiệu Vận", "Xã", "Thieu Van"],
                        ["15832", "Thiệu Viên", "Xã", "Thieu Vien"],
                        ["15778", "Thiệu Vũ", "Xã", "Thieu Vu"]
                    ]
                ],
                [
                    "395", "Thọ Xuân", "Huyện", "Tho Xuan",
                    [
                        ["15502", "Bắc Lương", "Xã", "Bac Luong"],
                        ["15556", "Lam Sơn", "Thị trấn", "Lam Son"],
                        ["15505", "Nam Giang", "Xã", "Nam Giang"],
                        ["15577", "Phú Xuân", "Xã", "Phu Xuan"],
                        ["15571", "Quảng Phú", "Xã", "Quang Phu"],
                        ["15553", "Sao Vàng", "Thị trấn", "Sao Vang"],
                        ["15523", "Tây Hồ", "Xã", "Tay Ho"],
                        ["15538", "Thọ Diên", "Xã", "Tho Dien"],
                        ["15520", "Thọ Hải", "Xã", "Tho Hai"],
                        ["15541", "Thọ Lâm", "Xã", "Tho Lam"],
                        ["15568", "Thọ Lập", "Xã", "Tho Lap"],
                        ["15511", "Thọ Lộc", "Xã", "Tho Loc"],
                        ["15499", "Thọ Xuân", "Thị trấn", "Tho Xuan"],
                        ["15544", "Thọ Xương", "Xã", "Tho Xuong"],
                        ["15565", "Thuận Minh", "Xã", "Thuan Minh"],
                        ["15598", "Trường Xuân", "Xã", "Truong Xuan"],
                        ["15547", "Xuân Bái", "Xã", "Xuan Bai"],
                        ["15526", "Xuân Giang", "Xã", "Xuan Giang"],
                        ["15517", "Xuân Hòa", "Xã", "Xuan Hoa"],
                        ["15493", "Xuân Hồng", "Xã", "Xuan Hong"],
                        ["15535", "Xuân Hưng", "Xã", "Xuan Hung"],
                        ["15583", "Xuân Lai", "Xã", "Xuan Lai"],
                        ["15586", "Xuân Lập", "Xã", "Xuan Lap"],
                        ["15592", "Xuân Minh", "Xã", "Xuan Minh"],
                        ["15508", "Xuân Phong", "Xã", "Xuan Phong"],
                        ["15550", "Xuân Phú", "Xã", "Xuan Phu"],
                        ["15532", "Xuân Sinh", "Xã", "Xuan Sinh"],
                        ["15559", "Xuân Thiên", "Xã", "Xuan Thien"],
                        ["15574", "Xuân Tín", "Xã", "Xuan Tin"],
                        ["15514", "Xuân Trường", "Xã", "Xuan Truong"]
                    ]
                ],
                [
                    "396", "Thường Xuân", "Huyện", "Thuong Xuan",
                    [
                        ["15607", "Bát Mọt", "Xã", "Bat Mot"],
                        ["15637", "Luận Khê", "Xã", "Luan Khe"],
                        ["15634", "Luận Thành", "Xã", "Luan Thanh"],
                        ["15628", "Lương Sơn", "Xã", "Luong Son"],
                        ["15655", "Ngọc Phụng", "Xã", "Ngoc Phung"],
                        ["15661", "Tân Thành", "Xã", "Tan Thanh"],
                        ["15652", "Thọ Thanh", "Xã", "Tho Thanh"],
                        ["15646", "Thường Xuân", "Thị trấn", "Thuong Xuan"],
                        ["15622", "Vạn Xuân", "Xã", "Van Xuan"],
                        ["15631", "Xuân Cao", "Xã", "Xuan Cao"],
                        ["15658", "Xuân Chinh", "Xã", "Xuan Chinh"],
                        ["15649", "Xuân Dương", "Xã", "Xuan Duong"],
                        ["15619", "Xuân Lẹ", "Xã", "Xuan Le"],
                        ["15643", "Xuân Lộc", "Xã", "Xuan Loc"],
                        ["15640", "Xuân Thắng", "Xã", "Xuan Thang"],
                        ["15610", "Yên Nhân", "Xã", "Yen Nhan"]
                    ]
                ],
                [
                    "397", "Triệu Sơn", "Huyện", "Trieu Son",
                    [
                        ["15709", "An Nông", "Xã", "An Nong"],
                        ["15769", "Bình Sơn", "Xã", "Binh Son"],
                        ["15700", "Dân Lực", "Xã", "Dan Luc"],
                        ["15703", "Dân Lý", "Xã", "Dan Ly"],
                        ["15706", "Dân Quyền", "Xã", "Dan Quyen"],
                        ["15721", "Đồng Lợi", "Xã", "Dong Loi"],
                        ["15727", "Đồng Thắng", "Xã", "Dong Thang"],
                        ["15724", "Đồng Tiến", "Xã", "Dong Tien"],
                        ["15676", "Hợp Lý", "Xã", "Hop Ly"],
                        ["15688", "Hợp Thắng", "Xã", "Hop Thang"],
                        ["15682", "Hợp Thành", "Xã", "Hop Thanh"],
                        ["15679", "Hợp Tiến", "Xã", "Hop Tien"],
                        ["15733", "Khuyến Nông", "Xã", "Khuyen Nong"],
                        ["15691", "Minh Sơn", "Xã", "Minh Son"],
                        ["15766", "Nông Trường", "Xã", "Nong Truong"],
                        ["15718", "Nưa", "Thị trấn", "Nua"],
                        ["15715", "Thái Hòa", "Xã", "Thai Hoa"],
                        ["15670", "Thọ Bình", "Xã", "Tho Binh"],
                        ["15754", "Thọ Cường", "Xã", "Tho Cuong"],
                        ["15742", "Thọ Dân", "Xã", "Tho Dan"],
                        ["15751", "Thọ Ngọc", "Xã", "Tho Ngoc"],
                        ["15757", "Thọ Phú", "Xã", "Tho Phu"],
                        ["15667", "Thọ Sơn", "Xã", "Tho Son"],
                        ["15748", "Thọ Tân", "Xã", "Tho Tan"],
                        ["15763", "Thọ Thế", "Xã", "Tho The"],
                        ["15673", "Thọ Tiến", "Xã", "Tho Tien"],
                        ["15760", "Thọ Vực", "Xã", "Tho Vuc"],
                        ["15730", "Tiến Nông", "Xã", "Tien Nong"],
                        ["15664", "Triệu Sơn", "Thị trấn", "Trieu Son"],
                        ["15685", "Triệu Thành", "Xã", "Trieu Thanh"],
                        ["15712", "Văn Sơn", "Xã", "Van Son"],
                        ["15739", "Xuân Lộc", "Xã", "Xuan Loc"],
                        ["15736", "Xuân Thịnh", "Xã", "Xuan Thinh"],
                        ["15745", "Xuân Thọ", "Xã", "Xuan Tho"]
                    ]
                ],
                [
                    "393", "Vĩnh Lộc", "Huyện", "Vinh Loc",
                    [
                        ["15382", "Minh Tân", "Xã", "Minh Tan"],
                        ["15385", "Ninh Khang", "Xã", "Ninh Khang"],
                        ["15391", "Vĩnh An", "Xã", "Vinh An"],
                        ["15376", "Vĩnh Hòa", "Xã", "Vinh Hoa"],
                        ["15367", "Vĩnh Hưng", "Xã", "Vinh Hung"],
                        ["15379", "Vĩnh Hùng", "Xã", "Vinh Hung"],
                        ["15349", "Vĩnh Lộc", "Thị trấn", "Vinh Loc"],
                        ["15361", "Vĩnh Long", "Xã", "Vinh Long"],
                        ["15364", "Vĩnh Phúc", "Xã", "Vinh Phuc"],
                        ["15352", "Vĩnh Quang", "Xã", "Vinh Quang"],
                        ["15388", "Vĩnh Thịnh", "Xã", "Vinh Thinh"],
                        ["15358", "Vĩnh Tiến", "Xã", "Vinh Tien"],
                        ["15355", "Vĩnh Yên", "Xã", "Vinh Yen"]
                    ]
                ],
                [
                    "394", "Yên Định", "Huyện", "Yen Dinh",
                    [
                        ["15478", "Định Bình", "Xã", "Dinh Binh"],
                        ["15454", "Định Công", "Xã", "Dinh Cong"],
                        ["15475", "Định Hải", "Xã", "Dinh Hai"],
                        ["15448", "Định Hòa", "Xã", "Dinh Hoa"],
                        ["15472", "Định Hưng", "Xã", "Dinh Hung"],
                        ["15466", "Định Liên", "Xã", "Dinh Lien"],
                        ["15463", "Định Long", "Xã", "Dinh Long"],
                        ["15457", "Định Tân", "Xã", "Dinh Tan"],
                        ["15445", "Định Tăng", "Xã", "Dinh Tang"],
                        ["15451", "Định Thành", "Xã", "Dinh Thanh"],
                        ["15460", "Định Tiến", "Xã", "Dinh Tien"],
                        ["15469", "Quán Lào", "Thị trấn", "Quan Lao"],
                        ["15412", "Quý Lộc", "Thị trấn", "Quy Loc"],
                        ["15397", "Thống Nhất", "Thị trấn", "Thong Nhat"],
                        ["15433", "Yên Hùng", "Xã", "Yen Hung"],
                        ["15442", "Yên Lạc", "Xã", "Yen Lac"],
                        ["15403", "Yên Lâm", "Thị trấn", "Yen Lam"],
                        ["15439", "Yên Ninh", "Xã", "Yen Ninh"],
                        ["15427", "Yên Phong", "Xã", "Yen Phong"],
                        ["15409", "Yên Phú", "Xã", "Yen Phu"],
                        ["15406", "Yên Tâm", "Xã", "Yen Tam"],
                        ["15430", "Yên Thái", "Xã", "Yen Thai"],
                        ["15436", "Yên Thịnh", "Xã", "Yen Thinh"],
                        ["15415", "Yên Thọ", "Xã", "Yen Tho"],
                        ["15418", "Yên Trung", "Xã", "Yen Trung"],
                        ["15421", "Yên Trường", "Xã", "Yen Truong"]
                    ]
                ]
            ]
        ],
        [
            "46", "Thừa Thiên Huế", "Tỉnh", "Thua Thien Hue",
            [
                [
                    "481", "A Lưới", "Huyện", "A Luoi",
                    [
                        ["20044", "A Lưới", "Thị trấn", "A Luoi"],
                        ["20068", "A Ngo", "Xã", "A Ngo"],
                        ["20095", "A Roàng", "Xã", "A Roang"],
                        ["20098", "Đông Sơn", "Xã", "Dong Son"],
                        ["20065", "Hồng Bắc", "Xã", "Hong Bac"],
                        ["20050", "Hồng Hạ", "Xã", "Hong Ha"],
                        ["20053", "Hồng Kim", "Xã", "Hong Kim"],
                        ["20089", "Hồng Thái", "Xã", "Hong Thai"],
                        ["20086", "Hồng Thượng", "Xã", "Hong Thuong"],
                        ["20104", "Hồng Thủy", "Xã", "Hong Thuy"],
                        ["20047", "Hồng Vân", "Xã", "Hong Van"],
                        ["20059", "Hương Nguyên", "Xã", "Huong Nguyen"],
                        ["20080", "Hương Phong", "Xã", "Huong Phong"],
                        ["20101", "Lâm Đớt", "Xã", "Lam Dot"],
                        ["20074", "Phú Vinh", "Xã", "Phu Vinh"],
                        ["20083", "Quảng Nhâm", "Xã", "Quang Nham"],
                        ["20071", "Sơn Thủy", "Xã", "Son Thuy"],
                        ["20056", "Trung Sơn", "Xã", "Trung Son"]
                    ]
                ],
                [
                    "474", "Huế", "Thành phố", "Hue",
                    [
                        ["19801", "An Cựu", "Phường", "An Cuu"],
                        ["19815", "An Đông", "Phường", "An Dong"],
                        ["19803", "An Hòa", "Phường", "An Hoa"],
                        ["19816", "An Tây", "Phường", "An Tay"],
                        ["19768", "Đông Ba", "Phường", "Dong Ba"],
                        ["19756", "Gia Hội", "Phường", "Gia Hoi"],
                        ["19999", "Hải Dương", "Xã", "Hai Duong"],
                        ["20023", "Hương An", "Phường", "Huong An"],
                        ["20029", "Hương Hồ", "Phường", "Huong Ho"],
                        ["19810", "Hương Long", "Phường", "Huong Long"],
                        ["20002", "Hương Phong", "Xã", "Huong Phong"],
                        ["19804", "Hương Sơ", "Phường", "Huong So"],
                        ["20032", "Hương Thọ", "Xã", "Huong Tho"],
                        ["20014", "Hương Vinh", "Phường", "Huong Vinh"],
                        ["19774", "Kim Long", "Phường", "Kim Long"],
                        ["19906", "Phú Dương", "Xã", "Phu Duong"],
                        ["19759", "Phú Hậu", "Phường", "Phu Hau"],
                        ["19786", "Phú Hội", "Phường", "Phu Hoi"],
                        ["19909", "Phú Mậu", "Xã", "Phu Mau"],
                        ["19789", "Phú Nhuận", "Phường", "Phu Nhuan"],
                        ["19924", "Phú Thanh", "Xã", "Phu Thanh"],
                        ["19930", "Phú Thượng", "Phường", "Phu Thuong"],
                        ["19798", "Phước Vĩnh", "Phường", "Phuoc Vinh"],
                        ["19780", "Phường Đúc", "Phường", "Phuong Duc"],
                        ["19750", "Tây Lộc", "Phường", "Tay Loc"],
                        ["19900", "Thuận An", "Phường", "Thuan An"],
                        ["19762", "Thuận Hòa", "Phường", "Thuan Hoa"],
                        ["19753", "Thuận Lộc", "Phường", "Thuan Loc"],
                        ["19981", "Thủy Bằng", "Xã", "Thuy Bang"],
                        ["19807", "Thuỷ Biều", "Phường", "Thuy Bieu"],
                        ["19963", "Thủy Vân", "Phường", "Thuy Van"],
                        ["19813", "Thuỷ Xuân", "Phường", "Thuy Xuan"],
                        ["19795", "Trường An", "Phường", "Truong An"],
                        ["19783", "Vĩnh Ninh", "Phường", "Vinh Ninh"],
                        ["19777", "Vỹ Dạ", "Phường", "Vy Da"],
                        ["19792", "Xuân Phú", "Phường", "Xuan Phu"]
                    ]
                ],
                [
                    "479", "Hương Thủy", "Thị xã", "Huong Thuy",
                    [
                        ["19993", "Dương Hòa", "Xã", "Duong Hoa"],
                        ["19960", "Phú Bài", "Phường", "Phu Bai"],
                        ["19990", "Phú Sơn", "Xã", "Phu Son"],
                        ["19975", "Thủy Châu", "Phường", "Thuy Chau"],
                        ["19969", "Thủy Dương", "Phường", "Thuy Duong"],
                        ["19978", "Thủy Lương", "Phường", "Thuy Luong"],
                        ["19987", "Thủy Phù", "Xã", "Thuy Phu"],
                        ["19972", "Thủy Phương", "Phường", "Thuy Phuong"],
                        ["19984", "Thủy Tân", "Xã", "Thuy Tan"],
                        ["19966", "Thủy Thanh", "Xã", "Thuy Thanh"]
                    ]
                ],
                [
                    "480", "Hương Trà", "Thị xã", "Huong Tra",
                    [
                        ["20041", "Bình Thành", "Xã", "Binh Thanh"],
                        ["20035", "Bình Tiến", "Xã", "Binh Tien"],
                        ["20026", "Hương Bình", "Xã", "Huong Binh"],
                        ["20020", "Hương Chữ", "Phường", "Huong Chu"],
                        ["20005", "Hương Toàn", "Xã", "Huong Toan"],
                        ["20008", "Hương Vân", "Phường", "Huong Van"],
                        ["20011", "Hương Văn", "Phường", "Huong Van"],
                        ["20017", "Hương Xuân", "Phường", "Huong Xuan"],
                        ["19996", "Tứ Hạ", "Phường", "Tu Ha"]
                    ]
                ],
                [
                    "483", "Nam Đông", "Huyện", "Nam Dong",
                    [
                        ["20182", "Hương Hữu", "Xã", "Huong Huu"],
                        ["20170", "Hương Lộc", "Xã", "Huong Loc"],
                        ["20164", "Hương Phú", "Xã", "Huong Phu"],
                        ["20167", "Hương Sơn", "Xã", "Huong Son"],
                        ["20179", "Hương Xuân", "Xã", "Huong Xuan"],
                        ["20161", "Khe Tre", "Thị trấn", "Khe Tre"],
                        ["20185", "Thượng Lộ", "Xã", "Thuong Lo"],
                        ["20188", "Thượng Long", "Xã", "Thuong Long"],
                        ["20191", "Thượng Nhật", "Xã", "Thuong Nhat"],
                        ["20173", "Thượng Quảng", "Xã", "Thuong Quang"]
                    ]
                ],
                [
                    "476", "Phong Điền", "Huyện", "Phong Dien",
                    [
                        ["19843", "Điền Hải", "Xã", "Dien Hai"],
                        ["19834", "Điền Hòa", "Xã", "Dien Hoa"],
                        ["19822", "Điền Hương", "Xã", "Dien Huong"],
                        ["19828", "Điền Lộc", "Xã", "Dien Loc"],
                        ["19825", "Điền Môn", "Xã", "Dien Mon"],
                        ["19858", "Phong An", "Xã", "Phong An"],
                        ["19831", "Phong Bình", "Xã", "Phong Binh"],
                        ["19837", "Phong Chương", "Xã", "Phong Chuong"],
                        ["19819", "Phong Điền", "Thị trấn", "Phong Dien"],
                        ["19840", "Phong Hải", "Xã", "Phong Hai"],
                        ["19852", "Phong Hiền", "Xã", "Phong Hien"],
                        ["19846", "Phong Hòa", "Xã", "Phong Hoa"],
                        ["19855", "Phong Mỹ", "Xã", "Phong My"],
                        ["19864", "Phong Sơn", "Xã", "Phong Son"],
                        ["19849", "Phong Thu", "Xã", "Phong Thu"],
                        ["19861", "Phong Xuân", "Xã", "Phong Xuan"]
                    ]
                ],
                [
                    "482", "Phú Lộc", "Huyện", "Phu Loc",
                    [
                        ["20122", "Giang Hải", "Xã", "Giang Hai"],
                        ["20110", "Lăng Cô", "Thị trấn", "Lang Co"],
                        ["20140", "Lộc An", "Xã", "Loc An"],
                        ["20134", "Lộc Bình", "Xã", "Loc Binh"],
                        ["20128", "Lộc Bổn", "Xã", "Loc Bon"],
                        ["20143", "Lộc Điền", "Xã", "Loc Dien"],
                        ["20155", "Lộc Hòa", "Xã", "Loc Hoa"],
                        ["20131", "Lộc Sơn", "Xã", "Loc Son"],
                        ["20146", "Lộc Thủy", "Xã", "Loc Thuy"],
                        ["20152", "Lộc Tiến", "Xã", "Loc Tien"],
                        ["20149", "Lộc Trì", "Xã", "Loc Tri"],
                        ["20137", "Lộc Vĩnh", "Xã", "Loc Vinh"],
                        ["20107", "Phú Lộc", "Thị trấn", "Phu Loc"],
                        ["20125", "Vinh Hiền", "Xã", "Vinh Hien"],
                        ["20116", "Vinh Hưng", "Xã", "Vinh Hung"],
                        ["20113", "Vinh Mỹ", "Xã", "Vinh My"],
                        ["20158", "Xuân Lộc", "Xã", "Xuan Loc"]
                    ]
                ],
                [
                    "478", "Phú Vang", "Huyện", "Phu Vang",
                    [
                        ["19912", "Phú An", "Xã", "Phu An"],
                        ["19942", "Phú Đa", "Thị trấn", "Phu Da"],
                        ["19921", "Phú Diên", "Xã", "Phu Dien"],
                        ["19954", "Phú Gia", "Xã", "Phu Gia"],
                        ["19915", "Phú Hải", "Xã", "Phu Hai"],
                        ["19933", "Phú Hồ", "Xã", "Phu Ho"],
                        ["19939", "Phú Lương", "Xã", "Phu Luong"],
                        ["19927", "Phú Mỹ", "Xã", "Phu My"],
                        ["19903", "Phú Thuận", "Xã", "Phu Thuan"],
                        ["19918", "Phú Xuân", "Xã", "Phu Xuan"],
                        ["19948", "Vinh An", "Xã", "Vinh An"],
                        ["19957", "Vinh Hà", "Xã", "Vinh Ha"],
                        ["19945", "Vinh Thanh", "Xã", "Vinh Thanh"],
                        ["19936", "Vinh Xuân", "Xã", "Vinh Xuan"]
                    ]
                ],
                [
                    "477", "Quảng Điền", "Huyện", "Quang Dien",
                    [
                        ["19888", "Quảng An", "Xã", "Quang An"],
                        ["19879", "Quảng Công", "Xã", "Quang Cong"],
                        ["19876", "Quảng Lợi", "Xã", "Quang Loi"],
                        ["19873", "Quảng Ngạn", "Xã", "Quang Ngan"],
                        ["19897", "Quảng Phú", "Xã", "Quang Phu"],
                        ["19882", "Quảng Phước", "Xã", "Quang Phuoc"],
                        ["19870", "Quảng Thái", "Xã", "Quang Thai"],
                        ["19891", "Quảng Thành", "Xã", "Quang Thanh"],
                        ["19894", "Quảng Thọ", "Xã", "Quang Tho"],
                        ["19885", "Quảng Vinh", "Xã", "Quang Vinh"],
                        ["19867", "Sịa", "Thị trấn", "Sia"]
                    ]
                ]
            ]
        ],
        [
            "82", "Tiền Giang", "Tỉnh", "Tien Giang",
            [
                [
                    "819", "Cái Bè", "Huyện", "Cai Be",
                    [
                        ["28390", "An Cư", "Xã", "An Cu"],
                        ["28429", "An Hữu", "Xã", "An Huu"],
                        ["28414", "An Thái Đông", "Xã", "An Thai Dong"],
                        ["28426", "An Thái Trung", "Xã", "An Thai Trung"],
                        ["28360", "Cái Bè", "Thị trấn", "Cai Be"],
                        ["28411", "Đông Hòa Hiệp", "Xã", "Dong Hoa Hiep"],
                        ["28366", "Hậu Mỹ Bắc A", "Xã", "Hau My Bac A"],
                        ["28363", "Hậu Mỹ Bắc B", "Xã", "Hau My Bac B"],
                        ["28375", "Hậu Mỹ Phú", "Xã", "Hau My Phu"],
                        ["28372", "Hậu Mỹ Trinh", "Xã", "Hau My Trinh"],
                        ["28393", "Hậu Thành", "Xã", "Hau Thanh"],
                        ["28432", "Hòa Hưng", "Xã", "Hoa Hung"],
                        ["28399", "Hòa Khánh", "Xã", "Hoa Khanh"],
                        ["28405", "Mỹ Đức Đông", "Xã", "My Duc Dong"],
                        ["28408", "Mỹ Đức Tây", "Xã", "My Duc Tay"],
                        ["28387", "Mỹ Hội", "Xã", "My Hoi"],
                        ["28396", "Mỹ Lợi A", "Xã", "My Loi A"],
                        ["28381", "Mỹ Lợi B", "Xã", "My Loi B"],
                        ["28420", "Mỹ Lương", "Xã", "My Luong"],
                        ["28378", "Mỹ Tân", "Xã", "My Tan"],
                        ["28369", "Mỹ Trung", "Xã", "My Trung"],
                        ["28417", "Tân Hưng", "Xã", "Tan Hung"],
                        ["28423", "Tân Thanh", "Xã", "Tan Thanh"],
                        ["28402", "Thiện Trí", "Xã", "Thien Tri"],
                        ["28384", "Thiện Trung", "Xã", "Thien Trung"]
                    ]
                ],
                [
                    "817", "Cai Lậy", "Thị xã", "Cai Lay",
                    [
                        ["28435", "1", "Phường", "1"],
                        ["28436", "2", "Phường", "2"],
                        ["28437", "3", "Phường", "3"],
                        ["28439", "4", "Phường", "4"],
                        ["28440", "5", "Phường", "5"],
                        ["28486", "Long Khánh", "Xã", "Long Khanh"],
                        ["28450", "Mỹ Hạnh Đông", "Xã", "My Hanh Dong"],
                        ["28453", "Mỹ Hạnh Trung", "Xã", "My Hanh Trung"],
                        ["28447", "Mỹ Phước Tây", "Xã", "My Phuoc Tay"],
                        ["28474", "Nhị Mỹ", "Phường", "Nhi My"],
                        ["28477", "Nhị Quý", "Xã", "Nhi Quy"],
                        ["28483", "Phú Quý", "Xã", "Phu Quy"],
                        ["28462", "Tân Bình", "Xã", "Tan Binh"],
                        ["28468", "Tân Hội", "Xã", "Tan Hoi"],
                        ["28459", "Tân Phú", "Xã", "Tan Phu"],
                        ["28480", "Thanh Hòa", "Xã", "Thanh Hoa"]
                    ]
                ],
                [
                    "820", "Cai Lậy", "Huyện", "Cai Lay",
                    [
                        ["28471", "Bình Phú", "Xã", "Binh Phu"],
                        ["28489", "Cẩm Sơn", "Xã", "Cam Son"],
                        ["28501", "Hiệp Đức", "Xã", "Hiep Duc"],
                        ["28507", "Hội Xuân", "Xã", "Hoi Xuan"],
                        ["28498", "Long Tiên", "Xã", "Long Tien"],
                        ["28504", "Long Trung", "Xã", "Long Trung"],
                        ["28495", "Mỹ Long", "Xã", "My Long"],
                        ["28441", "Mỹ Thành Bắc", "Xã", "My Thanh Bac"],
                        ["28456", "Mỹ Thành Nam", "Xã", "My Thanh Nam"],
                        ["28516", "Ngũ Hiệp", "Xã", "Ngu Hiep"],
                        ["28492", "Phú An", "Xã", "Phu An"],
                        ["28444", "Phú Cường", "Xã", "Phu Cuong"],
                        ["28465", "Phú Nhuận", "Xã", "Phu Nhuan"],
                        ["28513", "Tam Bình", "Xã", "Tam Binh"],
                        ["28510", "Tân Phong", "Xã", "Tan Phong"],
                        ["28438", "Thạnh Lộc", "Xã", "Thanh Loc"]
                    ]
                ],
                [
                    "821", "Châu Thành", "Huyện", "Chau Thanh",
                    [
                        ["28573", "Bàn Long", "Xã", "Ban Long"],
                        ["28579", "Bình Đức", "Xã", "Binh Duc"],
                        ["28564", "Bình Trưng", "Xã", "Binh Trung"],
                        ["28540", "Điềm Hy", "Xã", "Diem Hy"],
                        ["28549", "Đông Hòa", "Xã", "Dong Hoa"],
                        ["28546", "Dưỡng Điềm", "Xã", "Duong Diem"],
                        ["28555", "Hữu Đạo", "Xã", "Huu Dao"],
                        ["28585", "Kim Sơn", "Xã", "Kim Son"],
                        ["28558", "Long An", "Xã", "Long An"],
                        ["28552", "Long Định", "Xã", "Long Dinh"],
                        ["28561", "Long Hưng", "Xã", "Long Hung"],
                        ["28543", "Nhị Bình", "Xã", "Nhi Binh"],
                        ["28588", "Phú Phong", "Xã", "Phu Phong"],
                        ["28582", "Song Thuận", "Xã", "Song Thuan"],
                        ["28537", "Tam Hiệp", "Xã", "Tam Hiep"],
                        ["28519", "Tân Hiệp", "Thị trấn", "Tan Hiep"],
                        ["28522", "Tân Hội Đông", "Xã", "Tan Hoi Dong"],
                        ["28525", "Tân Hương", "Xã", "Tan Huong"],
                        ["28528", "Tân Lý Đông", "Xã", "Tan Ly Dong"],
                        ["28531", "Tân Lý Tây", "Xã", "Tan Ly Tay"],
                        ["28534", "Thân Cửu Nghĩa", "Xã", "Than Cuu Nghia"],
                        ["28570", "Thạnh Phú", "Xã", "Thanh Phu"],
                        ["28576", "Vĩnh Kim", "Xã", "Vinh Kim"]
                    ]
                ],
                [
                    "822", "Chợ Gạo", "Huyện", "Cho Gao",
                    [
                        ["28639", "An Thạnh Thủy", "Xã", "An Thanh Thuy"],
                        ["28648", "Bình Ninh", "Xã", "Binh Ninh"],
                        ["28633", "Bình Phan", "Xã", "Binh Phan"],
                        ["28621", "Bình Phục Nhứt", "Xã", "Binh Phuc Nhut"],
                        ["28594", "Chợ Gạo", "Thị trấn", "Cho Gao"],
                        ["28624", "Đăng Hưng Phước", "Xã", "Dang Hung Phuoc"],
                        ["28645", "Hòa Định", "Xã", "Hoa Dinh"],
                        ["28600", "Hòa Tịnh", "Xã", "Hoa Tinh"],
                        ["28636", "Long Bình Điền", "Xã", "Long Binh Dien"],
                        ["28612", "Lương Hòa Lạc", "Xã", "Luong Hoa Lac"],
                        ["28603", "Mỹ Tịnh An", "Xã", "My Tinh An"],
                        ["28609", "Phú Kiết", "Xã", "Phu Kiet"],
                        ["28618", "Quơn Long", "Xã", "Quon Long"],
                        ["28630", "Song Bình", "Xã", "Song Binh"],
                        ["28606", "Tân Bình Thạnh", "Xã", "Tan Binh Thanh"],
                        ["28627", "Tân Thuận Bình", "Xã", "Tan Thuan Binh"],
                        ["28615", "Thanh Bình", "Xã", "Thanh Binh"],
                        ["28597", "Trung Hòa", "Xã", "Trung Hoa"],
                        ["28642", "Xuân Đông", "Xã", "Xuan Dong"]
                    ]
                ],
                [
                    "816", "Gò Công", "Thị xã", "Go Cong",
                    [
                        ["28303", "1", "Phường", "1"],
                        ["28297", "2", "Phường", "2"],
                        ["28294", "3", "Phường", "3"],
                        ["28300", "4", "Phường", "4"],
                        ["28306", "5", "Phường", "5"],
                        ["28708", "Bình Đông", "Xã", "Binh Dong"],
                        ["28717", "Bình Xuân", "Xã", "Binh Xuan"],
                        ["28315", "Long Chánh", "Xã", "Long Chanh"],
                        ["28318", "Long Hòa", "Xã", "Long Hoa"],
                        ["28309", "Long Hưng", "Xã", "Long Hung"],
                        ["28312", "Long Thuận", "Xã", "Long Thuan"],
                        ["28729", "Tân Trung", "Xã", "Tan Trung"]
                    ]
                ],
                [
                    "824", "Gò Công Đông", "Huyện", "Go Cong Dong",
                    [
                        ["28735", "Bình Ân", "Xã", "Binh An"],
                        ["28741", "Bình Nghị", "Xã", "Binh Nghi"],
                        ["28714", "Gia Thuận", "Xã", "Gia Thuan"],
                        ["28726", "Kiểng Phước", "Xã", "Kieng Phuoc"],
                        ["28744", "Phước Trung", "Xã", "Phuoc Trung"],
                        ["28738", "Tân Điền", "Xã", "Tan Dien"],
                        ["28732", "Tân Đông", "Xã", "Tan Dong"],
                        ["28702", "Tân Hòa", "Thị trấn", "Tan Hoa"],
                        ["28711", "Tân Phước", "Xã", "Tan Phuoc"],
                        ["28723", "Tân Tây", "Xã", "Tan Tay"],
                        ["28747", "Tân Thành", "Xã", "Tan Thanh"],
                        ["28705", "Tăng Hoà", "Xã", "Tang Hoa"],
                        ["28720", "Vàm Láng", "Thị trấn", "Vam Lang"]
                    ]
                ],
                [
                    "823", "Gò Công Tây", "Huyện", "Go Cong Tay",
                    [
                        ["28666", "Bình Nhì", "Xã", "Binh Nhi"],
                        ["28657", "Bình Phú", "Xã", "Binh Phu"],
                        ["28681", "Bình Tân", "Xã", "Binh Tan"],
                        ["28654", "Đồng Sơn", "Xã", "Dong Son"],
                        ["28660", "Đồng Thạnh", "Xã", "Dong Thanh"],
                        ["28687", "Long Bình", "Xã", "Long Binh"],
                        ["28678", "Long Vĩnh", "Xã", "Long Vinh"],
                        ["28663", "Thành Công", "Xã", "Thanh Cong"],
                        ["28675", "Thạnh Nhựt", "Xã", "Thanh Nhut"],
                        ["28672", "Thạnh Trị", "Xã", "Thanh Tri"],
                        ["28651", "Vĩnh Bình", "Thị trấn", "Vinh Binh"],
                        ["28684", "Vĩnh Hựu", "Xã", "Vinh Huu"],
                        ["28669", "Yên Luông", "Xã", "Yen Luong"]
                    ]
                ],
                [
                    "815", "Mỹ Tho", "Thành phố", "My Tho",
                    [
                        ["28261", "1", "Phường", "1"],
                        ["28264", "2", "Phường", "2"],
                        ["28258", "3", "Phường", "3"],
                        ["28252", "4", "Phường", "4"],
                        ["28249", "5", "Phường", "5"],
                        ["28270", "6", "Phường", "6"],
                        ["28255", "7", "Phường", "7"],
                        ["28267", "8", "Phường", "8"],
                        ["28273", "9", "Phường", "9"],
                        ["28276", "10", "Phường", "10"],
                        ["28282", "Đạo Thạnh", "Xã", "Dao Thanh"],
                        ["28288", "Mỹ Phong", "Xã", "My Phong"],
                        ["28567", "Phước Thạnh", "Xã", "Phuoc Thanh"],
                        ["28279", "Tân Long", "Phường", "Tan Long"],
                        ["28291", "Tân Mỹ Chánh", "Xã", "Tan My Chanh"],
                        ["28591", "Thới Sơn", "Xã", "Thoi Son"],
                        ["28285", "Trung An", "Xã", "Trung An"]
                    ]
                ],
                [
                    "825", "Tân Phú Đông", "Huyện", "Tan Phu Dong",
                    [
                        ["28750", "Phú Đông", "Xã", "Phu Dong"],
                        ["28753", "Phú Tân", "Xã", "Phu Tan"],
                        ["28696", "Phú Thạnh", "Xã", "Phu Thanh"],
                        ["28693", "Tân Phú", "Xã", "Tan Phu"],
                        ["28699", "Tân Thạnh", "Xã", "Tan Thanh"],
                        ["28690", "Tân Thới", "Xã", "Tan Thoi"]
                    ]
                ],
                [
                    "818", "Tân Phước", "Huyện", "Tan Phuoc",
                    [
                        ["28342", "Hưng Thạnh", "Xã", "Hung Thanh"],
                        ["28321", "Mỹ Phước", "Thị trấn", "My Phuoc"],
                        ["28336", "Phú Mỹ", "Xã", "Phu My"],
                        ["28357", "Phước Lập", "Xã", "Phuoc Lap"],
                        ["28324", "Tân Hòa Đông", "Xã", "Tan Hoa Dong"],
                        ["28348", "Tân Hòa Tây", "Xã", "Tan Hoa Tay"],
                        ["28339", "Tân Hòa Thành", "Xã", "Tan Hoa Thanh"],
                        ["28345", "Tân Lập 1", "Xã", "Tan Lap 1"],
                        ["28354", "Tân Lập 2", "Xã", "Tan Lap 2"],
                        ["28333", "Thạnh Hoà", "Xã", "Thanh Hoa"],
                        ["28330", "Thạnh Mỹ", "Xã", "Thanh My"],
                        ["28327", "Thạnh Tân", "Xã", "Thanh Tan"]
                    ]
                ]
            ]
        ],
        [
            "84", "Trà Vinh", "Tỉnh", "Tra Vinh",
            [
                [
                    "844", "Càng Long", "Huyện", "Cang Long",
                    [
                        ["29275", "An Trường", "Xã", "An Truong"],
                        ["29272", "An Trường A", "Xã", "An Truong A"],
                        ["29287", "Bình Phú", "Xã", "Binh Phu"],
                        ["29266", "Càng Long", "Thị trấn", "Cang Long"],
                        ["29293", "Đại Phúc", "Xã", "Dai Phuc"],
                        ["29296", "Đại Phước", "Xã", "Dai Phuoc"],
                        ["29305", "Đức Mỹ", "Xã", "Duc My"],
                        ["29278", "Huyền Hội", "Xã", "Huyen Hoi"],
                        ["29269", "Mỹ Cẩm", "Xã", "My Cam"],
                        ["29302", "Nhị Long", "Xã", "Nhi Long"],
                        ["29299", "Nhị Long Phú", "Xã", "Nhi Long Phu"],
                        ["29290", "Phương Thạnh", "Xã", "Phuong Thanh"],
                        ["29281", "Tân An", "Xã", "Tan An"],
                        ["29284", "Tân Bình", "Xã", "Tan Binh"]
                    ]
                ],
                [
                    "845", "Cầu Kè", "Huyện", "Cau Ke",
                    [
                        ["29317", "An Phú Tân", "Xã", "An Phu Tan"],
                        ["29308", "Cầu Kè", "Thị trấn", "Cau Ke"],
                        ["29314", "Châu Điền", "Xã", "Chau Dien"],
                        ["29311", "Hòa Ân", "Xã", "Hoa An"],
                        ["29320", "Hoà Tân", "Xã", "Hoa Tan"],
                        ["29323", "Ninh Thới", "Xã", "Ninh Thoi"],
                        ["29326", "Phong Phú", "Xã", "Phong Phu"],
                        ["29329", "Phong Thạnh", "Xã", "Phong Thanh"],
                        ["29332", "Tam Ngãi", "Xã", "Tam Ngai"],
                        ["29338", "Thạnh Phú", "Xã", "Thanh Phu"],
                        ["29335", "Thông Hòa", "Xã", "Thong Hoa"]
                    ]
                ],
                [
                    "848", "Cầu Ngang", "Huyện", "Cau Ngang",
                    [
                        ["29416", "Cầu Ngang", "Thị trấn", "Cau Ngang"],
                        ["29437", "Hiệp Hòa", "Xã", "Hiep Hoa"],
                        ["29452", "Hiệp Mỹ Đông", "Xã", "Hiep My Dong"],
                        ["29455", "Hiệp Mỹ Tây", "Xã", "Hiep My Tay"],
                        ["29434", "Kim Hòa", "Xã", "Kim Hoa"],
                        ["29443", "Long Sơn", "Xã", "Long Son"],
                        ["29428", "Mỹ Hòa", "Xã", "My Hoa"],
                        ["29419", "Mỹ Long", "Thị trấn", "My Long"],
                        ["29422", "Mỹ Long Bắc", "Xã", "My Long Bac"],
                        ["29425", "Mỹ Long Nam", "Xã", "My Long Nam"],
                        ["29446", "Nhị Trường", "Xã", "Nhi Truong"],
                        ["29458", "Thạnh Hòa Sơn", "Xã", "Thanh Hoa Son"],
                        ["29440", "Thuận Hòa", "Xã", "Thuan Hoa"],
                        ["29449", "Trường Thọ", "Xã", "Truong Tho"],
                        ["29431", "Vĩnh Kim", "Xã", "Vinh Kim"]
                    ]
                ],
                [
                    "847", "Châu Thành", "Huyện", "Chau Thanh",
                    [
                        ["29374", "Châu Thành", "Thị trấn", "Chau Thanh"],
                        ["29377", "Đa Lộc", "Xã", "Da Loc"],
                        ["29401", "Hòa Lợi", "Xã", "Hoa Loi"],
                        ["29410", "Hòa Minh", "Xã", "Hoa Minh"],
                        ["29398", "Hòa Thuận", "Xã", "Hoa Thuan"],
                        ["29407", "Hưng Mỹ", "Xã", "Hung My"],
                        ["29413", "Long Hòa", "Xã", "Long Hoa"],
                        ["29389", "Lương Hòa", "Xã", "Luong Hoa"],
                        ["29386", "Lương Hoà A", "Xã", "Luong Hoa A"],
                        ["29380", "Mỹ Chánh", "Xã", "My Chanh"],
                        ["29395", "Nguyệt Hóa", "Xã", "Nguyet Hoa"],
                        ["29404", "Phước Hảo", "Xã", "Phuoc Hao"],
                        ["29392", "Song Lộc", "Xã", "Song Loc"],
                        ["29383", "Thanh Mỹ", "Xã", "Thanh My"]
                    ]
                ],
                [
                    "850", "Duyên Hải", "Huyện", "Duyen Hai",
                    [
                        ["29500", "Đôn Châu", "Xã", "Don Chau"],
                        ["29497", "Đôn Xuân", "Xã", "Don Xuan"],
                        ["29536", "Đông Hải", "Xã", "Dong Hai"],
                        ["29521", "Long Khánh", "Xã", "Long Khanh"],
                        ["29513", "Long Thành", "Thị trấn", "Long Thanh"],
                        ["29533", "Long Vĩnh", "Xã", "Long Vinh"],
                        ["29530", "Ngũ Lạc", "Xã", "Ngu Lac"]
                    ]
                ],
                [
                    "851", "Duyên Hải", "Thị xã", "Duyen Hai",
                    [
                        ["29512", "1", "Phường", "1"],
                        ["29516", "2", "Phường", "2"],
                        ["29524", "Dân Thành", "Xã", "Dan Thanh"],
                        ["29539", "Hiệp Thạnh", "Xã", "Hiep Thanh"],
                        ["29518", "Long Hữu", "Xã", "Long Huu"],
                        ["29515", "Long Toàn", "Xã", "Long Toan"],
                        ["29527", "Trường Long Hòa", "Xã", "Truong Long Hoa"]
                    ]
                ],
                [
                    "846", "Tiểu Cần", "Huyện", "Tieu Can",
                    [
                        ["29344", "Cầu Quan", "Thị trấn", "Cau Quan"],
                        ["29353", "Hiếu Trung", "Xã", "Hieu Trung"],
                        ["29350", "Hiếu Tử", "Xã", "Hieu Tu"],
                        ["29359", "Hùng Hòa", "Xã", "Hung Hoa"],
                        ["29356", "Long Thới", "Xã", "Long Thoi"],
                        ["29368", "Ngãi Hùng", "Xã", "Ngai Hung"],
                        ["29347", "Phú Cần", "Xã", "Phu Can"],
                        ["29371", "Tân Hòa", "Xã", "Tan Hoa"],
                        ["29362", "Tân Hùng", "Xã", "Tan Hung"],
                        ["29365", "Tập Ngãi", "Xã", "Tap Ngai"],
                        ["29341", "Tiểu Cần", "Thị trấn", "Tieu Can"]
                    ]
                ],
                [
                    "849", "Trà Cú", "Huyện", "Tra Cu",
                    [
                        ["29473", "An Quảng Hữu", "Xã", "An Quang Huu"],
                        ["29491", "Đại An", "Xã", "Dai An"],
                        ["29462", "Định An", "Thị trấn", "Dinh An"],
                        ["29494", "Định An", "Xã", "Dinh An"],
                        ["29488", "Hàm Giang", "Xã", "Ham Giang"],
                        ["29489", "Hàm Tân", "Xã", "Ham Tan"],
                        ["29482", "Kim Sơn", "Xã", "Kim Son"],
                        ["29506", "Long Hiệp", "Xã", "Long Hiep"],
                        ["29476", "Lưu Nghiệp Anh", "Xã", "Luu Nghiep Anh"],
                        ["29479", "Ngãi Xuyên", "Xã", "Ngai Xuyen"],
                        ["29503", "Ngọc Biên", "Xã", "Ngoc Bien"],
                        ["29464", "Phước Hưng", "Xã", "Phuoc Hung"],
                        ["29509", "Tân Hiệp", "Xã", "Tan Hiep"],
                        ["29470", "Tân Sơn", "Xã", "Tan Son"],
                        ["29467", "Tập Sơn", "Xã", "Tap Son"],
                        ["29485", "Thanh Sơn", "Xã", "Thanh Son"],
                        ["29461", "Trà Cú", "Thị trấn", "Tra Cu"]
                    ]
                ],
                [
                    "842", "Trà Vinh", "Thành phố", "Tra Vinh",
                    [
                        ["29239", "1", "Phường", "1"],
                        ["29245", "2", "Phường", "2"],
                        ["29242", "3", "Phường", "3"],
                        ["29236", "4", "Phường", "4"],
                        ["29248", "5", "Phường", "5"],
                        ["29251", "6", "Phường", "6"],
                        ["29254", "7", "Phường", "7"],
                        ["29257", "8", "Phường", "8"],
                        ["29260", "9", "Phường", "9"],
                        ["29263", "Long Đức", "Xã", "Long Duc"]
                    ]
                ]
            ]
        ],
        [
            "08", "Tuyên Quang", "Tỉnh", "Tuyen Quang",
            [
                [
                    "073", "Chiêm Hóa", "Huyện", "Chiem Hoa",
                    [
                        ["02371", "Bình Nhân", "Xã", "Binh Nhan"],
                        ["02323", "Bình Phú", "Xã", "Binh Phu"],
                        ["02311", "Hà Lang", "Xã", "Ha Lang"],
                        ["02353", "Hòa An", "Xã", "Hoa An"],
                        ["02335", "Hòa Phú", "Xã", "Hoa Phu"],
                        ["02314", "Hùng Mỹ", "Xã", "Hung My"],
                        ["02341", "Kiên Đài", "Xã", "Kien Dai"],
                        ["02350", "Kim Bình", "Xã", "Kim Binh"],
                        ["02368", "Linh Phú", "Xã", "Linh Phu"],
                        ["02329", "Ngọc Hội", "Xã", "Ngoc Hoi"],
                        ["02362", "Nhân Lý", "Xã", "Nhan Ly"],
                        ["02332", "Phú Bình", "Xã", "Phu Binh"],
                        ["02338", "Phúc Thịnh", "Xã", "Phuc Thinh"],
                        ["02320", "Tân An", "Xã", "Tan An"],
                        ["02308", "Tân Mỹ", "Xã", "Tan My"],
                        ["02344", "Tân Thịnh", "Xã", "Tan Thinh"],
                        ["02359", "Tri Phú", "Xã", "Tri Phu"],
                        ["02305", "Trung Hà", "Xã", "Trung Ha"],
                        ["02347", "Trung Hòa", "Xã", "Trung Hoa"],
                        ["02287", "Vĩnh Lộc", "Thị trấn", "Vinh Loc"],
                        ["02356", "Vinh Quang", "Xã", "Vinh Quang"],
                        ["02326", "Xuân Quang", "Xã", "Xuan Quang"],
                        ["02317", "Yên Lập", "Xã", "Yen Lap"],
                        ["02365", "Yên Nguyên", "Xã", "Yen Nguyen"]
                    ]
                ],
                [
                    "074", "Hàm Yên", "Huyện", "Ham Yen",
                    [
                        ["02380", "Bạch Xa", "Xã", "Bach Xa"],
                        ["02416", "Bằng Cốc", "Xã", "Bang Coc"],
                        ["02404", "Bình Xa", "Xã", "Binh Xa"],
                        ["02422", "Đức Ninh", "Xã", "Duc Ninh"],
                        ["02425", "Hùng Đức", "Xã", "Hung Duc"],
                        ["02389", "Minh Dân", "Xã", "Minh Dan"],
                        ["02395", "Minh Hương", "Xã", "Minh Huong"],
                        ["02383", "Minh Khương", "Xã", "Minh Khuong"],
                        ["02410", "Nhân Mục", "Xã", "Nhan Muc"],
                        ["02392", "Phù Lưu", "Xã", "Phu Luu"],
                        ["02401", "Tân Thành", "Xã", "Tan Thanh"],
                        ["02374", "Tân Yên", "Thị trấn", "Tan Yen"],
                        ["02419", "Thái Hòa", "Xã", "Thai Hoa"],
                        ["02407", "Thái Sơn", "Xã", "Thai Son"],
                        ["02413", "Thành Long", "Xã", "Thanh Long"],
                        ["02386", "Yên Lâm", "Xã", "Yen Lam"],
                        ["02398", "Yên Phú", "Xã", "Yen Phu"],
                        ["02377", "Yên Thuận", "Xã", "Yen Thuan"]
                    ]
                ],
                [
                    "071", "Lâm Bình", "Huyện", "Lam Binh",
                    [
                        ["02290", "Bình An", "Xã", "Binh An"],
                        ["02293", "Hồng Quang", "Xã", "Hong Quang"],
                        ["02251", "Khuôn Hà", "Xã", "Khuon Ha"],
                        ["02266", "Lăng Can", "Thị trấn", "Lang Can"],
                        ["02302", "Minh Quang", "Xã", "Minh Quang"],
                        ["02299", "Phúc Sơn", "Xã", "Phuc Son"],
                        ["02233", "Phúc Yên", "Xã", "Phuc Yen"],
                        ["02296", "Thổ Bình", "Xã", "Tho Binh"],
                        ["02269", "Thượng Lâm", "Xã", "Thuong Lam"],
                        ["02242", "Xuân Lập", "Xã", "Xuan Lap"]
                    ]
                ],
                [
                    "072", "Na Hang", "Huyện", "Na Hang",
                    [
                        ["02245", "Côn Lôn", "Xã", "Con Lon"],
                        ["02260", "Đà Vị", "Xã", "Da Vi"],
                        ["02254", "Hồng Thái", "Xã", "Hong Thai"],
                        ["02263", "Khau Tinh", "Xã", "Khau Tinh"],
                        ["02221", "Na Hang", "Thị trấn", "Na Hang"],
                        ["02281", "Năng Khả", "Xã", "Nang Kha"],
                        ["02227", "Sinh Long", "Xã", "Sinh Long"],
                        ["02275", "Sơn Phú", "Xã", "Son Phu"],
                        ["02284", "Thanh Tương", "Xã", "Thanh Tuong"],
                        ["02230", "Thượng Giáp", "Xã", "Thuong Giap"],
                        ["02239", "Thượng Nông", "Xã", "Thuong Nong"],
                        ["02248", "Yên Hoa", "Xã", "Yen Hoa"]
                    ]
                ],
                [
                    "076", "Sơn Dương", "Huyện", "Son Duong",
                    [
                        ["02554", "Bình Yên", "Xã", "Binh Yen"],
                        ["02563", "Cấp Tiến", "Xã", "Cap Tien"],
                        ["02599", "Chi Thiết", "Xã", "Chi Thiet"],
                        ["02617", "Đại Phú", "Xã", "Dai Phu"],
                        ["02602", "Đông Lợi", "Xã", "Dong Loi"],
                        ["02587", "Đồng Quý", "Xã", "Dong Quy"],
                        ["02572", "Đông Thọ", "Xã", "Dong Tho"],
                        ["02623", "Hào Phú", "Xã", "Hao Phu"],
                        ["02608", "Hồng Lạc", "Xã", "Hong Lac"],
                        ["02578", "Hợp Hòa", "Xã", "Hop Hoa"],
                        ["02566", "Hợp Thành", "Xã", "Hop Thanh"],
                        ["02575", "Kháng Nhật", "Xã", "Khang Nhat"],
                        ["02557", "Lương Thiện", "Xã", "Luong Thien"],
                        ["02542", "Minh Thanh", "Xã", "Minh Thanh"],
                        ["02614", "Ninh Lai", "Xã", "Ninh Lai"],
                        ["02611", "Phú Lương", "Xã", "Phu Luong"],
                        ["02569", "Phúc Ứng", "Xã", "Phuc Ung"],
                        ["02584", "Quyết Thắng", "Xã", "Quyet Thang"],
                        ["02536", "Sơn Dương", "Thị trấn", "Son Duong"],
                        ["02620", "Sơn Nam", "Xã", "Son Nam"],
                        ["02626", "Tam Đa", "Xã", "Tam Da"],
                        ["02590", "Tân Thanh", "Xã", "Tan Thanh"],
                        ["02545", "Tân Trào", "Xã", "Tan Trao"],
                        ["02605", "Thiện Kế", "Xã", "Thien Ke"],
                        ["02551", "Thượng Ấm", "Xã", "Thuong Am"],
                        ["02539", "Trung Yên", "Xã", "Trung Yen"],
                        ["02632", "Trường Sinh", "Xã", "Truong Sinh"],
                        ["02560", "Tú Thịnh", "Xã", "Tu Thinh"],
                        ["02596", "Văn Phú", "Xã", "Van Phu"],
                        ["02593", "Vân Sơn", "Xã", "Van Son"],
                        ["02548", "Vĩnh Lợi", "Xã", "Vinh Loi"]
                    ]
                ],
                [
                    "070", "Tuyên Quang", "Thành phố", "Tuyen Quang",
                    [
                        ["02503", "An Khang", "Xã", "An Khang"],
                        ["02512", "An Tường", "Phường", "An Tuong"],
                        ["02524", "Đội Cấn", "Phường", "Doi Can"],
                        ["02218", "Hưng Thành", "Phường", "Hung Thanh"],
                        ["02497", "Kim Phú", "Xã", "Kim Phu"],
                        ["02515", "Lưỡng Vượng", "Xã", "Luong Vuong"],
                        ["02203", "Minh Xuân", "Phường", "Minh Xuan"],
                        ["02509", "Mỹ Lâm", "Phường", "My Lam"],
                        ["02212", "Nông Tiến", "Phường", "Nong Tien"],
                        ["02200", "Phan Thiết", "Phường", "Phan Thiet"],
                        ["02216", "Tân Hà", "Phường", "Tan Ha"],
                        ["02206", "Tân Quang", "Phường", "Tan Quang"],
                        ["02521", "Thái Long", "Xã", "Thai Long"],
                        ["02209", "Tràng Đà", "Xã", "Trang Da"],
                        ["02215", "Ỷ La", "Phường", "Y La"]
                    ]
                ],
                [
                    "075", "Yên Sơn", "Huyện", "Yen Son",
                    [
                        ["02491", "Chân Sơn", "Xã", "Chan Son"],
                        ["02443", "Chiêu Yên", "Xã", "Chieu Yen"],
                        ["02485", "Công Đa", "Xã", "Cong Da"],
                        ["02467", "Đạo Viện", "Xã", "Dao Vien"],
                        ["02533", "Đội Bình", "Xã", "Doi Binh"],
                        ["02518", "Hoàng Khai", "Xã", "Hoang Khai"],
                        ["02455", "Hùng Lợi", "Xã", "Hung Loi"],
                        ["02437", "Kiến Thiết", "Xã", "Kien Thiet"],
                        ["02476", "Kim Quan", "Xã", "Kim Quan"],
                        ["02479", "Lang Quán", "Xã", "Lang Quan"],
                        ["02434", "Lực Hành", "Xã", "Luc Hanh"],
                        ["02506", "Mỹ Bằng", "Xã", "My Bang"],
                        ["02527", "Nhữ Hán", "Xã", "Nhu Han"],
                        ["02530", "Nhữ Khê", "Xã", "Nhu Khe"],
                        ["02482", "Phú Thịnh", "Xã", "Phu Thinh"],
                        ["02452", "Phúc Ninh", "Xã", "Phuc Ninh"],
                        ["02431", "Quí Quân", "Xã", "Qui Quan"],
                        ["02470", "Tân Long", "Xã", "Tan Long"],
                        ["02461", "Tân Tiến", "Xã", "Tan Tien"],
                        ["02494", "Thái Bình", "Xã", "Thai Binh"],
                        ["02500", "Tiến Bộ", "Xã", "Tien Bo"],
                        ["02440", "Trung Minh", "Xã", "Trung Minh"],
                        ["02488", "Trung Môn", "Xã", "Trung Mon"],
                        ["02458", "Trung Sơn", "Xã", "Trung Son"],
                        ["02446", "Trung Trực", "Xã", "Trung Truc"],
                        ["02464", "Tứ Quận", "Xã", "Tu Quan"],
                        ["02449", "Xuân Vân", "Xã", "Xuan Van"],
                        ["02473", "Yên Sơn", "Thị trấn", "Yen Son"]
                    ]
                ]
            ]
        ],
        [
            "86", "Vĩnh Long", "Tỉnh", "Vinh Long",
            [
                [
                    "859", " Vũng Liêm", "Huyện", " Vung Liem",
                    [
                        ["29716", "Hiếu Nghĩa", "Xã", "Hieu Nghia"],
                        ["29710", "Hiếu Nhơn", "Xã", "Hieu Nhon"],
                        ["29686", "Hiếu Phụng", "Xã", "Hieu Phung"],
                        ["29713", "Hiếu Thành", "Xã", "Hieu Thanh"],
                        ["29701", "Hiếu Thuận", "Xã", "Hieu Thuan"],
                        ["29668", "Quới An", "Xã", "Quoi An"],
                        ["29665", "Quới Thiện", "Xã", "Quoi Thien"],
                        ["29674", "Tân An Luông", "Xã", "Tan An Luong"],
                        ["29662", "Tân Quới Trung", "Xã", "Tan Quoi Trung"],
                        ["29677", "Thanh Bình", "Xã", "Thanh Binh"],
                        ["29707", "Trung An", "Xã", "Trung An"],
                        ["29671", "Trung Chánh", "Xã", "Trung Chanh"],
                        ["29683", "Trung Hiệp", "Xã", "Trung Hiep"],
                        ["29695", "Trung Hiếu", "Xã", "Trung Hieu"],
                        ["29698", "Trung Ngãi", "Xã", "Trung Ngai"],
                        ["29704", "Trung Nghĩa", "Xã", "Trung Nghia"],
                        ["29692", "Trung Thành", "Xã", "Trung Thanh"],
                        ["29689", "Trung Thành Đông", "Xã", "Trung Thanh Dong"],
                        ["29680", "Trung Thành Tây", "Xã", "Trung Thanh Tay"],
                        ["29659", "Vũng Liêm", "Thị trấn", "Vung Liem"]
                    ]
                ],
                [
                    "861", "Bình Minh", "Thị xã", "Binh Minh",
                    [
                        ["29770", "Cái Vồn", "Phường", "Cai Von"],
                        ["29812", "Đông Bình", "Xã", "Dong Binh"],
                        ["29809", "Đông Thạnh", "Xã", "Dong Thanh"],
                        ["29818", "Đông Thành", "Xã", "Dong Thanh"],
                        ["29813", "Đông Thuận", "Phường", "Dong Thuan"],
                        ["29815", "Mỹ Hòa", "Xã", "My Hoa"],
                        ["29771", "Thành Phước", "Phường", "Thanh Phuoc"],
                        ["29806", "Thuận An", "Xã", "Thuan An"]
                    ]
                ],
                [
                    "863", "Bình Tân", "Huyện", "Binh Tan",
                    [
                        ["29794", "Mỹ Thuận", "Xã", "My Thuan"],
                        ["29788", "Nguyễn Văn Thảnh", "Xã", "Nguyen Van Thanh"],
                        ["29782", "Tân An Thạnh", "Xã", "Tan An Thanh"],
                        ["29797", "Tân Bình", "Xã", "Tan Binh"],
                        ["29773", "Tân Hưng", "Xã", "Tan Hung"],
                        ["29785", "Tân Lược", "Xã", "Tan Luoc"],
                        ["29800", "Tân Quới", "Thị trấn", "Tan Quoi"],
                        ["29776", "Tân Thành", "Xã", "Tan Thanh"],
                        ["29791", "Thành Lợi", "Xã", "Thanh Loi"],
                        ["29779", "Thành Trung", "Xã", "Thanh Trung"]
                    ]
                ],
                [
                    "857", "Long Hồ", "Huyện", "Long Ho",
                    [
                        ["29587", "An Bình", "Xã", "An Binh"],
                        ["29581", "Bình Hòa Phước", "Xã", "Binh Hoa Phuoc"],
                        ["29578", "Đồng Phú", "Xã", "Dong Phu"],
                        ["29584", "Hòa Ninh", "Xã", "Hoa Ninh"],
                        ["29617", "Hòa Phú", "Xã", "Hoa Phu"],
                        ["29605", "Lộc Hòa", "Xã", "Loc Hoa"],
                        ["29608", "Long An", "Xã", "Long An"],
                        ["29575", "Long Hồ", "Thị trấn", "Long Ho"],
                        ["29599", "Long Phước", "Xã", "Long Phuoc"],
                        ["29602", "Phú Đức", "Xã", "Phu Duc"],
                        ["29611", "Phú Quới", "Xã", "Phu Quoi"],
                        ["29596", "Phước Hậu", "Xã", "Phuoc Hau"],
                        ["29593", "Tân Hạnh", "Xã", "Tan Hanh"],
                        ["29590", "Thanh Đức", "Xã", "Thanh Duc"],
                        ["29614", "Thạnh Quới", "Xã", "Thanh Quoi"]
                    ]
                ],
                [
                    "858", "Mang Thít", "Huyện", "Mang Thit",
                    [
                        ["29629", "An Phước", "Xã", "An Phuoc"],
                        ["29644", "Bình Phước", "Xã", "Binh Phuoc"],
                        ["29641", "Cái Nhum", "Thị trấn", "Cai Nhum"],
                        ["29647", "Chánh An", "Xã", "Chanh An"],
                        ["29638", "Hòa Tịnh", "Xã", "Hoa Tinh"],
                        ["29635", "Long Mỹ", "Xã", "Long My"],
                        ["29623", "Mỹ An", "Xã", "My An"],
                        ["29626", "Mỹ Phước", "Xã", "My Phuoc"],
                        ["29632", "Nhơn Phú", "Xã", "Nhon Phu"],
                        ["29650", "Tân An Hội", "Xã", "Tan An Hoi"],
                        ["29653", "Tân Long", "Xã", "Tan Long"],
                        ["29656", "Tân Long Hội", "Xã", "Tan Long Hoi"]
                    ]
                ],
                [
                    "860", "Tam Bình", "Huyện", "Tam Binh",
                    [
                        ["29767", "Bình Ninh", "Xã", "Binh Ninh"],
                        ["29728", "Hậu Lộc", "Xã", "Hau Loc"],
                        ["29743", "Hòa Hiệp", "Xã", "Hoa Hiep"],
                        ["29734", "Hoà Lộc", "Xã", "Hoa Loc"],
                        ["29731", "Hòa Thạnh", "Xã", "Hoa Thanh"],
                        ["29761", "Loan Mỹ", "Xã", "Loan My"],
                        ["29752", "Long Phú", "Xã", "Long Phu"],
                        ["29746", "Mỹ Lộc", "Xã", "My Loc"],
                        ["29755", "Mỹ Thạnh Trung", "Xã", "My Thanh Trung"],
                        ["29764", "Ngãi Tứ", "Xã", "Ngai Tu"],
                        ["29737", "Phú Lộc", "Xã", "Phu Loc"],
                        ["29725", "Phú Thịnh", "Xã", "Phu Thinh"],
                        ["29740", "Song Phú", "Xã", "Song Phu"],
                        ["29719", "Tam Bình", "Thị trấn", "Tam Binh"],
                        ["29722", "Tân Lộc", "Xã", "Tan Loc"],
                        ["29749", "Tân Phú", "Xã", "Tan Phu"],
                        ["29758", "Tường Lộc", "Xã", "Tuong Loc"]
                    ]
                ],
                [
                    "862", "Trà Ôn", "Huyện", "Tra On",
                    [
                        ["29830", "Hòa Bình", "Xã", "Hoa Binh"],
                        ["29842", "Hựu Thành", "Xã", "Huu Thanh"],
                        ["29857", "Lục Sỹ Thành", "Xã", "Luc Sy Thanh"],
                        ["29827", "Nhơn Bình", "Xã", "Nhon Binh"],
                        ["29851", "Phú Thành", "Xã", "Phu Thanh"],
                        ["29839", "Tân Mỹ", "Xã", "Tan My"],
                        ["29854", "Thiện Mỹ", "Xã", "Thien My"],
                        ["29833", "Thới Hòa", "Xã", "Thoi Hoa"],
                        ["29848", "Thuận Thới", "Xã", "Thuan Thoi"],
                        ["29860", "Tích Thiện", "Xã", "Tich Thien"],
                        ["29836", "Trà Côn", "Xã", "Tra Con"],
                        ["29821", "Trà Ôn", "Thị trấn", "Tra On"],
                        ["29845", "Vĩnh Xuân", "Xã", "Vinh Xuan"],
                        ["29824", "Xuân Hiệp", "Xã", "Xuan Hiep"]
                    ]
                ],
                [
                    "855", "Vĩnh Long", "Thành phố", "Vinh Long",
                    [
                        ["29548", "1", "Phường", "1"],
                        ["29551", "2", "Phường", "2"],
                        ["29557", "3", "Phường", "3"],
                        ["29554", "4", "Phường", "4"],
                        ["29545", "5", "Phường", "5"],
                        ["29560", "8", "Phường", "8"],
                        ["29542", "9", "Phường", "9"],
                        ["29566", "Tân Hòa", "Phường", "Tan Hoa"],
                        ["29569", "Tân Hội", "Phường", "Tan Hoi"],
                        ["29563", "Tân Ngãi", "Phường", "Tan Ngai"],
                        ["29572", "Trường An", "Phường", "Truong An"]
                    ]
                ]
            ]
        ],
        [
            "26", "Vĩnh Phúc", "Tỉnh", "Vinh Phuc",
            [
                [
                    "249", "Bình Xuyên", "Huyện", "Binh Xuyen",
                    [
                        ["08944", "Bá Hiến", "Thị trấn", "Ba Hien"],
                        ["08962", "Đạo Đức", "Thị trấn", "Dao Duc"],
                        ["08936", "Gia Khánh", "Thị trấn", "Gia Khanh"],
                        ["08935", "Hương Canh", "Thị trấn", "Huong Canh"],
                        ["08950", "Hương Sơn", "Xã", "Huong Son"],
                        ["08971", "Phú Xuân", "Xã", "Phu Xuan"],
                        ["08956", "Quất Lưu", "Xã", "Quat Luu"],
                        ["08959", "Sơn Lôi", "Xã", "Son Loi"],
                        ["08953", "Tam Hợp", "Xã", "Tam Hop"],
                        ["08965", "Tân Phong", "Xã", "Tan Phong"],
                        ["08968", "Thanh Lãng", "Thị trấn", "Thanh Lang"],
                        ["08947", "Thiện Kế", "Xã", "Thien Ke"],
                        ["08938", "Trung Mỹ", "Xã", "Trung My"]
                    ]
                ],
                [
                    "246", "Lập Thạch", "Huyện", "Lap Thach",
                    [
                        ["08785", "Bắc Bình", "Xã", "Bac Binh"],
                        ["08833", "Bàn Giản", "Xã", "Ban Gian"],
                        ["08857", "Đình Chu", "Xã", "Dinh Chu"],
                        ["08839", "Đồng Ích", "Xã", "Dong Ich"],
                        ["08789", "Hoa Sơn", "Thị trấn", "Hoa Son"],
                        ["08770", "Hợp Lý", "Xã", "Hop Ly"],
                        ["08761", "Lập Thạch", "Thị trấn", "Lap Thach"],
                        ["08812", "Liên Hòa", "Xã", "Lien Hoa"],
                        ["08791", "Liễn Sơn", "Xã", "Lien Son"],
                        ["08767", "Ngọc Mỹ", "Xã", "Ngoc My"],
                        ["08764", "Quang Sơn", "Xã", "Quang Son"],
                        ["08866", "Sơn Đông", "Xã", "Son Dong"],
                        ["08788", "Thái Hòa", "Xã", "Thai Hoa"],
                        ["08842", "Tiên Lữ", "Xã", "Tien Lu"],
                        ["08863", "Triệu Đề", "Xã", "Trieu De"],
                        ["08815", "Tử Du", "Xã", "Tu Du"],
                        ["08845", "Văn Quán", "Xã", "Van Quan"],
                        ["08797", "Vân Trục", "Xã", "Van Truc"],
                        ["08794", "Xuân Hòa", "Xã", "Xuan Hoa"],
                        ["08836", "Xuân Lôi", "Xã", "Xuan Loi"]
                    ]
                ],
                [
                    "244", "Phúc Yên", "Thành phố", "Phuc Yen",
                    [
                        ["08752", "Cao Minh", "Xã", "Cao Minh"],
                        ["08747", "Đồng Xuân", "Phường", "Dong Xuan"],
                        ["08737", "Hùng Vương", "Phường", "Hung Vuong"],
                        ["08755", "Nam Viêm", "Phường", "Nam Viem"],
                        ["08749", "Ngọc Thanh", "Xã", "Ngoc Thanh"],
                        ["08743", "Phúc Thắng", "Phường", "Phuc Thang"],
                        ["08758", "Tiền Châu", "Phường", "Tien Chau"],
                        ["08740", "Trưng Nhị", "Phường", "Trung Nhi"],
                        ["08734", "Trưng Trắc", "Phường", "Trung Trac"],
                        ["08746", "Xuân Hoà", "Phường", "Xuan Hoa"]
                    ]
                ],
                [
                    "253", "Sông Lô", "Huyện", "Song Lo",
                    [
                        ["08779", "Bạch Lưu", "Xã", "Bach Luu"],
                        ["08860", "Cao Phong", "Xã", "Cao Phong"],
                        ["08806", "Đôn Nhân", "Xã", "Don Nhan"],
                        ["08800", "Đồng Quế", "Xã", "Dong Que"],
                        ["08848", "Đồng Thịnh", "Xã", "Dong Thinh"],
                        ["08854", "Đức Bác", "Xã", "Duc Bac"],
                        ["08782", "Hải Lựu", "Xã", "Hai Luu"],
                        ["08773", "Lãng Công", "Xã", "Lang Cong"],
                        ["08803", "Nhân Đạo", "Xã", "Nhan Dao"],
                        ["08821", "Nhạo Sơn", "Xã", "Nhao Son"],
                        ["08827", "Như Thụy", "Xã", "Nhu Thuy"],
                        ["08809", "Phương Khoan", "Xã", "Phuong Khoan"],
                        ["08776", "Quang Yên", "Xã", "Quang Yen"],
                        ["08824", "Tam Sơn", "Thị trấn", "Tam Son"],
                        ["08818", "Tân Lập", "Xã", "Tan Lap"],
                        ["08851", "Tứ Yên", "Xã", "Tu Yen"],
                        ["08830", "Yên Thạch", "Xã", "Yen Thach"]
                    ]
                ],
                [
                    "248", "Tam Đảo", "Huyện", "Tam Dao",
                    [
                        ["08920", "Bồ Lý", "Xã", "Bo Ly"],
                        ["08923", "Đại Đình", "Thị trấn", "Dai Dinh"],
                        ["08914", "Đạo Trù", "Xã", "Dao Tru"],
                        ["08929", "Hồ Sơn", "Xã", "Ho Son"],
                        ["08911", "Hợp Châu", "Thị trấn", "Hop Chau"],
                        ["08932", "Minh Quang", "Xã", "Minh Quang"],
                        ["08908", "Tam Đảo", "Thị trấn", "Tam Dao"],
                        ["08926", "Tam Quan", "Xã", "Tam Quan"],
                        ["08917", "Yên Dương", "Xã", "Yen Duong"]
                    ]
                ],
                [
                    "247", "Tam Dương", "Huyện", "Tam Duong",
                    [
                        ["08887", "An Hòa", "Xã", "An Hoa"],
                        ["08884", "Đạo Tú", "Xã", "Dao Tu"],
                        ["08875", "Đồng Tĩnh", "Xã", "Dong Tinh"],
                        ["08893", "Duy Phiên", "Xã", "Duy Phien"],
                        ["08896", "Hoàng Đan", "Xã", "Hoang Dan"],
                        ["08872", "Hoàng Hoa", "Xã", "Hoang Hoa"],
                        ["08899", "Hoàng Lâu", "Xã", "Hoang Lau"],
                        ["08869", "Hợp Hòa", "Thị trấn", "Hop Hoa"],
                        ["08905", "Hợp Thịnh", "Xã", "Hop Thinh"],
                        ["08881", "Hướng Đạo", "Xã", "Huong Dao"],
                        ["08878", "Kim Long", "Xã", "Kim Long"],
                        ["08890", "Thanh Vân", "Xã", "Thanh Van"],
                        ["08902", "Vân Hội", "Xã", "Van Hoi"]
                    ]
                ],
                [
                    "252", "Vĩnh Tường", "Huyện", "Vinh Tuong",
                    [
                        ["09151", "An Tường", "Xã", "An Tuong"],
                        ["09118", "Bình Dương", "Xã", "Binh Duong"],
                        ["09097", "Bồ Sao", "Xã", "Bo Sao"],
                        ["09109", "Cao Đại", "Xã", "Cao Dai"],
                        ["09085", "Chấn Hưng", "Xã", "Chan Hung"],
                        ["09100", "Đại Đồng", "Xã", "Dai Dong"],
                        ["09079", "Kim Xá", "Xã", "Kim Xa"],
                        ["09106", "Lũng Hoà", "Xã", "Lung Hoa"],
                        ["09133", "Lý Nhân", "Xã", "Ly Nhan"],
                        ["09088", "Nghĩa Hưng", "Xã", "Nghia Hung"],
                        ["09148", "Ngũ Kiên", "Xã", "Ngu Kien"],
                        ["09157", "Phú Đa", "Xã", "Phu Da"],
                        ["09142", "Tam Phúc", "Xã", "Tam Phuc"],
                        ["09124", "Tân Phú", "Xã", "Tan Phu"],
                        ["09103", "Tân Tiến", "Xã", "Tan Tien"],
                        ["09112", "Thổ Tang", "Thị Trấn", "Tho Tang"],
                        ["09127", "Thượng Trưng", "Xã", "Thuong Trung"],
                        ["09145", "Tứ Trưng", "Thị trấn", "Tu Trung"],
                        ["09136", "Tuân Chính", "Xã", "Tuan Chinh"],
                        ["09139", "Vân Xuân", "Xã", "Van Xuan"],
                        ["09094", "Việt Xuân", "Xã", "Viet Xuan"],
                        ["09160", "Vĩnh Ninh", "Xã", "Vinh Ninh"],
                        ["09115", "Vĩnh Sơn", "Xã", "Vinh Son"],
                        ["09154", "Vĩnh Thịnh", "Xã", "Vinh Thinh"],
                        ["09076", "Vĩnh Tường", "Thị trấn", "Vinh Tuong"],
                        ["09130", "Vũ Di", "Xã", "Vu Di"],
                        ["09082", "Yên Bình", "Xã", "Yen Binh"],
                        ["09091", "Yên Lập", "Xã", "Yen Lap"]
                    ]
                ],
                [
                    "243", "Vĩnh Yên", "Thành phố", "Vinh Yen",
                    [
                        ["08725", "Định Trung", "Xã", "Dinh Trung"],
                        ["08716", "Đống Đa", "Phường", "Dong Da"],
                        ["08722", "Đồng Tâm", "Phường", "Dong Tam"],
                        ["08713", "Hội Hợp", "Phường", "Hoi Hop"],
                        ["08728", "Khai Quang", "Phường", "Khai Quang"],
                        ["08710", "Liên Bảo", "Phường", "Lien Bao"],
                        ["08719", "Ngô Quyền", "Phường", "Ngo Quyen"],
                        ["08731", "Thanh Trù", "Xã", "Thanh Tru"],
                        ["08707", "Tích Sơn", "Phường", "Tich Son"]
                    ]
                ],
                [
                    "251", "Yên Lạc", "Huyện", "Yen Lac",
                    [
                        ["09034", "Bình Định", "Xã", "Binh Dinh"],
                        ["09067", "Đại Tự", "Xã", "Dai Tu"],
                        ["09028", "Đồng Cương", "Xã", "Dong Cuong"],
                        ["09031", "Đồng Văn", "Xã", "Dong Van"],
                        ["09070", "Hồng Châu", "Xã", "Hong Chau"],
                        ["09058", "Hồng Phương", "Xã", "Hong Phuong"],
                        ["09064", "Liên Châu", "Xã", "Lien Chau"],
                        ["09052", "Nguyệt Đức", "Xã", "Nguyet Duc"],
                        ["09043", "Tam Hồng", "Xã", "Tam Hong"],
                        ["09040", "Tề Lỗ", "Xã", "Te Lo"],
                        ["09073", "Trung Hà", "Xã", "Trung Ha"],
                        ["09061", "Trung Kiên", "Xã", "Trung Kien"],
                        ["09037", "Trung Nguyên", "Xã", "Trung Nguyen"],
                        ["09049", "Văn Tiến", "Xã", "Van Tien"],
                        ["09046", "Yên Đồng", "Xã", "Yen Dong"],
                        ["09025", "Yên Lạc", "Thị trấn", "Yen Lac"],
                        ["09055", "Yên Phương", "Xã", "Yen Phuong"]
                    ]
                ]
            ]
        ],
        [
            "15", "Yên Bái", "Tỉnh", "Yen Bai",
            [
                [
                    "135", "Lục Yên", "Huyện", "Luc Yen",
                    [
                        ["04327", "An Lạc", "Xã", "An Lac"],
                        ["04369", "An Phú", "Xã", "An Phu"],
                        ["04351", "Động Quan", "Xã", "Dong Quan"],
                        ["04321", "Khai Trung", "Xã", "Khai Trung"],
                        ["04342", "Khánh Hoà", "Xã", "Khanh Hoa"],
                        ["04312", "Khánh Thiện", "Xã", "Khanh Thien"],
                        ["04309", "Lâm Thượng", "Xã", "Lam Thuong"],
                        ["04348", "Liễu Đô", "Xã", "Lieu Do"],
                        ["04318", "Mai Sơn", "Xã", "Mai Son"],
                        ["04315", "Minh Chuẩn", "Xã", "Minh Chuan"],
                        ["04357", "Minh Tiến", "Xã", "Minh Tien"],
                        ["04330", "Minh Xuân", "Xã", "Minh Xuan"],
                        ["04324", "Mường Lai", "Xã", "Muong Lai"],
                        ["04366", "Phan Thanh", "Xã", "Phan Thanh"],
                        ["04363", "Phúc Lợi", "Xã", "Phuc Loi"],
                        ["04354", "Tân Lập", "Xã", "Tan Lap"],
                        ["04336", "Tân Lĩnh", "Xã", "Tan Linh"],
                        ["04306", "Tân Phượng", "Xã", "Tan Phuong"],
                        ["04333", "Tô Mậu", "Xã", "To Mau"],
                        ["04360", "Trúc Lâu", "Xã", "Truc Lau"],
                        ["04372", "Trung Tâm", "Xã", "Trung Tam"],
                        ["04345", "Vĩnh Lạc", "Xã", "Vinh Lac"],
                        ["04339", "Yên Thắng", "Xã", "Yen Thang"],
                        ["04303", "Yên Thế", "Thị trấn", "Yen The"]
                    ]
                ],
                [
                    "137", "Mù Căng Chải", "Huyện", "Mu Cang Chai",
                    [
                        ["04480", "Cao Phạ", "Xã", "Cao Pha"],
                        ["04471", "Chế Cu Nha", "Xã", "Che Cu Nha"],
                        ["04489", "Chế Tạo", "Xã", "Che Tao"],
                        ["04486", "Dế Su Phình", "Xã", "De Su Phinh"],
                        ["04459", "Hồ Bốn", "Xã", "Ho Bon"],
                        ["04465", "Khao Mang", "Xã", "Khao Mang"],
                        ["04477", "Kim Nọi", "Xã", "Kim Noi"],
                        ["04483", "La Pán Tẩn", "Xã", "La Pan Tan"],
                        ["04474", "Lao Chải", "Xã", "Lao Chai"],
                        ["04468", "Mồ Dề", "Xã", "Mo De"],
                        ["04456", "Mù Căng Chải", "Thị trấn", "Mu Cang Chai"],
                        ["04462", "Nậm Có", "Xã", "Nam Co"],
                        ["04495", "Nậm Khắt", "Xã", "Nam Khat"],
                        ["04492", "Púng Luông", "Xã", "Pung Luong"]
                    ]
                ],
                [
                    "133", "Nghĩa Lộ", "Thị xã", "Nghia Lo",
                    [
                        ["04291", "Cầu Thia", "Phường", "Cau Thia"],
                        ["04678", "Hạnh Sơn", "Xã", "Hanh Son"],
                        ["04300", "Nghĩa An", "Xã", "Nghia An"],
                        ["04624", "Nghĩa Lộ", "Xã", "Nghia Lo"],
                        ["04294", "Nghĩa Lợi", "Xã", "Nghia Loi"],
                        ["04297", "Nghĩa Phúc", "Xã", "Nghia Phuc"],
                        ["04663", "Phù Nham", "Xã", "Phu Nham"],
                        ["04681", "Phúc Sơn", "Xã", "Phuc Son"],
                        ["04282", "Pú Trạng", "Phường", "Pu Trang"],
                        ["04660", "Sơn A", "Xã", "Son A"],
                        ["04288", "Tân An", "Phường", "Tan An"],
                        ["04684", "Thạch Lương", "Xã", "Thach Luong"],
                        ["04675", "Thanh Lương", "Xã", "Thanh Luong"],
                        ["04285", "Trung Tâm", "Phường", "Trung Tam"]
                    ]
                ],
                [
                    "139", "Trạm Tấu", "Huyện", "Tram Tau",
                    [
                        ["04612", "Bản Công", "Xã", "Ban Cong"],
                        ["04615", "Bản Mù", "Xã", "Ban Mu"],
                        ["04618", "Hát Lìu", "Xã", "Hat Liu"],
                        ["04609", "Làng Nhì", "Xã", "Lang Nhi"],
                        ["04606", "Pá Hu", "Xã", "Pa Hu"],
                        ["04591", "Pá Lau", "Xã", "Pa Lau"],
                        ["04597", "Phình Hồ", "Xã", "Phinh Ho"],
                        ["04603", "Tà Si Láng", "Xã", "Ta Si Lang"],
                        ["04585", "Trạm Tấu", "Thị trấn", "Tram Tau"],
                        ["04600", "Trạm Tấu", "Xã", "Tram Tau"],
                        ["04588", "Túc Đán", "Xã", "Tuc Dan"],
                        ["04594", "Xà Hồ", "Xã", "Xa Ho"]
                    ]
                ],
                [
                    "138", "Trấn Yên", "Huyện", "Tran Yen",
                    [
                        ["04504", "Báo Đáp", "Xã", "Bao Dap"],
                        ["04561", "Bảo Hưng", "Xã", "Bao Hung"],
                        ["04498", "Cổ Phúc", "Thị trấn", "Co Phuc"],
                        ["04522", "Cường Thịnh", "Xã", "Cuong Thinh"],
                        ["04507", "Đào Thịnh", "Xã", "Dao Thinh"],
                        ["04513", "Hòa Cuông", "Xã", "Hoa Cuong"],
                        ["04570", "Hồng Ca", "Xã", "Hong Ca"],
                        ["04576", "Hưng Khánh", "Xã", "Hung Khanh"],
                        ["04573", "Hưng Thịnh", "Xã", "Hung Thinh"],
                        ["04525", "Kiên Thành", "Xã", "Kien Thanh"],
                        ["04537", "Lương Thịnh", "Xã", "Luong Thinh"],
                        ["04516", "Minh Quán", "Xã", "Minh Quan"],
                        ["04567", "Minh Quân", "Xã", "Minh Quan"],
                        ["04528", "Nga Quán", "Xã", "Nga Quan"],
                        ["04519", "Quy Mông", "Xã", "Quy Mong"],
                        ["04501", "Tân Đồng", "Xã", "Tan Dong"],
                        ["04582", "Vân Hội", "Xã", "Van Hoi"],
                        ["04564", "Việt Cường", "Xã", "Viet Cuong"],
                        ["04579", "Việt Hồng", "Xã", "Viet Hong"],
                        ["04510", "Việt Thành", "Xã", "Viet Thanh"],
                        ["04531", "Y Can", "Xã", "Y Can"]
                    ]
                ],
                [
                    "140", "Văn Chấn", "Huyện", "Van Chan",
                    [
                        ["04645", "An Lương", "Xã", "An Luong"],
                        ["04702", "Bình Thuận", "Xã", "Binh Thuan"],
                        ["04693", "Cát Thịnh", "Xã", "Cat Thinh"],
                        ["04699", "Chấn Thịnh", "Xã", "Chan Thinh"],
                        ["04687", "Đại Lịch", "Xã", "Dai Lich"],
                        ["04690", "Đồng Khê", "Xã", "Dong Khe"],
                        ["04636", "Gia Hội", "Xã", "Gia Hoi"],
                        ["04708", "Minh An", "Xã", "Minh An"],
                        ["04621", "NT Liên Sơn", "Thị trấn", "NT Lien Son"],
                        ["04627", "NT Trần Phú", "Thị trấn", "NT Tran Phu"],
                        ["04633", "Nậm Búng", "Xã", "Nam Bung"],
                        ["04648", "Nậm Lành", "Xã", "Nam Lanh"],
                        ["04642", "Nậm Mười", "Xã", "Nam Muoi"],
                        ["04666", "Nghĩa Sơn", "Xã", "Nghia Son"],
                        ["04711", "Nghĩa Tâm", "Xã", "Nghia Tam"],
                        ["04651", "Sơn Lương", "Xã", "Son Luong"],
                        ["04672", "Sơn Thịnh", "Thị trấn", "Son Thinh"],
                        ["04639", "Sùng Đô", "Xã", "Sung Do"],
                        ["04669", "Suối Bu", "Xã", "Suoi Bu"],
                        ["04657", "Suối Giàng", "Xã", "Suoi Giang"],
                        ["04654", "Suối Quyền", "Xã", "Suoi Quyen"],
                        ["04696", "Tân Thịnh", "Xã", "Tan Thinh"],
                        ["04705", "Thượng Bằng La", "Xã", "Thuong Bang La"],
                        ["04630", "Tú Lệ", "Xã", "Tu Le"]
                    ]
                ],
                [
                    "136", "Văn Yên", "Huyện", "Van Yen",
                    [
                        ["04390", "An Bình", "Xã", "An Binh"],
                        ["04417", "An Thịnh", "Xã", "An Thinh"],
                        ["04387", "Châu Quế Hạ", "Xã", "Chau Que Ha"],
                        ["04384", "Châu Quế Thượng", "Xã", "Chau Que Thuong"],
                        ["04435", "Đại Phác", "Xã", "Dai Phac"],
                        ["04429", "Đại Sơn", "Xã", "Dai Son"],
                        ["04396", "Đông An", "Xã", "Dong An"],
                        ["04399", "Đông Cuông", "Xã", "Dong Cuong"],
                        ["04381", "Lâm Giang", "Xã", "Lam Giang"],
                        ["04378", "Lang Thíp", "Xã", "Lang Thip"],
                        ["04375", "Mậu A", "Thị trấn", "Mau A"],
                        ["04405", "Mậu Đông", "Xã", "Mau Dong"],
                        ["04450", "Mỏ Vàng", "Xã", "Mo Vang"],
                        ["04453", "Nà Hẩu", "Xã", "Na Hau"],
                        ["04408", "Ngòi A", "Xã", "Ngoi A"],
                        ["04402", "Phong Dụ Hạ", "Xã", "Phong Du Ha"],
                        ["04423", "Phong Dụ Thượng", "Xã", "Phong Du Thuong"],
                        ["04393", "Quang Minh", "Xã", "Quang Minh"],
                        ["04414", "Tân Hợp", "Xã", "Tan Hop"],
                        ["04447", "Viễn Sơn", "Xã", "Vien Son"],
                        ["04441", "Xuân Ái", "Xã", "Xuan Ai"],
                        ["04411", "Xuân Tầm", "Xã", "Xuan Tam"],
                        ["04426", "Yên Hợp", "Xã", "Yen Hop"],
                        ["04438", "Yên Phú", "Xã", "Yen Phu"],
                        ["04420", "Yên Thái", "Xã", "Yen Thai"]
                    ]
                ],
                [
                    "132", "Yên Bái", "Thành phố", "Yen Bai",
                    [
                        ["04540", "Âu Lâu", "Xã", "Au Lau"],
                        ["04261", "Đồng Tâm", "Phường", "Dong Tam"],
                        ["04543", "Giới Phiên", "Xã", "Gioi Phien"],
                        ["04267", "Hồng Hà", "Phường", "Hong Ha"],
                        ["04546", "Hợp Minh", "Phường", "Hop Minh"],
                        ["04270", "Minh Bảo", "Xã", "Minh Bao"],
                        ["04255", "Minh Tân", "Phường", "Minh Tan"],
                        ["04273", "Nam Cường", "Phường", "Nam Cuong"],
                        ["04264", "Nguyễn Phúc", "Phường", "Nguyen Phuc"],
                        ["04258", "Nguyễn Thái Học", "Phường", "Nguyen Thai Hoc"],
                        ["04279", "Tân Thịnh", "Xã", "Tan Thinh"],
                        ["04276", "Tuy Lộc", "Xã", "Tuy Loc"],
                        ["04558", "Văn Phú", "Xã", "Van Phu"],
                        ["04252", "Yên Ninh", "Phường", "Yen Ninh"],
                        ["04249", "Yên Thịnh", "Phường", "Yen Thinh"]
                    ]
                ],
                [
                    "141", "Yên Bình", "Huyện", "Yen Binh",
                    [
                        ["04762", "Bạch Hà", "Xã", "Bach Ha"],
                        ["04738", "Bảo Ái", "Xã", "Bao Ai"],
                        ["04750", "Cảm Ân", "Xã", "Cam An"],
                        ["04726", "Cảm Nhân", "Xã", "Cam Nhan"],
                        ["04768", "Đại Đồng", "Xã", "Dai Dong"],
                        ["04786", "Đại Minh", "Xã", "Dai Minh"],
                        ["04780", "Hán Đà", "Xã", "Han Da"],
                        ["04747", "Mông Sơn", "Xã", "Mong Son"],
                        ["04741", "Mỹ Gia", "Xã", "My Gia"],
                        ["04729", "Ngọc Chấn", "Xã", "Ngoc Chan"],
                        ["04783", "Phú Thịnh", "Xã", "Phu Thinh"],
                        ["04759", "Phúc An", "Xã", "Phuc An"],
                        ["04735", "Phúc Ninh", "Xã", "Phuc Ninh"],
                        ["04756", "Tân Hương", "Xã", "Tan Huong"],
                        ["04732", "Tân Nguyên", "Xã", "Tan Nguyen"],
                        ["04717", "Thác Bà", "Thị trấn", "Thac Ba"],
                        ["04777", "Thịnh Hưng", "Xã", "Thinh Hung"],
                        ["04771", "Vĩnh Kiên", "Xã", "Vinh Kien"],
                        ["04765", "Vũ Linh", "Xã", "Vu Linh"],
                        ["04744", "Xuân Lai", "Xã", "Xuan Lai"],
                        ["04720", "Xuân Long", "Xã", "Xuan Long"],
                        ["04714", "Yên Bình", "Thị trấn", "Yen Binh"],
                        ["04774", "Yên Bình", "Xã", "Yen Binh"],
                        ["04753", "Yên Thành", "Xã", "Yen Thanh"]
                    ]
                ]
            ]
        ]
    ];

    return {

        getCityList: function () {
            return rawData.map(function (city) {
                return city[1];
            });
        },

        getDistrictListOfCity: function (cityName) {
            let matchedCity = rawData.filter(function (city) {
                return city[1] === cityName;
            })[0];
            if (!matchedCity) {
                return [];
            }
            return matchedCity[4].map(function (district) {
                return district[1];
            });

        },

        getWardListOfDistrict: function (cityName, districtName) {
            let matchedCity = rawData.filter(function (city) {
                return city[1] === cityName;
            })[0];
            if (!matchedCity) {
                return [];
            }
            let matchedDistrict = matchedCity[4].filter(function (district) {
                return district[1] === districtName;
            })[0];
            if (!matchedDistrict) {
                return [];
            };
            return matchedDistrict[4].map(function (ward) {
                return ward[1];
            });
        },


    }

});
