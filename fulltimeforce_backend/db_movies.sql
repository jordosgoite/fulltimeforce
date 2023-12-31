PGDMP  1                 
    {            movies    11.13    16.0                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    32768    movies    DATABASE     �   CREATE DATABASE movies WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE movies;
                postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false                       0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    6            �            1259    32771    movie_information    TABLE     �   CREATE TABLE public.movie_information (
    id integer NOT NULL,
    title text NOT NULL,
    poster_path text,
    overview text,
    release_date text
);
 %   DROP TABLE public.movie_information;
       public            postgres    false    6            �            1259    32769    movie_information_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movie_information_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.movie_information_id_seq;
       public          postgres    false    6    197                       0    0    movie_information_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.movie_information_id_seq OWNED BY public.movie_information.id;
          public          postgres    false    196            �            1259    49156    movies    TABLE     �   CREATE TABLE public.movies (
    id integer NOT NULL,
    title character varying(15) NOT NULL,
    poster_path character varying(40) NOT NULL,
    overview character varying NOT NULL,
    release_date character varying NOT NULL
);
    DROP TABLE public.movies;
       public            postgres    false    6            �            1259    49152    movies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.movies_id_seq;
       public          postgres    false    201    6                       0    0    movies_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;
          public          postgres    false    200            �            1259    42627    movies_reviews    TABLE     y   CREATE TABLE public.movies_reviews (
    id integer NOT NULL,
    tmdb_id bigint,
    user_name text,
    rating real
);
 "   DROP TABLE public.movies_reviews;
       public            postgres    false    6            �            1259    42625    movies_reviews_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.movies_reviews_id_seq;
       public          postgres    false    199    6                       0    0    movies_reviews_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.movies_reviews_id_seq OWNED BY public.movies_reviews.id;
          public          postgres    false    198            �
           2604    49159 	   movies id    DEFAULT     f   ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);
 8   ALTER TABLE public.movies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    200    201    201            �
           2604    42630    movies_reviews id    DEFAULT     v   ALTER TABLE ONLY public.movies_reviews ALTER COLUMN id SET DEFAULT nextval('public.movies_reviews_id_seq'::regclass);
 @   ALTER TABLE public.movies_reviews ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    199    198    199                      0    32771    movie_information 
   TABLE DATA           [   COPY public.movie_information (id, title, poster_path, overview, release_date) FROM stdin;
    public          postgres    false    197   x                 0    49156    movies 
   TABLE DATA           P   COPY public.movies (id, title, poster_path, overview, release_date) FROM stdin;
    public          postgres    false    201   �-                 0    42627    movies_reviews 
   TABLE DATA           H   COPY public.movies_reviews (id, tmdb_id, user_name, rating) FROM stdin;
    public          postgres    false    199   �-                  0    0    movie_information_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.movie_information_id_seq', 1, false);
          public          postgres    false    196                       0    0    movies_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.movies_id_seq', 1, true);
          public          postgres    false    200                       0    0    movies_reviews_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.movies_reviews_id_seq', 24, true);
          public          postgres    false    198            �
           2606    49164 %   movies PK_c5b2c134e871bfd1c2fe7cc3705 
   CONSTRAINT     e   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.movies DROP CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705";
       public            postgres    false    201            �
           2606    32779 (   movie_information movie_information_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.movie_information
    ADD CONSTRAINT movie_information_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.movie_information DROP CONSTRAINT movie_information_pkey;
       public            postgres    false    197            �
           2606    42635 "   movies_reviews movies_reviews_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.movies_reviews
    ADD CONSTRAINT movies_reviews_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.movies_reviews DROP CONSTRAINT movies_reviews_pkey;
       public            postgres    false    199                  x�eYIr�J�]S���E�F�8�S�Jcj�D�Rj��� $�� )h�w��i���9�&y�~���.����H0����;z�^��kk�I���85��Y�DS�)�G�-M��@Ld���D5��>ߖσ��Ȓ�ө>]���[��4h��L�e��B&��W��+�d�&y�t&bcs��$P�)���!�T�w�dD�Io)|�N��Y��%ْ��X+��92�?2%s�X!�H���X&:/�L�M����_Y�����b�K}{ ^t
�$yf��������\��M��,���a.l.��[�<�-�·�� ���y��d�N�჏�F��[�-\�"3S�5�	�95	�Ir�Y�ť���'���Y�l^DB%*.��}".�6�X��̅%1yHw{���q��y�K�߿�£B��EDz_8�*�O<��93E�9;htZ�n�5h��{=T�Q�8Z�d��P�q�,-�i$�d�%�I�v���{�_���򢈾z��޿�޽�
�68i{Y:���ʬ��ظ��Be|r�ǝx(ԑ�8�K�	Q�?҇W�Ƀ�ĵLr+P���<�R�7e1F )N�Q1��"����KFX�b�����exT�;��
�+�%b7vR�dZ��zv��P����@-���_ ��]�n���q���ӥNB�>bC��<��e�+��B��GSdrW�b��<㦪B"R��c����j�?�˒*#�EZ΃-�4�V��P���G@����؝j�F�$�Ωɫ>ћ�z��u��҆'sbj1�,"D_H��y������R�:V�a��������j�{����k7���ï������k�8(�a�6<>k�_����r&{\}W�h�z}q���S����ر҆B �"C��@^O5[~��>&t�F�u �8S�fB�Hd�31����&�[�	�(u�tTwڨ����Ѩ���B���q�ϧ��˗��|H�o�������㹗�7/�r��b� H��᧰��^e+Mh��ǂ"+\fs��s�bC�� �5��M"sٖu��Q1���\����a�ֵ�h��j[G�Ɠ��� ��??���ʷc�(3g�·\���۫�]��EJP�����
�Ro�,ܽ ,��ΨYFd�Et���}2��2���%�pLń���Ħ�I]t���td3��I���-i�"UY"�E2��b�$w�����H�(15���/wK8�~�����q��gǦ�ԩ+U
�hn�-:��u�j��9�l����/|���5P�+T�s��R�� $K���iRQ4�\s0EY�D`^�@9�Q���9�q�2�h�׹jG��������Q�?6Nd6�H�..����sϛ�?�_��>�-�j1X��Y�wCi��8�F������˝g"���%��o��H�\y�#v�iu�-;���h:R,BF�	��#�b&pu�T5d�f&zdaJ���VGL�0��0f!B�e���v���5�g�qXD��������jmmk|�~���˓�w��q��4SA��ҙH��BYO��J�+x�Ojf����
u6���J��G��2�ڀ�zt
V���	42`�pf:�T����>��!1#$��ܯ*=��\a��V �V��uG�n�1.��"����4�����I`n���{����/C�&�Ǔ3q�!�s���k�G(]�iłnD�'
9�Z����)����'I1������Є�VB�$9"c	)w8��G<����D�)����E��B�����bI�t�J�R�Bm���k]�
�����:W�S�c�.�Ҏ{�T�Uxk�8���*�v�eE
-Д��TK��3�>��{�Q�H!(���u��ϓ���p~3�Q�;��?���<B�b�{��j��1���T!a0��B�2�� ��n�[�rRj�'H`U9���t�.�j�Q�-'��.IAĩ���=�Ĭ-jR�ux��o�o�a{�7�����}�*7��kY�k�����a��iLY�öd�71�������.�?W�����ܗG��2��Q���8O���vdG����)@	aI�!3�Oj,#>
�=2zafV�EM>���"=g\Wx�ԫP4/hFA�����:i��ݽ!�ncr��i�����#� �\BO����JMN���V��������,n*�e�)a ����l�t���ZЋSn2���"- \�pYLY��`wb)V��6��'���
񫳾Qayh�L�,bBH�{��ҒT�|,���
L��T1&h�i�q��OME\�YSPCFN���(���վ>��9l�ĩ�a#��Ў�$���9��ݶp{��1h5N"L'���������k��bm��Ϸ��M��[�ֵ������
0�f��ZR�=�R�̧����A�܇��Ŀ󔻈��}4�!!$���!����g@��Z|��`����1��b&�ѵ� 7���4/t�u��.��������H4l5��D���H{�Y��Au�a�����)�Rζ���;�^��p�y�~-YD��>�?����t2�����C�vK�$T��k�5ع"�z��xg�eM�ZW���^0(&J(�ML���P�;�v�%<"o�����_�M�9T$��j�\�yV��͕L=p���Oz*p ���Zy�� �A�P�HH� n[���^o4h<i���#�q�ɢ���pz�9\NN�������Ǳ�ِ&�&��#�əz�y.N�%�gt1��]ĥ)��A�eu���i��2Tf���l~��~]�#�]��H�D����`�	��}&�w&׶�w\�Y�����,^4����M/��&�v�D��؎�S���v���r�	6/�*�`x����߿��1�'F��{�ʔ���1��H�{��۝�ơg���p����c���'��bԉ��E�m����C�~([�����:V����B�K���<VT��W*��硭���KW̾����*�w�F�Jeh*@ ��Y�bX`:�2p���f���,�%��[$�:���3�ё[W9U+�-.�:�{L���T�t
T�4�}(�3)n;W��iuS<ۓ��s�#4QIR
ޕ�J%���d��̩�j�'���|� �#���9Z MT��)*ʊc��&?���T�d-��w�f�l�F� %sMso?�m�M3�G��"w1&�Bq^sT5��3^n�E�L�`ɓ^2����eYS�Ň��t�K^��W2"�dR�DO7π��i
�G�2���� ����t���No�kܧ�JP�a�����0�^�>�^�������c;��ߵ�5�'��3hSFMZ���Ȥ���F#�����gu@^x�}�,wu��(ɕ�i��R�;��q������|_�{?�O��g������~����;Z�GyHC����a6W�U��N�v�Z^�5/A��	�����aX��s�~�ۂ���������9��//��>����}����tҾ�����\��ͨ.4����V�/���'�h*��]ݠ)�0��N83�n'���#*z��G�R��!��6�̓�v\��Z4�aNfC�d����^�t܂�� ���n:���1a
� �S�!�	�	r8�(������@O����+�@�kV�r�_�wy	9���N��]5��� 
�j���)�!ڜ����@L���$#6��&������,��܂D�A�pIW���4����qFoox�u�3dD�DK0�:��=�$3��*h����l�O\�\��?��Ǡ�P�k��M�[h0��J@%��F���8�SLr���i5�O*7E!�4�{���GA�4�)y����_-<b�'h��� %�佩J���2|5&�}���U'��;mës����2�q��cn�M���Y��m����r���[B�����f����,�xMY�`�� ��Y'sS�Av�J��~�n�����uֈ����qA�}G#�%1��>�q�ŗ�4�^�������|||O�?w&V���-�+G�,��0Ō�N�����]�)Z�i{�   >��+	�h����WΚ�;A,�b����=��܀D��Q�&��J�%��tg%h�|?��J^;�[�A��V����F��Q��J��I�M���h��q2����C�糇������)��|��)��͋SU2��^�i~*��-�]�ȍ	�e\�M g�4��v��y�a�݂�Ws���{T�^�}@R��ۯ�M�,�M�D:[��p�'o���}{G�ڼ�,��=��L5�в ��ѳ\���7b�0�fĳ;�Eo�;��������8��/���|�5zK��,��sߋ�ڽ����oLo�*m��yQo߱�G㝑 >�,C���cU�sZ�����	��Lh|u�?�L�k[�ڹ���7ĝYWKi�z��S�{�����������0~3��(��
É_������ۍ�'��	�*��,T�&V�m��2$�x���CM�ů��@Tݎ�.���8�7�� �O.,
hdxB��"����k�{�<����?�z|t            x������ � �         �   x�}�9B1�:>'����h� ��%���>d꧱呵��P+���y8�����?>�bdk�%�Y�T7'G�0
C�
ՠċ0w�:q#iK�Xb%�(� ��DaR)�<�'LR6�H����~lƤ�/\[�s�y#��ٿ]     