package com.example.Projet.java;

import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Types;
import java.io.IOException;
import java.net.*;
import java.util.logging.*;


import java.lang.reflect.Field;
import java.io.IOException;

public class Test {


    public static void main(String[] args) throws IOException {
/*
        int portAppli = 3000;
        int portGoogle = 0 ;
        String ip = "127.0.0.1";
        InetAddress hote;
        int taille = 2048;

        byte[] buf = new byte[taille];

        DatagramSocket s = new DatagramSocket(portAppli);
        DatagramPacket packet = new DatagramPacket(buf,buf.length);
        while(true){
            s.receive(packet);
        }*/

        // ________________________________ Lire _______________________
        /*try {
            //1 charger le driver mysql
            //Class.forName("com.mysql.jdbc.Driver");
            // 2 créer la connexion
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/sitewidget", "root", "toor");
            // 3 - créer un état de connexion
            Statement st = con.createStatement();
            // 4 - créer une requête de sélection
            ResultSet res = st.executeQuery("select * from utilisateur");
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
        //}

        // ________________________________ Ecrire _______________________
        /*
        try {
            //1 charger le driver mysql
            //Class.forName("com.mysql.jdbc.Driver");
            // 2 créer la connexion
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/sitewidget", "root", "toor");
            // 3 - créer un état de connexion
            Statement st = con.createStatement();
            // 4 - créer une requête de sélection
            ResultSet res = st.executeQuery("insert into sitewidget.utilisateur (mailUtilisateur, motDePass, prenom, nom) values ('mail@aupif.com', 'mdp', 'truc', 'much')");
            while (res.next()){
                System.out.println(res.getString(1));
                System.out.println(res.getString(2));
                System.out.println(res.getString(3));
                System.out.println(res.getString(4));
            }

        /*} catch (SQLException throwables) {
            throwables.printStackTrace();
        /*} catch (ClassNotFoundException e) {
            e.printStackTrace();*/
        //}
/*
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/sitewidget", "root", "toor");
            Statement st = con.createStatement();
            String query = "UPDATE utilisateur SET mailUtilisateur = ?, motDePass = ?, prenom = ?, nom = ? WHERE mailUtilisateur = ?";
            PreparedStatement preparedStatement = con.prepareStatement(query);
            preparedStatement.setString(1, "mail@ouf.com");
            preparedStatement.setString(2, "mdpkitu");
            preparedStatement.setString(3, "prenomwas");
            preparedStatement.setString(4, "nom2");
            preparedStatement.setString(5, "test@test.fr");
            preparedStatement.executeUpdate();
        } catch (Exception e){
            e.printStackTrace();
        }*/



        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/sitewidget", "root", "toor");
            Statement st = con.createStatement();
            String query = "INSERT INTO utilisateur (mailUtilisateur, motDePass, prenom, nom) VALUES (?, ?, ?, ?)";

            //String query = "UPDATE users SET mailUtilisateur = ?, motDePass = ?, prenom = ?, nom = ? WHERE mailUtilisateur = ?";
            PreparedStatement preparedStatement = con.prepareStatement(query);
            preparedStatement.setString(1, "mail@ouff.com");
            preparedStatement.setString(2, "motdepass");
            preparedStatement.setString(3, "truc");
            preparedStatement.setString(4, "much");
            preparedStatement.executeUpdate();
        } catch (Exception e){
            e.printStackTrace();
        }



        // ________________________________ Modifer _______________________
        /*
        try {
            //1 charger le driver mysql
            //Class.forName("com.mysql.jdbc.Driver");
            // 2 créer la connexion
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/sitewidget", "root", "toor");
            // 3 - créer un état de connexion
            Statement st = con.createStatement();
            // 4 - créer une requête de sélection
            ResultSet res = st.executeQuery("update utilisateur set mailUtilisateur = 'mail@auhazard.com', motDePass = 'mdp2', prenom = 'prenom2', nom = 'nomwow' where mailUtilisateur = 'mail@aupif.com'");
            /*while (res.next()){
                System.out.println(res.getString(1));
                System.out.println(res.getString(2));
                System.out.println(res.getString(3));
                System.out.println(res.getString(4));
            }*/

        /*} catch (SQLException throwables) {
            throwables.printStackTrace();
        /*} catch (ClassNotFoundException e) {
            e.printStackTrace();*/
        //}

        // ________________________________ Supprimer _______________________
        /*
        try {
            //1 charger le driver mysql
            //Class.forName("com.mysql.jdbc.Driver");
            // 2 créer la connexion
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/sitewidget", "root", "toor");
            // 3 - créer un état de connexion
            Statement st = con.createStatement();
            // 4 - créer une requête de sélection
            ResultSet res = st.executeQuery("delete from utilisateur where mailUtilisateur = 'mail@auhazard.com'");
            /*while (res.next()){
                System.out.println(res.getString(1));
                System.out.println(res.getString(2));
                System.out.println(res.getString(3));
                System.out.println(res.getString(4));
            }*/

        /*} catch (SQLException throwables) {
            throwables.printStackTrace();
        /*} catch (ClassNotFoundException e) {
            e.printStackTrace();*/
        //}


    }

}
