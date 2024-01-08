"use client";
import { getAllCollections } from "@/utils/actions";
import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import FlashcardList from "./flashcard-list";
import { Paragraph } from "@/app/components/texts/texts";

export default function FlashcardFinish() {
	return (
		<div className="min-w-3xl">
			<Paragraph>Congratulations! You finished</Paragraph>
			<Link href={"/dashboard"}>Start again?</Link>
		</div>
	);
}
