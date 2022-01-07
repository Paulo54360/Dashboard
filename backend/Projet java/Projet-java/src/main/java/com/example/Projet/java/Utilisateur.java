package com.example.Projet.java;

import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.io.IOException;

public class Utilisateur {
    private String Nom;
    private String Prenom;
    private String AdresseMail;
    private String MDP;

    public Utilisateur(String nom, String prenom, String adresseMail, String mdp) {

    }

    public void lectureUtilisateur(String mailUtilisateur) {
        //Lecture des données de l'utilisateur
        try {
            //1 charger le driver mysql
            //Class.forName("com.mysql.jdbc.Driver");
            // 2 créer la connexion
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/sitewidget", "root", "toor");
            // 3 - créer un état de connexion
            Statement st = con.createStatement();
            // 4 - créer une requête de sélection
            ResultSet res = st.executeQuery("select * from sitewidget.utilisateur");
            while (res.next()){
                System.out.println(res.getString(1));
                System.out.println(res.getString(2));
                System.out.println(res.getString(3));
                System.out.println(res.getString(4));
            }

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        /*} catch (ClassNotFoundException e) {
            e.printStackTrace();*/
        }
    }


    public void modifUtilisateur(String NewMail, String NewMDP, String NewPrenom, String NewNom, String AncienMail) {
        //Modification des infos utilisateur
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/sitewidget", "root", "toor");
            Statement st = con.createStatement();
            String query = "UPDATE sitewidget.utilisateur SET mailUtilisateur = ?, motDePass = ?, prenom = ?, nom = ? WHERE mailUtilisateur = ?";
            PreparedStatement preparedStatement = con.prepareStatement(query);
            preparedStatement.setString(1, NewMail);
            preparedStatement.setString(2, NewMDP);
            preparedStatement.setString(3, NewPrenom);
            preparedStatement.setString(4, NewNom);
            preparedStatement.setString(5, AncienMail);
            preparedStatement.executeUpdate();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    public void ajoutUtilisateur(String mail, String mdp, String prenom, String nom) {
        //Ajout des infos utilisateur
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/sitewidget", "root", "toor");
            Statement st = con.createStatement();
            String query = "INSERT INTO sitewidget.utilisateur (mailUtilisateur, motDePass, prenom, nom) VALUES (?, ?, ?, ?)";
            PreparedStatement preparedStatement = con.prepareStatement(query);
            preparedStatement.setString(1, mail);
            preparedStatement.setString(2, mdp);
            preparedStatement.setString(3, prenom);
            preparedStatement.setString(4, nom);
            preparedStatement.executeUpdate();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    public void suppressionUtilisateur(String mail) {
        //Suppression des infos utilisateur
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/sitewidget", "root", "toor");
            Statement st = con.createStatement();
            String query = "DELETE FROM sitewidget.utilisateur WHERE mailUtilisateur = ?";
            PreparedStatement preparedStatement = con.prepareStatement(query);
            preparedStatement.setString(1, mail);
            preparedStatement.executeUpdate();
        } catch (Exception e){
            e.printStackTrace();
        }
    }





}
