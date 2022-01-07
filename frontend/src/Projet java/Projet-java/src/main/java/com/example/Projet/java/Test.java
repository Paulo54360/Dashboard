package com.example.Projet.java;

import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import java.io.IOException;
import java.net.*;
import java.util.logging.*;


import java.lang.reflect.Field;
import java.io.IOException;

public class Test {


    public static void main(String[] args) throws IOException {

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
        }


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
    }

}
