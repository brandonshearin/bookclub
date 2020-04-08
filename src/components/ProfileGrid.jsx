import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ProfileCard from './ProfileCard';

const useStyles = makeStyles({
  topPos: {
    marginTop: 10,
  }
})

const ProfileGrid = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={2} className={classes.topPos} alignItems="center" justify="center">
      {gridProfiles}
    </Grid>
  )
}

const profiles = [
  {
    name: "Brandon Shearin",
    email: "bshearin15@gmail.com",
    bio: "I like to read",
    image: "https://lh3.googleusercontent.com/si9GntzX9OD-uJ4n2xxSkw1Tnu6S24vCJyiRHex9_2BgrnIzI5j4dVCRzZdTUfnxStwFFVVoAwGO3r771KSsEvhUsii8ckFkbnb27uwySBUHL2DttAS5baB8Z3H936928gJVc7vknQ=w2400",
  },
  {
    name: "Ava Shearin",
    email: "worldpeace284@gmail.com",
    bio: "Reading is boring I'd rather watch tik toks",
    image: "https://lh3.googleusercontent.com/p2gpdDqgpS934ohzZ5bBOeX-Rl2VY_oUlWf5FnEn4KE2s7XYiEYshQaV1evvgGnbSgMH9dq8s06GMQisnbkVgxk7hZXHRWCXasQVw4oVRCB6U1jJHlFr1r7cOjc-7qoqkl7BTa0QmQ=w2400"
  },
  {
    name: "Trey Sullivan",
    email: "tsull@hotmail.com",
    bio: "I'm in a frat, so why would I read a book",
    image: "https://lh3.googleusercontent.com/iONZTVq-cLWuHNEZyq9b_QcwcHcN_lRZElHkBmI_b9hOs4IuOjkwyqSr9-iNrVeapOVucxgZubvs1EKH2FK47t00V4XIzXvfE3x17g-TuwEof7Jed5dHdz2k5SZTI-MqDOLK54nxCQ=w2400"
  },
  {
    name: "Vignesh Gopalan",
    email: "viggytho@yahoo.com",
    bio: "I'm better at art than Brandon is, and I am a better reader too.",
    image:"https://lh3.googleusercontent.com/3Pez-vj-jfaP4lpLsJ5iUV0yNhH1VlvgomauuiWzDToJjNuyhggeyY143QIxZup1N2NQBNoxq6erVkK3zUJFb4_6u9M8cn59lCSFKs_mW_a7nPCw_Ebaqj-fFagW7MJqNJCCckDDgg=w2400"
  },
  {
    name: "Brooke Finlay",
    email: "brookefinlay13@heelmail.unc.edu",
    bio: "Have you heard of James Patterson?  I have read 32 of his books.",
    image: "https://lh3.googleusercontent.com/cRYbKL73wZyAtRnbqv4jyl2FuYDn6bZC2KEOlGLt65652j2xdcEQU1VRHX7lFLI-dpQnpmnt6r_aQgjNwohs9nof6TGNmHyXfWLfF_nobRYkh6096-Qlb3v8fsGStuRkqt03g5HpFg=w2400"
  },
  {
    name: "Holden Walter",
    email: "holdengwalter@gmail.com",
    bio: "Nadine is such a bitch bro, I wish I would just break up with her already.",
    image: "https://lh3.googleusercontent.com/v2Lqoqme2lsEuN4aDH3uuk78k3wD-W_shRouh2imapTc_u4C1QSONP57IktpTRcPBMU_7ANuRiPE3bNEcwcXNiHBrxWuM3B4ls1IDofAKnakv97TAcY5O_PWq440137uOafVBbKpXw=w2400"
  }
]
const gridProfiles = profiles.map((profile,idx) => (
<Grid item key={idx}>
  <ProfileCard profile={profile}></ProfileCard>
</Grid>))

export default ProfileGrid