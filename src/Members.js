import React from "react";
import styled from "styled-components";

const MemberCard = styled.div`
  border: 3px solid black;
  margin-right: 30%;
  margin-left: 30%;
  margin-top: 5%;

  h1 {
    /* text-decoration: underline; */
    font-size: 1.9rem;
    /* text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue; */
  }
  p {
    /* text-shadow: 1px 1px 5px #fff; */
    font-size: 0.8rem;
  }
  h6 {
    font-size: 1.2rem;
  }
`;

const Members = (props) => {
  const { memberInfo } = props;

  return memberInfo.map((member) => {
    return (
      <MemberCard>
        <h2>{member.name}</h2>
        <p>{member.email}</p>
        <h6>{member.role}</h6>
      </MemberCard>
    );
  });
};

export default Members;
