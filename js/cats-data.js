const CAT_DATA = [
  {
    id: 1,
    name: "Mochi",
    ageYears: 2,
    gender: "female",
    type: "adopt",
    tags: ["Thân thiện", "Thích ôm", "Vui vẻ"],
    desc: "Mochi là bé mèo cam đốm trắng cực kỳ tình cảm. Thích nằm lên đùi người và kêu ríu rít mỗi khi được gãi tai.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="18,40 28,8 42,34" fill="#E8621A"/><polygon points="58,34 72,8 82,40" fill="#E8621A"/><circle cx="50" cy="57" r="36" fill="#F05E1C"/><circle cx="50" cy="57" r="26" fill="#FAECE7"/><ellipse cx="38" cy="50" rx="6.5" ry="7.5" fill="white"/><circle cx="38" cy="51" r="4" fill="#2C2C2A"/><circle cx="39.5" cy="49.5" r="1.2" fill="white"/><ellipse cx="62" cy="50" rx="6.5" ry="7.5" fill="white"/><circle cx="62" cy="51" r="4" fill="#2C2C2A"/><circle cx="63.5" cy="49.5" r="1.2" fill="white"/><polygon points="50,60 47,64 53,64" fill="#F4C0D1"/><path d="M47,64 Q50,68 53,64" stroke="#8B3A0F" stroke-width="1.2" fill="none"/><line x1="20" y1="61" x2="45" y2="62" stroke="#8B3A0F" stroke-width="0.7" opacity="0.35"/><line x1="20" y1="65" x2="45" y2="65" stroke="#8B3A0F" stroke-width="0.7" opacity="0.35"/><line x1="55" y1="62" x2="80" y2="61" stroke="#8B3A0F" stroke-width="0.7" opacity="0.35"/><line x1="55" y1="65" x2="80" y2="65" stroke="#8B3A0F" stroke-width="0.7" opacity="0.35"/></svg>`
  },
  {
    id: 2,
    name: "Bông",
    ageYears: 3,
    gender: "male",
    type: "foster",
    tags: ["Nhút nhát", "Điềm tĩnh", "Thông minh"],
    desc: "Bông là bé mèo trắng mắt tím thuần chủng. Cần người kiên nhẫn giúp bé mở lòng — rất thông minh và học hỏi nhanh.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="18,40 28,8 42,34" fill="#B4B2A9"/><polygon points="58,34 72,8 82,40" fill="#B4B2A9"/><circle cx="50" cy="57" r="36" fill="#D3D1C7"/><circle cx="50" cy="57" r="26" fill="#F1EFE8"/><ellipse cx="38" cy="50" rx="6.5" ry="7.5" fill="white"/><circle cx="38" cy="51" r="4" fill="#534AB7"/><circle cx="39.5" cy="49.5" r="1.2" fill="white"/><ellipse cx="62" cy="50" rx="6.5" ry="7.5" fill="white"/><circle cx="62" cy="51" r="4" fill="#534AB7"/><circle cx="63.5" cy="49.5" r="1.2" fill="white"/><polygon points="50,60 47,64 53,64" fill="#F4C0D1"/><path d="M47,64 Q50,68 53,64" stroke="#888780" stroke-width="1.2" fill="none"/><line x1="20" y1="61" x2="45" y2="62" stroke="#888780" stroke-width="0.7" opacity="0.35"/><line x1="20" y1="65" x2="45" y2="65" stroke="#888780" stroke-width="0.7" opacity="0.35"/><line x1="55" y1="62" x2="80" y2="61" stroke="#888780" stroke-width="0.7" opacity="0.35"/><line x1="55" y1="65" x2="80" y2="65" stroke="#888780" stroke-width="0.7" opacity="0.35"/></svg>`
  },
  {
    id: 3,
    name: "Hổ",
    ageYears: 1,
    gender: "male",
    type: "adopt",
    tags: ["Năng động", "Nghịch ngợm", "Dũng cảm"],
    desc: "Hổ là chàng mèo vằn vàng năng động nhất quán quân. Thích leo trèo, chạy nhảy và học các trò mới cực nhanh.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="18,40 28,8 42,34" fill="#BA7517"/><polygon points="58,34 72,8 82,40" fill="#BA7517"/><circle cx="50" cy="57" r="36" fill="#EF9F27"/><circle cx="50" cy="57" r="26" fill="#FAC775"/><path d="M30,37 Q38,42 30,47" stroke="#BA7517" stroke-width="1.8" fill="none" opacity="0.5"/><path d="M70,37 Q62,42 70,47" stroke="#BA7517" stroke-width="1.8" fill="none" opacity="0.5"/><path d="M43,32 Q50,37 57,32" stroke="#BA7517" stroke-width="1.5" fill="none" opacity="0.4"/><ellipse cx="38" cy="50" rx="6.5" ry="7.5" fill="white"/><circle cx="38" cy="51" r="4" fill="#3B6D11"/><circle cx="39.5" cy="49.5" r="1.2" fill="white"/><ellipse cx="62" cy="50" rx="6.5" ry="7.5" fill="white"/><circle cx="62" cy="51" r="4" fill="#3B6D11"/><circle cx="63.5" cy="49.5" r="1.2" fill="white"/><polygon points="50,60 47,64 53,64" fill="#F4C0D1"/><path d="M47,64 Q50,68 53,64" stroke="#633806" stroke-width="1.2" fill="none"/><line x1="20" y1="61" x2="45" y2="62" stroke="#633806" stroke-width="0.7" opacity="0.35"/><line x1="20" y1="65" x2="45" y2="65" stroke="#633806" stroke-width="0.7" opacity="0.35"/><line x1="55" y1="62" x2="80" y2="61" stroke="#633806" stroke-width="0.7" opacity="0.35"/><line x1="55" y1="65" x2="80" y2="65" stroke="#633806" stroke-width="0.7" opacity="0.35"/></svg>`
  },
  {
    id: 4,
    name: "Luna",
    ageYears: 4,
    gender: "female",
    type: "adopt",
    tags: ["Thông minh", "Độc lập", "Bí ẩn"],
    desc: "Luna là nàng mèo đen huyền bí với đôi mắt vàng óng ánh. Khôn ngoan, tự lập — bé sẽ chọn bạn nếu tin tưởng.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="18,40 28,8 42,34" fill="#2C2C2A"/><polygon points="58,34 72,8 82,40" fill="#2C2C2A"/><circle cx="50" cy="57" r="36" fill="#444441"/><circle cx="50" cy="57" r="26" fill="#5F5E5A"/><ellipse cx="38" cy="50" rx="6.5" ry="7.5" fill="#888780"/><circle cx="38" cy="51" r="4" fill="#EF9F27"/><circle cx="39.5" cy="49.5" r="1.2" fill="white"/><ellipse cx="62" cy="50" rx="6.5" ry="7.5" fill="#888780"/><circle cx="62" cy="51" r="4" fill="#EF9F27"/><circle cx="63.5" cy="49.5" r="1.2" fill="white"/><polygon points="50,60 47,64 53,64" fill="#F4C0D1"/><path d="M47,64 Q50,68 53,64" stroke="#D3D1C7" stroke-width="1.2" fill="none"/><line x1="20" y1="61" x2="45" y2="62" stroke="#D3D1C7" stroke-width="0.7" opacity="0.4"/><line x1="20" y1="65" x2="45" y2="65" stroke="#D3D1C7" stroke-width="0.7" opacity="0.4"/><line x1="55" y1="62" x2="80" y2="61" stroke="#D3D1C7" stroke-width="0.7" opacity="0.4"/><line x1="55" y1="65" x2="80" y2="65" stroke="#D3D1C7" stroke-width="0.7" opacity="0.4"/></svg>`
  },
  {
    id: 5,
    name: "Cốm",
    ageYears: 2,
    gender: "female",
    type: "foster",
    tags: ["Thích chơi", "Lanh lợi", "Yêu trẻ"],
    desc: "Cốm là bé mèo vàng mắt xanh rất lanh lợi. Bé yêu trẻ em và cực kỳ hợp với gia đình có con nhỏ.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="18,40 28,8 42,34" fill="#997726"/><polygon points="58,34 72,8 82,40" fill="#997726"/><circle cx="50" cy="57" r="36" fill="#C9A23A"/><circle cx="50" cy="57" r="26" fill="#E8C86A"/><ellipse cx="38" cy="50" rx="6.5" ry="7.5" fill="white"/><circle cx="38" cy="51" r="4" fill="#185FA5"/><circle cx="39.5" cy="49.5" r="1.2" fill="white"/><ellipse cx="62" cy="50" rx="6.5" ry="7.5" fill="white"/><circle cx="62" cy="51" r="4" fill="#185FA5"/><circle cx="63.5" cy="49.5" r="1.2" fill="white"/><polygon points="50,60 47,64 53,64" fill="#F4C0D1"/><path d="M47,64 Q50,68 53,64" stroke="#633806" stroke-width="1.2" fill="none"/><line x1="20" y1="61" x2="45" y2="62" stroke="#633806" stroke-width="0.7" opacity="0.35"/><line x1="20" y1="65" x2="45" y2="65" stroke="#633806" stroke-width="0.7" opacity="0.35"/><line x1="55" y1="62" x2="80" y2="61" stroke="#633806" stroke-width="0.7" opacity="0.35"/><line x1="55" y1="65" x2="80" y2="65" stroke="#633806" stroke-width="0.7" opacity="0.35"/></svg>`
  },
  {
    id: 6,
    name: "Mây",
    ageYears: 5,
    gender: "male",
    type: "adopt",
    tags: ["Điềm tĩnh", "Trưởng thành", "Trung thành"],
    desc: "Mây là chàng mèo xám bạc dày dặn. Điềm tĩnh, không cần nhiều chú ý nhưng luôn ở bên bạn khi cần.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="18,40 28,8 42,34" fill="#888780"/><polygon points="58,34 72,8 82,40" fill="#888780"/><circle cx="50" cy="57" r="36" fill="#B4B2A9"/><circle cx="50" cy="57" r="26" fill="#D3D1C7"/><ellipse cx="38" cy="50" rx="6.5" ry="7.5" fill="white"/><circle cx="38" cy="51" r="4" fill="#0F6E56"/><circle cx="39.5" cy="49.5" r="1.2" fill="white"/><ellipse cx="62" cy="50" rx="6.5" ry="7.5" fill="white"/><circle cx="62" cy="51" r="4" fill="#0F6E56"/><circle cx="63.5" cy="49.5" r="1.2" fill="white"/><polygon points="50,60 47,64 53,64" fill="#F4C0D1"/><path d="M47,64 Q50,68 53,64" stroke="#5F5E5A" stroke-width="1.2" fill="none"/><line x1="20" y1="61" x2="45" y2="62" stroke="#5F5E5A" stroke-width="0.7" opacity="0.35"/><line x1="20" y1="65" x2="45" y2="65" stroke="#5F5E5A" stroke-width="0.7" opacity="0.35"/><line x1="55" y1="62" x2="80" y2="61" stroke="#5F5E5A" stroke-width="0.7" opacity="0.35"/><line x1="55" y1="65" x2="80" y2="65" stroke="#5F5E5A" stroke-width="0.7" opacity="0.35"/></svg>`
  }
];
