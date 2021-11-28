import React from "react"
import styled from "styled-components/macro"

import SHOES from "../../data"
import ShoeCard from "../ShoeCard"

const ShoeGrid = () => {
	return (
		<Wrapper>
			{SHOES.map((shoe) => (
				<ShoeWrapper>
					<ShoeCard key={shoe.slug} {...shoe} />
				</ShoeWrapper>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-content: flex-start;
	gap: 24px;
	flex-wrap: wrap;
`

const ShoeWrapper = styled.div`
	min-width: 200px;
	max-width: 300px;
	flex: 1 0 250px;
	margin-right: auto;
`

export default ShoeGrid
