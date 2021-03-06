import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "../../components/Navigation";
import { Button } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles({
    homepage: {
        padding: "2rem 0",
    },
    title: {
        fontSize: "1.5rem",
        paddingLeft: "1rem",
        marginBottom: "2rem",
    },
    wordsList: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    wordItem: {
        width: "90%",
        height: "300",
        border: "1px solid #c2c2c2",
        borderRadius: 4,
        paddingBottom: "1rem",
    },
    img: {
        width: "100%",
        height: "250",
        objectFit: "cover",
        objectPosition: "top center",
    },
    wordAndBtnContainer: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
    },
    word: {
        textAlign: "center",
        fontSize: "1.4rem",
    },
    detailBtn: {
        width: "100%",
        marginBottom: "0.5rem",
    },
    modifyBtn: {
        width: "100%",
    },
    addWordBtn: {
        position: "fixed",
        right: "1rem",
        bottom: "8rem",
        width: "4rem",
        height: "4rem",
        borderRadius: "50%",
        zIndex: 3,
    },
});

export default function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.homepage}>
            <div className={classes.title}>My Words List</div>
            <div className={classes.wordsList}>
                <div className={classes.wordItem}>
                    <img
                        className={classes.img}
                        alt=''
                        src='data:image/jpeg;base64,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'
                    />
                    <div className={classes.wordAndBtnContainer}>
                        <div className={classes.word}>cat</div>
                        <div>
                            <Button className={classes.detailBtn} variant='contained' color='secondary'>
                                Details
                            </Button>
                            <Button className={classes.modifyBtn} variant='outlined' color='secondary'>
                                Modify
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Button className={classes.addWordBtn} variant='contained' color='secondary'>
                {/* Add Word */}
                <CreateIcon />
            </Button>
            <Navigation />
        </div>
    );
}
