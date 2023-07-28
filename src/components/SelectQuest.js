// 선택한 버킷리스트

import styled from "styled-components";
import palette from "../styles/colorPalette";

import checkIcon from "../contents/ic_check.jpg";

// emoji: 이모티콘, content: 버킷리스트 내용
const SelectQuest = (emoji, content) => {
  return (
    <AllBucketBox>
      <AllBucketIcon>{emoji}</AllBucketIcon>
      <AllBucketContent>
        <AllBucketGoal>{content}</AllBucketGoal>
        <AllBucketCategory>일상</AllBucketCategory>
      </AllBucketContent>
      <CheckButton
        src={checkIcon}/>
    </AllBucketBox>
  );
}

// 버킷리스트
const AllBucketBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2vw;
  width: 92vw;
  border-radius: 1.8vw;
  border: 1px solid ${palette.mainColor};
  background-color: ${palette.selectPurple};
  box-shadow: 0.2vw 0.2vw 0.2vw 0.2vw ${palette.grayee};
`;
const AllBucketIcon = styled.div`
  margin-left: 4vw;
  margin-right: 4vw;
  font-size: 24px;
`;
const AllBucketContent = styled.div`
  display: block;
  margin-top: 2.5vw;
  margin-bottom: 2.5vw;
  padding-right: 20vw;
`;
const AllBucketGoal = styled.div`
  font-family: 'NotoSansKR-Medium';
  font-size: 14px;
  margin-bottom: 0.5vw;
  color: ${palette.black};
`;
const AllBucketCategory = styled.div`
  font-family: 'NotoSansKR-Regular';
  font-size: 12px;
  color: ${palette.gray66};
`;

const CheckButton = styled.img`
  width: 5vw;
  height: 5vw;
  margin-left: auto;
  padding: 1vw;
  margin-right: 2vw;
  margin-top: 3.5vw;
  margin-bottom: 3.5vw;
  object-fit: cover;
`;

export default SelectQuest;