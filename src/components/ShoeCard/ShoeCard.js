import React from "react"
import styled from "styled-components/macro"

import { COLORS, WEIGHTS } from "../../constants"
import { formatPrice, pluralize, isNewShoe } from "../../utils"
import Spacer from "../Spacer"

const ShoeCard = ({ slug, name, imageSrc, price, salePrice, releaseDate, numOfColors }) => {
	// prettier-ignore
	const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

	return (
		<Link href={`/shoe/${slug}`}>
			<Wrapper>
				<ImageWrapper>
					<Image alt="" src={imageSrc} />
					{variant !== "default" && <SalePrice variant={variant}>{variant === "new-release" ? "Just Released!" : "Sale"}</SalePrice>}
				</ImageWrapper>
				<Spacer size={12} />
				<Row>
					<Name>{name}</Name>
					<Price>{formatPrice(price)}</Price>
				</Row>
				<Row>
					<ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
				</Row>
			</Wrapper>
		</Link>
	)
}

const Link = styled.a`
	text-decoration: none;
	color: inherit;
`

const Wrapper = styled.article`
	gap: 14px;
`

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
`

const Image = styled.img`
	width: 100%;
	border-radius: 16px 16px 4px 4px;
`

const Row = styled.div`
	font-size: 1rem;
`

const Name = styled.h3`
	font-weight: ${WEIGHTS.medium};
	color: ${COLORS.gray[900]};
`

const Price = styled.span``

const ColorInfo = styled.p`
	color: ${COLORS.gray[700]};
`

const SalePrice = styled.span`
	position: absolute;
	top: 12px;
	right: -4px;
	font-weight: ${WEIGHTS.medium};
	font-size: 14px;
	color: ${COLORS.white};
	padding: 8px 11px;
	background-color: ${(props) => (props.variant === "new-release" ? COLORS.secondary : COLORS.primary)};
	border-radius: 4px;
`

export default ShoeCard
