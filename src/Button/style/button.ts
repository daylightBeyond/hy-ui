import commonStyle from "../../styles/common";

const {
  hyFontMd,
  hyFontWeightNormal,
  hyBorderRadiusXs,
} = commonStyle;

const hyButtonWhiteColor = '#fff';

const ButtonStyle = `
  .hy-btn {
    // 定位属性
    display: inline-block;

    // 自身属性
    outline: none;
    height: 32px;
    line-height: 32px;
    border: 1px solid transparent;
    background-color: ${hyButtonWhiteColor};
    cursor: pointer;

    // 文字属性
    color: ${hyButtonWhiteColor};
    font-size: ${hyFontMd};
    font-weight: ${hyFontWeightNormal};
    // 文本属性
    text-align: center;
    white-space: nowrap;
    // CSS3 新增属性
    border-radius: ${hyBorderRadiusXs};
  }
`;

export { ButtonStyle };