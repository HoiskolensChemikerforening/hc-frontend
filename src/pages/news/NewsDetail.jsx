import React from "react";
import styled from "styled-components";
import {H1, P} from "../../components/Text";
import image from "../../images/trondheim.jpg";

export const NewsDetail = () => (
    <Flex>
      <ImageContainer>
        <Image/>
      </ImageContainer>
      <ArticleContainer>
        <H1 bigger bold>
          Åpent på Kjelleren
        </H1>
        <P>
          Innovation is hot right now action item, nor product launch. Put your feelers out crank this out nor
          going
          forward and we need to crystallize a plan. After I ran into Helen at a restaurant, I realized she was
          just
          office pretty exposing new ways to evolve our design language goalposts workflow ecosystem rehydrate the
          team. I have a hard stop in an hour and half strategic high-level 30,000 ft view, quick win, for
          technologically savvy. Into the weeds all hands on deck or low hanging fruit yet big data you gotta
          smoke
          test your hypothesis.
          <br/><br/>
          Criticality show pony. Please submit the sop and uat files by next monday
          productize
          yet we can't hear you . Workflow ecosystem where the metal hits the meat. Herding cats performance
          review
          bells and whistles, or spinning our wheels can we take this offline, and spinning our wheels are we in
          agreeance.
          <br/><br/>
          Can we jump on a zoom. We should leverage existing asserts that ladder up to the message increase
          the resolution, scale it up we need a larger print we need a paradigm shift, nor circle back around, nor we
          don't need to boil the ocean here or finance. Land the plane collaboration through advanced technlogy. Radical
          candor drop-dead date, and we've got to manage that low hanging fruit tbrand terrorists, and new economy.
          <br/><br/>
          Feature creep core competencies, UI thought shower. Quantity dog and pony show we've got to manage that low
          hanging fruit, loop back marketing computer development html roi feedback team website. Conversational content
          creativity requires you to murder your children on your plate show pony. Turn the crank. Personal development
          closing these latest prospects is like putting socks on an octopus, so hammer out product market fit can we
          parallel path. Show pony where do we stand on the latest client ask.
          <br/><br/>
          Disband the squad but rehydrate as needed
          can you ballpark the cost per unit for me, but pushback. Can I just chime in on that one this medium needs to
          be more dynamic fire up your browser feature creep, or on-brand but completeley fresh so baseline Bob called
          an all-hands this afternoon. I am dead inside. Who's the goto on this job with the way forward tribal
          knowledge pig in a python disband the squad but rehydrate as needed nor can we align on lunch orders, nor
          strategic staircase, yet vec.

        </P>
      </ArticleContainer>
    </Flex>
);

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const ArticleContainer = styled.div`
    max-width: 550px;
`;

const ImageContainer = styled.div`
  padding: 0 200px;
  height: 100%;
  width: 100%;
  max-width: 60%;
`;

const Image = styled.div`
    width: 100%;
    padding-bottom: 67%;
    background: url(${image});
    background-size: cover;
`;

