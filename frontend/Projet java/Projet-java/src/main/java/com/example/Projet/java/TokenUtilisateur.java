package com.example.Projet.java;

public class TokenUtilisateur {
    public String Mail;
    public String MDP;
    public String Prenom;
    public String Nom;

    public TokenUtilisateur(String mail, String mdp, String prenom, String nom) {
        this.Mail = mail;
        this.MDP = mdp;
        this.Prenom  = prenom;
        this.Nom = nom;
    }
}
