import React from "react";
import styled from "styled-components";

const MemberCard = styled.div`
  border: 3px solid black;
  margin-right: 18%;
  margin-left: 18%;
  margin-top: 5%;
`;

const Members = (props) => {
  const { memberInfo } = props;

  return memberInfo.map((member) => {
    return (
      <MemberCard>
        <p>{member.name}</p>
        <p>{member.email}</p>
        <p>{member.role}</p>
      </MemberCard>
    );
  });
};

export default Members;
