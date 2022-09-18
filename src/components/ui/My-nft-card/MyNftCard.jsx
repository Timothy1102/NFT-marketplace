import React, { useState } from "react";
import { Link } from "react-router-dom";
import { utils } from "near-api-js";
import "./my-nft-card.css";
import getConfig from "../../../config";
import { Row, Col } from "reactstrap";
import { EyeTwoTone, CheckCircleTwoTone, HeartTwoTone} from "@ant-design/icons";

const nearConfig = getConfig("development");

const MyNftCard = (props) => {
	const {
		title,
		id,
		imgUrl,
		creator,
		desc,
		is_selling,
		selling_price,
	} = props.item;

	return (
		<div className="single__nft__card">
			<div className="nft__content ">
				<Row>
					<Col lg="3" style={{ marginRight: 7 }}>
						<img
							src=""
							alt="nft thumbnail"
							className="d-inline-flex tw-rounded-full image-shadow tw-w-14 tw-h-14 "
							style={{
								width: 60,
								height: 60,
								borderRadius: "50px",
								marginRight: 20,
							}}
						/>
					</Col>
					<Col>
						<h5 className="nft__title" style={{ marginBottom: 7 }}>
							<Link
								style={{ color: "white", fontSize: 20 }}
							>
								title
							</Link>
						</h5>
					</Col>
				</Row>
			</div>

			<div
				className="contract_des"
				style={{
					height: 160,
					border: "0.3px solid #ffa500",
					padding: "5px 10px",
					marginTop: 10,
					borderRadius: 15,
				}}
			>
				<p
					style={{
						height: 150,
						color: "#c7bfbf",
						fontSize: 13,
						textOverflow: "ellipsis",
						overflow: "auto",
						maxHeight: "40ch",
						maxWidth: "40ch",
					}}
				>
					Mockup data
				</p>
			</div>

			<div className=" d-flex align-items-center gap-2 single__nft-seen">
				<EyeTwoTone twoToneColor="#ffa500"/> <span>53</span>
				<HeartTwoTone twoToneColor="#eb2f96" /> <span>34</span>
				<CheckCircleTwoTone twoToneColor="#52c41a" /> <span>15</span>
			</div>

			{is_selling && (
				<div
					className="creator__info-wrapper d-flex gap-3"
					style={{ marginTop: 10 }}
				>
					<div className="creator__info w-100 d-flex align-items-center justify-content-between">
						<div>
							<h6>price</h6>
							<p style={{color: 'orange'}}>
								<span style={{color:'#b1b3b1'}}> NEAR</span>
							</p>
						</div>
					</div>
				</div>
			)}

			{is_selling ? (
				<div
					className=" d-inline-flex align-items-center justify-content-between"
					style={{ marginLeft: 75 }}
				>
					<button
						className="bid__btn d-flex align-items-center gap-1"
						style={{ background: "#e250e5", border: "none" }}
					>
						<i className="ri-close-circle-line"></i> Delist
					</button>
				</div>
			) : (
				<div className=" mt-3 d-inline-flex align-items-center ">
					<button
						className="bid__btn d-flex align-items-center gap-1"
					>
						List
					</button>
				</div>
			)}
		</div>
	);
};

export default MyNftCard;
