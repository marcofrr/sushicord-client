import React from 'react'
import { Container, Section, TextContainer, Button } from './styles'
export const ActiveNow: React.FC = (): JSX.Element => {
    return (

        <Container>
            <Section className="firstSection">
                <h4>This section could be better</h4>
                <TextContainer>
                    We can customize Active Now, and other parts of Discord,
                    bases on information like who you talk to and what games you play.
                    You can change this anytime in <a role="button">privacy settings</a>.
                </TextContainer>

                <Button className="primaryBtn">Yes, count me in!</Button>
                <Button className="secondaryBtn">No thanks</Button>

            </Section>
            <strong>Active Now</strong>

            <Section className="secondSection">
                <h4>It's quiet for now...</h4>
                <TextContainer>
                    When a friend start an activity-- like playing a game
                    or hanging out on voice-- we'll show it here!
                </TextContainer>
            </Section>


        </Container>


    )
}